import ProductCards from "../product-cards/product-cards.component";
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";

const categoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCards key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default categoryPreview;
