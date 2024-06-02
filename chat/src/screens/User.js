import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const User = ({ item }) => {
    return (
        <View style={{ padding: 10 , backgroundColor : 'red'}}>
            <View>
                <Pressable>
                    <Text>Image</Text>
                </Pressable>
                <View>
                    <Text>{item.name}</Text>
                    <Text>{item.email}</Text>
                </View>
            </View>
        </View>
    )
}


export default User

const styles = StyleSheet.create({})