 import React, { Component } from 'react'
 import { Provider } from 'react-redux'
 import { createStore } from 'redux'

 import App from './src/components/App'
 import PracticeApp from './src/reducers/index'

 import {AppRegistry} from 'react-native'

 const store = createStore(PracticeApp)

 export default class PracticeProject extends Component {
   render () {
     return (
       <Provider store={store} >
         <App />
       </Provider>
     )
   }
}

 AppRegistry.registerComponent('PracticeProject', () => PracticeProject)
