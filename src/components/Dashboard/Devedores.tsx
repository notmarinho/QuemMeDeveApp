import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Layout, fonts, FontSize, colors } from '@theme';
import { ms } from 'react-native-size-matters';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ButtonAdicionarDevedor = () => {
  return (
    <View
      style={[
        styles.cardDevedor,
        {
          backgroundColor: colors.black,
          borderWidth: 1,
          borderColor: colors.background,
        },
      ]}>
      <Icon name="plus" size={ms(30)} color={colors.background} />
    </View>
  );
};

const Devedores = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Devedores</Text>
      <FlatList
        data={['', '', '', '', '']}
        horizontal
        contentContainerStyle={styles.flatlist}
        keyExtractor={(_, idx) => String(idx)}
        ListHeaderComponent={ButtonAdicionarDevedor}
        renderItem={({ item }) => {
          return <View style={styles.cardDevedor}></View>;
        }}
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
