import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContext } from '../context/AuthContext'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { token, setToken } = useContext(AuthContext)

    const navigation = useNavigation()

    useEffect(() => {
        if (token) {
            navigation.replace('Profile');
        }
    }, [token, navigation]);

    const handleLogin = async () => {
        const formData = {
            email: email,
            password: password
        };

        try {
            const res = await axios.post('http://192.168.7.188:8000/api/v1/auth/login', formData);
            const token = res.data.token;
            console.log(token);
            await AsyncStorage.setItem('token', token);
            setToken(token);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <View style={{ flex: 1, width: '100%', padding: 10, display: 'flex', justifyContent: 'center', gap: 10 }}>
            <View style={{ padding: 10 }}><Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '600' }}>Login</Text></View>
            <View style={{ height: 2, backgroundColor: 'black' }}></View>
            <View style={{ marginTop: 10 }}>
                <Text style={{ fontWeight: '600', fontSize: 18, marginBottom: 5 }}>Email</Text>
                <TextInput style={{ padding: 5, borderWidth: 2, borderColor: 'black', borderRadius: 5 }} placeholder='Enter your email' value={email} onChangeText={setEmail} />
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={{ fontWeight: '600', fontSize: 18, marginBottom: 5 }}>Password</Text>
                <TextInput style={{ padding: 5, borderWidth: 2, borderColor: 'black', borderRadius: 5 }} placeholder='Enter your password' value={password} onChangeText={setPassword} />
            </View>
            <Pressable onPress={handleLogin} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginTop: 10 }}>
                <Text style={{ color: 'white', textAlign: 'center' }}>Login</Text>
            </Pressable>
            <Pressable style={{ padding: 5, marginTop: 10 }} onPress={() => navigation.navigate('Register')}>
                <Text style={{ textAlign: 'center', color: 'blue' }}>Don't Have an Account ? Register</Text>
            </Pressable>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})