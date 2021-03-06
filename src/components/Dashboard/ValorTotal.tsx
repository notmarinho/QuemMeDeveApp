import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, FontSize, Layout } from '@theme';
import { useAppSelector } from '@hooks';

const ValorTotal = () => {
  const valorTotal = useAppSelector(state => state.debts)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Total</Text>
      <Text style={styles.valor}>421,30</Text>
    </View>
  );
};

export default ValorTotal;

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    width: '100%',
    paddingHorizontal: Layout.PADDING,
  },
  valor: {
    fontSize: FontSize.LARGE,
    fontFamily: fonts.bold,
    color: colors.background,
  },
  title: {
    fontFamily: fonts.regular,
    fontSize: FontSize.REGULAR,
    color: colors.background,
  },
});
