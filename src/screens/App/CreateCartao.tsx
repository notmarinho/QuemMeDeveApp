/* eslint-disable react-hooks/exhaustive-deps */
import Button from '@components/Button';
import { CartaoModel } from '@models/CartaoModel';
import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  StatusBar,
  TextInput,
  Text,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import ColorPicker, { ColorPickerProps } from 'react-native-wheel-color-picker';
import uuid from 'react-native-uuid';
import { colors, fonts, FontSize, Layout } from '../../commonStyles';

import { addCartao } from '../../feature/debts/debetSlice';
import { useAppDispatch } from '@hooks';
import { useNavigation } from '@react-navigation/core';

const CreateCartao = () => {
  const colorPickerRef = useRef<ColorPickerProps>();
  const [cardColor, setCardColor] = useState('#fff');
  const [nomeCartao, setNomeCartao] = useState('');
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const getColorSelected = () => {
    const { h, s, v } = colorPickerRef.current?.color;
    let hexColor = hslToHex(h, v, s);
    setCardColor(hexColor);
  };

  const registerCard = () => {
    if (nomeCartao.length > 1 && cardColor !== '#fff') {
      let novoCartao: CartaoModel = {
        id: uuid.v4().toString(),
        nome: nomeCartao,
        cor: cardColor,
      };
      dispatch(addCartao(novoCartao));
      navigation.goBack();
    }
  };

  const hslToHex = (h, s, l) => {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = n => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, '0'); // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  };

  return (
    <SafeAreaView
      style={[styles.safeContainer, { backgroundColor: cardColor }]}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Nome do Cartão"
            style={styles.input}
            value={nomeCartao}
            autoFocus
            onChangeText={setNomeCartao}
            autoCapitalize="words"
            placeholderTextColor={colors.muted}
          />
        </View>
        <View style={styles.colorContainer}>
          <Text style={styles.input}>Cor do cartão</Text>
          <ColorPicker
            ref={colorPickerRef}
            onColorChangeComplete={getColorSelected}
            thumbSize={moderateScale(40)}
            sliderSize={moderateScale(40)}
            noSnap={false}
            swatchesOnly={true}
            swatchesLast={false}
            swatches={true}
            discrete={false}
          />
        </View>
        <Button title="Cadastrar" onPress={registerCard} />
      </View>
    </SafeAreaView>
  );
};

export default CreateCartao;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: colors.black,
  },
  container: {
    flex: 1,
    padding: Layout.PADDING,
    alignItems: 'center',
    // backgroundColor: colors.black,
  },
  titleColor: {
    fontFamily: fonts.regular,
    fontSize: FontSize.LARGE,
    color: colors.muted,
  },
  inputContainer: {
    flex: 1,
    width: '100%',
  },
  colorContainer: {
    flex: 1,
  },
  input: {
    fontFamily: fonts.regular,
    fontSize: FontSize.LARGE,
    color: colors.primary,
  },
});
