import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import NoteApi from "../../api/note-api";
import NoteForm from "../../components/not-form/NoteForm";
import { addNote } from "../../store/note/note-slice";

const CreateNote = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function saveNote(noteData) {
    const createdNote = await NoteApi.createNote(noteData);
    dispatch(addNote(createdNote));
    navigate("/");
  }

  return (
    <div className="p-4 mt-3">
      <NoteForm title={`Create new note`} handleSubmit={saveNote} />
    </div>
  );
};

export default CreateNote;
