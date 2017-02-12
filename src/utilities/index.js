import {setHeaders} from '../actions'

class ApiClient {
  setGetStateFunction (func) {
    this.getState = func
  }
  setDispatchFunction (dispatch) {
    this.dispatch = dispatch
  }

  makeRequest (url, options) {
    return fetch(url, {...options, headers: this.getState().headers}).then(response => {
      this.dispatch(setHeaders(response.headers.map))
      return response
    })
  }
}

const apiClient = new ApiClient()

export default apiClient
