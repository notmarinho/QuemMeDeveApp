import 'react-native-gesture-handler';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import React from 'react';
import { AppRegistry, StatusBar } from 'react-native';

import RootRoutes from './src/routes/Root';
import { name as appName } from './app.json';
import { store } from './src/store';
import { Provider } from 'react-redux';

const Redux = () => {
  return (
    <Provider store={store}>
      <Toast ref={ref => Toast.setRef(ref)} />
      <StatusBar barStyle="light-content" />
      <RootRoutes />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(Redux));
