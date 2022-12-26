import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import NoteApi from "../../api/note-api";
import SearchBar from "../../components/search-bar/SearchBar";
import NotesList from "../../container/notes-list/NotesList";
import { deleteNote, notesSelector } from "../../store/note/note-slice";
import style from "./notes.module.css";

const Notes = () => {
  const notes = useSelector(notesSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchTerms, setSearchTerms] = useState("");

  const handleClick = (note) => navigate(`note/${note.id}`);

  const handleDelete = async (note) => {
    if (window.confirm("Would you want to permanently removed this note")) {
      await NoteApi.deleteNoteById(note.id);
      dispatch(deleteNote(note));
    }
  };

  const handleSearch = (event) => {
    setSearchTerms(event.target.value.trim());
  };
  const filteredNoteList = notes.filter(
    (note) =>
      note.title.trim().toLowerCase().includes(searchTerms.toLowerCase()) ||
      note.content.trim().toLowerCase().includes(searchTerms.toLowerCase())
  );
  if (notes.length === 0) {
    return (
      <div className={style.empty}>
        <NavLink to={`/note/new`}>Create note</NavLink>
        <p>No notes to display, please create new note</p>
      </div>
    );
  }

  return (
    <>
      <SearchBar handleChange={handleSearch} />
      <div className={style.container}>
        <NotesList
          notes={filteredNoteList}
          handleClick={handleClick}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default Notes;
