import { combineReducers } from 'redux'
import reducer from './reducer'

const PracticeApp = combineReducers({
  name: reducer
})

export default PracticeApp
