import { combineReducers } from 'redux'
import setCalendarEevent from './calendar'
import { reducer as formReducer } from 'redux-form'

const PracticeApp = combineReducers({
  calendarEvents: setCalendarEevent,
  form: formReducer
})

export default PracticeApp
