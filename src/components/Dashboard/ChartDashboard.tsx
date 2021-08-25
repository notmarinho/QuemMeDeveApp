import React from 'react'
import { StyleSheet, Text, Dimensions } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

interface IChart {
    data: number[];
};

//CP
import { colors } from '../../commounStyles'

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const ChartDashboard = ({ data }: IChart) => {
    return (
        <LineChart
            data={{
                labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Ago", "Set", "Set", "Out", "Nov", "Dez"],
                datasets: [{ data }]
            }}
            width={SCREEN_WIDTH} // from react-native
            height={220}
            // yAxisLabel="$"
            // yAxisSuffix="k"
            withOuterLines={false}
            withInnerLines={false}
            withShadow={true}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: colors.primaryDark,
                backgroundGradientTo: colors.primaryDark,
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                },
                propsForDots: {
                    // r: "6",
                    
                    strokeWidth: "0",
                    strokeOpacity: "0",
                    // stroke: colors.primaryDark
                }
            }}
            bezier
            style={{
                // marginVertical: 8,
                borderRadius: 10
            }}
        />
    )
}

export default ChartDashboard

const styles = StyleSheet.create({})
