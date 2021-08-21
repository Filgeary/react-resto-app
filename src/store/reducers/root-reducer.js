import { combineReducers } from 'redux'
import menuReducer from './menuReducer/menuReducer'

export default combineReducers({
  menu: menuReducer,
})
