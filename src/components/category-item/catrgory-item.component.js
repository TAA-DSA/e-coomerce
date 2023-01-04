import { useNavigate } from "react-router-dom";
import {
  CategoryContainer,
  BackgroundImage,
  CategoryBodyContainer,
} from "./category-items-style";

const CategoryItems = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const navigateHandler = () => navigate(route);

  return (
    <CategoryContainer onClick={navigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};

export default CategoryItems;
