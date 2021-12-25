import React, { useState } from 'react';
import { SafeAreaView, View, Text, Pressable } from 'react-native';
import { iLoginScreenProps } from '../../../routes/types';
import styles from './styles.Login';

import Button from '@components/Inputs/Button/Button';
import Input from '@components/Inputs/Input/Input';
import { Layout } from '@theme';
import { useAppDispatch, useAppSelector } from '@hooks';
import { singIn } from '../../../feature/user/thunkUser';

const Login = ({ navigation }: iLoginScreenProps) => {
  const [email, setEmail] = useState('mateus.santos.840@hotmail.com');
  const [password, setPassword] = useState('123456');
  const { loading } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const onButtonPress = async () => {
    dispatch(singIn({ email, password })).then(navigateToApp);
  };

  const navigateToRegister = () => navigation.navigate('Register');
  const navigateToApp = () => navigation.navigate('App');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subTitle}>
            Entre agora para registrar quem te deve
          </Text>
        </View>
        <View style={styles.bodyContainer}>
          <Input
            label="E-mail"
            icon="account-outline"
            value={email}
            onChangeText={setEmail}
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Input
            label="Senha"
            icon="lock-outline"
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
          />
          <Button
            onPress={onButtonPress}
            label="Logar"
            disabled={loading}
            loading={loading}
          />
        </View>
        <View style={styles.footerContainer}>
          <Pressable hitSlop={Layout.HITSLOP} onPress={navigateToRegister}>
            <Text>
              {'Ainda nao tem uma conta? '}
              <Text style={styles.createAccount}>Crie uma aqui!</Text>
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
