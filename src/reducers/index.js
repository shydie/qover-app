import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auth from './auth'
import draft from './draft'
import prices from './prices'
import leads from './leads'
import user from './user'

export default combineReducers({
  routing: routerReducer,
  auth,
  draft,
  prices,
  leads,
  user
})