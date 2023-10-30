import React, { useContext } from "react";
import AddNote from "./AddNote";
import Note from "./Note";
import NoteContext from "../NoteContext";

function NotesList() {
  const { notes, note, addNote, search, setNote, deleteNote } = useContext(NoteContext);
  return (
    <div className="notes-list">
      {notes
        .filter((n) => n.text.toLowerCase().includes(search.toLowerCase()))
        .map((n) => (
          <Note key={n.id} id={n.id} text={n.text} date={n.date} delfn={() => deleteNote(n.id)} />
        ))}
      <AddNote addNote={addNote} note={note} setNote={setNote} />
    </div>
  );
}

export default NotesList;
