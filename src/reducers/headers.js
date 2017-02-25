const setHeaders = (state = {}, action) => {
  switch (action.type) {
    case 'SET_HEADERS':
      return {...state, ...action.headers}
    default:
      return state
  }
}

export default setHeaders
