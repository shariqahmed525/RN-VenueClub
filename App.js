import React, {
  useEffect
} from 'react';
import {
  StatusBar
} from 'react-native';
import {
  Provider
} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import store from './src/store';
import Navigator from './src/navigation';

export default App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  console.disableYellowBox = true;
  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor="#28A745"
        barStyle="light-content"
      />
      <Navigator />
    </Provider>
  );
}