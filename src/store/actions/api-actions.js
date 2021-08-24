import {
  adaptOrderDataToServer,
  adaptOrderDataToClient,
} from '../../services/adapter'
import Api from '../../services/api'
import { selectMenuList } from '../reducers/menuReducer/menuReducer'
import {
  actionLoadMenuFailure,
  actionLoadMenuItemSuccess,
  actionLoadMenuRequest,
  actionLoadMenuSuccess,
  actionPostOrderFailure,
  actionPostOrderRequest,
  actionPostOrderSuccess,
  actionResetCart,
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

export const actionPostOrder = data => (dispatch, getState) => {
  dispatch(actionPostOrderRequest())

  api.postDataJSON(adaptOrderDataToServer(data)).then(
    result => {
      const adaptedData = adaptOrderDataToClient(result)

      // TODO: remove later
      console.table(adaptedData)

      dispatch(actionPostOrderSuccess(adaptedData))
      dispatch(actionResetCart())
    },
    error => {
      dispatch(actionPostOrderFailure())
      console.error(error)
    },
  )
}
