export const ActionType = {
  // LOAD_MENU
  LOAD_MENU_REQUEST: 'LOAD_MENU_REQUEST',
  LOAD_MENU_SUCCESS: 'LOAD_MENU_SUCCESS',
  LOAD_MENU_FAILURE: 'LOAD_MENU_FAILURE',

  // LOAD_MENU_ITEM
  LOAD_MENU_ITEM_SUCCESS: 'LOAD_MENU_ITEM_SUCCESS',

  // CART
  ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART: 'REMOVE_ITEM_FROM_CART',
  INCREMENT_ITEM_TO_CART: 'INCREMENT_ITEM_TO_CART',
  DECREMENT_ITEM_FROM_CART: 'DECREMENT_ITEM_FROM_CART',
}

// LOAD_MENU
export const actionLoadMenuRequest = () => {
  return {
    type: ActionType.LOAD_MENU_REQUEST,
  }
}

export const actionLoadMenuSuccess = menuList => {
  return {
    type: ActionType.LOAD_MENU_SUCCESS,
    payload: menuList,
  }
}

export const actionLoadMenuFailure = () => {
  return {
    type: ActionType.LOAD_MENU_FAILURE,
  }
}

// LOAD_MENU_ITEM
export const actionLoadMenuItemSuccess = menuItem => {
  return {
    type: ActionType.LOAD_MENU_ITEM_SUCCESS,
    payload: menuItem,
  }
}

// CART
export const actionAddItemToCart = id => {
  return {
    type: ActionType.ADD_ITEM_TO_CART,
    payload: id,
  }
}

export const actionRemoveItemFromCart = id => {
  return {
    type: ActionType.REMOVE_ITEM_FROM_CART,
    payload: id,
  }
}

export const actionIncrementItemToCart = id => {
  return {
    type: ActionType.INCREMENT_ITEM_TO_CART,
    payload: id,
  }
}

export const actionDecrementItemFromCart = id => {
  return {
    type: ActionType.DECREMENT_ITEM_FROM_CART,
    payload: id,
  }
}
