import React from 'react';
import BasketItem from './BasketItem';


function Basket({ basket, setBasket }) {

  const removeFromBasket = (itemToRemove) => {
    console.log(itemToRemove)
    const updatedBasket = basket.filter((basketItem) => basketItem.id !== itemToRemove)
    setBasket(updatedBasket)
  }

  return (
    <div className="bg-light border rounded p-3">
      <h2>Basket</h2>
      <span>Basket Score: 0 / 5</span>
      <ul>
      {/* productName, price, score, image, companyName  */}
        {basket.map((item)=>
        <BasketItem key={item.id} item = {item} removeFromBasket={removeFromBasket} />
        )}
      </ul>
    </div>
  )
}

export default Basket;
