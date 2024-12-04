import React from 'react';
import { View, StyleSheet, ScrollView, StatusBar, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Text, Card, Avatar, useTheme, IconButton } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Import images from database
import { images, avatars } from '../data/imageDatabase';
import { events } from '../data/eventDatabase';

const EventCard = ({ title, date, location, spots, price, distance, host, image, onBookmark, onShare, onPress }) => {
  const theme = useTheme();
  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={styles.card} mode="elevated">
        <Card.Content style={styles.cardContent}>
          <Image 
            source={images[image]} 
            style={styles.eventImage} 
          />
          <View style={styles.contentContainer}>
            <Text variant="titleMedium" style={styles.title}>{title}</Text>
            <Text variant="bodyMedium" style={[styles.date, { color: theme.colors.primary }]}>
              {date}
            </Text>
            
            <View style={styles.infoRow}>
              <View style={styles.infoItem}>
                <Text variant="bodyMedium">{location}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text variant="bodyMedium" style={styles.spots}>{spots}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text variant="bodyMedium" style={[styles.price, { color: theme.colors.onSurface }]}>{price}</Text>
              </View>
            </View>

            <View style={styles.bottomRow}>
              <View style={styles.hostInfo}>
                <Image 
                  source={avatars[host.avatar]}
                  style={styles.avatar}
                />
                <Text variant="bodyMedium">{host.name}</Text>
                <Text variant="bodyMedium" style={styles.distance}>{distance}</Text>
              </View>
              <View style={styles.actions}>
                <IconButton icon="bookmark-outline" size={20} onPress={onBookmark} />
                <IconButton icon="share-variant-outline" size={20} onPress={onShare} />
              </View>
            </View>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

export default function HomeScreen({ navigation }) {
  const theme = useTheme();

  const handleEventPress = (event) => {
    navigation.navigate('EventDetail', { event });
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 0, backgroundColor: theme.colors.primary }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
          <StatusBar barStyle="light-content" />
          <View style={[styles.header, { backgroundColor: theme.colors.primary }]}>
            <View style={styles.locationContainer}>
              <MaterialCommunityIcons name="map-marker" size={24} color={theme.colors.onPrimary} />
              <Text variant="labelMedium" style={{ color: theme.colors.onPrimary }}>Golden Village·Richmond</Text>
              <MaterialCommunityIcons name="chevron-down" size={24} color={theme.colors.onPrimary} />
            </View>
            <IconButton icon="magnify" size={24} iconColor={theme.colors.onPrimary} />
          </View>
          
          <Text variant="titleLarge" style={styles.sectionTitle}>Suggested Events</Text>
          
          <ScrollView style={styles.scrollView}>
            {events.map((event, index) => (
              <EventCard
                key={index}
                {...event}
                onBookmark={() => {}}
                onShare={() => {}}
                onPress={() => handleEventPress(event)}
              />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    paddingHorizontal: 16,
    marginBottom: 16,
    marginTop: 16,
  },
  card: {
    marginBottom: 16,
  },
  cardContent: {
    flexDirection: 'row',
    padding: 12,
  },
  eventImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 12,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    marginBottom: 4,
  },
  date: {
    marginBottom: 4,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  infoItem: {
    flex: 1,
  },
  spots: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hostInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  distance: {
    marginLeft: 8,
    color: '#666',
  },
  actions: {
    flexDirection: 'row',
  },
});