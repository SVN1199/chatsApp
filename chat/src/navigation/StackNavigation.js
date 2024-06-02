import { StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import ChatScreen from '../screens/ChatScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import PeopleScreen from '../screens/PeopleScreen'
import ProfileScreen from '../screens/ProfileScreen'
import Register from '../screens/Register'
import Login from '../screens/Login'
import { AuthContext } from '../context/AuthContext'

const StackNavigation = () => {
    const {token, setToken} = useContext(AuthContext)

    const Stack = createNativeStackNavigator()
    const Tab = createBottomTabNavigator()

    const BottomTabs = () => {
        return (
            <Tab.Navigator>
                <Tab.Screen name='Chat' options={{headerShown : false}} component={ChatScreen} />
                <Tab.Screen name='Profile' options={{headerShown : false}} component={ProfileScreen} />
            </Tab.Navigator>
        )
    }

    const AuthStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name='Register'
                    component={Register}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='Login'
                    component={Login}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        )
    }

    const MainStack = () => {
        return(
            <Stack.Navigator>
                <Stack.Screen name='Tabs' options={{headerShown : false}} component={BottomTabs} />
                <Stack.Screen name='People' options={{headerShown : false}} component={PeopleScreen} />
            </Stack.Navigator>
        )
    }

    return (
        <NavigationContainer>
        {token === null || token === '' ? <AuthStack/> : <MainStack/>}
        </NavigationContainer>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})