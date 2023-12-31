import React from "react";
import ProductCard from "./ProductCard.js";

function ProductList({ data, basket, setBasket }) {
  return (
    <div className="row">
      {data.map((item) => {
        return (
          <ProductCard
            id={item.id}
            productName={item.productName}
            price={item.price}
            packagingScore={item.packagingScore}
            image={item.image}
            companyName={item.companyName}
            basket={basket}
            setBasket={setBasket}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
