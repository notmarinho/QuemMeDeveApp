// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from '@screens/App/SplashScreen';
import StackAuth from './StackAuth';
import StackApp from './StackApp';
import { iRootStackParamsList } from './types';

const Stack = createNativeStackNavigator<iRootStackParamsList>();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Auth" component={StackAuth} />
        <Stack.Screen name="App" component={StackApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
