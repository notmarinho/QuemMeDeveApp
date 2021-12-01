import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import { ms } from 'react-native-size-matters';

interface IChart {
  data: number[];
  title?: string;
  showLeftLabel?: boolean;
}

//CP
import { colors, fonts } from '../../commonStyles';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const ChartDashboard = ({ data, title, showLeftLabel }: IChart) => {
  const labels = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gastos Mensais</Text>
      <LineChart
        data={{
          labels: labels,
          datasets: [{ data }],
        }}
        width={SCREEN_WIDTH} // from react-native
        height={ms(250)}
        // yAxisLabel="$"
        // yAxisSuffix="k"
        // withInnerLines={false}
        // labe
        withHorizontalLabels={false}
        bezier
        withInnerLines={false}
        yLabelsOffset={5}
        fromZero={true}
        yAxisInterval={6} // optional, defaults to 1
        chartConfig={{
          fillShadowGradient: colors.primary,
          fillShadowGradientOpacity: 1,
          barPercentage: 0.4,
          backgroundGradientFrom: colors.black,
          backgroundGradientTo: colors.black,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForLabels: {
            fontSize: ms(10),
          },
        }}
        style={{
          // marginVertical: 8,
          borderRadius: 10,
          marginRight: ms(10),
        //   paddingRight: -10,
        }}
      />
    </View>
  );
};

export default ChartDashboard;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.bold,
    color: colors.background,
    fontSize: ms(16),
    transform: [{ translateY: -15 }],
  },
});
