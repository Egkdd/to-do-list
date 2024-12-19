import { useState } from "react";
import styles from "../styles/Note.module.css";

export default function Note({ details, onEditComplete, onDeleteClick }) {
  if (!details) return null;

  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(details.name);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      editValidation();
    }
  };

  const editValidation = () => {
    if (editValue.trim() === "") {
      setEditValue(details.name);
    } else {
      onEditComplete(details.id, editValue);
    }
    setIsEditing(false);
  };

  return (
    <div className={styles.note}>
      <div className={styles.record}>
        <input type="checkbox" className={styles.checkbox} />
        {isEditing ? (
          <input
            type="text"
            value={editValue}
            onBlur={editValidation}
            onClick={handleKeyDown}
            onChange={(event) => setEditValue(event.target.value)}
            onKeyDown={handleKeyDown}
            className={styles.editInput}
            autoFocus
          />
        ) : (
          <p onClick={() => setIsEditing(true)}>{details.name}</p>
        )}
      </div>
      <div className={styles.container}>
        <p>{details.category}</p>
        <button onClick={() => setIsEditing(true)}>
          <img src="src/assets/edit.svg" alt="Delete" />
        </button>
        <button onClick={() => onDeleteClick(details.id)}>
          <img src="src/assets/trash.svg" alt="Delete" />
        </button>
      </div>
    </div>
  );
}
