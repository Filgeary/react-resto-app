export const ActionType = {
  // LOAD_MENU
  LOAD_MENU_REQUEST: 'LOAD_MENU_REQUEST',
  LOAD_MENU_SUCCESS: 'LOAD_MENU_SUCCESS',
  LOAD_MENU_FAILURE: 'LOAD_MENU_FAILURE',

  // LOAD_MENU_ITEM
  LOAD_MENU_ITEM_SUCCESS: 'LOAD_MENU_ITEM_SUCCESS',
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
