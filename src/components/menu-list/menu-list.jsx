import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionFetchMenu } from '../../store/actions/api-actions'
import {
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

  const menuItems = useSelector(selectMenuList)
  const isLoading = useSelector(selectMenuIsLoading)
  const isError = useSelector(selectMenuIsError)

  return (
    <ul className="menu__list">
      {isLoading && !isError ? <Spinner /> : null}
      {isError ? <ErrorMessage /> : null}

      {menuItems.length > 0
        ? menuItems.map(item => {
            return <MenuListItem key={item.id} menuItem={item} />
          })
        : null}
    </ul>
  )
}

export default MenuList
