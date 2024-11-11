/*
 * Name: Jing Rong
 * Student Number: A01340651
 * Course Number: MDIA4295
 */


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import AlphaScreen from './screens/AlphaScreen';
import BetaScreen from './screens/BetaScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Alpha" component={AlphaScreen} />
        <Stack.Screen name="Beta" component={BetaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}