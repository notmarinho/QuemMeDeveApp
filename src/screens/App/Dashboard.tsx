import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  Button,
} from 'react-native';

//CP
import { colors } from '../../commonStyles';
import ValorTotal from '@components/Dashboard/ValorTotal';
import UsuarioHeader from '@components/Dashboard/UsuarioHeader';
import Devedores from '@components/Dashboard/Devedores';

//LB
import AsyncStorage from '@react-native-async-storage/async-storage';
import { iDashboardScreenProps } from 'src/routes/types';

const Home = (props: iDashboardScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.black} />
      <UsuarioHeader />
      <ValorTotal />
      <Devedores />
      <View style={{ flex: 2 }}>
        <Button
          title="Novo Gasto"
          onPress={() => props.navigation.navigate('CreateDebt')}
        />
        <Button
          title="Novo Cartao"
          onPress={() => props.navigation.navigate('CreateCard')}
        />
        <Button title="Limpar Dados" onPress={() => AsyncStorage.clear()} />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
    // padding: Layout.PADDING,
    // justifyContent: 'center'
  },
});
