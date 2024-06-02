import { StyleSheet } from 'react-native'
import React from 'react'
import StackNavigation from './src/navigation/StackNavigation'
import { AuthProvider } from './src/context/AuthContext'

const App = () => {
  return (
    <AuthProvider>
      <StackNavigation />
    </AuthProvider>
  )
}

export default App

const styles = StyleSheet.create({})