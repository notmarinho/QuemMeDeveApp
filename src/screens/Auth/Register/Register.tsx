/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styles from './styles.Register';

import Content from '@components/Layouts/Content/Content';
import Container from '@components/Layouts/Container/Container';
import Input from '@components/Inputs/Input/Input';
import Button from '@components/Inputs/Button/Button';
import useFirebase from '@services/hooks/useFirebase';
import { iRegisterScreenProps } from 'src/routes/types';
import { useAppDispatch, useAppSelector } from '@hooks';
import { singUp } from '../../../feature/user/thunkUser';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

const Register = ({ navigation }: iRegisterScreenProps) => {
  const [name, setName] = useState('Bruna');
  const [email, setEmail] = useState('bruna@hotmail.com');
  const [password, setPassword] = useState('123123');

  const { loading } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const handleSignUp = async () => {
    try {
      await dispatch(singUp({ email, password, name })).then(() => {
        navigation.replace('App');
      });
    } catch (error) {
      console.error('Registering ', error);
    }
  };

  return (
    <Container>
      <Content justify="center" align="center">
        <Input
          label="Nome"
          icon="account-circle-outline"
          autoCapitalize="words"
          onChangeText={setName}
          value={name}
          placeholder="Nome e sobrenome"
        />
        <Input
          label="Email"
          icon="email-outline"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="quemdeve@email.com"
        />
        <Input
          label="Senha"
          icon="lock-outline"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
          placeholder="Minimo de 5 caractéres"
        />
        <Button
          disabled={loading}
          label="Registrar"
          loading={loading}
          onPress={handleSignUp}
        />
      </Content>
    </Container>
  );
};

export default Register;
