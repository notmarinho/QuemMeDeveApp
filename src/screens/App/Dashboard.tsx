import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  Button,
} from 'react-native';

//Redux
import { useAppDispatch, useAppSelector } from '@hooks';
import { selectDebts } from '../../feature/debts/debetSlice';

//CP
import { colors } from '../../commonStyles';
import ValorTotal from '@components/Dashboard/ValorTotal';
import UsuarioHeader from '@components/Dashboard/UsuarioHeader';
import Devedores from '@components/Dashboard/Devedores';

//LB
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = (props: any) => {
  const navigation = useNavigation();
  // Redux
  const dispatch = useAppDispatch();
  const { debtsList, debtsFilter, chartData } = useAppSelector(selectDebts);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.black} />
      <UsuarioHeader />
      <ValorTotal />
      <Devedores />
      <View style={{ flex: 2 }}>
        <Button
          title="Novo Gasto"
          onPress={() => navigation.navigate('CriarDebito')}
        />
        <Button title="Ver Gastos" onPress={() => console.log(debtsList)} />
        <Button title="Limpar Dados" onPress={() => AsyncStorage.clear()} />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
    // padding: Layout.PADDING,
    // justifyContent: 'center'
  },
});
