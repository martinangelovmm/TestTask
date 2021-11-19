import {StyleSheet} from 'react-native';
import {GRAY_333333} from '../../styles/colors';

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    flex: 1,
  },
  imageStyle: {
    borderWidth: 1,
    borderColor: GRAY_333333,
    width: 150,
    height: 120,
    borderRadius: 8,
  },
  movieInfoWrapper: {
    paddingStart: 8,
    flex: 1,
  },
  movieTitleText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
