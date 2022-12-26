import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NoteApi from "../../api/note-api";
import NotesList from "../../container/notes-list/NotesList";
import { deleteNote, notesSelector } from "../../store/note/note-slice";
import style from "./notes.module.css";

const Notes = () => {
  const notes = useSelector(notesSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (note) => navigate(`note/${note.id}`);

  const handleDelete = async (note) => {
    if (window.confirm("Would you want to permanently removed this note")) {
      await NoteApi.deleteNoteById(note.id);
      dispatch(deleteNote(note));
    }

    // navigate("/");
  };

  return (
    <div className={style.container}>
      <NotesList
        notes={notes}
        handleClick={handleClick}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Notes;
