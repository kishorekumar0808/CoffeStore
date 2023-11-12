import React, {useEffect} from 'react';
import RootNavigator from './src/navigators/RootNavigator/RootNavigator';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <RootNavigator />;
}
