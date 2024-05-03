// Cart.js
import React from "react";
import { useProducts } from "./ProductsContext";

function Cart() {
  const { totals } = useProducts();

  return (
    <div className="cart">
      <h2>Cart</h2>
      <p>Total Quantity: {totals.totalQuantity}</p>
      <p>Total Amount: ${totals.totalAmount}</p>
    </div>
  );
}

export default Cart;
