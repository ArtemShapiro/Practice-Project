import React, {Component} from 'react'
import {connect} from 'react-redux'
import { View, ScrollView, ListView, StyleSheet, Text } from 'react-native'

import Event from '../../components/calendar/Event'
import {addCalendarEevents, deleteCalendarEvent, setActiveEvent} from '../../actions'
import apiClient from '../../utilities'

class EventsList extends Component {
  componentWillMount () {
    apiClient.makeRequest('http://127.0.0.1:5000/api/v1/seasonal_allergies', {method: 'GET'}).then(response => {
      if (response.ok) {
        response.json().then(json => this.props.dispatch(addCalendarEevents(json)))
        return
      }
    })
  }

  render () {
    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    const calendarEvents = dataSource.cloneWithRows(this.props.state.calendarEvents)
    return (
      <View style={style.container}>
        <ScrollView>
          <ListView
            enableEmptySections
            dataSource={calendarEvents}
            renderRow={event => <Event event={event} onDeleteClick={() => this.props.onDeleteClick(event.id)} onSetActiveClick={() => this.props.onSetActiveClick(event)} />}
          />
        </ScrollView>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    paddingBottom: 400
  }
})

const mapStateToProps = (state) => (
  {
    state
  }
)

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteClick: (id) => {
      apiClient.makeRequest(`http://127.0.0.1:5000/api/v1/seasonal_allergies/${id}`, {method: 'DELETE'}).then(response => {
        if (response.ok) {
          dispatch(deleteCalendarEvent(id))
          return
        }
      })
    },
    onSetActiveClick: (event) => {
      dispatch(setActiveEvent(event))
    },
    dispatch
  }
}

const eventsList = connect(mapStateToProps, mapDispatchToProps)(EventsList)

export default eventsList
