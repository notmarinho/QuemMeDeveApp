import { colors, fonts, FontSize, Layout } from '@theme';
import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: ms(55),
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: ms(15),
  },
  label: {
    fontSize: FontSize.SMALL,
    fontFamily: fonts.regular,
    color: colors.primary,
  },
  icon: {
    marginTop: ms(15),
    marginHorizontal: ms(5),
  },
  inputContainer: {
    flex: 1,
    borderRadius: Layout.RADIOS,
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    fontSize: FontSize.SMALL,
    fontFamily: fonts.regular,
  },
});

export default styles;
