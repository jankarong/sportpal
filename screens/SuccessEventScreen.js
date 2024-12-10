// SuccessEventScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SuccessEventScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Event Created Successfully!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
