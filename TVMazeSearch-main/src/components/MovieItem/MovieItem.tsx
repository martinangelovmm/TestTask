import React, {FC} from 'react';
import {View, Text, Pressable, useWindowDimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import RenderHtml from 'react-native-render-html';
import {IMovieItem} from '../../interfaces/interfaces';

import styles from './movieItemStyles';

interface IProps {
  item: IMovieItem;
  onPress: (item: IMovieItem) => void;
}

const MovieItem: FC<IProps> = ({item, onPress}) => {
  const summary = item.show.summary && item.show.summary.substring(0, 120);
  const {width} = useWindowDimensions();

  return (
    <Pressable style={styles.itemWrapper} onPress={() => onPress(item)}>
      <FastImage
        style={styles.imageStyle}
        source={{
          uri:
            item.show.image && item.show.image.medium
              ? item.show.image.medium
              : '',
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.movieInfoWrapper}>
        <Text style={styles.movieTitleText}>{item.show.name}</Text>
        <RenderHtml contentWidth={width} source={{html: summary}} />
      </View>
    </Pressable>
  );
};

export default MovieItem;
