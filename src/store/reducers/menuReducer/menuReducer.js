import { ActionType } from '../../actions/actions'

const initialState = {
  menuList: [],
  isLoading: false,
  isError: false,
}

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MENU_SUCCESS:
      return {
        ...state,
        menuList: action.payload,
        isLoading: false,
        isError: false,
      }

    case ActionType.LOAD_MENU_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      }

    case ActionType.LOAD_MENU_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }

    default:
      return state
  }
}

export const selectMenuList = state => state.menu.menuList
export const selectMenuIsLoading = state => state.menu.isLoading
export const selectMenuIsError = state => state.menu.isError

export default menuReducer
