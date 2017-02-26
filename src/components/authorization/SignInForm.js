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
    <View style={{marginBottom: 20}}>
      <TextInput style={styles.input} secureTextEntry onChangeText={(value) => input.onChange(value)} placeholder={label} {...input} />
      {touched && (error && <Text style={{color: 'red', fontSize: 15, textAlign: 'center'}}>{error}</Text>)}
    </View>
  )
}

let SignInForm = ({handleSubmit, state: {formErrors}, submitSucceeded, dispatch, onSubmitClick}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In</Text>

      <View>
        {submitSucceeded && (formErrors.message && <Text style={{color: 'red', fontSize: 15, textAlign: 'center'}}>{formErrors.message}</Text>)}
        <Field name='email' component={renderInput} label='Email' />
        <Field name='password' component={renderPassword} label='Password' />
        <TouchableOpacity onPress={handleSubmit(onSubmitClick)} >
          <Text style={[styles.button, {backgroundColor: '#1e90ff'}]}>Submit</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.link} onPress={Actions.sign_up}>Sign Up</Text>
    </View>
  )
}

const validate = (values) => {
  const errors = {}

  if (!values.email) {
    errors.email = "Email address can't be blank!"
  }

  if (!values.password) {
    errors.password = "Password can't be blank!"
  }

  return errors
}

SignInForm = reduxForm({form: 'sign_in', validate})(SignInForm)

export default SignInForm
