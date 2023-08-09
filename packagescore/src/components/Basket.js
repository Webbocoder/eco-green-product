import React from "react";
import BasketItem from "./BasketItem";

function Basket({ basket }) {
  // function calcScore(sumOfScores, numberOfScores) {
  //   return sumOfScores / numberOfScores;
  // }

  // const [scoreSum, setScoreSum] = useState(0);
  let staticSum = 0;
  basket.forEach((item) => {
    staticSum = staticSum + item.packagingScore;
  });

  return (
    <>
      {basket.length > 0 && (
        <div className="bg-light border rounded p-3">
          <h2>Basket</h2>
          <span>Basket Score: {staticSum / basket.length} / 5</span>
          <ul>
            {/* productName, price, score, image, companyName  */}
            {basket.map((item) => (
              <BasketItem item={item} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Basket;
