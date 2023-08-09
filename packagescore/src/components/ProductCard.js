import React from "react";
import {Button} from 'react-bootstrap'

function ProductCard({ key, id, productName, price, packagingScore, image, companyName, basket, setBasket }) {

  function addItem(item) {
    setBasket(prevBasket => [...prevBasket, item]);
  }

  return (
    <div>
      <img src={image} alt={productName} />
      <h3>
        {companyName} {productName}
      </h3>
      <p>Package Score: {packagingScore}</p>
      <p>£{price}</p>
      {/* TODO: addItem function needs to reflect object product data */}
      <Button onClick={() => addItem({id, productName, companyName, price, packagingScore, image})}>Add to Basket</Button>
    </div>
  );
}

export default ProductCard;
