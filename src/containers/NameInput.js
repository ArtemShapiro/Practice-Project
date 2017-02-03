
import React from 'react'
import {connect} from 'react-redux'
import {View, TextInput} from 'react-native'

import {changeName} from '../actions'

let NameInput = ({ dispatch }) => {
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder='Type your name'
        onChangeText={(text) => {
          dispatch(changeName(text))
        }}
      />
    </View>
  )
}

NameInput = connect()(NameInput)

export default NameInput
