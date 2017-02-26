import { combineReducers } from 'redux'
import setCalendarEevent from './calendar'
import setHeaders from './headers'
import formErrors from './formErrors'
import { reducer as formReducer } from 'redux-form'

const PracticeApp = combineReducers({
  calendarEvents: setCalendarEevent,
  headers: setHeaders,
  form: formReducer,
  formErrors
})

export default PracticeApp
