import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Login');
        }, 2000); 

        return () => clearTimeout(timer); 
    }, []);

    return (
        <View style={styles.container}>
            <Image 
                source={require('../assets/image/welcome-page.png')}
                style={styles.image}
                resizeMode="cover"
            />
            <TouchableOpacity 
                style={styles.arrowContainer}
                onPress={() => navigation.navigate('Login')}
            >
                <MaterialCommunityIcons 
                    name="arrow-right-circle" 
                    size={40} 
                    color="#FFCC5F"
                />
            </TouchableOpacity>
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
    arrowContainer: {
        position: 'absolute',
        bottom: 40,
        right: 30,
        padding: 10,
    }
});