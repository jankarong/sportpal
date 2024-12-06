import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import { Text, Card, useTheme, IconButton } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Import databases
import { categories } from '../data/categoryDatabase';
import { courts } from '../data/courtDatabase';

export default function BookScreen({ navigation }) {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('overall');

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 0, backgroundColor: theme.colors.primary }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          
          {/* Header */}
          <View style={[styles.header, { backgroundColor: theme.colors.primary }]}>
            <View style={styles.locationContainer}>
              <MaterialCommunityIcons name="map-marker" size={24} color={theme.colors.onPrimary} />
              <Text style={[styles.locationText, { color: theme.colors.onPrimary }]}>
                Golden Village, Richmond
              </Text>
              <MaterialCommunityIcons name="chevron-down" size={24} color={theme.colors.onPrimary} />
            </View>
            <IconButton icon="magnify" size={24} iconColor={theme.colors.onPrimary} />
          </View>

          {/* Categories Bar */}
          <View style={styles.filterSection}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
              {categories.map((category) => (
                <TouchableOpacity
                  key={category.id}
                  style={[
                    styles.categoryButton,
                    selectedCategory === category.id && styles.selectedCategory
                  ]}
                  onPress={() => setSelectedCategory(category.id)}
                >
                  <MaterialCommunityIcons
                    name={category.icon}
                    size={24}
                    color={selectedCategory === category.id ? theme.colors.primary : theme.colors.onSurface}
                  />
                  <Text
                    style={[
                      styles.categoryText,
                      selectedCategory === category.id && { color: theme.colors.primary }
                    ]}
                  >
                    {category.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* Filters */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.filterRow}>
                <TouchableOpacity style={styles.filterButton}>
                  <Text style={styles.filterText}>Date</Text>
                  <MaterialCommunityIcons name="chevron-down" size={20} color="#666" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                  <Text style={styles.filterText}>Time</Text>
                  <MaterialCommunityIcons name="chevron-down" size={20} color="#666" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                  <Text style={styles.filterText}>Distance</Text>
                  <MaterialCommunityIcons name="chevron-down" size={20} color="#666" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                  <Text style={styles.filterText}>Price</Text>
                  <MaterialCommunityIcons name="chevron-down" size={20} color="#666" />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>

          <ScrollView style={styles.content}>
            {/* You Been To Section */}
            <View style={styles.section}>
              <Text variant="titleLarge" style={styles.sectionTitle}>You Been To</Text>
              <Card 
                style={styles.card} 
                onPress={() => navigation.navigate('BookingDetail', { courtId: 1 })}
              >
                <Card.Cover source={require('../assets/booking/basketball-court.jpg')} />
                <Card.Content style={styles.cardContent}>
                  <View style={styles.cardHeader}>
                    <View>
                      <Text variant="titleMedium">Drive Basketball Centre</Text>
                      <Text variant="bodyMedium" style={{ color: theme.colors.outline }}>Richmond</Text>
                    </View>
                    <Text variant="bodyMedium" style={{ color: theme.colors.primary }}>14km</Text>
                  </View>
                </Card.Content>
              </Card>
            </View>

            {/* Courts Nearby Section */}
            <View style={styles.section}>
              <Text variant="titleLarge" style={styles.sectionTitle}>Courts Nearby</Text>
              <Card 
                style={styles.card} 
                onPress={() => navigation.navigate('BookingDetail', { courtId: 2 })}
              >
                <Card.Cover source={require('../assets/booking/basketball-court-2.jpg')} />
                <Card.Content style={styles.cardContent}>
                  <View style={styles.cardHeader}>
                    <View>
                      <Text variant="titleMedium">Richmond Olympic Oval</Text>
                      <Text variant="bodyMedium" style={{ color: theme.colors.outline }}>Richmond</Text>
                    </View>
                    <Text variant="bodyMedium" style={{ color: theme.colors.primary }}>18km</Text>
                  </View>
                </Card.Content>
              </Card>
            </View>
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
    flex: 1,
  },
  locationText: {
    marginLeft: 8,
    fontSize: 16,
  },
  filterSection: {
    backgroundColor: '#f8f9fa',
    paddingBottom: 8,
  },
  categoryScroll: {
    paddingVertical: 8,
  },
  categoryButton: {
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 4,
  },
  selectedCategory: {
    borderBottomWidth: 2,
    borderBottomColor: '#1a73e8',
  },
  categoryText: {
    marginTop: 4,
    fontSize: 12,
    color: '#666',
  },
  filterRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 8,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  filterText: {
    fontSize: 14,
    color: '#000000',
    marginRight: 4,
  },
  content: {
    flex: 1,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  card: {
    marginBottom: 16,
  },
  cardContent: {
    padding: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});