import * as React from 'react';
import { Button, useColorScheme } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './screens/App/SplashScreen';
import CreateDebt from './screens/App/CreateDebt';
import DebtDetais from './screens/App/DebtDetails';
import ListDebts from './screens/App/ListDebt';
import DetalhesDevedor from './screens/App/DetalhesDevedor';
import Home from './screens/App/Dashboard';

const Stack = createNativeStackNavigator();

const App = () => {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Dashboard" component={Home} />
        <Stack.Screen name="DetalhesDevedor" component={DetalhesDevedor} />
        <Stack.Screen name="CriarDebito" component={CreateDebt} />
        <Stack.Screen name="ListarDebito" component={ListDebts} />
        <Stack.Screen name="DetalhesDebito" component={DebtDetais} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
