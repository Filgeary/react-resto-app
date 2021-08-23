import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  actionDecrementItemFromCart,
  actionIncrementItemToCart,
  actionRemoveItemFromCart,
} from '../../store/actions/actions'
import { selectCartList } from '../../store/reducers/menuReducer/menuReducer'
import './cart-table.scss'

const CartTable = () => {
  const dispatch = useDispatch()

  const handleRemoveFromCart = id => {
    dispatch(actionRemoveItemFromCart(id))
  }

  const handleIncrementItemToCart = id => {
    dispatch(actionIncrementItemToCart(id))
  }

  const handleDecrementItemFromCart = id => {
    dispatch(actionDecrementItemFromCart(id))
  }
  const cartList = useSelector(selectCartList)

  return (
    <>
      <div className="cart__title">Your Order:</div>
      <div className="cart__list">
        {cartList.length > 0 ? (
          cartList.map(item => {
            const { id, title, url, price, totalAmount } = item

            return (
              <div key={id} className="cart__item">
                <img src={url} className="cart__item-img" alt={title}></img>
                <div className="cart__item-title">
                  {totalAmount} x {title}
                </div>
                <div className="cart__item-price">{price}$</div>
                <div
                  className="cart__close"
                  onClick={() => handleRemoveFromCart(id)}
                >
                  &times;
                </div>

                {totalAmount > 1 ? (
                  <button
                    className="cart__btn-minus"
                    type="button"
                    onClick={() => handleDecrementItemFromCart(id)}
                    title="Remove Item"
                  ></button>
                ) : null}
                <button
                  className="cart__btn-plus"
                  type="button"
                  onClick={() => handleIncrementItemToCart(id)}
                  title="Add Item"
                ></button>
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
