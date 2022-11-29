import Categories from "../Data/data-category";
import CategoryItems from "../category-item/catrgory-item.component";
import "../category/category-component-styles.scss";

const category = () => {
  return (
    <div className="categories-container">
      {Categories.map((category) => (
        <CategoryItems key={category.id} category={category} />
      ))}
    </div>
  );
};

export default category;
