// App.js
import React from "react";
import { ProductsProvider } from "./ProductsContext";
import ProductList from "./ProductList";
import Cart from "./Cart";
import "./App.css";
function App() {
  return (
    <ProductsProvider>
      
      <div className="App">
      
        <ProductList />
        <Cart />
      </div>
    </ProductsProvider>
  );
}

export default App;
