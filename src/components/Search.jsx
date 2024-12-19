import styles from "../styles/Search.module.css";
import categories from "../data/categories.js";

export default function Search({ onSearch }) {
  return (
    <div className={styles.search}>
      <button
        key={""}
        className={styles.categories}
        onClick={() => onSearch("")}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category.value}
          className={styles.categories}
          onClick={() => onSearch(category.value)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
