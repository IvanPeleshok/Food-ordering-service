import React from "react";
import { Route, Switch } from "react-router-dom";
import { MainPage, CartPage, ItemPage } from "../pages";
import AppHeader from "../app-header";
import Background from "./food-bg.jpg";
import Error from '../error'

const App = () => {
  
  return (
    <div
      style={{ background: `url(${Background}) center center/cover no-repeat`}}
      className="app"
    >
      <AppHeader/>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/cart" exact component={CartPage} />
        <Route path='/cart/:id' component={ItemPage}/>
        <Route path="*" component={Error} />
      </Switch>
    </div>
  );
}; 

export default (App);
