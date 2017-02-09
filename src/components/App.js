import React, { Component } from 'react'
import {Text, StyleSheet} from 'react-native'
import { Router, Scene } from 'react-native-router-flux'

import Profile from './Profile'
import Calendar from './Calendar'
import FormCalendar from './FormCalendar'

const TabIcon = ({ selected, title }) => (
  <Text style={{color: selected ? 'red' : 'black', fontSize: 18}}>{title}</Text>
  )
// const TabImage = ({ selected, title }) => (
//   <Image
//     style={{width: 50, height: 50}}
//     source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
//     />
//   )

export default class App extends Component {
  render () {
    return (
      <Router hideNavBar>
        <Scene key='root'>
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
              <Scene key='formCalendar' component={FormCalendar} />
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
