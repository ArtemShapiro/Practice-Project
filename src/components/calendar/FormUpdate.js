import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

class RenderInput extends Component {
  componentWillMount () {
    let { input, defaultValue } = this.props
    input.onChange(defaultValue)
  }

  render () {
    let { input, label, meta: { touched, error }, ...custom } = this.props
    return (
      <View>
        <TextInput style={styles.input} onChangeText={(value) => input.onChange(value)} placeholder={label} {...input} />
        {touched && (error && <Text style={{color: 'red', fontSize: 15, textAlign: 'center'}}>{error}</Text>)}
      </View>
    )
  }
}

let Form = ({handleSubmit, state: {formErrors}, ownProps, submitSucceeded, dispatch, onSubmitClick}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Update Event</Text>

      <View>
        {submitSucceeded && (formErrors.message && <Text style={{color: 'red', fontSize: 15, textAlign: 'center'}}>{formErrors.message}</Text>)}

        <View style={styles.formGroup}>
          <Text>Name of allergic:</Text>
          <Field name='name' component={RenderInput} label='Allergic' defaultValue={ownProps.event.name} />
        </View>

        <View style={styles.formGroup}>
          <Text>Begin date:</Text>
          <Field name='beginDate' component={RenderInput} label='2016-12-31' defaultValue={ownProps.event.beginDate} />
        </View>

        <View style={styles.formGroup}>
          <Text>End date:</Text>
          <Field name='endDate' component={RenderInput} label='2017-01-20' defaultValue={ownProps.event.endDate} />
        </View>

        <TouchableOpacity onPress={handleSubmit(onSubmitClick(ownProps.event.id))}>
          <Text style={[styles.button, {backgroundColor: '#1e90ff'}]}>Submit</Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.button, {backgroundColor: 'red'}]} onPress={Actions.pop}>Cancel</Text>
    </View>
  )
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
    height: 37,
    width: 250
  },
  formGroup: {
    paddingBottom: 10
  }
})

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

Form = reduxForm({ form: 'calendar', validate })(Form)

export default Form
