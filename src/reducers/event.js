const activeEvent = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_EVENT':
      return {
        ...action.event
      }

    default:
      return state
  }
}

export default activeEvent
