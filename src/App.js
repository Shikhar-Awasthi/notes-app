import { useEffect, useId, useState } from "react";
import "./App.css";
import {MdDelete} from 'react-icons/md';

function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");
  
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
      <div className="notes-list">
      {notes.map((n) => (
        <div key={n.id} className="note">
          <p>{n.text}</p>
          <p className="note-footer">{n.date} <MdDelete className="icon" onClick={() => deleteNote(n.id)} /> </p>
        </div>
      ))}
      <div className="note note-add">
        <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Write a note"></textarea>
        <div className="note-footer">
          <span>{note.trim().length}/200</span>
          <button className="save-button" onClick={addNote}>save</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
