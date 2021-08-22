import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionAddItemToCart } from '../../store/actions/actions'
import { actionFetchMenu } from '../../store/actions/api-actions'
import {
  selectCartList,
  selectMenuIsError,
  selectMenuIsLoading,
  selectMenuList,
} from '../../store/reducers/menuReducer/menuReducer'
import ErrorMessage from '../errorMessage/errorMessage'
import MenuListItem from '../menu-list-item/menu-list-item'
import Spinner from '../spinner/spinner'
import './menu-list.scss'

const MenuList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actionFetchMenu())
  }, [dispatch])

  const handleAddToCart = (evt, id) => {
    evt.preventDefault()
    dispatch(actionAddItemToCart(id))
  }

  // menu
  const menuItems = useSelector(selectMenuList)
  const isLoading = useSelector(selectMenuIsLoading)
  const isError = useSelector(selectMenuIsError)

  // cart
  const cartList = useSelector(selectCartList)
  const isItemAddedToCart = id => cartList?.find(item => item.id === +id)

  return (
    <ul className="menu__list">
      {isLoading && !isError ? <Spinner /> : null}
      {isError ? <ErrorMessage /> : null}

      {menuItems.length > 0
        ? menuItems.map(item => {
            return (
              <MenuListItem
                key={item.id}
                menuItem={item}
                isItemAddedToCart={isItemAddedToCart(item.id)}
                onAddToCart={handleAddToCart}
              />
            )
          })
        : null}
    </ul>
  )
}

export default MenuList
