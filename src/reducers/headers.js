const setHeaders = (state = {}, action) => {
  switch (action.type) {
    case 'SET_HEADERS':
      return action.header
    default:
      return state
  }
}

export default setHeaders
