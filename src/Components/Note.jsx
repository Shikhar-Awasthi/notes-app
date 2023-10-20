import React from "react";
import { MdDelete } from "react-icons/md";

function Note({ text, date, delfn }) {
  return (
    <div className="note">
      <p>{text}</p>
      <p className="note-footer">
        {date} <MdDelete className="icon" size="16px" onClick={delfn} />
      </p>
    </div>
  );
}

export default Note;
