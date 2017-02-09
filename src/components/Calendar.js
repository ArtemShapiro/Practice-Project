import React from 'react'
import {View} from 'react-native'
import {Actions} from 'react-native-router-flux'
import Calendar from 'react-native-calendar'

const CalendarComponent = () => (
  <View>
    <Calendar
      showControls
      showEventIndicators
      customStyle={{eventIndicatorFiller: {backgroundColor: 'blue', width: 20, height: 20}, day: {fontSize: 25, textAlign: 'center'}}}
      onDateSelect={(date) => Actions.formCalendar({date})}
    />
  </View>
)

export default CalendarComponent
