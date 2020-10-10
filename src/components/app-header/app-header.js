import React from "react";
import cartIcon from "./shopping-cart-solid.svg";
import { Link } from "react-router-dom";
import "./app-header.scss";
import { connect } from "react-redux";

const AppHeader = ({ finalCost }) => {
  return (
    <header className="header">
      <Link className="header__link" to="/">
        Menu
      </Link>
      <Link className="header__link" to="/cart/">
        <img className="header__cart" src={cartIcon} alt="cart"></img>
        Total: {finalCost} $
      </Link>
    </header>
  );
};

const mapStateToProps = ({finalCost}) => ({finalCost})
export default connect(mapStateToProps)(AppHeader);
