import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'

import SignInForm from '../../components/authorization/SignInForm'
import {setFormError, clearFormError} from '../../actions'
import apiClient from '../../utilities'

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

const mapStateToProps = (state) => (
  {
    state,
    onSubmitClick: submit
  }
)

let SignIn = connect(mapStateToProps)(SignInForm)

export default SignIn
