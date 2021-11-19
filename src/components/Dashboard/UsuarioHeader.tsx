import { fonts, FontSize, Layout } from '@theme';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ms } from 'react-native-size-matters';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const UsuarioHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.imageContainer}>{/* <Image /> */}</View>
        <Text style={styles.nomeUsuario}>Mateus Marinho</Text>
      </View>
      <View style={styles.rightContainer}>
        <Icon name="cog-outline" size={ms(25)} color="#fff" />
      </View>
    </View>
  );
};

export default UsuarioHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: Layout.PADDING,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {},
  imageContainer: {
    width: ms(40),
    height: ms(40),
    borderRadius: ms(25),
    backgroundColor: 'lightgray',
  },
  nomeUsuario: {
    fontFamily: fonts.regular,
    fontSize: FontSize.REGULAR,
    color: '#fff',
    marginLeft: ms(15),
  },
});
