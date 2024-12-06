import React from 'react';
import { View, StyleSheet, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Text, IconButton, Button, useTheme } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { images, avatars } from '../data/imageDatabase';

const EventGoingScreen = ({ route, navigation }) => {
  const { event } = route.params;
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
              Event Details
            </Text>
            <View style={styles.headerActions}>
              <IconButton icon="bookmark-outline" size={24} iconColor={theme.colors.onPrimary} />
              <IconButton icon="share-variant-outline" size={24} iconColor={theme.colors.onPrimary} />
            </View>
          </View>

          <ScrollView style={styles.content}>
            <Image 
              source={images[event.image]} 
              style={styles.eventImage} 
              resizeMode="cover"
            />

            <View style={styles.eventInfo}>
              <Text variant="headlineMedium" style={[styles.title, { color: theme.colors.onSurface }]}>{event.title}</Text>

              <View style={[styles.infoRow, { borderBottomColor: theme.colors.surfaceVariant }]}>
                <MaterialCommunityIcons name="calendar" size={24} color={theme.colors.primary} />
                <View style={styles.infoTextContainer}>
                  <View>
                    <Text variant="bodyLarge">{`${event.date}, ${event.year} · ${event.time}`}</Text>
                  </View>
                </View>
              </View>

              <View style={[styles.infoRow, { borderBottomColor: theme.colors.surfaceVariant }]}>
                <MaterialCommunityIcons name="map-marker" size={24} color={theme.colors.primary} />
                <View style={styles.infoTextContainer}>
                  <View>
                    <Text variant="bodyLarge">{event.location}</Text>
                    <Text variant="bodyMedium" style={[styles.subText, { color: theme.colors.onSurfaceVariant }]}>{event.address}</Text>
                  </View>
                </View>
              </View>

              <View style={[styles.infoRow, { borderBottomColor: theme.colors.surfaceVariant }]}>
                <MaterialCommunityIcons name="account" size={24} color={theme.colors.primary} />
                <View style={styles.infoTextContainer}>
                  <View style={styles.hostInfo}>
                    <Text variant="bodyLarge">Hosted by</Text>
                    <View style={styles.hostNameContainer}>
                      <Text variant="bodyMedium">{event.host.name}</Text>
                      <Image 
                        source={avatars[event.host.avatar]} 
                        style={styles.hostAvatar}
                      />
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.descriptionSection}>
                <Text variant="titleMedium" style={styles.sectionTitle}>About this Event</Text>
                <Text variant="bodyMedium" style={styles.description}>
                  {event.description}
                </Text>
              </View>
            </View>
          </ScrollView>

          <View style={[styles.footer, { borderTopColor: theme.colors.surfaceVariant }]}>
            <View style={styles.priceContainer}>
              <Text variant="titleLarge">{event.price}</Text>
              <Text variant="bodyMedium" style={[styles.spots, { color: theme.colors.onSurfaceVariant }]}>{event.spots} spots</Text>
            </View>
            <Button 
              mode="contained" 
              buttonColor={theme.colors.secondary}
              textColor={theme.colors.onSecondaryContainer}
              style={styles.attendButton}
              contentStyle={styles.attendButtonContent}
              onPress={() => navigation.navigate('EventPayment', { event })}
            >
              Attend
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
  headerActions: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
  },
  eventImage: {
    width: '100%',
    height: 250,
    borderRadius: 16,
  },
  eventInfo: {
    padding: 16,
  },
  title: {
    marginBottom: 24,
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
  hostInfo: {
    flex: 1,
  },
  hostNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  hostAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginLeft: 8,
  },
  levelIndicators: {
    flexDirection: 'row',
    marginTop: 4,
  },
  descriptionSection: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  description: {
    marginTop: 8,
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
  },
  priceContainer: {
    flex: 1,
  },
  spots: {
    marginTop: 4,
  },
  attendButton: {
    flex: 1,
    marginLeft: 16,
  },
  attendButtonContent: {
    paddingVertical: 8,
  },
});

export default EventGoingScreen;
