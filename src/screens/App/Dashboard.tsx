import React, { useEffect, useState } from 'react';
import { StyleSheet, View, StatusBar, Dimensions } from 'react-native';

//Redux
import { useAppDispatch, useAppSelector } from '@hooks';
import { selectDebts, setYearChart } from '../../feature/debts/debetSlice';

//CP
import { colors, fonts, Layout } from '../../commounStyles';
import ValorTotal from '@components/Dashboard/ValorTotal';
import UsuarioHeader from '@components/Dashboard/UsuarioHeader';
import Devedores from '@components/Dashboard/Devedores';

//LB
import { ms } from 'react-native-size-matters';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const Home = (props: any) => {
  const { navigation } = props;
  // Redux
  const dispatch = useAppDispatch();
  const { debtsList, debtsFilter, chartData } = useAppSelector(selectDebts);

  const changeYear = (year: number) => {
    dispatch(setYearChart(year));
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.black} />
      <UsuarioHeader />
      <ValorTotal />
      <Devedores />
      <View style={{ flex: 2 }}></View>
    </View>
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
