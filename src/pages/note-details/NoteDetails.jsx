import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NoteForm from "../../components/not-form/NoteForm";
import { notesSelector } from "../../store/note/note-slice";
import details from "./details.module.css";

const NoteDetails = () => {
  const { id } = useParams();
  const [editNoteMode, setEditNoteMode] = useState(false);
  const note = useSelector(notesSelector).find(
    (n) => n.id === Number.parseInt(id)
  );

  if (!note) {
    return <p>Loading...</p>;
  }

  return (
    <div className={details.container}>
      <NoteForm
        noteTitle={note.title}
        isEditable={editNoteMode}
        editableNote={note}
        handleDelete={() => console.log("delete")}
        handleEdit={() => setEditNoteMode((prev) => !prev)}
        handleSubmit={() => console.log("submit")}
      />
    </div>
  );
};

export default NoteDetails;
