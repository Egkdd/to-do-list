import { useState, useEffect } from "react";
import { Empty, NoteList, AddNote } from "./components";
import "./styles/ToDoList.module.css";

export default function ToDoList() {
  const [notes, setNotes] = useState(() => {
    const value = localStorage.getItem("notes");
    return value !== null ? JSON.parse(value) : [];
  });
  const [name, setName] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function handleFormSubmit(event) {
    event.preventDefault();
    if (!name) {
      return alert("Please, enter a name");
    }
    setNotes([
      ...notes,
      {
        id: notes.length + 1,
        name: name,
      },
    ]);
    setName("");
  }

  const handleNameChange = (event) => setName(event.target.value);

  function handleDeleteClick(id) {
    if (confirm("Are you sure you want to delete the record?")) {
      setNotes(notes.filter((note) => note.id !== id));
    }
  }

  return (
    <main>
      <h1>TODO LIST</h1>
      {notes.length === 0 ? (
        <Empty />
      ) : (
        <NoteList notes={notes} onDeleteClick={handleDeleteClick} />
      )}
      <AddNote
        name={name}
        onFormSubmit={handleFormSubmit}
        onNameChange={handleNameChange}
      />
    </main>
  );
}
