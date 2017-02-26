import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import { reduxForm, Field } from 'redux-form'
import {Actions} from 'react-native-router-flux'

import styles from './styleSheets'

const renderInput = ({ input, label, meta: { touched, error }, ...custom }) => {
  return (
    <View>
      <TextInput style={styles.input} onChangeText={(value) => input.onChange(value)} placeholder={label} {...input} />
      {touched && (error && <Text style={{color: 'red', fontSize: 15, textAlign: 'center'}}>{error}</Text>)}
    </View>
  )
}

const renderPassword = ({ input, label, meta: { touched, error }, ...custom }) => {
  return (
    <View>
      <TextInput style={styles.input} secureTextEntry onChangeText={(value) => input.onChange(value)} placeholder={label} {...input} />
      {touched && (error && <Text style={{color: 'red', fontSize: 15, textAlign: 'center'}}>{error}</Text>)}
    </View>
  )
}

let SignUp = ({handleSubmit, state: {formErrors}, submitSucceeded, dispatch, onSubmitClick}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>

      <View>
        {submitSucceeded && (formErrors.message && <Text style={{color: 'red', fontSize: 15, textAlign: 'center'}}>{formErrors.message}</Text>)}
        <Field name='email' component={renderInput} label='Email' />
        <Field name='password' component={renderPassword} label='Password' />
        <Field name='passwordConfirmation' component={renderPassword} label='Password Confirmation' />
        <TouchableOpacity onPress={handleSubmit(onSubmitClick)} >
          <Text style={[styles.button, {backgroundColor: '#1e90ff'}]}>Submit</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.link} onPress={Actions.pop}>Sign In</Text>
    </View>
  )
}

const validate = (values) => {
  const errors = {}

  if (!values.email) {
    errors.email = "Email address can't be blank!"
  }
  if (values.password !== values.passwordConfirmation) {
    errors.passwordConfirmation = 'Password must match!'
    errors.password = 'Password must match!'
  }

  if (!values.password) {
    errors.password = "Password can't be blank!"
  } else if (values.password.length < 8) {
    errors.password = 'Password is too short!'
  }

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = "Password can't be blank!"
  } else if (values.passwordConfirmation.length < 8) {
    errors.passwordConfirmation = 'Password is too short!'
  }

  return errors
}

SignUp = reduxForm({form: 'sign_up', validate})(SignUp)

export default SignUp
