import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Full Screen Image */}
            <Image 
                source={require('../assets/image/welcome-page.png')}
                style={styles.image}
                resizeMode="cover"
            />
            
            {/* Button Container */}
            <View style={styles.buttonContainer}>
                <Button
                    mode="contained"
                    onPress={() => navigation.navigate('Login')}
                    style={styles.button}
                    contentStyle={styles.buttonContent}
                >
                    Get Started
                </Button>
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
        bottom: 40,
        left: 0,
        right: 0,
        paddingHorizontal: 24,
    },
    button: {
        borderRadius: 12,
        paddingVertical: 8,
    },
    buttonContent: {
        paddingVertical: 8,
    },
});