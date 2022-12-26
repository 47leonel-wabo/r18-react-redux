import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NoteApi from "../../api/note-api";
import NoteForm from "../../components/not-form/NoteForm";
import { notesSelector, updateNote } from "../../store/note/note-slice";
import details from "./details.module.css";

const NoteDetails = () => {
  const { id } = useParams();
  const [editNoteMode, setEditNoteMode] = useState(false);
  const note = useSelector(notesSelector).find(
    (n) => n.id === Number.parseInt(id)
  );
  const dispatch = useDispatch();

  async function handleNoteUpdate(targetedNote) {
    const updatedNote = await NoteApi.updateNotById(note.id, targetedNote);
    dispatch(updateNote(updatedNote));
    setEditNoteMode(false);
  }

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
        handleSubmit={handleNoteUpdate}
      />
    </div>
  );
};

export default NoteDetails;
