import { combineReducers } from 'redux'
import calendarEevent from './calendar'
import activeEvent from './event'
import setHeaders from './headers'
import formErrors from './formErrors'
import { reducer as formReducer } from 'redux-form'

const PracticeApp = combineReducers({
  calendarEvents: calendarEevent,
  headers: setHeaders,
  form: formReducer,
  activeEvent,
  formErrors
})

export default PracticeApp
