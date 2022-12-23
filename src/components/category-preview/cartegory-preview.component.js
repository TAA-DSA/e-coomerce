import ProductCards from "../product-cards/product-cards.component";
import "./category-preview.styles.scss";

const categoryPreview = ({ title, products }) => {
  return (
    <div className="cartegory-preview-container">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCards key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default categoryPreview;
