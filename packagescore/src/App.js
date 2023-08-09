import React, { useState }  from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

import data from "./data/data.json";

import Header from './components/Header'
import ProductList from './components/ProductList'
import Basket from './components/Basket'

function App() {

  const [basket, setBasket] = useState ([])

  console.log(basket)

  return (
    <div className="App">
      <Header />
      <Container className="mt-4">
        <Row>
          <Col md={8} className="border-right">
            <ProductList data={data} basket={basket} setBasket={setBasket} />
          </Col>
          <Col md={4}>
            <Basket basket={basket} setBasket={setBasket} />
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;