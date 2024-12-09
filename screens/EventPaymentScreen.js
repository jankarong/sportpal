import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Text, IconButton, Button, useTheme, Surface } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { images, avatars } from '../data/imageDatabase';

const EventPaymentScreen = ({ route, navigation }) => {
  const theme = useTheme();
  const { event } = route.params;

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
            <Text variant="headlineSmall" style={{ color: theme.colors.onPrimary }}>Registration</Text>
            <View style={{ width: 48 }} />
          </View>

          <Surface style={styles.eventCard} elevation={0}>
            <View style={styles.eventRow}>
              <Image 
                source={images[event.image]} 
                style={styles.eventImage} 
                resizeMode="cover"
              />
              <View style={styles.eventDetails}>
                <Text variant="titleMedium" style={styles.eventTitle}>{event.title}</Text>
                <View style={styles.eventInfo}>
                  <MaterialCommunityIcons name="clock-outline" size={16} color={theme.colors.onSurfaceVariant} />
                  <Text variant="bodyMedium" style={{ color: theme.colors.onSurfaceVariant }}>
                    {event.date}, {event.time}
                  </Text>
                </View>
                <View style={styles.eventInfo}>
                  <MaterialCommunityIcons name="map-marker-outline" size={16} color={theme.colors.onSurfaceVariant} />
                  <Text variant="bodyMedium" style={{ color: theme.colors.onSurfaceVariant }}>
                    {event.location}
                  </Text>
                </View>
                <View style={styles.eventInfo}>
                  <MaterialCommunityIcons name="account-group-outline" size={16} color={theme.colors.onSurfaceVariant} />
                  <Text variant="bodyMedium" style={{ color: theme.colors.onSurfaceVariant }}>
                    {event.spots} going
                  </Text>
                </View>
              </View>
            </View>
          </Surface>

          <View style={styles.ticketSection}>
            <Text style={styles.sectionTitle}>Ticket</Text>
            <TouchableOpacity style={styles.ticketCard}>
              <Text variant="bodyLarge">1 ticket</Text>
              <Text variant="bodyLarge">{event.price}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.totalSection}>
            <Text variant="titleMedium">Total</Text>
            <Text variant="titleMedium">{event.price}</Text>
          </View>

          <View style={styles.paymentButtons}>
          <TouchableOpacity 
              style={styles.paypalButton}
              onPress={() => navigation.navigate('PaymentSuccessScreen', { event })}
            >
              <Text style={styles.paypalText}>PayPal</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.creditCardButton}
              onPress={() => navigation.navigate('PaymentSuccessScreen', { event })}
            >
              <MaterialCommunityIcons name="credit-card-outline" size={20} color="white" />
              <Text style={styles.creditCardText}>Credit or debit card</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.poweredByContainer}>
            <Text style={styles.poweredByText}>Powered by </Text>
            <Text style={styles.paypalPoweredText}>PayPal</Text>
          </View>

          <Text style={styles.footnote}>
            You'll come back to sportpal after completing payment on the PayPal website.
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    height: 56,
    
  },
  eventCard: {
    margin: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    padding: 12,
  },
  eventRow: {
    flexDirection: 'row',
    gap: 12,
  },
  eventImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  eventDetails: {
    flex: 1,
  },
  eventTitle: {
    marginBottom: 4,
  },
  eventInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    gap: 4,
  },
  ticketSection: {
    padding: 16,
  },
  sectionTitle: {
    color: '#666',
    marginBottom: 8,
  },
  ticketCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  paymentButtons: {
    padding: 16,
    gap: 12,
  },
  paypalButton: {
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFC439',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paypalText: {
    color: '#003087',
    fontSize: 16,
    fontWeight: 'bold',
  },
  creditCardButton: {
    height: 48,
    borderRadius: 24,
    backgroundColor: '#333',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  creditCardText: {
    color: '#fff',
    fontSize: 16,
  },
  poweredByContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 8,
  },
  poweredByText: {
    color: '#666',
    fontSize: 12,
  },
  paypalPoweredText: {
    color: '#003087',
    fontSize: 12,
    fontWeight: 'bold',
  },
  footnote: {
    textAlign: 'center',
    color: '#666',
    fontSize: 12,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
});

export default EventPaymentScreen;
