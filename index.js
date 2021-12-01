import 'react-native-gesture-handler';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import React from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import App from './src/routes';
import { name as appName } from './app.json';
import { store } from './src/store';
import { Provider } from 'react-redux';

const Redux = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <App />
      <Toast ref={ref => Toast.setRef(ref)} />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(Redux));
