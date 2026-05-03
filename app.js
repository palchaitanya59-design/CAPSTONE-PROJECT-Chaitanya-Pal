import React, { useState } from "react";
import ProductList from "./components/ProductList";
import productsData from "./data/products";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>Fashionzone</h1>
      <h3>Cart Items: {cart.length}</h3>

      <ProductList 
        products={productsData} 
        addToCart={addToCart} 
      />
    </div>
  );
}

export default App;