const setCalendarEevent = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CALENDAR_EVENT':
      return [
        ...state,
        action.event
      ]

    default:
      return state
  }
}

export default setCalendarEevent
