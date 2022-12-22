import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments } from "../components/utils/firebase/firebase.utils";

import SHOP_DATA from "../components/Data/shop-data";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    addCollectionAndDocuments("categories", SHOP_DATA);
  }, []);

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
