export const addCalendarEevent = (event) => ({
  type: 'ADD_CALENDAR_EVENT',
  event
})

export const addCalendarEevents = (events) => ({
  type: 'ADD_CALENDAR_EVENTS',
  events
})

export const updateCalendarEvent = (event, id) => ({
  type: 'UPDATE_CALENDAR_EVENT',
  event: { ...event, id }
})

export const deleteCalendarEvent = (id) => ({
  type: 'DELETE_CALENDAR_EVENT',
  id
})

export const setActiveEvent = (event) => ({
  type: 'SET_ACTIVE_EVENT',
  event
})

export const setHeaders = (headers) => ({
  type: 'SET_HEADERS',
  headers: {
    access_token: headers['access-token'],
    client: headers.client,
    uid: headers.uid
  }
})

export const setFormError = (formName, message) => ({
  type: 'SET_FORM_ERROR',
  formName,
  message
})

export const clearFormError = () => ({
  type: 'CLEAR_FORM_ERROR'
})
