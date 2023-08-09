import React from "react";

function ProductCard({ productName, price, score, image, companyName }) {
  return (
    <div>
      <img src={image} alt={productName} />
      <h3>
        {companyName} {productName}
      </h3>
      <p>Package Score: {score}</p>
      <p>£{price}</p>
    </div>
  );
}

export default ProductCard;
