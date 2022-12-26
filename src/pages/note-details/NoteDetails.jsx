import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import NoteApi from "../../api/note-api";
import NoteForm from "../../components/not-form/NoteForm";
import {
  deleteNote,
  notesSelector,
  updateNote,
} from "../../store/note/note-slice";
import details from "./details.module.css";

const NoteDetails = () => {
  const { id } = useParams();
  const [editNoteMode, setEditNoteMode] = useState(false);
  const note = useSelector(notesSelector).find(
    (n) => n.id === Number.parseInt(id)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleNoteUpdate(targetedNote) {
    const updatedNote = await NoteApi.updateNotById(note.id, targetedNote);
    dispatch(updateNote(updatedNote));
    setEditNoteMode(false);
  }

  async function handleDelete() {
    if (window.confirm("Would you want to permanently removed this note")) {
      await NoteApi.deleteNoteById(note.id);
      dispatch(deleteNote(note));
      navigate("/");
    }
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
        handleDelete={handleDelete}
        handleEdit={() => setEditNoteMode((prev) => !prev)}
        handleSubmit={handleNoteUpdate}
      />
    </div>
  );
};

export default NoteDetails;
