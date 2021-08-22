import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionRemoveItemFromCart } from '../../store/actions/actions'
import { selectCartList } from '../../store/reducers/menuReducer/menuReducer'
import './cart-table.scss'

const CartTable = () => {
  const dispatch = useDispatch()

  const handleRemoveFromCart = id => {
    dispatch(actionRemoveItemFromCart(id))
  }

  const cartList = useSelector(selectCartList)

  return (
    <>
      <div className="cart__title">Your Order:</div>
      <div className="cart__list">
        {cartList.length > 0 ? (
          cartList.map(item => {
            const { id, title, url, price } = item

            return (
              <div key={id} className="cart__item">
                <img src={url} className="cart__item-img" alt={title}></img>
                <div className="cart__item-title">{title}</div>
                <div className="cart__item-price">{price}$</div>
                <div
                  className="cart__close"
                  onClick={() => handleRemoveFromCart(id)}
                >
                  &times;
                </div>
              </div>
            )
          })
        ) : (
          <p className="cart__empty-desc">Your Cart is empty!</p>
        )}
      </div>
    </>
  )
}

export default CartTable
