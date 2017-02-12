import React from 'react'
import {connect} from 'react-redux'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import { reduxForm, Field } from 'redux-form'
import {Actions} from 'react-native-router-flux'

import {setFormError, clearFormError} from '../../actions'
import apiClient from '../../utilities'
import styles from './styleSheets'

const submit = (values, dispatch) => {
  console.log(values)
  let data = new FormData()
  data.append('email', values.email)
  data.append('password', values.password)
  data.append('password_confirmation', values.passwordConfirmation)

  apiClient.makeRequest('http://127.0.0.1:5000/api/v1/auth', {body: data, method: 'POST'}).then((responce) => {
    if (responce.ok) {
      dispatch(clearFormError())
      return responce.json().then(json => { console.log(json); Actions.tabbar() })
    }
    dispatch(setFormError('sign_up', 'Login or password are not valid!'))
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

let SignUp = ({handleSubmit, state: {formErrors}, submitSucceeded, dispatch}) => {
  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>

      <View>
        {submitSucceeded && (formErrors.message && <Text style={{color: 'red', fontSize: 15, textDecorationLine: 'underline'}}>{formErrors.message}</Text>)}
        <Field name='email' component={renderInput} label='Email' />
        <Field name='password' component={renderInput} label='Password' />
        <Field name='passwordConfirmation' component={renderInput} label='Password Confirmation' />
        <TouchableOpacity onPress={handleSubmit(submit)} >
          <Text style={[styles.button, {backgroundColor: 'blue'}]}>Submit</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.link} onPress={Actions.pop}>Sign In</Text>
    </View>
  )
}

const mapStateToProps = (state) => (
  {
    state
  }
)

const validate = (values) => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Required'
  }
  if (values.password !== values.passwordConfirmation) {
    errors.passwordConfirmation = 'Password must match!'
    errors.password = 'Password must match!'
  }

  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 8) {
    errors.password = 'Password is too short!'
  }

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = 'Required'
  } else if (values.passwordConfirmation.length < 8) {
    errors.passwordConfirmation = 'Password is too short!'
  }

  return errors
}

SignUp = reduxForm({form: 'sign_up', validate})(SignUp)
SignUp = connect(mapStateToProps)(SignUp)

export default SignUp
