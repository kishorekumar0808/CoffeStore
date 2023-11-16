import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigator} from '@/src/navigators/TabNavigator/TabNavigator';
import {DetailsScreen} from '@/src/screens/DetailsScreen';
import {PaymentScreen} from '@/src/screens/PaymentScreen';

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
        options={{animation: 'slide_from_bottom'}}/>
      <stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{animation: 'slide_from_bottom'}}/>
    </stack.Navigator>
  );
};
