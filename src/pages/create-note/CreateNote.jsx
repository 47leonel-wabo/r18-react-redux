import React from "react";
import NoteForm from "../../components/not-form/NoteForm";

const CreateNote = () => {
  return (
    <div className="p-4 mt-3">
      <NoteForm title={`Note title here`} />
    </div>
  );
};

export default CreateNote;
