import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'

const FormCalendar = (props) => (
  <View style={styles.container}>
    <Text style={styles.centerText} onPress={Actions.pop}>This is FormCalendar!</Text>
    <Text style={styles.centerText}>{props.date}</Text>
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

export default FormCalendar
