import { useEffect, useState } from "react";
import "./App.css";
import NotesList from "./Components/NotesList";
import Search from "./Components/Search";
import '@fontsource-variable/jetbrains-mono';

function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");
  const [search, setSearch] = useState("");
  
  const addNote = () => {
    if(note.trim()){
      const data = {id: crypto.randomUUID(), text: note.trim(), date: new Date().toLocaleDateString()}
      setNotes(pre => [...pre, data]);
      setNote("");
    }
  }
  const deleteNote = (id) => {
    setNotes(pre => pre.filter(p => p.id !== id));
  }
  useEffect(() => {
    if(notes.length > 0)
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);
  useEffect(() => {
    const n = localStorage.getItem("notes-app");
    if(n) setNotes(JSON.parse(n));
  }, []);

  return (
    <div className="App">
      <Search search={search} setSearch={setSearch} />
      <NotesList notes={notes} note={note} addNote={addNote} search={search} deleteNote={deleteNote} setNote={setNote} />
    </div>
  );
}

export default App;
