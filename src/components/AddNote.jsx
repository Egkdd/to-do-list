import styles from "../styles/AddNote.module.css";

export default function AddNote({ onFormSubmit, name, onNameChange }) {
  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      <input
        className={styles.text}
        type="text"
        value={name}
        onChange={onNameChange}
        placeholder="Input your note..."
      />
      <button className={styles.button} type="submit">
        +
      </button>
    </form>
  );
}
