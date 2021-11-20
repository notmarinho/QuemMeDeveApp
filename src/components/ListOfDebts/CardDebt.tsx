import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

//Interface
import { IGasto } from '@interfaces/IMainInterfaces';

//CP
import { colors, fonts } from '../../commounStyles';
import { toCurrency } from '@utils/auxFunctions';

//LB
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ms } from 'react-native-size-matters';

interface ICardDebt {
  item: IGasto;
  navigation: any;
}

const CardDebt = ({ item, navigation }: ICardDebt) => {
  const navigateToDetails = () =>
    navigation.navigate('DetalhesDebito', { item });

  return (
    <Pressable onPress={navigateToDetails} style={styles.cardContainer}>
      <View style={styles.infoContainer}>
        <View style={styles.textAndIconContainer}>
          <Icon
            name={item.picture ? 'camera' : 'camera-plus'}
            size={ms(14)}
            color={item.picture ? colors.text : colors.muted}
            style={styles.icon}
          />
          <Text numberOfLines={1} style={styles.txtDescription}>
            {item.compra}
          </Text>
        </View>
        <View style={styles.cardAndMonthContainer}>
          <Text style={styles.txtCardName}>{item.cartao}</Text>
        </View>
      </View>
      <View style={styles.valueContainer}>
        <Text style={styles.txtValue}>{toCurrency(item.valorParcela)}</Text>
        <Text style={styles.txtCardName}>
          {`${item.parcela + '/' + item.totalParcelas}`}
        </Text>
      </View>
    </Pressable>
  );
};

export default CardDebt;

const styles = StyleSheet.create({
  //Card
  cardContainer: {
    width: '100%',
    height: ms(66),
    backgroundColor: colors.card,
    borderRadius: ms(30),
    paddingHorizontal: ms(25),
    flexDirection: 'row',
    marginTop: ms(10),
  },
  txtDescription: {
    fontFamily: fonts.bold,
    color: colors.text,
    fontSize: ms(14),
  },
  txtCardName: {
    color: colors.muted,
    fontSize: ms(14),
  },
  txtValue: {
    fontFamily: fonts.bold,
    color: colors.primary,
    fontSize: ms(16),
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  valueContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  cardAndMonthContainer: {
    flexDirection: 'row',
  },
  textAndIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: ms(5),
  },
});
