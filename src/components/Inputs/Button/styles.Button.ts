import { StyleSheet } from 'react-native';
import { colors, fonts, Layout } from '@theme';
import { ms } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: ms(50),
    backgroundColor: colors.primary,
    borderRadius: Layout.RADIOS,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: fonts.regular,
    color: colors.background,
  },
  icon: {
    marginRight: ms(5),
  },
});

export default styles;
