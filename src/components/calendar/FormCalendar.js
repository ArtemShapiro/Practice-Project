import React from 'react'

import { Actions } from 'react-native-router-flux'

import { reduxForm, Field } from 'redux-form'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import {addCalendarEevent} from '../../actions'

const submit = (values, dispatch) => {
  dispatch(addCalendarEevent(values))
  Actions.pop()
}

const renderInput = ({ input, label, meta: { touched, error }, ...custom }) => {
  return (
    <View>
      <TextInput style={styles.input} onChangeText={(value) => input.onChange(value)} placeholder={label} {...input} />
      <Text style={{color: 'red', fontSize: 15, textDecorationLine: 'underline'}}>{error}</Text>
    </View>
  )
}

const FormCalendar = (props) => {
  const { handleSubmit } = props

  return (
    <View style={styles.container}>
      <View>
        <Text>Name of allergic:</Text>
        <Field name='nameAllergic' component={renderInput} label='Allergic' />

        <Text>Begin date:</Text>
        <Field name='beginDate' component={renderInput} label='2016-12-31' />

        <Text>End date:</Text>
        <Field name='endDate' component={renderInput} label='2017-01-20' />

        <TouchableOpacity onPress={handleSubmit(submit)}>
          <Text style={[styles.button, {backgroundColor: 'blue'}]}>Submit</Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.button, {backgroundColor: 'red'}]} onPress={Actions.pop}>Cancel</Text>
    </View>
  )
}

const validate = values => {
  const errors = {}

  if (!values.nameAllergic) {
    errors.nameAllergic = 'Required'
  } else if (values.nameAllergic.length > 15) {
    errors.nameAllergic = 'Must be 15 characters or less'
  }

  return errors
}

const styles = StyleSheet.create({
  centerText: {
    textAlign: 'center',
    fontSize: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    width: 250
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250
  }
})
export default reduxForm({
  form: 'calendar',
  validate
})(FormCalendar)
