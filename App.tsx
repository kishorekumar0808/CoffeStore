import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import RootNavigator from '@/navigators/RootNavigator/RootNavigator';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <RootNavigator />;
}
