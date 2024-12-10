import Note from "./Note.jsx";
import styles from "../styles/NoteList.module.css";

export default function NoteList({ notes, onDeleteClick }) {
  return (
    <ul className={styles.list}>
      {notes.map((note) => (
        <li key={note.id}>
          <Note details={note} />
          <button onClick={() => onDeleteClick(note.id)}>
            <img src="src/assets/trash.svg" alt="Empty" />
          </button>
        </li>
      ))}
    </ul>
  );
}
