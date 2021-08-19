import { ActionType } from '../actions/actions'

const initialState = {
  menu: [],
  isLoading: false,
  isError: false,
}

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MENU_SUCCESS:
      return {
        ...state,
        menu: action.payload,
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

export const selectMenu = state => state.menu
export const selectIsLoading = state => state.isLoading
export const selectIsError = state => state.isError

export default menuReducer
