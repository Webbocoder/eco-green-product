import React from 'react';
import BasketItem from './BasketItem';


function Basket({ basket }) {


  return (
    <div className="bg-light border rounded p-3">
      <h2>Basket</h2>
      <span>Basket Score: 0 / 5</span>
      <div className='d-flex justify-content-center'>
      {/* productName, price, score, image, companyName  */}
        {basket.map((item)=><BasketItem item = {item}/>)}
      </div>
    </div>
  )
}

export default Basket;
