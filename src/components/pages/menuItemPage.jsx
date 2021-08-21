import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { actionFetchMenuItemById } from '../../store/actions/api-actions'
import {
  selectMenuIsError,
  selectMenuIsLoading,
  selectMenuItem,
} from '../../store/reducers/menuReducer/menuReducer'
import ErrorMessage from '../errorMessage/errorMessage'
import Spinner from '../spinner/spinner'
import './menuItemPage.css'

const MenuItemPage = () => {
  const { id: itemId } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actionFetchMenuItemById(itemId))
  }, [dispatch, itemId])

  const menuItem = useSelector(selectMenuItem)
  const isLoading = useSelector(selectMenuIsLoading)
  const isError = useSelector(selectMenuIsError)

  const { title, url, category, price } = menuItem

  return (
    <div className="menu-item-page__wrapper">
      <section className="menu__item menu-item-page__block">
        {isLoading && !isError ? <Spinner /> : null}
        {isError ? <ErrorMessage /> : null}

        <h2 className="menu__title">{title}</h2>
        <img className="menu__img" src={url} alt={title}></img>
        <div className="menu__category">
          Category: <span>{category}</span>
        </div>
        <div className="menu__price">
          Price: <span>{price}$</span>
        </div>
        <button type="button" className="menu__btn">
          Add to cart
        </button>
      </section>
    </div>
  )
}

export default MenuItemPage
