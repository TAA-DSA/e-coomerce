import CategoryItems from "../category-item/catrgory-item.component";
import "../category/category-component-styles.scss";

const category = ({ directory }) => {
  return (
    <div className="categories-container">
      {directory.map((category) => (
        <CategoryItems key={category.id} category={category} />
      ))}
    </div>
  );
};

export default category;
