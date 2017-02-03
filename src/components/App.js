import React from 'react'
import NameInput from '../containers/NameInput'
import {View} from 'react-native'
import ShowName from '../containers/ShowName'

const App = () => (
  <View>
    <NameInput />
    <ShowName />
  </View>
)

export default App
