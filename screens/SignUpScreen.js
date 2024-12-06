import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Button, Text, TextInput, Checkbox, Divider } from 'react-native-paper';

const { height } = Dimensions.get('window');

export default function SignUpScreen({ navigation }) {
    const [termsAccepted, setTermsAccepted] = useState(false);

    return (
        <ScrollView style={styles.container} bounces={false}>
            {/* Logo Section */}
            <View style={styles.logoContainer}>
                <View style={styles.logoContent}>
                    <Image
                        source={require('../assets/image/signup-logo.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>
            </View>

            {/* Form Container */}
            <View style={styles.formWrapper}>
                <View style={styles.formContainer}>
                    <Text variant="headlineMedium" style={styles.GetStartedtitle}>
                        Get Started Now
                    </Text>

                    {/* Sign Up Form */}
                    <TextInput
                        mode="outlined"
                        label="First Name"
                        style={styles.input}
                        dense
                    />

                    <TextInput
                        mode="outlined"
                        label="Last Name"
                        style={styles.input}
                        dense
                    />

                    <TextInput
                        mode="outlined"
                        label="Username"
                        style={styles.input}
                        autoCapitalize="none"
                        dense
                    />

                    <TextInput
                        mode="outlined"
                        label="Email Address"
                        style={styles.input}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        dense
                    />

                    <TextInput
                        mode="outlined"
                        label="Password"
                        style={styles.input}
                        secureTextEntry
                        dense
                    />

                    {/* Terms and Conditions */}
                    <View style={styles.termsContainer}>
                        <Checkbox.Android
                            status={termsAccepted ? 'checked' : 'unchecked'}
                            onPress={() => setTermsAccepted(!termsAccepted)}
                            color="#1A73E8"
                        />
                        <Text style={styles.termsText}>
                            I agree to the{' '}
                            <Text style={styles.termsLink} onPress={() => {}}>
                                terms & policy
                            </Text>
                        </Text>
                    </View>

                    {/* Sign Up Button */}
                    <Button
                        mode="contained"
                        onPress={() => navigation.navigate('MainTabs')}
                        style={styles.signUpButton}
                        buttonColor="#FFCC5F"
                        textColor="#000000"
                    >
                        Sign up
                    </Button>

                    {/* Login Section */}
                    <View style={styles.loginSection}>
                        <View style={styles.loginHeader}>
                            <Text style={styles.loginText}>
                                Have an account?{' '}
                                <Text style={styles.loginLink}>Log in now</Text>
                            </Text>
                        </View>

                        {/* Login Form */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.inputLabel}>Log in</Text>
                            <TextInput
                                mode="flat"
                                placeholder="Username"
                                style={styles.loginInput}
                                autoCapitalize="none"
                                underlineColor="transparent"
                                dense
                            />
                        </View>

                        <TextInput
                            mode="outlined"
                            label="Password"
                            secureTextEntry
                            style={styles.loginInput}
                            dense
                        />

                        {/* Social Login Buttons */}
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
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2955F9',
    },
    logoContainer: {
        height: height * 0.12,
        justifyContent: 'center',
    },
    logoContent: {
        alignItems: 'left',
        width: '100%',
        marginLeft: 40,
        marginTop: 20,
    },
    logo: {
        width: 60,
        tintColor: '#FFFFFF',
    },
    formWrapper: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        minHeight: height * 0.92,
    },
    formContainer: {
        padding: 32,
    },
    GetStartedtitle: {
        textAlign: 'center',
        color: '#2955F9',
        marginBottom: 24,
        fontSize: 24,
    },
    input: {
        marginBottom: 8,
        backgroundColor: '#FFFFFF',
        height: 45,
    },
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        marginTop: -4,
    },
    termsText: {
        color: '#666666',
        marginLeft: 2,
        fontSize: 12,
    },
    termsLink: {
        color: '#2955F9',
        textDecorationLine: 'underline',
    },
    signUpButton: {
        borderRadius: 25,
        marginBottom: 30,
        height: 45,
    },
    loginSection: {
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
        paddingTop: 20,
    },
    loginHeader: {
        alignItems: 'center',
        marginBottom: 20,
    },
    loginText: {
        color: '#666666',
    },
    loginLink: {
        color: '#2955F9',
        fontWeight: '600',
    },
    inputGroup: {
        marginBottom: 8,
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
    loginInput: {
        backgroundColor: '#FFFFFF',
        height: 45,
        marginBottom: 8,
    },
    socialButtonsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
        marginTop: 10,
    },
    socialButton: {
        flex: 1,
        borderRadius: 25,
        borderWidth: 1,
        height: 45,
    },
    socialButtonContent: {
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});