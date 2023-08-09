import React from "react";

function ProductCard({ productName, price, score, image, companyName }) {
  return (
    <div>
      <img src={image} alt={productName} />
      <h1>
        {companyName} {productName}
      </h1>
      <p>{score}</p>
      <p>{price}</p>
    </div>
  );
}

export default ProductCard;
