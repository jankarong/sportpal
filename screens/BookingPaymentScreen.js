import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Text, IconButton, useTheme, Surface } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BookingPaymentScreen = ({ route, navigation }) => {
  const theme = useTheme();
  const { courtId, date, time, price, title, location, image } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 0, backgroundColor: theme.colors.primary }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
          {/* Header */}
          <View style={[styles.header, { backgroundColor: theme.colors.primary }]}>
            <IconButton 
              icon="chevron-left" 
              size={24} 
              iconColor={theme.colors.onPrimary}
              onPress={() => navigation.goBack()} 
            />
            <Text variant="headlineSmall" style={styles.headerTitle}>
              Registration
            </Text>
            <View style={{ width: 48 }} />
          </View>

          {/* Court Details */}
          <Surface style={styles.courtCard} elevation={1}>
            <View style={styles.courtDetails}>
              <Image 
                source={image ? { uri: image } : require('../assets/booking/basketball-court.jpg')} 
                style={styles.courtImage} 
                resizeMode="cover"
              />
              <View style={styles.detailsText}>
                <Text variant="titleMedium" style={styles.summaryText}>
                  Court: {courtId}
                </Text>
                <View style={styles.detailRow}>
                  <MaterialCommunityIcons name="clock-outline" size={16} color={theme.colors.onSurfaceVariant} />
                  <Text variant="bodyMedium">{date}, {time}</Text>
                </View>
                <View style={styles.detailRow}>
                  <MaterialCommunityIcons name="map-marker-outline" size={16} color={theme.colors.onSurfaceVariant} />
                  <Text variant="titleMedium" style={styles.summaryText}>
                    Location: Richmond
                  </Text>
                </View>
              </View>
            </View>
          </Surface>

          {/* Booking Details */}
          <View style={styles.bookingDetails}>
            <Text style={styles.sectionTitle}>Court Booking</Text>
            <View style={styles.bookingRow}>
              <Text variant="bodyLarge">Court Rental (1.5hr)</Text>
              <Text variant="bodyLarge">{price}</Text>
            </View>
          </View>

          {/* Total */}
          <View style={styles.totalSection}>
            <Text variant="titleMedium">Total</Text>
            <Text variant="titleMedium">{price}</Text>
          </View>

          {/* Payment Buttons */}
          <View style={styles.paymentSection}>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Payment Options
            </Text>
            <TouchableOpacity
              style={styles.paypalButton}
              onPress={() => navigation.navigate('PaymentSuccessScreen', { courtId, date, time, price })}
            >
              <Text style={styles.paypalText}>Pay with PayPal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.creditCardButton}
              onPress={() => navigation.navigate('PaymentSuccessScreen', { courtId, date, time, price })}
            >
              <MaterialCommunityIcons name="credit-card-outline" size={20} color="white" />
              <Text style={styles.creditCardText}>Pay with Credit/Debit Card</Text>
            </TouchableOpacity>
          </View>

          {/* Footer Note */}
          <View style={styles.footerNote}>
            <Text style={styles.footnote}>
              You'll come back to the app after completing payment on the PayPal website.
            </Text>
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
    height: 56,
    paddingHorizontal: 16,
  },
  headerTitle: {
    color: 'white',
    fontWeight: '500',
  },
  courtCard: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    padding: 16,
  },
  courtDetails: {
    flexDirection: 'row',
  },
  courtImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  detailsText: {
    marginLeft: 12,
    flex: 1,
  },
  courtTitle: {
    marginBottom: 4,
    fontWeight: '500',
    color: '#000',  // This ensures the title is in black color
  },
  summaryText: {
    color: '#666',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  bookingDetails: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  bookingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    marginVertical: 8,
  },
  paymentSection: {
    padding: 16,
  },
  paypalButton: {
    height: 48,
    backgroundColor: '#FFC439',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    marginBottom: 12,
  },
  paypalText: {
    color: '#003087',
    fontWeight: 'bold',
  },
  creditCardButton: {
    height: 48,
    backgroundColor: '#333',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
  },
  creditCardText: {
    color: 'white',
    marginLeft: 8,
  },
  footerNote: {
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 'auto',
    marginBottom: 16,
  },
  footnote: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});

export default BookingPaymentScreen;
