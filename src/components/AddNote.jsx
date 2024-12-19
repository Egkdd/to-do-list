import styles from "../styles/AddNote.module.css";
import categories from "../data/categories.js";

export default function AddNote({
  onFormSubmit,
  name,
  category,
  onNameChange,
  onCategoryChange,
}) {
  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      <input
        className={styles.title}
        type="text"
        value={name}
        onChange={onNameChange}
        placeholder="Input your note..."
      />
      <select
        className={styles.categories}
        value={category}
        onChange={onCategoryChange}
      >
        <option value={""}>Category</option>
        {categories.map((category) => (
          <option value={category.value}>{category.name}</option>
        ))}
      </select>
      <button className={styles.button} type="submit">
        +
      </button>
    </form>
  );
}
