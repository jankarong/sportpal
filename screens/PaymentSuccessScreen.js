import React from 'react';
import { View, StyleSheet, SafeAreaView, Image } from 'react-native';
import { Text, IconButton, Button, useTheme, Surface } from 'react-native-paper';

const PaymentSuccessScreen = ({ navigation }) => {
  const theme = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 0, backgroundColor: theme.colors.primary }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>

          <Surface style={styles.successCard} elevation={0}>
            <Image
              source={require('../assets/success.png')} 
              style={styles.successImage}
            />
            <Text style={styles.successTitle}>
              Payment Successful!
            </Text>
          </Surface>

          <Button
            mode="contained"
            style={styles.doneButton}
            onPress={() => navigation.navigate('Home')} 
          >
            View The Event
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  successCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 24,
  },
  successImage: {
    width: 300,
    height: 250,
  },
  successTitle: {
    color: 'blue', 
    marginBottom: 8,
    textAlign: 'center',
  },
  doneButton: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
});

export default PaymentSuccessScreen;
