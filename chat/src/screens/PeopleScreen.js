import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import User from './User'
import axios from 'axios'

const PeopleScreen = () => {

  const [users, setUsers] = useState([])
  const { token, userId } = useContext(AuthContext)

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`http://192.168.7.188:8000/api/v1/auth/getUser/${userId}`)
      const data = await response.json()
      setUsers(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(users)

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'orange', marginTop: 25 }}>
      <View><Text style={{ color: 'black' }}>Hello</Text>
        <FlatList data={users} renderItem={({ item }) => (
          <User item={item} key={item._id} />
        )} />
      </View>
    </SafeAreaView>
  )
}

export default PeopleScreen

const styles = StyleSheet.create({})