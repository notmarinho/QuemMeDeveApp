import React from 'react';
import { GastoModel } from '@models/GastoModel';
import { fromUnixTime, lightFormat } from 'date-fns';
import { StyleSheet, Text, View } from 'react-native';
import { ms } from 'react-native-size-matters';
import { FontSize, fonts } from '../../commonStyles';
import { currencyFormat } from '@utils/auxFunctions';

interface CardGastoProps {
  item: GastoModel;
}

const CardGasto: React.FC<CardGastoProps> = ({ item: gasto }) => {
  const formatData = () => {
    const data = fromUnixTime(gasto.createdAt);
    const dataFormatted = lightFormat(data, 'dd/MM/yyyy');
    return dataFormatted;
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.descricao}>{gasto.compra}</Text>
        <View style={styles.columnContainer}>
          <Text style={styles.cartao}>{gasto.cartao.nome}</Text>
          {gasto.totalParcelas > 1 && (
            <Text style={styles.parcelas}>
              {gasto.parcela}/{gasto.totalParcelas}
            </Text>
          )}
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.valor}> {currencyFormat(gasto.valorParcela)}</Text>
        <Text style={styles.data}>{formatData()}</Text>
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
  columnContainer: {
    flexDirection: 'row',
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
  parcelas: {
    fontSize: FontSize.THIN,
    marginLeft: ms(5),
  },
  data: {
    textAlign: 'right',
    fontSize: FontSize.THIN,
  },
});
