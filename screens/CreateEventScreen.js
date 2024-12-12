import React, { useState } from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native';
import { Text, TextInput, Button, Switch, useTheme } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

// Import image
const tennisImage = require('../assets/image/tennis.png');

export default function CreateEventScreen() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [isApprovalRequired, setIsApprovalRequired] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedStartTime, setSelectedStartTime] = useState('');
  const [selectedEndTime, setSelectedEndTime] = useState('');
  const [isDateBottomSheetVisible, setDateBottomSheetVisible] = useState(false);
  const [isTimeBottomSheetVisible, setTimeBottomSheetVisible] = useState(false);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const hours = Array.from({ length: 24 }, (_, i) => 
    i.toString().padStart(2, '0') + ':00'
  );

  const handleDaySelection = (day) => {
    setSelectedDate(day);
    setDateBottomSheetVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={[styles.header, { backgroundColor: theme.colors.primary }]}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={24}
          color="#FFF"
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.imageWrapper}>
          <Image source={tennisImage} style={styles.profileImage} />
        </View>
      </View>

      {/* Form Section */}
      <View style={styles.card}>
        <ScrollView contentContainerStyle={styles.formContainer}>
          {/* Sport Field */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Sport</Text>
            <TextInput
              mode="outlined"
              placeholder="Select"
              placeholderTextColor="#1A1B24"
              style={styles.input}
            />
          </View>

          {/* Event Name Field */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Event Name</Text>
            <TextInput
              mode="outlined"
              placeholder="Enter Event Name"
              placeholderTextColor="#1A1B24"
              style={styles.input}
            />
          </View>

          {/* Date Field */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Date</Text>
            <View style={styles.dateContainer}>
              <TextInput
                mode="outlined"
                placeholder="Select Date"
                placeholderTextColor="#1A1B24"
                value={selectedDate}
                style={[styles.input, styles.dateInput]}
                editable={false}
              />
              <MaterialCommunityIcons
                name="calendar"
                size={24}
                color={theme.colors.primary}
                style={styles.dateIcon}
                onPress={() => setDateBottomSheetVisible(true)}
              />
            </View>
          </View>

          {/* Time Field */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Time</Text>
            <View style={styles.timeRow}>
              <TouchableOpacity 
                style={{width: '48%'}}
                onPress={() => setTimeBottomSheetVisible(true)}
              >
                <TextInput
                  mode="outlined"
                  placeholder="Start"
                  value={selectedStartTime}
                  placeholderTextColor="#1A1B24"
                  style={[styles.input]}
                  editable={false}
                />
              </TouchableOpacity>
              <TouchableOpacity 
                style={{width: '48%'}}
                onPress={() => setTimeBottomSheetVisible(true)}
              >
                <TextInput
                  mode="outlined"
                  placeholder="Finish"
                  value={selectedEndTime}
                  placeholderTextColor="#1A1B24"
                  style={[styles.input]}
                  editable={false}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* Location Field */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Location</Text>
            <View style={styles.locationContainer}>
              <TextInput
                mode="outlined"
                placeholder="Enter Location"
                placeholderTextColor="#1A1B24"
                style={[styles.input, styles.locationInput]}
              />
              <MaterialCommunityIcons
                name="map-marker"
                size={24}
                color={theme.colors.primary}
                style={styles.locationIcon}
              />
            </View>
          </View>

          {/* Price Field */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              mode="outlined"
              placeholder="Enter Price"
              placeholderTextColor="#1A1B24"
              style={styles.input}
            />
          </View>

          {/* Require Approval Switch */}
          <View style={styles.switchContainer}>
            <Text style={styles.requireApprovalText}>Require Approval</Text>
            <Switch
              value={isApprovalRequired}
              onValueChange={() => setIsApprovalRequired(!isApprovalRequired)}
              color={theme.colors.primary}
            />
          </View>

          {/* Capacity Field */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Capacity</Text>
            <TextInput
              mode="outlined"
              placeholder="Enter Capacity"
              placeholderTextColor="#1A1B24"
              style={styles.input}
            />
          </View>

          {/* Visibility Field */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Visibility</Text>
            <TextInput
              mode="outlined"
              placeholder="Enter Visibility"
              placeholderTextColor="#1A1B24"
              style={styles.input}
            />
          </View>

          {/* Submit Button */}
          <Button
            mode="contained"
            style={styles.createButton}
            buttonColor="#FFCC5F"
            textColor="#000"
            onPress={() => navigation.navigate('SuccessEventScreen')}
          >
            Create Event
          </Button>
        </ScrollView>
      </View>

      {/* Date Bottom Sheet Modal */}
      <Modal
        visible={isDateBottomSheetVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setDateBottomSheetVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.bottomSheet}>
            <Text style={styles.title}>Date</Text>

            {days.map((day) => (
              <TouchableOpacity
                key={day}
                style={[
                  styles.dayOption,
                  selectedDate === day && styles.selectedDayOption,
                ]}
                onPress={() => handleDaySelection(day)}
              >
                <Text style={styles.dayText}>{day}</Text>
                {selectedDate === day && <Text style={styles.checkmark}>✓</Text>}
              </TouchableOpacity>
            ))}

            <Button
              mode="contained"
              style={styles.applyButton}
              buttonColor="#FFCC5F"
              textColor="#000"
              onPress={() => setDateBottomSheetVisible(false)}
            >
              Apply
            </Button>
          </View>
        </View>
      </Modal>

      {/* Time Bottom Sheet Modal */}
      <Modal
        visible={isTimeBottomSheetVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setTimeBottomSheetVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.bottomSheet}>
            <View style={styles.timeHeaderRow}>
              <Text style={styles.timeColumnTitle}>Start</Text>
              <Text style={styles.timeColumnTitle}>Finish</Text>
            </View>
            <ScrollView style={styles.timeList}>
              <View style={styles.timeColumns}>
                <View style={styles.timeColumn}>
                  {hours.map((time) => (
                    <TouchableOpacity
                      key={time}
                      style={[
                        styles.timeOption,
                        selectedStartTime === time && styles.selectedTimeOption,
                      ]}
                      onPress={() => setSelectedStartTime(time)}
                    >
                      <Text style={styles.timeText}>{time}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <View style={styles.timeColumn}>
                  {hours.map((time) => (
                    <TouchableOpacity
                      key={time}
                      style={[
                        styles.timeOption,
                        selectedEndTime === time && styles.selectedTimeOption,
                      ]}
                      onPress={() => setSelectedEndTime(time)}
                    >
                      <Text style={styles.timeText}>{time}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </ScrollView>
            <Button
              mode="contained"
              style={styles.applyButton}
              buttonColor="#FFCC5F"
              textColor="#000"
              onPress={() => setTimeBottomSheetVisible(false)}
            >
              Apply
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  backIcon: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  imageWrapper: {
    position: 'absolute',
    top: 40,
    zIndex: 1,
  },
  profileImage: {
    width: 183,
    height: 183,
    borderRadius: 183 / 2,
    borderWidth: 4,
    borderColor: '#FFF',
  },
  card: {
    flex: 1,
    marginTop: -88,
    borderRadius: 16,
    backgroundColor: '#FFF',
    width: Dimensions.get('window').width,
    paddingVertical: 48,
    paddingHorizontal: 16,
  },
  formContainer: {
    paddingBottom: 16,
  },
  fieldContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16,
    letterSpacing: 0.4,
    color: '#1749EF',
    marginBottom: 4,
    fontFamily: 'Poppins',
  },
  input: {
    backgroundColor: '#FFF',
    fontSize: 10,
    fontWeight: '300',
    lineHeight: 24,
    letterSpacing: 0.5,
    fontFamily: 'Poppins',
  },
  dateContainer: {
    position: 'relative',
  },
  dateInput: {
    marginBottom: 0,
  },
  dateIcon: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  locationContainer: {
    position: 'relative',
  },
  locationInput: {
    marginBottom: 0,
  },
  locationIcon: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  requireApprovalText: {
    fontSize: 11,
    fontWeight: '700',
    lineHeight: 19.5,
    letterSpacing: 0.22,
    color: '#2955F9',
    fontFamily: 'Poppins',
  },
  createButton: {
    marginTop: 20,
    borderRadius: 25,
    paddingVertical: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  bottomSheet: {
    backgroundColor: '#F9FAFB',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  dayOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#fff',
  },
  selectedDayOption: {
    backgroundColor: '#E6F0FF',
  },
  dayText: {
    fontSize: 16,
    color: '#000',
  },
  checkmark: {
    fontSize: 16,
    color: '#1749EF',
  },
  applyButton: {
    marginTop: 16,
    borderRadius: 8,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  halfInput: {
    width: '48%',
  },
  timeHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  timeColumnTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    width: '48%',
    textAlign: 'center',
  },
  timeColumns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  timeColumn: {
    width: '48%',
  },
  timeOption: {
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: '#FFF',
  },
  selectedTimeOption: {
    backgroundColor: '#E6E6E6',
  },
  timeText: {
    fontSize: 16,
    textAlign: 'center',
  },
  timeList: {
    maxHeight: 300,
  },
});