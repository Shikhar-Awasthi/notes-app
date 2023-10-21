import React, { useContext, useState } from "react";
import { MdDelete, MdDone } from "react-icons/md";
import NoteContext from "../NoteContext";

const style = { height: "100%", border: "none", outline: "none", backgroundColor: "#ff7676", color: "#000", resize: "none" };
function Note({ text, date, delfn, id }) {
  const [edit, setEdit] = useState(false);
  const [edited, setEdited] = useState(text);
  const editNote = () => setEdit(true);

  const { updateNote } = useContext(NoteContext);
  const update = () => {
    setEdit(false);
    updateNote(id, edited);
  };

  return (
    <div className="note">
      {edit ? <textarea value={edited} onChange={(e) => setEdited(e.target.value)} style={style} autoFocus /> : <p onDoubleClick={editNote}>{text}</p>}
      <p className="note-footer">
        {date} {edit ? <MdDone className="icon" size="16px" onClick={update} /> : <MdDelete className="icon" size="16px" onClick={delfn} />}
      </p>
    </div>
  );
}

export default Note;
