// ProductList.js
import React from "react";
import { useProducts } from "./ProductsContext";

function ProductList() {
  const { products, updateQuantity, calculateTotal } = useProducts();

  return (
    <div className="card-container">
      {products?.map((product, index) => (
        <div className="card" key={index}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <img className="image" src={product.images} alt={product.title} />
          <h4>We can set the quantity here</h4>
          <input
            type="number"
            min="0"
            value={product.quantity}
            onChange={(e) => updateQuantity(index, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
