import { Button } from "react-bootstrap";


function BasketItem({ item, removeFromBasket }) {

  console.log("testing for item", item)

  return (
    <div>
      <h3>
        {item.companyName} {item.productName}
      </h3>
      <img src={item.image} alt={item.productName} />
      <p>Package Score: {item.packagingScore}</p>
      <p>£{item.price}</p>
      <Button onClick={() => removeFromBasket(item.id) } >
        Delete item
      </Button>
    </div>
  );
}

export default BasketItem;