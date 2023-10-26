import React, { useContext } from "react";
import { MdSave } from "react-icons/md";
import NoteContext from "../NoteContext";
import { useTranslation } from "react-i18next";

function AddNote() {
  const { note, setNote, addNote } = useContext(NoteContext);
  const { t } = useTranslation();
  return (
    <div className="note note-add">
      <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder={t("write a note")}></textarea>
      <div className="note-footer">
        <span>{note.trim().length}/200</span>
        <MdSave className="save-button" onClick={addNote} color="#fff" size="16px" cursor="pointer" />
      </div>
    </div>
  );
}

export default AddNote;
