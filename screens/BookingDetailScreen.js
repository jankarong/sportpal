import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image, SafeAreaView, Platform, TouchableOpacity } from 'react-native';
import { Text, IconButton, Button, useTheme, Portal, Modal } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { courts } from '../data/courtDatabase';

const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  '18:00', '18:30', '19:00', '19:30', '20:00'
];

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
  
  const [date, setDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimeModal, setShowTimeModal] = useState(false);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  const getEndTime = (startTime) => {
    const [hours, minutes] = startTime.split(':');
    const endTimeDate = new Date();
    endTimeDate.setHours(parseInt(hours));
    endTimeDate.setMinutes(parseInt(minutes) + 90);
    return `${endTimeDate.getHours().toString().padStart(2, '0')}:${endTimeDate.getMinutes().toString().padStart(2, '0')}`;
  };

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const TimeSlotPicker = () => (
    <Portal>
      <Modal
        visible={showTimeModal}
        onDismiss={() => setShowTimeModal(false)}
        contentContainerStyle={styles.modalContainer}
      >
        <ScrollView style={styles.timeSlotContainer}>
          {TIME_SLOTS.map((time) => {
            const endTime = getEndTime(time);
            return (
              <TouchableOpacity
                key={time}
                style={[
                  styles.timeSlotItem,
                  selectedTimeSlot === time && styles.selectedTimeSlot
                ]}
                onPress={() => {
                  setSelectedTimeSlot(time);
                  setShowTimeModal(false);
                }}
              >
                <Text style={[
                  styles.timeSlotText,
                  selectedTimeSlot === time && styles.selectedTimeSlotText
                ]}>
                  {`${time} - ${endTime}`}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <Button onPress={() => setShowTimeModal(false)} style={styles.closeButton}>
          Close
        </Button>
      </Modal>
    </Portal>
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
              Details
            </Text>
            <View style={{ width: 48 }} />
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

              <View style={styles.bookingForm}>
                <View style={styles.inputSection}>
                  <Text variant="titleSmall" style={styles.sectionTitle}>Day</Text>
                  <TouchableOpacity
                    style={styles.pickerButton}
                    onPress={() => setShowDatePicker(true)}
                  >
                    <Text>{formatDate(date)}</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.inputSection}>
                  <Text variant="titleSmall" style={styles.sectionTitle}>Time</Text>
                  <TouchableOpacity
                    style={styles.pickerButton}
                    onPress={() => setShowTimeModal(true)}
                  >
                    <Text>
                      {selectedTimeSlot 
                        ? `${selectedTimeSlot} - ${getEndTime(selectedTimeSlot)}`
                        : 'Select time slot'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.priceContainer}>
                <MaterialCommunityIcons name="help-circle-outline" size={24} color="#2955F9" />
                <Text variant="bodyLarge" style={styles.priceText}>
                  Price: {court.price}
                </Text>
              </View>

              <View style={styles.descriptionSection}>
                <Text variant="titleMedium" style={styles.sectionTitle}>Description</Text>
                <Text variant="bodyMedium" style={styles.description}>
                  The Drive Basketball Court is a well-maintained outdoor court available for booking. Featuring regulation hoops and a smooth playing surface, it's great for pickup games, practice, or training. The court is open from 18:00-20:00.
                </Text>
              </View>
            </View>
          </ScrollView>

          <View style={styles.footer}>
            <Button 
              mode="contained" 
              buttonColor="#FFC43A"
              textColor="#000000"
              style={styles.bookButton}
              contentStyle={styles.bookButtonContent}
              onPress={() => {
                if (selectedTimeSlot) {
                  navigation.navigate('BookingPayment', { 
                    courtId,
                    date: formatDate(date),
                    time: selectedTimeSlot ? `${selectedTimeSlot} - ${getEndTime(selectedTimeSlot)}` : '',
                    price: court.price, 
                  });
                } else {
                  alert('Please select a time slot to proceed.');
                }
              }}
            >
              Book Now
            </Button>
          </View>

          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onDateChange}
              minimumDate={new Date()}
            />
          )}

          <TimeSlotPicker />
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
  bookingForm: {
    marginBottom: 24,
  },
  inputSection: {
    marginBottom: 16,
  },
  pickerButton: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 4,
    padding: 16,
    marginTop: 8,
  },
  sectionTitle: {
    marginBottom: 8,
    fontWeight: '500',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E3E1EC',
  },
  priceText: {
    marginLeft: 8,
    color: '#1B1B21',
  },
  descriptionSection: {
    marginTop: 24,
  },
  description: {
    marginTop: 8,
    lineHeight: 20,
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
  modalContainer: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 8,
    maxHeight: '80%',
  },
  timeSlotContainer: {
    padding: 16,
  },
  timeSlotItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  selectedTimeSlot: {
    backgroundColor: '#E3F2FD',
  },
  timeSlotText: {
    fontSize: 16,
  },
  selectedTimeSlotText: {
    color: '#2955F9',
    fontWeight: '500',
  },
  closeButton: {
    marginVertical: 8,
  },
});

export default BookingDetailScreen;
