function BasketItem({ item }) {

  return (
    <div className="card mb-4 p-2 " style={{ width: "200px", height: "200px" }}>
      <p className="text-xs">
        {item.companyName} {item.productName}
      </p>
      <img src={item.image} alt={item.productName} className="card-img-top img-fluid" style={{ maxHeight: "30%", objectFit: "contain" }}/>
      <p className="text-xs">Package Score: {item.packagingScore}</p>
      <p className="text-xs">£{item.price}</p>
    </div>
  );
}

export default BasketItem;