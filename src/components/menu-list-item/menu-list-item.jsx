import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './menu-list-item.scss'

const MenuListItem = ({ menuItem, isItemAddedToCart, onAddToCart }) => {
  const { id, title, url, category, price } = menuItem

  const [orderTitle, setOrderTitle] = useState('Add to Cart')
  const [isDisabled, setIsDisabled] = useState(false)

  useEffect(() => {
    if (isItemAddedToCart) {
      setOrderTitle('Added')
      setIsDisabled(true)
    }
  }, [isItemAddedToCart])

  const handleAddToCart = (evt, id) => {
    setOrderTitle('Added')
    setIsDisabled(true)
    onAddToCart(evt, id)
  }

  return (
    <li className="menu__item">
      <div className="menu__title">
        {title} / {id}
      </div>
      <img className="menu__img" src={url} alt={title}></img>
      <div className="menu__category">
        Category: <span>{category}</span>
      </div>
      <div className="menu__price">
        Price: <span>{price}$</span>
      </div>

      <div className="menu__btn-wrapper">
        <button
          type="button"
          className="menu__btn"
          disabled={isDisabled}
          onClick={evt => handleAddToCart(evt, id)}
        >
          {orderTitle}
        </button>
        <Link to={`/menu/${id}`} className="menu__btn">
          Show more
        </Link>
      </div>
    </li>
  )
}

export default MenuListItem
