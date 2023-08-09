import React from 'react';
import { Button } from 'react-bootstrap';


function Basket({ basket }) {


  return (
    <div className="bg-light border rounded p-3">
      <h2>Basket</h2>
      <span>Basket Score: 0 / 5</span>
      <ul>
        <li>{ basket.name }</li>
        <li>{ basket.price }</li>
      </ul>
    </div>
  )
}

export default Basket;
