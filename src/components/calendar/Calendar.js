import React from 'react'
import {connect} from 'react-redux'
import {View, Text} from 'react-native'
import {Actions} from 'react-native-router-flux'
import Calendar from 'react-native-calendar'

let CalendarComponent = ({state}) => (
  <View>
    <Calendar
      showControls
      showEventIndicators
      customStyle={{eventIndicatorFiller: {backgroundColor: 'blue', width: 20, height: 20}, day: {fontSize: 20, textAlign: 'center'}}}
      onDateSelect={(date) => Actions.formCalendar({date})}
    />
    <Text>{JSON.stringify(state)}</Text>
  </View>
)

const mapToStateProps = (state) => (
  {
    state
  }
)

CalendarComponent = connect(mapToStateProps)(CalendarComponent)

export default CalendarComponent
