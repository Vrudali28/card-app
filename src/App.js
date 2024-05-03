// App.js
import React from "react";
import { ProductsProvider } from "./ProductsContext";
import "./App.css";
import ProductList from "./ProductList";

function App() {
  return (
    <ProductsProvider>
      <div className="App">
        <h3>Responsive Cards</h3>
        <ProductList />
      </div>
    </ProductsProvider>
  );
}

export default App;
