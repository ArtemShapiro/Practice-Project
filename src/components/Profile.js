import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Profile = () => (
  <View style={styles.container}>
    <Text style={styles.centerText}>This is Profile!</Text>
  </View>
)

const styles = StyleSheet.create({
  centerText: {
    textAlign: 'center',
    fontSize: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Profile
