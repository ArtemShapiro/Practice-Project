import { connect } from 'react-redux'
import {Actions} from 'react-native-router-flux'

import FormUpdate from '../../components/calendar/FormUpdate'
import apiClient from '../../utilities'
import {setFormError, clearFormError, updateCalendarEvent} from '../../actions'

const submit = (id) => (values, dispatch) => {
  let data = new FormData()
  data.append('name', values.name)
  data.append('begin_at', values.beginDate)
  data.append('end_at', values.endDate)

  apiClient.makeRequest(`http://127.0.0.1:5000/api/v1/seasonal_allergies/${id}`, {body: data, method: 'PATCH'}).then(response => {
    if (response.ok) {
      dispatch(clearFormError())
      dispatch(updateCalendarEvent(values, id))
      Actions.pop()
      console.log('ok')
      return
    }
    dispatch(setFormError('response', 'Data is incorrect!'))
  })
}

const mapStateToProps = (state, ownProps) => ({
  state,
  ownProps,
  onSubmitClick
})

let UpdateFormEvent = connect(mapStateToProps)(FormUpdate)

export default UpdateFormEvent
