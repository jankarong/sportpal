import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, useTheme } from 'react-native-paper';

import HomeScreen from '../screens/HomeScreen';
import BookScreen from '../screens/BookScreen';
import AddScreen from '../screens/AddScreen';
import EventsScreen from '../screens/EventsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CreateEventScreen from '../screens/CreateEventScreen';

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigation() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={false}
      labeled={true}
      sceneAnimationEnabled={false}
      activeColor={theme.colors.secondary} 
      inactiveColor={theme.colors.primaryContainer}
      barStyle={{ 
        backgroundColor: theme.colors.primary,
        elevation: 0,
        borderTopWidth: 0,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Book"
        component={BookScreen}
        options={{
          tabBarLabel: 'Book',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={CreateEventScreen}
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus-circle" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventsScreen}
        options={{
          tabBarLabel: 'Events',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="earth" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Me"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Me',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}