import { useState, useEffect } from "react";
import { Empty, NoteList, AddNote, Search } from "./components";
import "./styles/ToDoList.module.css";

export default function ToDoList() {
  const [notes, setNotes] = useState(() => {
    const value = localStorage.getItem("notes");
    return value !== null ? JSON.parse(value) : [];
  });
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [filteredCategory, setFilteredCategory] = useState(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function handleFormSubmit(event) {
    event.preventDefault();
    if (!name) {
      return alert("Please, enter a name");
    } else if (!category) {
      return alert("Please, choose a category");
    } else if (name.length >= 500) {
      return alert("Too long text");
    }
    setNotes([
      ...notes,
      {
        id: notes.length + 1,
        name,
        category,
      },
    ]);
    setName("");
    setCategory("");
  }

  const handleNotesFilter = (selectedCategory = " ") => {
    setFilteredCategory(selectedCategory);
  };

  const filteredNotes = filteredCategory
    ? notes.filter((note) => note.category === filteredCategory)
    : notes;

  const handleEditComplete = (id, newNote) => {
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, name: newNote } : note))
    );
  };

  const handleNameChange = (event) => setName(event.target.value);
  const handleCategoryChange = (event) => setCategory(event.target.value);

  const handleDeleteClick = (id) => {
    if (confirm("Are you sure you want to delete the record?")) {
      setNotes(notes.filter((note) => note.id !== id));
    }
  };

  return (
    <main>
      <h1>TODO LIST</h1>
      <Search onSearch={handleNotesFilter} />
      {filteredNotes.length === 0 ? (
        <Empty />
      ) : (
        <NoteList
          notes={filteredNotes}
          onDeleteClick={handleDeleteClick}
          onEditComplete={handleEditComplete}
        />
      )}
      <AddNote
        name={name}
        category={category}
        onFormSubmit={handleFormSubmit}
        onNameChange={handleNameChange}
        onCategoryChange={handleCategoryChange}
      />
    </main>
  );
}
