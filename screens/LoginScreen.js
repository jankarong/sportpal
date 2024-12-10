import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../backend/firebase';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window');

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPressed, setIsPressed] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleLogin = async () => {
        if (!validateEmail(email)) {
            Alert.alert('Invalid Email', 'Please enter a valid email address.');
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            Alert.alert('Success', 'You are now logged in!');
            navigation.navigate('MainTabs'); // Replace with your target screen
        } catch (error) {
            let message = 'An error occurred. Please try again.';
            if (error.code === 'auth/wrong-password') {
                message = 'Incorrect password. Please try again.';
            } else if (error.code === 'auth/user-not-found') {
                message = 'No account found with this email.';
            } else if (error.code === 'auth/invalid-email') {
                message = 'Invalid email address.';
            }
            Alert.alert('Login Failed', message);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <View style={styles.logoContent}>
                    <Image
                        source={require('../assets/image/login-logo.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>
            </View>

            <View style={styles.formWrapper}>
                <View style={styles.formContainer}>
                    <Text variant="headlineMedium" style={styles.welcomeText}>
                        Welcome Back
                    </Text>

                    <TextInput
                        mode="outlined"
                        label="Email Address"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        style={styles.input}
                        autoCapitalize="none"
                    />

                    <TextInput
                        mode="outlined"
                        label="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        style={styles.passwordInput}
                    />

                    <View style={styles.socialButtonsRow}>
                        <Button
                            mode="outlined"
                            icon={({ size }) => (
                                <FontAwesome name="google" size={size} color="#4285F4" />
                            )}
                            onPress={() => {}}
                            style={styles.socialButton}
                            contentStyle={styles.socialButtonContent}
                        >
                            Sign in with Google
                        </Button>

                        <Button
                            mode="outlined"
                            icon={({ size }) => (
                                <AntDesign name="apple1" size={size} color="#000000" />
                            )}
                            onPress={() => {}}
                            style={styles.socialButton}
                            contentStyle={styles.socialButtonContent}
                        >
                            Sign in with Apple
                        </Button>
                    </View>

                    <View style={styles.signupContainer}>
                        <View style={styles.signupTextWrapper}>
                            <Text variant="bodyMedium" style={styles.signupText}>
                                Don't have an account?
                            </Text>
                            <TouchableOpacity
                                onPressIn={() => setIsPressed(true)}
                                onPressOut={() => setIsPressed(false)}
                                onPress={() => navigation.navigate('SignUp')}
                                activeOpacity={0.7}
                            >
                                <Text style={[styles.signupLink, isPressed && styles.signupLinkPressed]}>
                                    {' '}Sign up
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Button
                        mode="contained"
                        onPress={handleLogin}
                        style={styles.loginButton}
                        buttonColor="#FFCC5F"
                        textColor="#000000"
                    >
                        Log in
                    </Button>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2955F9',
    },
    logoContainer: {
        height: height * 0.45,
        backgroundColor: '#2955F9',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
    },
    logoContent: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: height * 0.1,
    },
    logo: {
        width: 300,
        height: 300,
        tintColor: '#FFFFFF',
        marginLeft: 18,
        marginTop: 32,
    },
    formWrapper: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        marginTop: 20,
    },
    formContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'space-between',
        paddingTop: 32,
    },
    welcomeText: {
        textAlign: 'center',
        color: '#2955F9',
        marginBottom: 24,
        fontWeight: '800',
    },
    input: {
        marginBottom: 16,
        backgroundColor: '#FFFFFF',
        height: 56,
    },
    passwordInput: {
        marginBottom: 24,
        backgroundColor: '#FFFFFF',
    },
    socialButtonsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 12,
        marginBottom: 24,
    },
    socialButton: {
        flex: 1,
        borderRadius: 25,
        borderWidth: 1,
    },
    socialButtonContent: {
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signupContainer: {
        alignItems: 'center',
        marginBottom: 24,
    },
    signupTextWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signupText: {
        color: '#666666',
    },
    signupLink: {
        color: '#2955F9',
        fontWeight: '600',
    },
    signupLinkPressed: {
        color: '#FFCC5F',
    },
    loginButton: {
        borderRadius: 25,
        marginBottom: 30,
        height: 45,
    },
});
