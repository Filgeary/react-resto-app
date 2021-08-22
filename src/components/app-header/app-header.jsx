import React from 'react'
import cartIcon from './shopping-cart-solid.svg'
import './app-header.scss'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectTotalPrice } from '../../store/reducers/menuReducer/menuReducer'

const AppHeader = () => {
  const totalPrice = useSelector(selectTotalPrice)

  return (
    <header className="header">
      <NavLink
        to="/"
        className="header__link"
        title="Menu"
        // activeClassName="header__link--selected"
      >
        Menu
      </NavLink>

      <NavLink
        to="/cart"
        className="header__link"
        activeClassName="header__link--selected"
        title="Cart"
      >
        <img className="header__cart" src={cartIcon} alt="cart"></img>
        Total: {totalPrice} $
      </NavLink>
    </header>
  )
}

export default AppHeader
