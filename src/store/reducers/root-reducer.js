const initialState = {
  menu: [],
}

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_LOADED':
      return {
        ...state,
        menu: action.payload,
      }

    default:
      return state
  }
}

export default menuReducer
