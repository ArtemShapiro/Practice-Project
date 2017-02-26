const formErrors = (state = {}, action) => {
  switch (action.type) {
    case 'SET_FORM_ERROR':
      return {
        form: action.formName,
        message: action.message
      }
    case 'CLEAR_FORM_ERROR':
      return {}

    default:
      return state
  }
}

export default formErrors
