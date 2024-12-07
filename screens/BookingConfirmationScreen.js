import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Text, IconButton, Button, useTheme } from 'react-native-paper';
import { courts } from '../data/courtDatabase';

const BookingConfirmationScreen = ({ route, navigation }) => {
  const { courtId, date, time } = route.params;
  const court = courts.find((c) => c.id === courtId);
  const theme = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 0, backgroundColor: theme.colors.primary }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
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
            <View style={styles.confirmationCard}>
              <Text variant="headlineMedium" style={styles.title}>
                {court.title}
              </Text>

              <View style={styles.timeSection}>
                <Text variant="titleSmall" style={styles.sectionLabel}>Day</Text>
                <View style={styles.timeSlot}>
                  <Text variant="bodyLarge">{date}</Text>
                </View>

                <Text variant="titleSmall" style={[styles.sectionLabel, { marginTop: 16 }]}>Time</Text>
                <View style={styles.timeSlot}>
                  <Text variant="bodyLarge">{time}</Text>
                </View>
              </View>

              <View style={styles.descriptionSection}>
                <Text variant="titleMedium" style={styles.sectionTitle}>Description</Text>
                <Text variant="bodyMedium" style={styles.description}>
                  The Drive Basketball Court is a well-maintained outdoor court available for booking, located in Richmond Olympic Oval. Featuring regulation hoops and a smooth playing surface, it's great for pickup games, practice, or training.
                </Text>
                
                <Text variant="bodyMedium" style={styles.operatingHours}>
                  The court is open from 18:00-20:00.
                </Text>

                <Text variant="bodyMedium" style={styles.contactInfo}>
                  To reserve your preferred time slot, please contact us at {court.contact}. We'll be happy to assist you in making the most of your court booking.
                </Text>
              </View>

              <Text style={styles.paymentNote}>
                *To Reserve your preferred time slot, please proceed to the payment page.
              </Text>
            </View>
          </ScrollView>

          <View style={styles.footer}>
            <Button 
              mode="contained" 
              buttonColor="#FFC43A"
              textColor="#000000"
              style={styles.bookButton}
              contentStyle={styles.bookButtonContent}
              onPress={() => navigation.navigate('Payment', { courtId, date, time })}
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
    paddingVertical: 8,
  },
  headerTitle: {
    fontWeight: '500',
  },
  content: {
    flex: 1,
  },
  confirmationCard: {
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    marginTop: 24,
  },
  title: {
    marginBottom: 24,
    fontWeight: '500',
  },
  timeSection: {
    marginBottom: 24,
  },
  sectionLabel: {
    color: '#666666',
    marginBottom: 8,
  },
  timeSlot: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 16,
  },
  descriptionSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 16,
    fontWeight: '500',
  },
  description: {
    marginBottom: 12,
    lineHeight: 24,
  },
  operatingHours: {
    marginBottom: 12,
  },
  contactInfo: {
    lineHeight: 24,
  },
  paymentNote: {
    color: '#2955F9',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 16,
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

export default BookingConfirmationScreen;