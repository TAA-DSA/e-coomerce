import { useContext } from "react";

import { ProductsContext } from "../../../contexts/products.context";
import ProductCards from "../../../components/product-cards/product-cards.component";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCards key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
