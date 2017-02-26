import React from 'react'
import {connect} from 'react-redux'

import {View} from 'react-native'
import {Actions} from 'react-native-router-flux'
import Calendar from 'react-native-calendar'
import moment from 'moment'

import EventsList from '../../containers/calendar/EventsList'

let CalendarComponent = ({activeEvent}) => (
  <View>
    <Calendar
      showControls
      showEventIndicators
      eventDates={generateRangeOfDates(activeEvent.beginDate, activeEvent.endDate)}
      customStyle={{eventIndicator: {backgroundColor: 'blue', width: 5, height: 5}, day: {fontSize: 20, textAlign: 'center'}}}
      onDateSelect={(date) => Actions.formCreateEvent({date})}
    />
    <EventsList />
  </View>
  )

const generateRangeOfDates = (beginDate, endDate) => {
  if (!beginDate && !endDate) {
    return []
  }
  let end = moment(endDate, 'YYYY-MM-DD')
  let start = moment(beginDate, 'YYYY-MM-DD')
  let eventDates = []

  while (end.isSameOrAfter(start.format('YYYY-MM-DD'))) {
    eventDates.push(start.format('YYYY-MM-DD'))
    start = start.add(1, 'd')
  }

  return eventDates
}

const mapStateToProps = (state) => ({
  activeEvent: state.activeEvent
})

CalendarComponent = connect(mapStateToProps)(CalendarComponent)

export default CalendarComponent
