import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, StatusBar, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Text, Card, Avatar, useTheme, IconButton } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import images from database
import { images, avatars } from '../data/imageDatabase';
import { events } from '../data/eventDatabase';
import { categories } from '../data/categoryDatabase';



const EventCard = ({ title, date, location, spots, price, distance, host, image, onBookmark, onShare, onPress }) => {
  const theme = useTheme();
  return (
    <Card style={styles.card} mode="elevated" onPress={onPress}>
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
              <Text variant="bodyMedium" style={styles.price}>{price}</Text>
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
  );
};

export default function EventsScreen({ navigation }) {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('overall');
  const [selectedFilters, setSelectedFilters] = useState({
    date: null,
    time: null,
    distance: null,
    price: null,
  });

  const handleEventPress = (event) => {
    navigation.navigate('EventDetail', { event });
  };

  const filteredEvents = events.filter(event => {
    if (selectedCategory === 'overall') return true;
    return event.title.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  const handleBookmark = async (event) => {
    console.log('Event to Save:', event); // Debugging log
    if (!event || !event.title) {
      console.error('Invalid event data:', event);
      alert('Failed to save. Invalid event.');
      return;
    }
    try {
      const savedEvents = JSON.parse(await AsyncStorage.getItem('savedEvents')) || [];
      if (savedEvents.some((savedEvent) => savedEvent.title === event.title)) {
        alert('Event is already saved!');
        return;
      }
      const updatedEvents = [...savedEvents, event];
      await AsyncStorage.setItem('savedEvents', JSON.stringify(updatedEvents));
      alert('Event saved successfully!');
    } catch (error) {
      console.error('Error saving event:', error);
      alert('Failed to save event. Please try again.');
    }
  };
  
  
  

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 0, backgroundColor: theme.colors.primary }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
          <StatusBar barStyle="light-content" />
          <View style={[styles.header, { backgroundColor: theme.colors.primary }]}>
            <IconButton 
              icon="chevron-left" 
              size={24} 
              iconColor={theme.colors.onPrimary}
              onPress={() => navigation.goBack()} 
            />
            <Text variant="headlineSmall" style={{ color: theme.colors.onPrimary }}>Events</Text>
            <IconButton icon="magnify" size={24} iconColor={theme.colors.onPrimary} />
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                onPress={() => setSelectedCategory(category.id)}
                style={[
                  styles.categoryButton,
                  selectedCategory === category.id && styles.selectedCategory,
                ]}
              >
                <MaterialCommunityIcons
                  name={category.icon}
                  size={24}
                  color={selectedCategory === category.id ? theme.colors.primary : theme.colors.onSurface}
                />
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === category.id && styles.selectedCategoryText,
                  ]}
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.filterRow}>
            <TouchableOpacity style={styles.filterButton}>
              <Text>Date</Text>
              <MaterialCommunityIcons name="chevron-down" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text>Time</Text>
              <MaterialCommunityIcons name="chevron-down" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text>Distance</Text>
              <MaterialCommunityIcons name="chevron-down" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text>Price</Text>
              <MaterialCommunityIcons name="chevron-down" size={20} />
            </TouchableOpacity>
          </View>
          
          <ScrollView style={styles.scrollView}>
            {filteredEvents.map((event, index) => (
              <EventCard
              key={index}
              {...event}
              onBookmark={() => handleBookmark(event)} // Pass the function here
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  categoryScroll: {
    flexGrow: 0,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  categoryButton: {
    alignItems: 'center',
    marginRight: 24,
    paddingVertical: 12,
  },
  selectedCategory: {
    borderBottomWidth: 2,
    borderBottomColor: '#1a73e8',
  },
  categoryText: {
    marginTop: 4,
  },
  selectedCategoryText: {
    color: '#1a73e8',
  },
  filterRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 16,
    justifyContent: 'space-between',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
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