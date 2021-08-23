import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  actionDecrementItemFromCart,
  actionIncrementItemToCart,
  actionRemoveItemFromCart,
} from '../../store/actions/actions'
import { actionPostOrder } from '../../store/actions/api-actions'
import {
  selectCartList,
  selectOrderData,
  selectOrderIsError,
  selectOrderIsLoading,
} from '../../store/reducers/menuReducer/menuReducer'
import ErrorMessage from '../errorMessage/errorMessage'
import Spinner from '../spinner/spinner'
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

  const handleMakeOrder = data => {
    dispatch(actionPostOrder(data))
  }

  const cartList = useSelector(selectCartList)
  const orderData = useSelector(selectOrderData)
  const orderIsLoading = useSelector(selectOrderIsLoading)
  const orderIsError = useSelector(selectOrderIsError)

  return (
    <>
      <div className="cart__title">Your Order:</div>
      <div className="cart__list">
        {orderIsLoading && !orderIsError ? <Spinner /> : null}
        {orderIsError ? <ErrorMessage /> : null}

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

        {cartList.length > 0 && (
          <button
            type="button"
            className="cart__btn-order"
            title="Make Order!"
            onClick={() => handleMakeOrder(cartList)}
          >
            Make Order!
          </button>
        )}

        <div className="cart__order-block">
          {orderData.length > 0 && (
            <div>
              <h2 className="cart__order-header">Thanks for Your Order!</h2>
              <p className="cart__order-label">Your Order was...</p>
            </div>
          )}
          {orderData.length > 0
            ? orderData.map(item => {
                const { id, title, totalAmount, date } = item

                return (
                  <p key={id} className="cart__order-row">
                    <span className="cart__order-total">{totalAmount}</span>
                    <small>x</small>
                    <span className="cart__order-title">{title}</span>
                    <small className="cart__order-date">{date}</small>
                  </p>
                )
              })
            : null}
        </div>
      </div>
    </>
  )
}

export default CartTable
