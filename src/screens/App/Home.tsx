import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, FlatList, Dimensions, } from 'react-native';

//Redux
import { useAppDispatch, useAppSelector } from '@hooks';
import { selectDebts, setYearChart } from '../../feature/debts/debetSlice'

//CP
import { colors, fonts, chartConfig, circleChartConfig } from '../../commounStyles';
import { generateChartData } from '@utils/filterManager';
import Chart from '@components/Dashboard/ChartDashboard'
import ChangeYears from '@components/Dashboard/ChangeYears';

//LB
import { ms } from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const Home = (props: any) => {
    const { navigation } = props;
    // Redux
    const dispatch = useAppDispatch();
    const { debtsList, debtsFilter, chartData } = useAppSelector(selectDebts);

    const changeYear = (year: number) => {
        dispatch(setYearChart(year));
    }


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.primaryDark} />
            <View style={styles.chartContainer}>
                <ChangeYears currentYear={changeYear} />
                <Chart data={chartData} />
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('CriarDebito')}
                    style={styles.button}>
                    <Text style={styles.buttonLabel}>
                        Adicionar Gasto
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ListarDebito')}
                    style={styles.button}>
                    <Text style={styles.buttonLabel}>
                        Ver Gastos
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={async () => await AsyncStorage.clear()}
                    style={styles.button}>
                    <Text style={styles.buttonLabel}>
                        Limpar Dados
                    </Text>
                </TouchableOpacity>
            </View>

        </View >
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryDark,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    chartContainer: {
        width: '100%',
        height: ms(350),
        backgroundColor: colors.primaryDark,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: SCREEN_WIDTH * 0.95,
        height: ms(50),
        borderRadius: ms(4),
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: ms(10),
        backgroundColor: colors.primary,
    },
    buttonLabel: {
        fontFamily: fonts.bold,
        color: '#fff',
        fontSize: ms(18),
    },
    buttonsContainer: {
        flex: 1,
        width: SCREEN_WIDTH,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
        borderTopRightRadius: ms(25),
        borderTopLeftRadius: ms(25)
    },


});
