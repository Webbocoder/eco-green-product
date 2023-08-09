import React from "react";
import BasketItem from "./BasketItem";

function Basket({ basket, setBasket }) {

  const removeFromBasket = (itemToRemove) => {
    console.log(itemToRemove)
    const updatedBasket = basket.filter((basketItem) => basketItem.id !== itemToRemove)
    setBasket(updatedBasket)
  }
  // const [scoreSum, setScoreSum] = useState(0);
  let staticSum = 0;
  basket.forEach((item) => {
    staticSum = staticSum + item.packagingScore;
  });

  // limit the basket score to 1 decimal place
  const basketScore = ( staticSum / basket.length ).toFixed(1) 
  // Show the total score - all scores added.
  const total = staticSum

  return (
    <>
      {basket.length > 0 && (
        <div className="bg-light border rounded p-3">
          <h2>Basket</h2>
          <p className="mb-2">Total Packaging Points Earned: {total}</p>
          <p className="mb-2">Basket Score: { basketScore } / 5</p>
          <div className='d-flex flex-column align-items-center'>
            {/* productName, price, score, image, companyName  */}
            {basket.map((item)=>
        <BasketItem key={item.id} item = {item} removeFromBasket={removeFromBasket} />
        )}
          </div>
        </div>
      )}
    </>
  );
}

export default Basket;
