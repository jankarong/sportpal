import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image, SafeAreaView } from 'react-native';
import { Text, IconButton, Button, useTheme, TextInput } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { courts } from '../data/courtDatabase';

const getCourtImage = (imageName) => {
  switch(imageName) {
    case 'basketball-court':
      return require('../assets/booking/basketball-court.jpg');
    case 'basketball-court-2':
      return require('../assets/booking/basketball-court-2.jpg');
    case 'badminton-court':
      return require('../assets/booking/badminton-court.jpg');
    default:
      return require('../assets/booking/basketball-court.jpg');
  }
};

const BookingDetailScreen = ({ route, navigation }) => {
  const { courtId } = route.params;
  const court = courts.find((c) => c.id === courtId);
  const theme = useTheme();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 0, backgroundColor: theme.colors.primary }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
          {/* Header section remains the same */}
          <View style={[styles.header, { backgroundColor: theme.colors.primary }]}>
            <IconButton 
              icon="chevron-left" 
              size={24} 
              iconColor={theme.colors.onPrimary}
              onPress={() => navigation.goBack()} 
            />
            <Text variant="titleLarge" style={[styles.headerTitle, { color: theme.colors.onPrimary }]}>
              Details
            </Text>
            <View style={{ width: 48 }} />
          </View>

          <ScrollView style={styles.content}>
            <Image 
              source={getCourtImage(court.image)}
              style={styles.courtImage} 
              resizeMode="cover"
            />

            <View style={styles.courtInfo}>
              <Text variant="headlineMedium" style={[styles.title, { color: theme.colors.onSurface }]}>
                {court.title}
              </Text>

              <View style={styles.bookingForm}>
                <View style={styles.inputSection}>
                  <Text variant="titleSmall" style={styles.sectionTitle}>Day</Text>
                  <TextInput
                    mode="outlined"
                    placeholder="Nov 19"
                    value={selectedDate}
                    onChangeText={setSelectedDate}
                    style={styles.input}
                  />
                </View>

                <View style={styles.inputSection}>
                  <Text variant="titleSmall" style={styles.sectionTitle}>Time</Text>
                  <TextInput
                    mode="outlined"
                    placeholder="9:30-11:00"
                    value={selectedTime}
                    onChangeText={setSelectedTime}
                    style={styles.input}
                  />
                </View>
              </View>

              <View style={styles.priceContainer}>
                <MaterialCommunityIcons name="help-circle-outline" size={24} color="#2955F9" />
                <Text variant="bodyLarge" style={styles.priceText}>
                  Price: {court.price}/hour
                </Text>
              </View>

              <View style={styles.descriptionSection}>
                <Text variant="titleMedium" style={styles.sectionTitle}>Description</Text>
                <Text variant="bodyMedium" style={styles.description}>
                  The Drive Basketball Court is a well-maintained outdoor court available for booking. Featuring regulation hoops and a smooth playing surface, it's great for pickup games, practice, or training. The court is open from 18:00-20:00.
                </Text>
              </View>
            </View>
          </ScrollView>

          <View style={styles.footer}>
            <Button 
              mode="contained" 
              buttonColor={theme.colors.secondary}
              textColor={theme.colors.onSecondaryContainer}
              style={styles.attendButton}
              contentStyle={styles.attendButtonContent}
              onPress={() => navigation.navigate('BookingConfirmation', { 
                courtId,
                date: selectedDate,
                time: selectedTime
              })}
            >
              Book Now
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  headerTitle: {
    fontWeight: '500',
  },
  content: {
    flex: 1,
  },
  courtImage: {
    width: '100%',
    height: 250,
  },
  courtInfo: {
    padding: 16,
  },
  title: {
    marginBottom: 24,
    fontWeight: '500',
  },
  bookingForm: {
    marginBottom: 24,
  },
  inputSection: {
    marginBottom: 16,
  },
  input: {
    marginTop: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  infoTextContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 16,
  },
  descriptionSection: {
    marginTop: 24,
  },
  sectionTitle: {
    marginBottom: 8,
    fontWeight: '500',
  },
  description: {
    marginTop: 8,
    lineHeight: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E3E1EC',
  },
  priceText: {
    marginLeft: 8,
    color: '#1B1B21',
  },
  footer: {
    padding: 16,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  bookButton: {
    borderRadius: 100,
    height: 56,
  },
  bookButtonContent: {
    height: 56,
  },
});

export default BookingDetailScreen;