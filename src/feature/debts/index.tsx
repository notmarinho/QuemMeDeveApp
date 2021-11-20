import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useAppDispatch, useAppSelector } from '@hooks/';
import { addDebt, removeDebt, selectDebts } from './debetSlice';

import CurrencySheet from '@components/CurrencySheet';
import { Debet } from '@interfaces/IMainInterfaces';

const Debt = () => {
  //Redux
  const reduxState = useAppSelector(selectDebts);
  const dispatch = useAppDispatch();

  const [value, setValue] = useState(0);

  const handleAddDebt = () => {
    const newDebt: Debet = {
      value,
      card: 'Nubank',
      description: 'Compra feita em casa',
    };
    dispatch(addDebt(newDebt));
    setValue(0);
  };

  const showGastos = () => {
    console.log(reduxState);
  };

  return (
    <View style={styles.container}>
      <Text>{value}</Text>
      <CurrencySheet sendValue={setValue} />
      <Pressable onPress={handleAddDebt}>
        <Text>Adicionar gasto</Text>
      </Pressable>
      <Pressable onPress={showGastos}>
        <Text>Ver gastos</Text>
      </Pressable>
    </View>
  );
};

export default Debt;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
