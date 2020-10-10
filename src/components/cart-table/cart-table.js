import React from "react";
import "./cart-table.scss";
import { connect } from "react-redux";
import { deleteFromCart, resetCart } from "../../actions";
import WithRestoService from "../hoc";

const CartTable = ({ items, deleteFromCart, RestoService, resetCart }) => {
  if (items.length === 0) {
    return (
      <h1
        style={{
          color: "ffff",
          fontSize: "36px",
          fontWeight: "300",
          textAlign: "center",
        }}
      >
        Ваша картиза пуста
      </h1>
    );
  }
  return (
    <>
      <div className="cart__title">Ваш заказ:</div>
      <div className="cart__list">
        {items.map((item) => {
          const { title, price, url, id, count } = item;
          return (
            <div key={id} className="cart__item">
              <img src={url} className="cart__item-img" alt={title}></img>
              <div className="cart__item-title">{title}</div>
              <div className="cart__item-price">
                {price}$ x {count}
              </div>
              <div onClick={() => deleteFromCart(id)} className="cart__close">
                &times;
              </div>
            </div>
          );
        })}
        <button
          onClick={() => {
            RestoService.setOrder(order(items));
            resetCart();
          }}
          className="push"
        >
          Place an order
        </button>
      </div>
    </>
  );
};

const order = (items) =>
  items.map((elem) => ({
    title: elem.title,
    count: elem.count,
  }));

const MapStateToProps = ({ items }) => ({ items });

const mapDispatchToProps = {
  deleteFromCart,
  resetCart,
};

export default WithRestoService()(
  connect(MapStateToProps, mapDispatchToProps)(CartTable)
);
