import Categories from "./components/Data/data";
import "./components/Styles/categories.styles.scss";

function App() {
  return (
    <div className="categories-container">
      {Categories.map(({ title, id }) => (
        <div key={id} className="category-container">
          <div className="background-image" />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
