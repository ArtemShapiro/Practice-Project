import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {Actions} from 'react-native-router-flux'

const Event = ({event, onDeleteClick, onSetActiveClick}) => {
  const click = () => Actions.formUpdateEvent({event})
  return (
    <View style={styles.container}>
      <View style={{flex: 2}}>
        <TouchableOpacity onPress={onSetActiveClick}>
          <Text>Active</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.nameContainer}>
        <Text>{event.name}</Text>
      </View>

      <View style={styles.dateContainer}>
        <Text>{event.beginDate} - {event.endDate}</Text>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={click}>
          <Text>Update</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={onDeleteClick}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 5,
    marginRight: 5,
    marginLeft: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  nameContainer: {
    flex: 4
  },
  dateContainer: {
    flex: 4
  },
  actionsContainer: {
    flex: 2
  }
})

export default Event
