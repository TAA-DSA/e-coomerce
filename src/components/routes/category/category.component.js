import { CategoriesContainer, Title } from "./category.styles";

import { useParams } from "react-router-dom";

import { useContext, useState, useEffect, Fragment } from "react";

import { CategoriesContext } from "../../../contexts/categories.context";

import ProductCard from "../../product-cards/product-cards.component";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoriesContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoriesContainer>
    </Fragment>
  );
};

export default Category;
