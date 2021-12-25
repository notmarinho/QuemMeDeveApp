// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '@screens/Auth/Login/Login';
import RegisterScreen from '@screens/Auth/Register/Register';
import { iStackAuthParamsList } from './types';

const Stack = createNativeStackNavigator<iStackAuthParamsList>();

function StackAuth() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default StackAuth;
