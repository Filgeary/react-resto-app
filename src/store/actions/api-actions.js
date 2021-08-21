import Api from '../../services/api'
import { selectMenuList } from '../reducers/menuReducer/menuReducer'
import {
  actionLoadMenuFailure,
  actionLoadMenuItemSuccess,
  actionLoadMenuRequest,
  actionLoadMenuSuccess,
} from './actions'

const api = new Api()

export const actionFetchMenu = () => (dispatch, getState) => {
  const state = getState()
  const menuItems = selectMenuList(state)

  if (menuItems && menuItems.length > 0) return

  dispatch(actionLoadMenuRequest())

  api.getAllMenuItems().then(
    result => dispatch(actionLoadMenuSuccess(result)),
    error => {
      dispatch(actionLoadMenuFailure())
      console.error(error)
    },
  )
}

export const actionFetchMenuItemById = id => (dispatch, getState) => {
  dispatch(actionLoadMenuRequest())

  api.getMenuItemById(id).then(
    result => dispatch(actionLoadMenuItemSuccess(result)),
    error => {
      dispatch(actionLoadMenuFailure())
      console.error(error)
    },
  )
}
