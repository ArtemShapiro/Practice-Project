import {setHeaders} from '../actions'

class ApiClient {
  setGetStateFunction (func) {
    this.getState = func
  }
  setDispatchFunction (dispatch) {
    this.dispatch = dispatch
  }

  makeRequest (url, options) {
    const headers = this.getState().headers
    return fetch(url, {...options, headers: headers}).then(response => {
      console.log(response)
      if (response.headers.map.uid) {
        this.dispatch(setHeaders(response.headers.map))
      }
      return response
    })
  }
}

const apiClient = new ApiClient()

export default apiClient
