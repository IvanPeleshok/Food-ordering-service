import React from "react";
import "./menu-list-item.scss";

const MenuListItem = ({ menuItem, onAddToCart, history}) => {
  const { title, price, url, category, id} = menuItem;
  return (
    <li className="menu__item" >
      <div className="menu__title">{title}</div>
      <img className="menu__img" src={url} alt={title} onClick={() => history.push(`/cart/${id}`)}></img>
      <div className="menu__category">
        Category: <span>{category}</span>
      </div>
      <div className="menu__price">
        Price: <span>{price}$</span>
      </div>
      <button onClick={onAddToCart} className="menu__btn">Add to cart</button>
    </li>
  );
};

export default MenuListItem;
