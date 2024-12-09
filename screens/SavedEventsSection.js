import React, { useEffect, useState, useCallback } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Text, Card, useTheme, IconButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { images, avatars } from '../data/imageDatabase';

const EventCard = ({ title, date, location, spots, price, distance, host, image, onRemove, onPress }) => {
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
            </Text>nbjbnjlbl;bjl
            
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
                  source={avatars[host?.avatar]}
                  style={styles.avatar}
                />
                <Text variant="bodyMedium">{host?.name}</Text>
                <Text variant="bodyMedium" style={styles.distance}>{distance}</Text>
              </View>
              <View style={styles.actions}>
                <IconButton icon="delete-outline" size={20} onPress={(e) => {
                  e.stopPropagation();
                  onRemove();
                }} />
              </View>
            </View>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const SavedEventsSection = ({ navigation }) => {
  const [savedEvents, setSavedEvents] = useState([]);
  const theme = useTheme();

  const fetchSavedEvents = async () => {
    try {
      const rawEvents = await AsyncStorage.getItem('savedEvents');
      const parsedEvents = rawEvents ? JSON.parse(rawEvents) : [];
      setSavedEvents(Array.isArray(parsedEvents) ? parsedEvents : []);
    } catch (error) {
      console.error('Error fetching saved events:', error);
      setSavedEvents([]);
    }
  };

  const removeEvent = async (eventTitle) => {
    try {
      const updatedEvents = savedEvents.filter((event) => event.title !== eventTitle);
      setSavedEvents(updatedEvents);
      await AsyncStorage.setItem('savedEvents', JSON.stringify(updatedEvents));
    } catch (error) {
      console.error('Error removing event:', error);
    }
  };

  const handleEventPress = (event) => {
    navigation.navigate('EventDetail', { event });
  };

  useFocusEffect(
    useCallback(() => {
      fetchSavedEvents();
    }, [])
  );

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
              Saved Events
            </Text>
            <View style={{ width: 48 }} />
          </View>

          {savedEvents.length === 0 ? (
            <Text style={styles.noEventsText}>No saved events yet!</Text>
          ) : (
            <ScrollView style={styles.scrollView}>
              {savedEvents.map((event, index) => (
                <EventCard
                  key={index}
                  {...event}
                  onRemove={() => removeEvent(event.title)}
                  onPress={() => handleEventPress(event)}
                />
              ))}
            </ScrollView>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    color: '#2955F9',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
    padding: 16,
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
    textAlign: 'center',
  },
  price: {
    textAlign: 'right',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hostInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  distance: {
    marginLeft: 8,
    color: 'gray',
  },
  actions: {
    flexDirection: 'row',
  },
  noEventsText: {
    textAlign: 'center',
    marginTop: 20,
  },
});

export default SavedEventsSection;
