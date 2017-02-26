export const addCalendarEevent = (event) => {
  return {
    type: 'ADD_CALENDAR_EVENT',
    event
  }
}

export const setHeaders = (headers) => (
  {
    type: 'SET_HEADERS',
    header: {
      access_token: headers['access-token'],
      client: headers.client,
      uid: headers.uid
    }
  }
)

export const setFormError = (formName, message) => (
  {
    type: 'SET_FORM_ERROR',
    formName,
    message
  }
)

export const clearFormError = () => (
  {
    type: 'CLEAR_FORM_ERROR'
  }
)
