import { CompositeScreenProps } from '@react-navigation/core';
import {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

export type iRootStackParamsList = {
  Splash: undefined;
  Auth: undefined;
  App: undefined;
};

export type iStackAppParamsList = {
  Dashboard: undefined;
  Configuration: undefined;
  CreateDebt: undefined;
  DevedorDetails: undefined;
  DebtDetails: undefined;
  ListDebts: undefined;
  CreateDevedor: undefined;
  CreateCard: undefined;
};

export type iStackAuthParamsList = {
  Login: undefined;
  Register: undefined;
};

export type iSplashScreenProps = NativeStackScreenProps<
  iRootStackParamsList,
  'Splash'
>;

export type iLoginScreenProps = CompositeScreenProps<
  NativeStackScreenProps<iStackAuthParamsList, 'Login'>,
  NativeStackScreenProps<iRootStackParamsList, 'Auth'>
>;

export type iRegisterScreenProps = CompositeScreenProps<
  NativeStackScreenProps<iStackAuthParamsList, 'Register'>,
  NativeStackScreenProps<iRootStackParamsList, 'Auth'>
>;

export type iDashboardScreenProps = NativeStackScreenProps<
  iStackAppParamsList,
  'Dashboard'
>;

export type iDashboardNavigationProps =
  NativeStackNavigationProp<iStackAppParamsList>;
