import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

//LB
import AsyncStorage from '@react-native-async-storage/async-storage';

//CP
import { IReduxState } from '@interfaces/IMainInterfaces'
import { colors } from '../../commounStyles';

//Redux
import { useAppDispatch } from '@hooks';
import { setInitialStateOnRedux } from '../../feature/debts/debetSlice';

const SplashScreen = (props: any) => {
    // Redux
    const dispatch = useAppDispatch();

    useEffect(() => { getData() }, [])

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('myData');
            if (jsonValue != null) {
                dispatch(setInitialStateOnRedux(JSON.parse(jsonValue)));
                props.navigation.replace('Dashboard');
            } else {
                storeData()
                props.navigation.replace('Dashboard');
            }
        } catch (e) {
            // error reading value
        }
    }

    const storeData = async () => {
        try {
            const jsonValue: IReduxState = {
                cartoesList: [],
                debtsFilter: [],
                debtsList: [],
                devedorList: []
            };
            await AsyncStorage.setItem('myData', JSON.stringify(jsonValue));
        } catch (e) {
            // saving error
        }
    }


    return (
        <View style={styles.container}>
            <ActivityIndicator animating color={colors.primary} />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
