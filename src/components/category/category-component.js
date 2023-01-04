import CategoryItems from "../category-item/catrgory-item.component";
import { CategoriesContainer } from "./category-component-styles";

const category = ({ directory }) => {
  return (
    <CategoriesContainer>
      {directory.map((category) => (
        <CategoryItems key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
};

export default category;
