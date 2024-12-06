import React from 'react';
import { View, StyleSheet, ScrollView, Image, SafeAreaView } from 'react-native';
import { Text, IconButton, Button, useTheme, Chip } from 'react-native-paper';
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
              Court Details
            </Text>
            <View style={styles.headerActions}>
              <IconButton icon="bookmark-outline" size={24} iconColor={theme.colors.onPrimary} />
              <IconButton icon="share-variant-outline" size={24} iconColor={theme.colors.onPrimary} />
            </View>
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

              <View style={[styles.infoRow, { borderBottomColor: theme.colors.surfaceVariant }]}>
                <MaterialCommunityIcons name="map-marker" size={24} color={theme.colors.primary} />
                <View style={styles.infoTextContainer}>
                  <View>
                    <Text variant="bodyLarge">{court.location}</Text>
                    <Text variant="bodyMedium" style={[styles.subText, { color: theme.colors.onSurfaceVariant }]}>
                      {court.distance}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={[styles.infoRow, { borderBottomColor: theme.colors.surfaceVariant }]}>
                <MaterialCommunityIcons name="dollar" size={24} color={theme.colors.primary} />
                <View style={styles.infoTextContainer}>
                  <Text variant="bodyLarge">{court.price}</Text>
                </View>
              </View>

              <View style={styles.descriptionSection}>
                <Text variant="titleMedium" style={styles.sectionTitle}>About this Court</Text>
                <Text variant="bodyMedium" style={styles.description}>
                  {court.description}
                </Text>
              </View>

              <View style={styles.facilitiesSection}>
                <Text variant="titleMedium" style={styles.sectionTitle}>Facilities</Text>
                <View style={styles.facilityChips}>
                  {court.facilities.map((facility) => (
                    <Chip key={facility} style={[styles.facilityChip, { backgroundColor: theme.colors.primaryContainer }]}>
                      {facility}
                    </Chip>
                  ))}
                </View>
              </View>

              <View style={styles.availableTimesSection}>
                <Text variant="titleMedium" style={styles.sectionTitle}>Available Times</Text>
                {court.available_day_time.map((slot, index) => (
                  <View key={index} style={styles.availableSlot}>
                    <Text variant="bodyMedium">{slot.day}</Text>
                    <Text variant="bodyMedium">{slot.time}</Text>
                  </View>
                ))}
              </View>

              <View style={styles.contactSection}>
                <Text variant="titleMedium" style={styles.sectionTitle}>Contact</Text>
                <Text variant="bodyMedium" style={{ color: theme.colors.onSurfaceVariant }}>
                  Phone: {court.contact}
                </Text>
              </View>
            </View>
          </ScrollView>

          <View style={[styles.footer, { borderTopColor: theme.colors.surfaceVariant }]}>
            <Button 
              mode="contained" 
              buttonColor={theme.colors.primary}
              textColor={theme.colors.onPrimary}
              style={styles.bookButton}
              contentStyle={styles.bookButtonContent}
              onPress={() => navigation.navigate('BookingFlow', { courtId: court.id })}
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
  headerActions: {
    flexDirection: 'row',
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
  subText: {
    marginTop: 4,
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
  facilitiesSection: {
    marginTop: 24,
  },
  facilityChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  facilityChip: {
    marginRight: 8,
    marginBottom: 8,
  },
  availableTimesSection: {
    marginTop: 24,
  },
  availableSlot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  contactSection: {
    marginTop: 24,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderTopWidth: 1,
  },
  bookButton: {
    flex: 1,
  },
  bookButtonContent: {
    paddingVertical: 8,
  },
});

export default BookingDetailScreen;