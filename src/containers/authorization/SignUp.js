import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'

import SignUpForm from '../../components/authorization/SignUpForm'
import {setFormError, clearFormError} from '../../actions'
import apiClient from '../../utilities'

const submit = (values, dispatch) => {
  let data = new FormData()
  data.append('email', values.email)
  data.append('password', values.password)
  data.append('password_confirmation', values.passwordConfirmation)

  apiClient.makeRequest('http://practice-project-backend.herokuapp.com/api/v1/auth', {body: data, method: 'POST'}).then((responce) => {
    if (responce.ok) {
      dispatch(clearFormError())
      return responce.json().then(json => { console.log(json); Actions.tabbar() })
    }
    dispatch(setFormError('sign_up', 'Login or password are not valid!'))
  })
}

const mapStateToProps = (state) => (
  {
    state,
    onSubmitClick: submit
  }
)

let SignUp = connect(mapStateToProps)(SignUpForm)

export default SignUp
