import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { height, width } = Dimensions.get('window');

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Logo Section - 25% Screen */}
            <View style={styles.logoContainer}>
                <View style={styles.logoContent}>
                    <Image
                        source={require('../assets/image/login-logo.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>
            </View>

            {/* Form Container with Border Radius */}
            <View style={styles.formWrapper}>
                <View style={styles.formContainer}>
                    <Text variant="headlineMedium" style={styles.welcomeText}>
                        Welcome Back
                    </Text>

                    {/* Custom Login Input Group */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.inputLabel}>Log in</Text>
                        <TextInput
                            mode="flat"
                            placeholder="Username"
                            style={styles.input}
                            autoCapitalize="none"
                            underlineColor="transparent"
                        />
                    </View>
                    
                    <TextInput
                        mode="outlined"
                        label="Password"
                        secureTextEntry
                        style={styles.passwordInput}
                    />

                    {/* Social Login Buttons Row */}
                    <View style={styles.socialButtonsRow}>
                        <Button
                            mode="outlined"
                            icon="google"
                            onPress={() => {}}
                            style={styles.socialButton}
                            contentStyle={styles.socialButtonContent}
                        >
                            Sign in with Google
                        </Button>
                        
                        <Button
                            mode="outlined"
                            icon="apple"
                            onPress={() => {}}
                            style={styles.socialButton}
                            contentStyle={styles.socialButtonContent}
                        >
                            Sign in with Apple
                        </Button>
                    </View>

                    {/* Sign Up Link */}
                    <View style={styles.signupContainer}>
                        <Text variant="bodyMedium" style={styles.signupText}>
                            Don't have an account?{' '}
                            <Text style={styles.signupLink} onPress={() => navigation.navigate('SignUp')}>
                                Sign up
                            </Text>
                        </Text>
                    </View>

                    {/* Main Login Button */}
                    <Button
                        mode="contained"
                        onPress={() => navigation.navigate('MainTabs')}
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
        height: height * 0.35,
        backgroundColor: '#2955F9',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20, // Add horizontal padding
    },
    logoContent: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    logo: {
        width: 300, // Adjusted size
        height: 300, // Adjusted size
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
        justifyContent: 'flex-start',
        paddingTop: 32,
    },
    welcomeText: {
        textAlign: 'center',
        color: '#2955F9',
        marginBottom: 24,
    },
    inputGroup: {
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
    },
    inputLabel: {
        position: 'absolute',
        top: -10,
        left: 10,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 4,
        color: '#2955F9',
        fontSize: 14,
        fontWeight: '500',
        zIndex: 1,
    },
    input: {
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
    signupText: {
        color: '#666666',
    },
    signupLink: {
        color: '#2955F9',
        fontWeight: '600',
    },
    loginButton: {
        borderRadius: 25,
        marginBottom: 30,
        height: 45,
    },
});