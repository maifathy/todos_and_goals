import {combineReducers} from 'redux'
import todos from './todos.js'
import goals from './goals.js'
import loading from './loading.js'

export default combineReducers({
  todos,
  goals,
  loading
})
