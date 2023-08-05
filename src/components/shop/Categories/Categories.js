import styles from "./Categories.module.css";

const categories = [
  {
    heading: "iphone & mac",
    cateNames: ["iPhone", "iPod", "Macbook"],
  },
  {
    heading: "wireless",
    cateNames: ["Airpod", "Watch"],
  },
  {
    heading: "other",
    cateNames: ["Mouse", "Keyboard", "Other"],
  },
];

const Categories = () => {
  return (
    <div>
      <h2>Categories</h2>
      <div>
        <h3>Apple</h3>
        <button>All</button>
        {categories.map((category, i) => (
          <div key={i}>
            <h4>{category.heading}</h4>
            {category.cateNames.map((name, i) => (
              <button key={i}>{name}</button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
