import { ActionType } from '../../actions/actions'

const initialState = {
  menuList: [],
  menuItem: {},
  isLoading: false,
  isError: false,
  cartList: [],
  totalPrice: 0,
  orderData: [],
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
      const itemInMenu = state.menuList?.find(item => item.id === +id)

      if (itemInMenu) {
        return {
          ...state,
          cartList: [...state.cartList, { ...itemInMenu, totalAmount: 1 }],
          totalPrice: state.totalPrice + itemInMenu.price,
        }
      } else {
        return state
      }

    case ActionType.REMOVE_ITEM_FROM_CART:
      const id2 = action.payload
      const index2 = state.cartList?.findIndex(item => item.id === +id2)
      const price =
        state.cartList[index2]['price'] * state.cartList[index2]['totalAmount']

      if (index2 > -1) {
        return {
          ...state,
          cartList: [
            ...state.cartList.slice(0, index2),
            ...state.cartList.slice(index2 + 1),
          ],
          totalPrice: state.totalPrice - price,
        }
      } else {
        return state
      }

    case ActionType.INCREMENT_ITEM_TO_CART:
      const id3 = action.payload
      const index3 = state.cartList?.findIndex(item => item.id === +id3)
      const itemInState3 = state.cartList?.find(item => item.id === +id3)

      if (index3 > -1) {
        return {
          ...state,
          cartList: [
            ...state.cartList.slice(0, index3),
            { ...itemInState3, totalAmount: ++itemInState3.totalAmount },
            ...state.cartList.slice(index3 + 1),
          ],
          totalPrice: state.totalPrice + itemInState3.price,
        }
      } else {
        return state
      }

    case ActionType.DECREMENT_ITEM_FROM_CART:
      const id4 = action.payload
      const index4 = state.cartList?.findIndex(item => item.id === +id4)
      const itemInState4 = state.cartList?.find(item => item.id === +id4)

      if (index4 > -1) {
        return {
          ...state,
          cartList: [
            ...state.cartList.slice(0, index4),
            { ...itemInState4, totalAmount: --itemInState4.totalAmount },
            ...state.cartList.slice(index4 + 1),
          ],
          totalPrice: state.totalPrice - itemInState4.price,
        }
      } else {
        return state
      }

    case ActionType.RESET_CART:
      return {
        ...state,
        cartList: [],
        totalPrice: 0,
      }

    // POST_ORDER
    case ActionType.POST_ORDER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      }

    case ActionType.POST_ORDER_SUCCESS:
      return {
        ...state,
        orderData: action.payload,
        isLoading: false,
        isError: false,
      }

    case ActionType.POST_ORDER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
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

// select totalPrice
export const selectTotalPrice = state => state.menu.totalPrice

// select OrderData
export const selectOrderData = state => state.menu.orderData
export const selectOrderIsLoading = state => state.menu.isLoading
export const selectOrderIsError = state => state.menu.isError

export default menuReducer
