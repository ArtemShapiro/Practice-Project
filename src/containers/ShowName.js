import React from 'react'
import {connect} from 'react-redux'
import {changeName} from '../actions/index'
import {Text, View, StyleSheet} from 'react-native'

let ShowName = ({state, onRequestSuccess}) => {
  let text
  if (state.name !== '') {
    text = <Text style={styles.container}>Hello, {state.name}!</Text>
  }
  fetch('http://localhost:5000/api/v1/hello?name=ALLAHUARABARY').then(onRequestSuccess)

  return (
    <View>
      <Text>{state.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    fontSize: 42
  }
})

const mapToStateProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  const onRequestSuccess = (response) => {
    response.json().then(json => dispatch(changeName(json.name)))
  }
  return {
    onRequestSuccess
  }
}

ShowName = connect(
  mapToStateProps,
  mapDispatchToProps
)(ShowName)

export default ShowName
