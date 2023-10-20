import React from "react";
import { MdSave } from "react-icons/md";

function AddNote({ note, setNote, addNote }) {
  return (
    <div className="note note-add">
      <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Write a note"></textarea>
      <div className="note-footer">
        <span>{note.trim().length}/200</span>
        <MdSave className="save-button" onClick={addNote} color="#fff" size="16px" cursor="pointer" />
      </div>
    </div>
  );
}

export default AddNote;
