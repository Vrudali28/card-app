// Totals.js
import React from "react";
import { useProducts } from "./ProductsContext";

function Totals() {
  const { totals } = useProducts();

  return (
    <div className="totals">
      <p>Total Quantity: {totals.totalQuantity}</p>
      <p>Total Amount: ${totals.totalAmount}</p>
    </div>
  );
}

export default Totals;
