import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import data from "./data/data.json";
import { useState } from 'react';

import Header from './components/Header'
import Search from './components/Search'
import ProductList from './components/ProductList'
import Basket from './components/Basket'
import React from "react";

function App() {

  const [basket, setBasket] = useState ([])

  console.log(basket)

  return (
    <div className="App">
      <Header />
      <Search />
      <ProductList data={data} basket={basket} setBasket={setBasket} />
      <Basket basket={basket} setBasket={setBasket} />
    </div>
  );
}

export default App;