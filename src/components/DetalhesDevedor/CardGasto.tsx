import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ms } from 'react-native-size-matters';
import { FontSize, fonts } from '../../commounStyles';

interface CardGastoProps {
  descricao?: string;
  valor?: string;
  data?: string;
}

const CardGasto: React.FC<CardGastoProps> = props => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.descricao}>Uber 99</Text>
        <Text style={styles.cartao}>Santader</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.valor}>10,00</Text>
        <Text style={styles.data}>20/09/21</Text>
      </View>
    </View>
  );
};

export default CardGasto;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: ms(55),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
  },
  leftContainer: {},
  rightContainer: {},
  descricao: {
    fontSize: FontSize.SMALL,
    fontFamily: fonts.bold,
    color: '#303030',
  },
  cartao: {
    fontSize: FontSize.THIN,
  },
  valor: {
    textAlign: 'right',
    fontSize: FontSize.SMALL,
    fontFamily: fonts.bold,
  },
  data: {
    textAlign: 'right',
    fontSize: FontSize.THIN,
  },
});
