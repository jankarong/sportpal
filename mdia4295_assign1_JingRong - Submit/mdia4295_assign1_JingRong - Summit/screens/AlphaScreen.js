import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const AlphaScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <Image
                source={{ uri: 'https://media.mdia.ca/img/logos/bcit4295.png' }}
                style={styles.image}
            />
            <Text style={styles.title}>Alpha Screen</Text>
            <Text style={styles.description}>This is the Alpha Screen of our app.</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Go Back"
                    onPress={() => navigation.goBack()}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,  // Add top padding to align content to the top
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'blue',
    },
    image: {
        width: 250,
        height: 250,
        marginBottom: 20,
    },
    buttonContainer: {
        width: '75%',  // Button container width is 75%
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 20,
    },
});

export default AlphaScreen;