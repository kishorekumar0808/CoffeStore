import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import { HomeScreen } from '@/src/screens/HomeScreen';
import { CartScreen } from '@/src/screens/CartScreen';
import { FavoriteScreen } from '@/src/screens/FavoriteScreen';
import { OrderHistory } from '@/src/screens/OrderHistory';
import CustomIcon from '@/src/assets/customIcon/CustomIcon';
import { COLORS } from '@/src/theme/theme';

const Tab = createBottomTabNavigator();
export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <BlurView
            overlayColor=""
            blurAmount={15}
            style={styles.BlurViewStyles}
          />
        ),
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon
              name="home"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryDarkGreyHex
              }
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon
              name="cart"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryDarkGreyHex
              }
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon
              name="like"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryDarkGreyHex
              }
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="History"
        component={OrderHistory}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon
              name="bell"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryDarkGreyHex
              }
            />
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    elevation: 0,
    borderTopWidth: 0,
    borderTopColor: 'transparent',
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
