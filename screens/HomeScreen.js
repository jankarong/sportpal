import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>MDIA 4295- Assign 1</Text>
            <Text style={styles.description}>Choose your screen below</Text>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonWrapper}>
                    <Button
                        title="Go to Alpha Screen"
                        onPress={() => navigation.navigate('Alpha')}
                    />
                </View>
                <View style={styles.buttonWrapper}>
                    <Button
                        title="Go to Beta Screen"
                        onPress={() => navigation.navigate('Beta')}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 15,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'blue',
    },
    buttonWrapper: {
        marginBottom: 10, // Space between buttons
    }

});

export default HomeScreen;