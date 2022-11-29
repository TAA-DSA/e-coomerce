import Categories from "./components/Data/category-component";
import CategoryItems from "./components/category-item/catrgory-item.component";

function App() {
  return (
    <div className="categories-container">
      {Categories.map((category) => (
        <CategoryItems key={category.id} category={category} />
      ))}
    </div>
  );
}

export default App;
