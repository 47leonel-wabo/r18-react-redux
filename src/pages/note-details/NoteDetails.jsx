import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NoteForm from "../../components/not-form/NoteForm";
import { notesSelector } from "../../store/note/note-slice";
import details from "./details.module.css";

const NoteDetails = () => {
  const { id } = useParams();
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
        isEditable={false}
        editableNote={note}
        handleDelete={() => console.log("delete")}
        handleEdit={() => console.log("edit")}
        handleSubmit={() => console.log("submit")}
      />
    </div>
  );
};

export default NoteDetails;
