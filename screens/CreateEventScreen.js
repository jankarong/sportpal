import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { Text, TextInput, Button, Switch, useTheme } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native'; // 네비게이션 사용

// Import image
const tennisImage = require('../assets/image/tennis.png');

export default function CreateEventScreen() {
    const theme = useTheme();
    const navigation = useNavigation(); // 네비게이션 객체 가져오기
    const [isApprovalRequired, setIsApprovalRequired] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);

    const showDatePicker = () => setDatePickerVisible(true);
    const hideDatePicker = () => setDatePickerVisible(false);

    const handleDateChange = (event, date) => {
        if (date) {
            const formattedDate = date.toISOString().split('T')[0]; // Format: YYYY-MM-DD
            setSelectedDate(formattedDate);
        }
        hideDatePicker();
    };

    const handleCreateEvent = () => {
        navigation.navigate('SuccessEventScreen'); // SuccessEventScreen으로 이동
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
                    onPress={() => navigation.goBack()} // 뒤로 가기
                />
                <View style={styles.imageWrapper}>
                    <Image
                        source={tennisImage} 
                        style={styles.profileImage}
                    />
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
                                editable={false} // Prevent manual input
                            />
                            <MaterialCommunityIcons
                                name="calendar"
                                size={24}
                                color={theme.colors.primary}
                                style={styles.dateIcon}
                                onPress={showDatePicker}
                            />
                        </View>
                        {isDatePickerVisible && (
                            <DateTimePicker
                                value={new Date()}
                                mode="date"
                                display="default"
                                onChange={handleDateChange}
                            />
                        )}
                    </View>
                    {/* 나머지 필드 */}
                    {/* Time Field */}
                    <View style={styles.fieldContainer}>
                        <Text style={styles.label}>Time</Text>
                        <View style={styles.row}>
                            <TextInput
                                mode="outlined"
                                placeholder="Start"
                                placeholderTextColor="#1A1B24"
                                style={[styles.input, styles.halfInput]}
                            />
                            <TextInput
                                mode="outlined"
                                placeholder="Finish"
                                placeholderTextColor="#1A1B24"
                                style={[styles.input, styles.halfInput]}
                            />
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
                        onPress={handleCreateEvent} // 버튼 클릭 시 이동
                    >
                        Create Event
                    </Button>
                </ScrollView>
            </View>
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfInput: {
        width: '48%',
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
});