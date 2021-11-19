import React, {FC} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Linking,
  useWindowDimensions,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import RenderHtml from 'react-native-render-html';
import {INavigation, IRoute} from '../../interfaces/interfaces';
import {BLUE_4287F5} from '../../styles/colors';

import styles from './detailsScreenStyles';

interface IProps {
  navigation: INavigation;
  route: IRoute;
}

const DetailsScreen: FC<IProps> = ({route}) => {
  const {score, show} = route.params;
  const {width} = useWindowDimensions();

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.mainContainer}>
          <FastImage
            style={styles.imageStyle}
            source={{
              uri: show.image && show.image.medium ? show.image.medium : '',
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <Text style={styles.showTitleText}>{show.name}</Text>
          <View style={styles.showSummaryTextWrapper}>
            <RenderHtml contentWidth={width} source={{html: show.summary}} />
          </View>
          <Pressable
            style={({pressed}) => [
              {
                opacity: pressed ? 0.65 : 1,
              },
              styles.urlPressable,
            ]}
            onPress={() => {
              Linking.canOpenURL(show.url).then((canOpen: boolean) => {
                console.log({canOpen});
                if (canOpen) {
                  Linking.openURL(show.url);
                }
              });
            }}>
            <Text style={{color: BLUE_4287F5}}>{show.url}</Text>
          </Pressable>
          <View style={styles.showScoreTextWrapper}>
            <Text style={styles.showScoreText}>{(score * 10).toFixed(1)}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;
