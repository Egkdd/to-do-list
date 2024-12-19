import Note from "./Note.jsx";
import styles from "../styles/NoteList.module.css";

export default function NoteList({ notes, onDeleteClick, onEditComplete }) {
  return (
    <ul className={styles.list}>
      {notes.map((note) => (
        <li key={note.id}>
          <Note
            details={note}
            onEditComplete={onEditComplete}
            onDeleteClick={onDeleteClick}
          />
        </li>
      ))}
    </ul>
  );
}
