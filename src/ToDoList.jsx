import { useState, useEffect } from "react";
import Empty from "./components/Empty";
import NoteList from "./components/NoteList";
import AddNote from "./components/AddNote";
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
    setNotes([...notes, {
        id: notes.length + 1,
        name: name
    }]);
    setName("");
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDeleteClick(id) {
    const confirmDelete = window.confirm("Are you sure you want to delete the record?");
    if(confirmDelete) {
        setNotes(notes.filter(note => note.id !== id));
    }
  }

  return (
    <body>
      <h1>TODO LIST</h1>
      {(notes.length === 0 && <Empty/>) || (notes.length > 0 && <NoteList notes={notes} onDeleteClick={handleDeleteClick}/>)}
      <AddNote name={name} onFormSubmit={handleFormSubmit} onNameChange={handleNameChange}/>
    </body>
  );
}
