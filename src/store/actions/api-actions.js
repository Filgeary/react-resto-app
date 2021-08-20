import Api from '../../services/api'
import { selectMenuList } from '../reducers/menuReducer/menuReducer'
import {
  actionLoadMenuFailure,
  actionLoadMenuRequest,
  actionLoadMenuSuccess,
} from './actions'

const api = new Api()

export const actionFetchMenu = () => (dispatch, getState) => {
  const state = getState()
  const menuItems = selectMenuList(state)

  if (menuItems.length > 0) return

  dispatch(actionLoadMenuRequest())

  api.getAllItems().then(
    result => dispatch(actionLoadMenuSuccess(result)),
    error => {
      dispatch(actionLoadMenuFailure())
      console.error(error)
    },
  )
}
