import { ActionType } from '../../actions/actions'

const initialState = {
  menuList: [],
  menuItem: {},
  isLoading: false,
  isError: false,
}

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    // LOAD_MENU
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

    // LOAD_MENU_ITEM
    case ActionType.LOAD_MENU_ITEM_SUCCESS:
      return {
        ...state,
        menuItem: action.payload,
        isLoading: false,
        isError: false,
      }
    default:
      return state
  }
}

// select Menu
export const selectMenuList = state => state.menu.menuList
export const selectMenuIsLoading = state => state.menu.isLoading
export const selectMenuIsError = state => state.menu.isError

// TODO: remove later
// export const selectMenuItemById = (state, id) => {
//   return state.menu.menuList?.find(item => item.id === +id)
// }

// select MenuItem
export const selectMenuItem = state => state.menu.menuItem

export default menuReducer
