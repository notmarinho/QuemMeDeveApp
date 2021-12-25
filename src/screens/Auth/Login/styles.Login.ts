import { colors, fonts, FontSize } from '@theme';
import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: ms(30),
    paddingVertical: ms(30),
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: FontSize.LARGE,
  },
  subTitle: {
    fontFamily: fonts.bold,
    fontSize: FontSize.SMALL,
    color: colors.muted,
  },
  headerContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  createAccount: {
    textDecorationLine: 'underline',
    color: colors.primary,
  },
});

export default styles;
