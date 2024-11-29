import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
    return (
        <View>
            <Text>Login</Text>
            <TextInput
                placeholder="Email"
                keyboardType="email-address"
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
            />
            <Button title="Login" onPress={() => navigation.navigate('MainTabs')} />
        </View>
    );
}