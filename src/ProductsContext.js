// ProductsContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://vrudali28.github.io/ProductsFolder/products.json"
      );
      const jsonData = await response.json();
      setProducts(
        jsonData.products.map((product) => ({ ...product, quantity: 0 }))
      );
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const updateQuantity = (index, quantity) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity = parseInt(quantity);
    setProducts(updatedProducts);
  };

  const calculateTotal = () => {
    const totalQuantity = products.reduce(
      (total, product) => total + product.quantity,
      0
    );
    const totalAmount = products.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );
    return { totalQuantity, totalAmount };
  };

  // Calculate totals whenever products change
  const totals = calculateTotal();

  return (
    <ProductsContext.Provider
      value={{ products, updateQuantity, totals }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
