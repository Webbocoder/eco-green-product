import { Button } from "react-bootstrap";


function BasketItem({ item, removeFromBasket }) {

function packageEmoji(score){
if (score<=2) {
  return "🔴"
} else if(score>2 && score<4) {
  return "🟠"
} else {
  return "🟢"
}
}

  console.log("testing for item", item)

  return (
    <div className="card mb-4 p-2 " style={{ width: "200px", height: "200px" }}>
      <p className="text-xs">
        {item.companyName} {item.productName}

      </p>
      <img src={item.image} alt={item.productName} className="card-img-top img-fluid" style={{ maxHeight: "30%", objectFit: "contain" }}/>
      <p className="text-xs">Packaging: {packageEmoji(item.packagingScore)}</p>
      <p className="text-xs">£{item.price}</p>
      <Button onClick={() => removeFromBasket(item.id) } >
        Delete item
      </Button>

    </div>
  );
}


export default BasketItem;