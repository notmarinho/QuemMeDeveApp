import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ms } from 'react-native-size-matters';
import { DevedorModel } from '@models/DevedorModel';
import { fonts, FontSize } from '../../commounStyles';

type CardDevedorProps = {
  devedor: DevedorModel;
  totalCompras: number;
};

const CardDevedor: React.FC<CardDevedorProps> = ({ devedor, totalCompras }) => {
  return (
    <View style={styles.container}>
      <View style={styles.devedorImageContainer}>
        {/* <Image
          source={{ uri: 'google.com' }}
          resizeMode="contain"
          style={styles.devedorImage}
        /> */}
        <Text>{devedor.sigla}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.devedorName}>{devedor.nome}</Text>
        <View style={styles.detailContainer}>
          <Text
            style={styles.detalhes}>{`Total de ${totalCompras} compras.`}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardDevedor;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: ms(70),
    flexDirection: 'row',
    transform: [{ translateY: ms(20) }],
  },
  devedorImageContainer: {
    width: ms(70),
    height: ms(70),
    borderRadius: ms(10),
    backgroundColor: '#FBFBFB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  devedorImage: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    marginLeft: ms(15),
    height: ms(65),
    justifyContent: 'space-between',
  },
  devedorName: {
    fontFamily: fonts.bold,
    color: '#FFFFFF',
    fontSize: FontSize.LARGE,
  },
  detailContainer: {
    height: ms(20),
    backgroundColor: '#1E1B21',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ms(3),
  },
  detalhes: {
    color: '#fff',
    fontSize: ms(8),
  },
});
