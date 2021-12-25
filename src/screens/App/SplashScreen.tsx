import React, { useCallback, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

//LB
import AsyncStorage from '@react-native-async-storage/async-storage';

//CP
import { colors } from '../../commonStyles';

//Redux
import { useAppDispatch } from '@hooks';
import { setInitialStateOnRedux } from '../../feature/debts/debetSlice';
import { DebitoReduxModel } from '@models/redux/DebitoReduxModel';

import useFirebase from '@services/hooks/useFirebase';
import { iSplashScreenProps } from 'src/routes/types';

import auth from '@react-native-firebase/auth';

const SplashScreen = (props: iSplashScreenProps) => {
  // Redux
  const dispatch = useAppDispatch();
  const { isUserSignedIn } = useFirebase();

  const getDevedores = async () => {
    const stringDevedores = await AsyncStorage.getItem('@devedores');
    if (stringDevedores != null) {
      return JSON.parse(stringDevedores);
    }
    return null;
  };

  const getCartoes = async () => {
    const stringCartoes = await AsyncStorage.getItem('@cartoes');
    if (stringCartoes != null) {
      return JSON.parse(stringCartoes);
    }
    return null;
  };

  const getInitialData = async () => {
    const stringInitialValues = await AsyncStorage.getItem('@initialData');
    if (stringInitialValues != null) {
      return JSON.parse(stringInitialValues);
    }
    return null;
  };

  const getData = useCallback(async () => {
    try {
      const initialData: DebitoReduxModel = await getInitialData();
      const listaDevedores = await getDevedores();
      const listaCartoes = await getCartoes();

      if (initialData) {
        listaDevedores
          ? (initialData.devedorList = listaDevedores)
          : (initialData.devedorList = []);
        listaCartoes
          ? (initialData.cartoesList = listaCartoes)
          : (initialData.cartoesList = []);
        dispatch(setInitialStateOnRedux(initialData));
      } else {
        storeData();
      }
    } catch (e) {
      console.log(e);
      // error reading value
    }
  }, [dispatch]);

  const checkUserOnStorage = useCallback(async () => {
    const isUserLogged = await isUserSignedIn();
    const currentUser = auth().currentUser;
    console.log('Current usen on storage ', currentUser);

    if (isUserLogged) {
      getData();
      props.navigation.replace('App');
    } else {
      props.navigation.replace('Auth');
    }
  }, [getData, isUserSignedIn, props.navigation]);

  useEffect(() => {
    checkUserOnStorage();
  }, [checkUserOnStorage]);

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
      await AsyncStorage.setItem('@initialData', JSON.stringify(jsonValue));
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
