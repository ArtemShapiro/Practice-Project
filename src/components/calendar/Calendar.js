import React from 'react'

import { View } from 'react-native'
import {Actions} from 'react-native-router-flux'
import Calendar from 'react-native-calendar'

import EventsList from '../../containers/calendar/EventsList'

let CalendarComponent = () => (
  <View>
    <Calendar
      showControls
      showEventIndicators
      customStyle={{eventIndicatorFiller: {backgroundColor: 'blue', width: 5, height: 5}, day: {fontSize: 20, textAlign: 'center'}}}
      onDateSelect={(date) => Actions.formCalendar({date})}
    />
    <EventsList
     />
  </View>
)

export default CalendarComponent
