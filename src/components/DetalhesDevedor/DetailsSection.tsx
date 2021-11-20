import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Layout, FontSize, fonts } from '../../commounStyles';

interface DetailsSectionProps {
  ano: number;
  mes: string;
  valorTotal: number;
}

import { currencyFormat } from '@utils/auxFunctions';

const DetailsSection: React.FC<DetailsSectionProps> = ({
  ano,
  mes,
  valorTotal,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.ano}>{ano}</Text>
        <Text style={styles.mes}>{mes}</Text>
      </View>
      <Text style={styles.valorTotal}>{currencyFormat(valorTotal)}</Text>
    </View>
  );
};

export default DetailsSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Layout.PADDING,
  },
  valorTotal: {
    fontSize: FontSize.LARGE,
    fontFamily: fonts.bold,
    color: '#ffffff',
  },
  ano: {
    fontSize: FontSize.SMALL,
    color: '#ffffff',
  },
  mes: {
    fontSize: FontSize.MEDIUM,
    color: '#ffffff',
  },
});
