import {} from 'react-native-chart-kit';
import { ms } from 'react-native-size-matters';

export const colors = {
  background: '#fff',
  card: '#f3f3fd',
  text: '#272863',
  primary: '#43269D',
  primaryDark: '#0e4878',
  primaryLight: '#85beed',
  muted: '#bfbfc2',
  seconday: '#ca5a63',
  black: '#0B0C0D',
};

export const fonts = {
  bold: 'Poppins-Bold',
  regular: 'Poppins-Medium',
  light: 'Poppins-Light',
};

export const FontSize = {
  LARGE: ms(30),
  MEDIUM: ms(20),
  REGULAR: ms(16),
  SMALL: ms(12),
  THIN: ms(8),
};

export const Layout = {
  PADDING: ms(20),
};

export const chartConfig = {
  barPercentage: 0.25,
  backgroundColor: colors.primary,
  backgroundGradientFrom: colors.primary,
  backgroundGradientTo: colors.primaryDark,
  decimalPlaces: 2, // optional, defaults to 2dp
  strokeWidth: 0,
  // strokeWidth: 0.1,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: { padding: 0 },
  horizontalLabelRotation: 0,
};

export const circleChartConfig = {
  barPercentage: 0.4,
  // backgroundColor: colors.primary,
  backgroundGradientFrom: colors.primary,
  backgroundGradientTo: colors.primaryDark,
  decimalPlaces: 2, // optional, defaults to 2dp
  strokeWidth: 0,
  // strokeWidth: 0.1,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: { padding: 0 },
  propsForLabels: {
    fontSize: ms(10),
  },
};
