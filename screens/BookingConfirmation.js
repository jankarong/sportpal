import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BookingConfirmationScreen = ({ route, navigation }) => {
  const { courtId, date, time } = route.params;

  const handleBookingConfirmation = () => {
    // Add your logic to confirm the booking here
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Booking Confirmed</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Court:</Text>
          <Text style={styles.value}>Drive Basketball Centre</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Date:</Text>
          <Text style={styles.value}>{date}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Time:</Text>
          <Text style={styles.value}>{time}</Text>
        </View>
        <TouchableOpacity style={styles.confirmButton} onPress={handleBookingConfirmation}>
          <Text style={styles.confirmButtonText}>Confirm Booking</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  detailsContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  value: {
    fontSize: 16,
  },
  confirmButton: {
    backgroundColor: '#2955F9',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 24,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BookingConfirmationScreen;