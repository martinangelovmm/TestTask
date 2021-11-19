import {StyleSheet} from 'react-native';
import {DARK_2E2E24, YELLOW_FCC603} from '../../styles/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  imageStyle: {
    width: '100%',
    height: 300,
  },
  showTitleText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  showSummaryTextWrapper: {
    paddingHorizontal: 8,
  },
  urlPressable: {
    paddingHorizontal: 8,
  },
  showScoreTextWrapper: {
    position: 'absolute',
    end: 8,
    top: 8,
    height: 36,
    width: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: YELLOW_FCC603,
  },
  showScoreText: {
    color: DARK_2E2E24,
  },
});

export default styles;
