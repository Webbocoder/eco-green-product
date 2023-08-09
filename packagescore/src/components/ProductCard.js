import React from "react";
import {Button} from 'react-bootstrap'

function ProductCard({ productName, price, packagingScore, image, companyName, basket, setBasket }) {

  function addItem(item) {
    setBasket(prevBasket => [...prevBasket, item]);
  }

  return (
    <div className="card mb-4 p-2" style={{ width: "400px", height: "400px" }}>
      <img src={image} alt={productName} className="card-img-top img-fluid" style={{ maxHeight: "50%", objectFit: "contain" }} />
      <div className="card-body">
        <h3 className="card-title">
          {companyName} {productName}
        </h3>
        <p className="card-text">Package Score: {packagingScore}</p>
        <p className="card-text">£{price}</p>
        {/* TODO: addItem function needs to reflect object product data */}
        <Button onClick={() => addItem({productName, companyName, price, packagingScore, image})}>Add to Basket</Button>
      </div>
    </div>
  );
}

export default ProductCard;
