import {filter} from 'lodash'

const calendarEevent = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CALENDAR_EVENT':
      return [
        ...state,
        action.event
      ]
    case 'ADD_CALENDAR_EVENTS':
      return [
        ...state,
        ...action.events
      ]
    case 'UPDATE_CALENDAR_EVENT':
      return state.map(event =>
        (event.id === action.event.id) ? { ...action.event } : event
      )
    case 'DELETE_CALENDAR_EVENT':
      return filter(state, (event) => event.id !== action.id)
    default:
      return state
  }
}

export default calendarEevent
