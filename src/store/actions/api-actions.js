import Api from '../../services/api'
import {
  actionLoadMenuFailure,
  actionLoadMenuRequest,
  actionLoadMenuSuccess,
} from './actions'

const api = new Api()

export const actionFetchMenu = () => (dispatch, getState) => {
  dispatch(actionLoadMenuRequest())

  api
    .getAllItems()
    .then(result => dispatch(actionLoadMenuSuccess(result)))
    .catch(() => dispatch(actionLoadMenuFailure()))
}
