import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { useAppDispatch } from '@hooks';
import { addDevedor } from '../../feature/debts/debetSlice';
import { DevedorModel } from '@models/DevedorModel';
import uuid from 'react-native-uuid';
import { colors, fonts, FontSize, Layout } from '@theme';
import Button from '@components/Button';

import { useNavigation } from '@react-navigation/native';

const CreateDevedor = () => {
  const navigation = useNavigation();
  const [nomeDevedor, setNomeDevedor] = useState('');
  const dispatch = useAppDispatch();

  const registerDevedor = () => {
    if (nomeDevedor.length > 1) {
      var novoDevedor: DevedorModel = {
        id: uuid.v4().toString(),
        nome: nomeDevedor,
        sigla: definirSigla(nomeDevedor),
      };
      dispatch(addDevedor(novoDevedor));
      navigation.goBack();
    }
  };

  const definirSigla = (string: string) => {
    const nomes: string[] = string.split(' ');
    let sigla: string;
    if (nomes.length > 1) {
      sigla = `${nomes[0][0]}${nomes[1][0]}`.toUpperCase();
    } else {
      sigla = `${nomes[0][0]}${nomes[0][1]}`.toUpperCase();
    }
    return sigla;
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Nome do Devedor"
            style={styles.input}
            value={nomeDevedor}
            autoFocus
            onChangeText={setNomeDevedor}
            autoCapitalize="words"
            placeholderTextColor={colors.muted}
          />
        </View>
        <Button title="Cadastrar" onPress={registerDevedor} />
      </View>
    </SafeAreaView>
  );
};

export default CreateDevedor;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: colors.black,
  },
  container: {
    flex: 1,
    padding: Layout.PADDING,
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  inputContainer: {
    flex: 1,
    width: '100%',
  },
  input: {
    fontFamily: fonts.regular,
    fontSize: FontSize.LARGE,
    color: colors.primary,
  },
});
