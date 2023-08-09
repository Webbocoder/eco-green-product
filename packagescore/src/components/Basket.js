import React from 'react';
import { Button } from 'react-bootstrap';


function Basket({ basket }) {


  return (

  <div>
    <ul>

      <li>{ basket.name }</li>
      <li>{ basket.price }</li>
    
    </ul>
  </div>
  )
}

export default Basket;
