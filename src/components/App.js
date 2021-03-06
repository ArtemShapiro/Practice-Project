import React, { Component } from 'react'
import {Text, StyleSheet} from 'react-native'
import { Router, Scene } from 'react-native-router-flux'

import Profile from './Profile'

import Calendar from './calendar/Calendar'
import FormUpdateEvent from '../containers/calendar/FormUpdateEvent'
import FormCreateEvent from '../containers/calendar/FormCreateEvent'

import SignIn from '../containers/authorization/SignIn'
import SignUp from '../containers/authorization/SignUp'

const TabIcon = ({ selected, title }) => (
  <Text style={{color: selected ? 'red' : 'black', fontSize: 18}}>{title}</Text>
  )

export default class App extends Component {
  componentWillMount () {

  }

  render () {
    return (
      <Router hideNavBar>
        <Scene key='root'>
          <Scene key='sign_in' component={SignIn} />
          <Scene key='sign_up' component={SignUp} />

          <Scene
            key='tabbar'
            tabs
            tabBarStyle={style.tabBarStyle}
          >
            <Scene key='first' title='Profile' icon={TabIcon}>
              <Scene key='profile' component={Profile} initial />
            </Scene>

            <Scene key='second' title='Calendar' icon={TabIcon}>
              <Scene key='calendar' component={Calendar} initial />
              <Scene key='formCreateEvent' component={FormCreateEvent} />
              <Scene key='formUpdateEvent' component={FormUpdateEvent} />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    )
  }
}

let style = StyleSheet.create({
  tabBarStyle: {
    borderTopWidth: 0.5,
    borderColor: '#b7b7b7',
    backgroundColor: 'white',
    opacity: 1
  }
})
