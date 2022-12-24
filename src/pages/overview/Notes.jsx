import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NotesList from "../../container/notes-list/NotesList";
import { notesSelector } from "../../store/note/note-slice";
import style from "./notes.module.css";

const Notes = () => {
  const notes = useSelector(notesSelector);
  const navigate = useNavigate();

  const handleClick = (note) => navigate(`note/${note.id}`);
  const handleDelete = (note) => alert(`Delete note ${note.id}`);

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
