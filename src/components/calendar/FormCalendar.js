import React from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import { reduxForm, Field } from 'redux-form'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import apiClient from '../../utilities'
import {addCalendarEevent, setFormError, clearFormError} from '../../actions'

const submit = (values, dispatch) => {
  let data = new FormData()
  data.append('name', values.name)
  data.append('begin_at', values.beginDate)
  data.append('end_at', values.endDate)

  apiClient.makeRequest('http://127.0.0.1:5000/api/v1/seasonal_allergies', {body: data, method: 'POST'}).then(response => {
    if (response.ok) {
      return response.json().then(json => {
        console.log(json)
        dispatch(clearFormError())
        dispatch(addCalendarEevent({...values, ...json}))
        Actions.pop()
      })
    }
    dispatch(setFormError('response', 'Data is incorrect!'))
  })
}

const renderInput = ({ input, label, meta: { touched, error }, ...custom }) => {
  return (
    <View>
      <TextInput style={styles.input} onChangeText={(value) => input.onChange(value)} placeholder={label} {...input} />
      {touched && (error && <Text style={{color: 'red', fontSize: 15, textDecorationLine: 'underline'}}>{error}</Text>)}
    </View>
  )
}

let FormCalendar = ({handleSubmit, state: {formErrors}, submitSucceeded, dispatch}) => {
  return (
    <View style={styles.container}>
      <View>
        {submitSucceeded && (formErrors.message && <Text style={{color: 'red', fontSize: 15, textDecorationLine: 'underline'}}>{formErrors.message}</Text>)}

        <Text>Name of allergic:</Text>
        <Field name='name' component={renderInput} label='Allergic' />

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

  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length > 14) {
    errors.name = 'Must be 14 characters or less'
  }

  if (!values.beginDate) {
    errors.beginDate = 'Required'
  }

  if (!values.endDate) {
    errors.endDate = 'Required'
  }

  return errors
}

const mapStateToProps = (state) => (
  {
    state
  }
)

FormCalendar = reduxForm({ form: 'calendar', validate })(FormCalendar)
FormCalendar = connect(mapStateToProps)(FormCalendar)

const styles = StyleSheet.create({
  centerText: {
    textAlign: 'center',
    fontSize: 20
  },
  button: {
    color: 'white',
    height: 30,
    lineHeight: 25,
    textAlign: 'center',
    width: 250
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250
  }
})

export default FormCalendar
