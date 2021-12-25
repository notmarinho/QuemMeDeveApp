// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ConfigurationScreen from '@screens/App/Configuration';
import CreateDebtScreen from '@screens/App/CreateDebt';
import DebtDetailsScreen from '@screens/App/DebtDetails';
import ListDebtsScreen from '@screens/App/ListDebt';
import DetalhesDevedorScreen from '@screens/App/DetalhesDevedor';
import CreateDevedorScreen from '@screens/App/CreateDevedor';
import CreateCartaoScreen from '@screens/App/CreateCartao';
import DashboardScreen from '@screens/App/Dashboard';
import { iStackAppParamsList } from './types';

const Stack = createNativeStackNavigator<iStackAppParamsList>();

function StackApp() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Configuration" component={ConfigurationScreen} />
      <Stack.Screen name="CreateDebt" component={CreateDebtScreen} />
      <Stack.Screen name="DevedorDetails" component={DetalhesDevedorScreen} />
      <Stack.Screen name="DebtDetails" component={DebtDetailsScreen} />
      <Stack.Screen name="ListDebts" component={ListDebtsScreen} />
      <Stack.Screen name="CreateDevedor" component={CreateDevedorScreen} />
      <Stack.Screen name="CreateCard" component={CreateCartaoScreen} />
    </Stack.Navigator>
  );
}

export default StackApp;
