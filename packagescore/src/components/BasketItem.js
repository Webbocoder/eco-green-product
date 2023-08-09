function BasketItem({ item }) {

  return (
    <div>
      <h3>
        {item.companyName} {item.productName}
      </h3>
      <img src={item.image} alt={item.productName} />
      <p>Package Score: {item.packagingScore}</p>
      <p>£{item.price}</p>
    </div>
  );
}

export default BasketItem;