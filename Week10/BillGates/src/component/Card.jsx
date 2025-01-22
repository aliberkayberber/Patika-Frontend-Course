// components/Card.js
import React from "react";

function Card({ products, onSellAll }) {
  const purchasedItems = products.filter((product) => product.quantity > 0);
  const totalSpent = purchasedItems.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="card-container">
      <h2>Your Receipt</h2>
      {purchasedItems.length > 0 ? (
        <div>
          {purchasedItems.map((product) => (
            <p key={product.id}>
              {product.name} x {product.quantity} = $
              {(product.price * product.quantity).toLocaleString()}
            </p>
          ))}
          <h3>Total: ${totalSpent.toLocaleString()}</h3>
          <button className="sell-all-button" onClick={onSellAll}>
            Sell All
          </button>
        </div>
      ) : (
        <p>Nothing purchased yet.</p>
      )}
    </div>
  );
}

export default Card;