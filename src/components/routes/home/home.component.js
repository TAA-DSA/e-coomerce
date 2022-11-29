import Category from "../../category/category-component";
import Categories from "../../Data/data-category";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Outlet />
      <Category directory={Categories} />
    </div>
  );
};

export default Home;
