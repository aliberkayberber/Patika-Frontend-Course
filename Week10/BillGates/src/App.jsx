// App.js
import React, { useState } from "react";
import Product from "./component/Product";
import Card from "./component/Card";
import data from "../data.json";

function App() {
  const [balance, setBalance] = useState(100000000000); // Başlangıç bakiyesi $100,000,000,000
  const [products, setProducts] = useState(data);

  // Ürün satın alma işlemi
  const handleBuy = (id, price) => {
    if (balance >= price) {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
      setBalance(balance - price);
    }
  };

  // Ürün satma işlemi
  const handleSell = (id, price) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
    setBalance(balance + price);
  };

  // Tüm ürünleri satma işlemi
  const handleSellAll = () => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.quantity > 0) {
          setBalance((prevBalance) => prevBalance + product.price * product.quantity);
          return { ...product, quantity: 0 };
        }
        return product;
      })
    );
  };

  return (
    <div className="app-container">
      <h1>Bill Gates</h1>
      <h2>Kalan Bakiye: ${balance.toLocaleString()}</h2>
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            balance={balance}
            onBuy={() => handleBuy(product.id, product.price)}
            onSell={() => handleSell(product.id, product.price)}
          />
        ))}
      </div>
      <Card products={products} onSellAll={handleSellAll} />
    </div>
  );
}

export default App;