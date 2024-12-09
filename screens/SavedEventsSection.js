import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const SavedEventsSection = () => {
  const [savedEvents, setSavedEvents] = useState([]);

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

  const confirmRemoveEvent = (eventTitle) => {
    Alert.alert(
      "Remove Event",
      `Are you sure you want to remove "${eventTitle}"?`,
      [
        { text: "Cancel", style: "cancel" },
        { text: "Remove", onPress: () => removeEvent(eventTitle) }
      ]
    );
  };

  useFocusEffect(
    useCallback(() => {
      fetchSavedEvents();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Saved Events</Text>
      {savedEvents.length === 0 ? (
        <Text style={styles.noEventsText}>No saved events yet!</Text>
      ) : (
        <FlatList
          data={savedEvents}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.eventItem}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.date}</Text>
              <Text>{item.location}</Text>
              <TouchableOpacity onPress={() => confirmRemoveEvent(item.title)} style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  noEventsText: {
    fontStyle: 'italic',
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
  eventItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
  },
  deleteButton: {
    marginTop: 5,
    backgroundColor: '#FFC43A', // Keep the same yellow style for "Remove" button
    padding: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SavedEventsSection;
