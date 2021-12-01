import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Layout, fonts, FontSize, colors } from '@theme';
import { ms } from 'react-native-size-matters';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAppSelector } from '@hooks';
import { useNavigation } from '@react-navigation/core';
import { DevedorModel } from 'src/models/DevedorModel';

const ButtonAdicionarDevedor = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('CriarDevedor')}
      style={[styles.cardDevedor, styles.cardAddDevedor]}>
      <Icon name="plus" size={ms(30)} color={colors.background} />
    </Pressable>
  );
};

const Devedores = () => {
  const devedores = useAppSelector(state => state.debts.devedorList);
  const navigation = useNavigation();

  const devedorRow = (data: { item: DevedorModel }) => {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate('DetalhesDevedor', { devedor: data.item })
        }
        style={styles.cardDevedor}>
        <Text>{data.item.sigla}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Devedores</Text>
      <FlatList
        data={devedores}
        horizontal
        contentContainerStyle={styles.flatlist}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, idx) => String(idx)}
        ListHeaderComponent={ButtonAdicionarDevedor}
        renderItem={devedorRow}
      />
    </View>
  );
};

export default Devedores;

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    width: '100%',
    borderColor: '#fff',
  },
  title: {
    fontFamily: fonts.regular,
    fontSize: FontSize.REGULAR,
    color: colors.background,
    marginLeft: Layout.PADDING,
    marginBottom: ms(20),
  },
  cardAddDevedor: {
    backgroundColor: colors.black,
    borderWidth: 1,
    borderColor: colors.background,
  },
  cardDevedor: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.primary,
    borderWidth: 1,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatlist: {
    paddingHorizontal: Layout.PADDING,
    // alignItems: 'center',
  },
});
