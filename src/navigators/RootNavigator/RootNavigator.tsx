import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { StackNavigator } from '@/navigators/StackNavigator/StackNavigator';

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
