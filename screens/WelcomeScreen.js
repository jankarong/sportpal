import React from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>

            <Image 
                source={require('../assets/image/welcome-page.png')}
                style={styles.image}
                resizeMode="cover"
            />
            
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    image: {
        width: width,
        height: height,
        position: 'absolute',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 66,
        left: 24,
        right: 24,
    },
    button: {
        backgroundColor: '#FFCC5F',
        height: 45,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'transparent',
    },
    buttonText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '500',
    }
});