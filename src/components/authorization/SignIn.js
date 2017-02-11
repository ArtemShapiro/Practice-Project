import React from 'react'
import {connect} from 'react-redux'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import { reduxForm, Field } from 'redux-form'
import {Actions} from 'react-native-router-flux'

import {setFormError, clearFormError} from '../../actions'
import apiClient from '../../utilities'
import styles from './styleSheets'

const submit = (values, dispatch) => {
  let data = new FormData()
  data.append('email', values.email)
  data.append('password', values.password)

  apiClient.makeRequest('http://127.0.0.1:5000/api/v1/auth/sign_in', {body: data, method: 'POST'}).then((responce) => {
    if (responce.ok) {
      dispatch(clearFormError())
      return responce.json().then(json => { console.log(json); Actions.tabbar() })
    }
    dispatch(setFormError('sign_in', 'Login or password are incorrect!'))
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

let SignIn = ({handleSubmit, state: {formErrors}, submitSucceeded, dispatch}) => {
  return (
    <View style={styles.container}>
      <Text>Sign In</Text>

      <View>
        {submitSucceeded && (formErrors.message && <Text style={{color: 'red', fontSize: 15, textDecorationLine: 'underline'}}>{formErrors.message}</Text>)}
        <Field name='email' component={renderInput} label='Email' />
        <Field name='password' component={renderInput} label='Password' />
        <TouchableOpacity onPress={handleSubmit(submit)} >
          <Text style={[styles.button, {backgroundColor: 'blue'}]}>Submit</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.link} onPress={Actions.sign_up}>Sign Up</Text>
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

  if (!values.password) {
    errors.password = 'Required'
  }

  return errors
}

SignIn = reduxForm({form: 'sign_in', validate})(SignIn)
SignIn = connect(mapStateToProps)(SignIn)

export default SignIn
