import { ActionType } from '../../actions/actions'

const initialState = {
  menuList: [],
  menuItem: {},
  isLoading: false,
  isError: false,
  cartList: [],
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

    // CART
    case ActionType.ADD_ITEM_TO_CART:
      const id = action.payload
      const foundItem = state.menuList?.find(item => item.id === +id)

      if (foundItem) {
        return {
          ...state,
          cartList: [...state.cartList, foundItem],
        }
      } else {
        return state
      }

    case ActionType.REMOVE_ITEM_FROM_CART:
      const id2 = action.payload
      const foundIndex = state.cartList?.findIndex(item => item.id === +id2)

      if (foundIndex > -1) {
        return {
          ...state,
          cartList: [
            ...state.cartList.slice(0, foundIndex),
            ...state.cartList.slice(foundIndex + 1),
          ],
        }
      } else {
        return state
      }

    default:
      return state
  }
}

// Use Selectors Only with Global State!
// (because `combineReducers` divide State in small parts)
// =====================================

// select Menu
export const selectMenuList = state => state.menu.menuList
export const selectMenuIsLoading = state => state.menu.isLoading
export const selectMenuIsError = state => state.menu.isError

// select MenuItem
export const selectMenuItem = state => state.menu.menuItem
export const selectMenuItemById = (state, id) => {
  return state.menu.menuList?.find(item => item.id === +id)
}

// select Cart
export const selectCartList = state => state.menu.cartList

export default menuReducer
