import React, { useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

//LB
import AsyncStorage from '@react-native-async-storage/async-storage';

//CP
import { colors } from '../../commounStyles';

//Redux
import { useAppDispatch } from '@hooks';
import { setInitialStateOnRedux } from '../../feature/debts/debetSlice';
import { DebitoReduxModel } from '@models/redux/DebitoReduxModel';

const SplashScreen = (props: any) => {
  // Redux
  const dispatch = useAppDispatch();

  useEffect(() => {
    getData();
  }, [getData]);

  const getData = useCallback(async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('myData');
      if (jsonValue != null) {
        dispatch(setInitialStateOnRedux(JSON.parse(jsonValue)));
        props.navigation.replace('Dashboard');
      } else {
        storeData();
        props.navigation.replace('Dashboard');
      }
    } catch (e) {
      // error reading value
    }
  }, [dispatch, props.navigation]);

  const storeData = async () => {
    try {
      const jsonValue: DebitoReduxModel = {
        cartoesList: [],
        debtsFilter: [],
        debtsList: [],
        devedorList: [],
        filteringBy: 'devedor',
        chartData: [],
      };
      await AsyncStorage.setItem('myData', JSON.stringify(jsonValue));
    } catch (e) {
      // saving error
    }
  };

  return (
    <View style={styles.container}>
      <ActivityIndicator animating color={colors.primary} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
