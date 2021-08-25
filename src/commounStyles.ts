import { } from 'react-native-chart-kit';
import { ms } from 'react-native-size-matters';

export const colors = {
    background: '#fff',
    card: '#f3f3fd',
    text: '#272863',
    primary: '#0bae7f',
    primaryDark: '#0a7858',
    primaryLight: '#1de0a8',
    mutted: '#bfbfc2',
    seconday: '#ca5a63',
}

export const fonts = {
    bold: 'MontserratAlternates-Bold',
    regular: '',
    light: '',
}

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
}

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
        fontSize: ms(10)
    }
}