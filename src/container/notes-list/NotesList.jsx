import React from "react";
import style from "./list.module.css";
import NoteCard from "../../components/card/NoteCard";

const NotesList = ({ notes, handleClick, handleDelete }) => {
  return (
    <div
      className={`row justify-content-center ${style.container}`}
      style={{ width: "100vw" }}
    >
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          title={note.title}
          subTitle={note.created_at}
          content={note.content}
          clickActionHandler={() => handleClick(note)}
          deleteActionHandler={() => handleDelete(note)}
        />
      ))}
    </div>
  );
};

export default NotesList;
