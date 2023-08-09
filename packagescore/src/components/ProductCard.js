import React from "react";
import {Button} from 'react-bootstrap'

function ProductCard({ productName, price, score, image, companyName, basket, setBasket }) {

  function addItem(item) {
    setBasket(prevBasket => [...prevBasket, item]);
  }

  return (
    <div>
      <img src={image} alt={productName} />
      <h3>
        {companyName} {productName}
      </h3>
      <p>Package Score: {score}</p>
      <p>£{price}</p>
      {/* TODO: addItem function needs to reflect object product data */}
      <Button onClick={() => addItem({name: "grapes", price: "10"})}>Add to Basket</Button>
    </div>
  );
}

export default ProductCard;
