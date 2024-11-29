import React from 'react';
import { View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

export default function AddScreen() {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Text variant="displayLarge"style={{ color: theme.colors.primary}}>Add Screen</Text>
    </View>
  );
}