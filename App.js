import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './theme/theme';

// Import screens
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import BottomNavigation from './components/BottomNavigation';
import EventDetailScreen from './screens/EventDetailScreen';
import EventPaymentScreen from './screens/EventPaymentScreen';
import BookingDetailScreen from './screens/BookingDetailScreen';
import BookingConfirmationScreen from './screens/BookingConfirmationScreen';
import SavedEventsSection from './screens/SavedEventsSection';
import PaymentSuccessScreen from './screens/PaymentSuccessScreen';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen 
            name="Welcome" 
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Login" 
            component={LoginScreen}
            options={{ headerShown: false}}
          />
          <Stack.Screen 
            name="SignUp" 
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="MainTabs" 
            component={BottomNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="EventDetail" 
            component={EventDetailScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="EventPayment" 
            component={EventPaymentScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="BookingDetail" 
            component={BookingDetailScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BookingConfirmation"
            component={BookingConfirmationScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SavedEventsScreen"
            component={SavedEventsSection}
            options={{ 
              title: 'Saved Events',
              headerShown: false
            }}
          />
          <Stack.Screen 
            name="PaymentSuccessScreen" 
            component={PaymentSuccessScreen} 
            options={{ headerShown: false }} 
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </PaperProvider>
  );
}