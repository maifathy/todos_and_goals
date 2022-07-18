import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from './logger.js'
import checker from './checker.js'

export default applyMiddleware(
  thunk,
  checker,
  logger
)
