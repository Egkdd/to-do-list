import Note from "./Note.jsx";
import styles from "../styles/NoteList.module.css";

export default function NoteList(props) {
  return (
    <ul className={styles.list}>
      {props.notes.map((note) => (
        <li key={note.id}>
          <Note details={note} />
          <button onClick={() => props.onDeleteClick(note.id)}>
            <img src="src/assets/trash.svg" alt="" />
          </button>
        </li>
      ))}
    </ul>
  );
}
