import React from 'react'
import { Actions } from 'react-native-router-flux'

import { reduxForm, Field } from 'redux-form'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const renderInput = ({ input, label, meta: { touched, error }, ...custom }) => {
  return (
    <View>
      <TextInput style={styles.input} onChangeText={(value) => input.onChange(value)} placeholder={label} {...input} />
      {touched && (error && <Text style={{color: 'red', fontSize: 15, textAlign: 'center'}}>{error}</Text>)}
    </View>
  )
}

let FormCalendar = ({handleSubmit, state: {formErrors}, submitSucceeded, dispatch, onSubmitClick}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Event</Text>

      <View>
        {submitSucceeded && (formErrors.message && <Text style={{color: 'red', fontSize: 15, textAlign: 'center'}}>{formErrors.message}</Text>)}

        <View style={styles.formGroup}>
          <Text>Name of allergic:</Text>
          <Field name='name' component={renderInput} label='Allergic' />
        </View>

        <View style={styles.formGroup}>
          <Text>Begin date:</Text>
          <Field name='beginDate' component={renderInput} label='2016-12-31' />
        </View>

        <View style={styles.formGroup}>
          <Text>End date:</Text>
          <Field name='endDate' component={renderInput} label='2017-01-20' />
        </View>

        <TouchableOpacity onPress={handleSubmit(onSubmitClick)}>
          <Text style={[styles.button, {backgroundColor: '#1e90ff'}]}>Submit</Text>
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

const styles = StyleSheet.create({
  header: {
    fontSize: 20
  },
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
    borderRadius: 5,
    height: 37,
    width: 250
  },
  formGroup: {
    paddingBottom: 10
  }
})

FormCalendar = reduxForm({ form: 'calendar', validate })(FormCalendar)

export default FormCalendar
