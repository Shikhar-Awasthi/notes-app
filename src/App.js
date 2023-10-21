import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Search from "./Components/Search";
import '@fontsource-variable/jetbrains-mono';
import NotesList from "./Components/NotesList";
import NoteContext from "./NoteContext";

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
  const updateNote = (id, edited) => {
    /* const _notes = Array.from(notes);
    const index = _notes.findIndex(n => n.id === id);
    _notes[index].text = edited;
    setNotes(_notes); */
    setNotes(pre => pre.map(p => p.id === id ? {...p, text: edited} : p))
  };
  const value = useMemo(() => ({notes, setNotes, note, setNote, search, setSearch, addNote, deleteNote, updateNote}), [notes, setNotes, note, setNote, search, setSearch, addNote, deleteNote, updateNote]);
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
      <NoteContext.Provider value={value}>
        <Search />
        <NotesList />
      </NoteContext.Provider>
    </div>
  );
}

export default App;
