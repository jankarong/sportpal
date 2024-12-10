import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { Text, Button, useTheme } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'; 

// Import image
const tennisImage = require('../assets/image/tennis.png');
const successImage = require('../assets/image/Success.png');

export default function SuccessEventScreen() {
    const theme = useTheme();
    const navigation = useNavigation();

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
                    <Image
                        source={tennisImage} 
                        style={styles.profileImage}
                    />
                </View>
            </View>

            {/* Success Card Section */}
            <View style={styles.card}>
                {/* Success Image */}
                <Image source={successImage} style={styles.successImage} />

                {/* Event Added Text */}
                <Text style={styles.successTitle}>Event Added!</Text>

                {/* View My Event Button */}
                <Button
                    mode="contained"
                    style={styles.doneButton}
                    buttonColor="#FFCC5F"
                    textColor="#000"
                    onPress={() => navigation.navigate('Home')}
                >
                    View My Event
                </Button>
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
        margin: 100,
        width: 183,
        height: 183,
        borderRadius: 183 / 2,
        borderWidth: 4,
        borderColor: '#FFF',
    },
    card: {
        flex: 1,
        marginTop: 0,
        borderRadius: 16,
        backgroundColor: '#FFF',
        width: Dimensions.get('window').width,
        paddingVertical: 44,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    successImage: {
        width: 188,
        height: 188,
    },
    successTitle: {
        fontSize: 22,
        color: 'blue',
        marginBottom: 80,
        textAlign: 'center',
    },
    doneButton: {
        marginTop:12,
        width: '80%',
        borderRadius: 8,
    },
});

