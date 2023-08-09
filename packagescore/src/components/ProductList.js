import React from "react";
import ProductCard from "./ProductCard.js";

function ProductList({ data }) {
  return (
    <div>
      {data.map((item) => {
        return (
          <ProductCard
            key={item.id}
            productName={item.productName}
            price={item.price}
            score={item.packagingScore}
            image={item.image}
            companyName={item.companyName}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
