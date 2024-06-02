import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/SimpleLineIcons'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContext } from '../context/AuthContext'

const ChatScreen = () => {

  const {setToken} = useContext(AuthContext)
  const navigation = useNavigation()

  const logout = () => {
    clearAuthToken()
  }

  const clearAuthToken = async() => {
    try {
      await AsyncStorage.removeItem('token')
      navigation.navigate('Login')
      setToken('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'orange', marginTop: 25, padding : 10 }}>
      <View style={{display : 'flex', flexDirection : 'row', justifyContent : 'space-between'}}>
      <Pressable onPress={()=>navigation.navigate('People')} style={{backgroundColor: 'black', padding : 15 }}>
        <Text style={{ color: 'white' }}>
          <Icon name='user' size={20}/>
        </Text>
      </Pressable>
      <Pressable onPress={logout} style={{backgroundColor: 'black', padding : 15 }}>
        <Text style={{ color: 'white' }}>
        <Icon2 name='logout' size={20}/>
        </Text>
      </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default ChatScreen

const styles = StyleSheet.create({})