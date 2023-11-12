import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigator} from '../TabNavigator/TabNavigator';
import {DetailsScreen} from '../../screens/DetailsScreen';
import {PaymentScreen} from '../../screens/PaymentScreen';

const stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <stack.Navigator screenOptions={{headerShown: false}}>
      <stack.Screen
        name="Tab"
        component={TabNavigator}
        options={{animation: 'slide_from_bottom'}}
      />
      <stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{animation: 'slide_from_bottom'}}></stack.Screen>
      <stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{animation: 'slide_from_bottom'}}></stack.Screen>
    </stack.Navigator>
  );
};
