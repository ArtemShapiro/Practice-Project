import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import FormCreate from '../../components/calendar/FormCreate'
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

const mapStateToProps = (state) => (
  {
    state,
    onSubmitClick: submit
  }
)

let FormCreateEvent = connect(mapStateToProps)(FormCreate)

export default FormCreateEvent
