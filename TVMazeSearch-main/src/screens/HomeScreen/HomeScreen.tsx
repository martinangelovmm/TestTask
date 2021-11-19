import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import NetInfo, {NetInfoState} from '@react-native-community/netinfo';
import debounce from 'lodash.debounce';

import MovieItem from '../../components/MovieItem';
import {GRAY_333333} from '../../styles/colors';
import styles from './homeScreenStyles';
import {searchShows} from '../../services/api/showService';
import {IMovieItem, INavigation} from '../../interfaces/interfaces';
import {useOrientationChange} from 'react-native-orientation-locker';

interface IProps {
  navigation: INavigation;
}

const RenderEmptyComponent = () => {
  return (
    <View style={styles.emptyComponentWrapper}>
      <Text>There is no data available</Text>
    </View>
  );
};

const renderItemSeparator = () => <View style={styles.itemSeparatorStyle} />;

interface INoInternetProps {
  onRetry: () => void;
  isRetrying: boolean;
}

const NoInternetComponent = ({onRetry, isRetrying}: INoInternetProps) => (
  <View style={styles.noInternetWrapper}>
    <Text style={styles.noInternetErrorText}>
      Please check internet connection and try again.
    </Text>
    <Pressable
      style={({pressed}) => [
        {
          opacity: pressed ? 0.65 : 1,
        },
        styles.retryPressable,
      ]}
      onPress={onRetry}
      disabled={isRetrying}>
      <Text style={styles.retryText}>Try Again</Text>
    </Pressable>
  </View>
);

const HomeScreen: FC<IProps> = ({navigation}) => {
  const [isLoading, setLoading] = useState(false);
  const [movieList, setMovieList] = useState<IMovieItem[]>([]);
  const [isOffline, setOfflineStatus] = useState(false);
  const [query, setQuery] = useState('');
  const [numberOfColumns, setNumberOfColumns] = useState(1);
  const searchInputRef = useRef(null);

  useOrientationChange(newOrientation => {
    const inPortrait = newOrientation.toLowerCase().indexOf('portrait') !== -1;
    setNumberOfColumns(inPortrait ? 1 : 2);
  });

  const fetchMovies = useCallback(
    async (q?: string) => {
      const textToQuery = q ? q : query;
      if (textToQuery === '') {
        return;
      }

      setLoading(true);

      await searchShows(textToQuery)
        .then(res => {
          setLoading(false);
          setMovieList(res);
        })
        .catch(error => console.log('There was an error.', {error}))
        .finally(() => setLoading(false));
    },
    [query],
  );

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
      const offline = !(state.isConnected && state.isInternetReachable);
      setOfflineStatus(offline);
    });
    if (query.trim() !== '') {
      searchDebounced(query);
    }
    return () => unsubscribe();
  }, [isOffline]);

  const onTextChangeHandler = (q: string) => {
    setQuery(q);
    if (q.trim() !== '') {
      searchDebounced(q);
    }
  };

  const handleOnPress = (item: IMovieItem) => {
    navigation.navigate('Details', {score: item.score, show: item.show});
  };

  const searchDebounced = useCallback(debounce(fetchMovies, 1000), []);

  const handleOnClearPressed = () => {
    setQuery('');
  };

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.textInputWrapper}>
          <TextInput
            placeholder="Type here to search TV Shows"
            placeholderTextColor={GRAY_333333}
            onChangeText={onTextChangeHandler}
            style={styles.textInputStyle}
            autoCapitalize={'words'}
            selectTextOnFocus
            ref={searchInputRef}
            value={query}
          />
          <Pressable
            onPress={handleOnClearPressed}
            style={({pressed}) => [
              {
                opacity: pressed ? 0.65 : 1,
              },
              styles.clearSearchInputWrapper,
            ]}>
            <Text>X</Text>
          </Pressable>
        </View>
        <ActivityIndicator
          animating={isLoading}
          style={styles.activityIndicatorStyle}
          size={'large'}
        />
        {isOffline && (
          <NoInternetComponent
            onRetry={() => {
              if (query.trim() !== '') {
                searchDebounced(query);
              }
            }}
            isRetrying={isLoading}
          />
        )}
        {movieList.length > 0 ? (
          <FlatList
            key={numberOfColumns.toString()}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.show.id.toString()}
            ItemSeparatorComponent={renderItemSeparator}
            contentContainerStyle={styles.containerStyle}
            data={movieList}
            renderItem={({item}) => (
              <MovieItem item={item} onPress={handleOnPress} />
            )}
            ListEmptyComponent={RenderEmptyComponent}
            initialNumToRender={12}
            maxToRenderPerBatch={12}
            decelerationRate={'fast'}
            numColumns={numberOfColumns}
          />
        ) : (
          <RenderEmptyComponent />
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
