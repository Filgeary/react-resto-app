import React from 'react'
import { Link } from 'react-router-dom'
import './menu-list-item.scss'

const MenuListItem = ({ menuItem }) => {
  const { id, title, url, category, price } = menuItem

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
        <button className="menu__btn">Add to cart</button>
        <Link to={`/menu/${id}`} className="menu__btn">
          Show more
        </Link>
      </div>
    </li>
  )
}

export default MenuListItem
