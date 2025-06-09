import { createContext, useState } from "react";
import productsData from "../data/products";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  return (
    <ProductContext.Provider
      value={{ products, category, setCategory, sortOrder, setSortOrder }}
    >
      {children}
    </ProductContext.Provider>
  );
};
