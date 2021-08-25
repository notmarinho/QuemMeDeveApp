import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, FlatList, Dimensions, } from 'react-native';


//Redux
import { useAppDispatch, useAppSelector } from '@hooks';
import { selectDebts, setDebtFilter } from '../../feature/debts/debetSlice'

//CP
import { colors, fonts } from '../../commounStyles';
import { filterDebts } from '@utils/filterManager';
import ListOfDebts from '@components/ListOfDebts/ListOfDebts';

//LB
import { ms } from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = (props: any) => {
    const { navigation } = props;
    // Redux
    const dispatch = useAppDispatch();
    const { debtsList, debtsFilter } = useAppSelector(selectDebts);

    useEffect(() => {

    }, [])

    const getDataFromStorage = () => {

    }

    return (
        <View style={styles.container}>
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
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: '90%',
        height: ms(66),
        borderRadius: ms(10),
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: ms(15),
        backgroundColor: colors.primary,
    },
    buttonLabel: {
        fontFamily: fonts.bold,
        color: '#fff',
        fontSize: ms(20),
    }
});
