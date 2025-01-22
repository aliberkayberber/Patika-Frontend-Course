import React from "react";
function Product({ product, balance, onBuy, onSell }) {
  const { name, price, img, quantity } = product;

  return (
    <div style={{ border: "1px solid #ddd", padding: "20px", margin: "10px", width: "200px", textAlign: "center" }}>
      <img src={img} alt={name} style={{ width: "100px", height: "100px" }} />
      <h3>{name}</h3>
      <p>Fiyat: ${price.toLocaleString()}</p>
      <p>Adet: {quantity}</p>
      <button onClick={onBuy} disabled={balance < price}>
        Buy
      </button>
      <button onClick={onSell} disabled={quantity === 0}>
        Sell
      </button>
    </div>
  );
}

export default Product;