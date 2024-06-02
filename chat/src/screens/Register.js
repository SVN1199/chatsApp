import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()
    console.log(name, email, password)

    const handleRegister = async() => {
        const formData = {
            name: name,
            email: email,
            password: password
        };

        try {
            await axios.post('http://192.168.7.188:8000/api/v1/auth/register', formData).then((res) => {
                console.log(res)
                Alert.alert('Registration Successfull')
                navigation.navigate('Login')
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={{ flex: 1, width: '100%', padding: 10, display: 'flex', justifyContent: 'center', gap: 10 }}>
            <View style={{ padding: 10 }}><Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '600' }}>Register</Text></View>
            <View style={{ height: 2, backgroundColor: 'black' }}></View>
            <View style={{ marginTop: 10 }}>
                <Text style={{ fontWeight: '600', fontSize: 18, marginBottom: 5 }}>Name</Text>
                <TextInput style={{ padding: 5, borderWidth: 2, borderColor: 'black', borderRadius: 5 }} placeholder='Enter your name' value={name} onChangeText={setName} />
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={{ fontWeight: '600', fontSize: 18, marginBottom: 5 }}>Email</Text>
                <TextInput style={{ padding: 5, borderWidth: 2, borderColor: 'black', borderRadius: 5 }} placeholder='Enter your email' value={email} onChangeText={setEmail} />
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={{ fontWeight: '600', fontSize: 18, marginBottom: 5 }}>Password</Text>
                <TextInput style={{ padding: 5, borderWidth: 2, borderColor: 'black', borderRadius: 5 }} placeholder='Enter your password' value={password} onChangeText={setPassword} />
            </View>
            <Pressable onPress={handleRegister} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginTop: 10 }}>
                <Text style={{ color: 'white', textAlign: 'center' }}>Register</Text>
            </Pressable>
            <Pressable style={{ padding: 5, marginTop: 10 }} onPress={() => navigation.navigate('Login')}>
                <Text style={{ textAlign: 'center', color: 'blue' }}>Already Have an Account ? Login</Text>
            </Pressable>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({})