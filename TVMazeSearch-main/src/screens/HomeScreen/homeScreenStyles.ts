import {Dimensions, StyleSheet} from 'react-native';
import {
  BLUE_4287F5,
  DARK_0202028A,
  ERROR_COLOR_E57373,
  WHITE,
} from '../../styles/colors';

import {DEFAULT_FONT_SIZE, TITLE_FONT_SIZE} from '../../styles/constants';

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  mainContainer: {
    flexDirection: 'column',
  },
  titleText: {
    fontSize: TITLE_FONT_SIZE,
    textAlign: 'center',
    paddingVertical: 16,
  },
  textInputWrapper: {
    backgroundColor: DARK_0202028A,
    height: 52,
    borderRadius: 16,
    margin: 16,
    flexDirection: 'row',
  },
  textInputStyle: {
    fontSize: DEFAULT_FONT_SIZE,
    height: 48,
    paddingHorizontal: 18,
    flex: 1,
  },
  clearSearchInputWrapper: {
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: DARK_0202028A,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginEnd: 8,
  },
  containerStyle: {
    paddingTop: 16,
    paddingBottom: 100,
    paddingHorizontal: 8,
  },
  emptyComponentWrapper: {
    alignItems: 'center',
  },
  itemSeparatorStyle: {
    height: 16,
  },
  activityIndicatorStyle: {
    position: 'absolute',
    top: Dimensions.get('window').height / 2,
    left: Dimensions.get('window').width / 2,
  },

  noInternetWrapper: {
    backgroundColor: ERROR_COLOR_E57373,
    paddingHorizontal: 16,
    paddingBottom: 8,
    alignItems: 'center',
  },
  noInternetErrorText: {
    fontSize: 16,
    color: WHITE,
    marginTop: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  retryPressable: {
    backgroundColor: BLUE_4287F5,
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 6,
  },
  retryText: {
    fontSize: 14,
    color: WHITE,
  },
});

export default styles;
