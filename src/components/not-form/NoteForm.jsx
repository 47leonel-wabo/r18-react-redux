import React, { useState } from "react";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import AppButton from "../button/AppButton";
import style from "./note-form.module.css";

const NoteForm = ({ title, handleEdit, handleDelete, handleSubmit }) => {
  const [note, setNote] = useState({ title: "", content: "" });
  const [disableBtn, setDisableBtn] = useState(true);
  const [formErrors, setFormErrors] = useState({ title: "", content: "" });

  function handleValueChange(event) {
    setNote((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  function formInputValidation() {}

  function submit() {
    handleSubmit({
      ...note,
      created_at: new Date().toLocaleDateString(),
    });
    setNote({ title: "", content: "" });
  }

  const ActionIcons = (
    <>
      <div className="col-1">
        {handleEdit && <PencilFill className={style.icon} />}
      </div>
      <div className="col-1">
        {handleDelete && <TrashFill className={style.icon} />}
      </div>
    </>
  );

  const TitleInput = (
    <>
      <label htmlFor="note-title" className="form-label">
        Title
      </label>
      <input
        type="text"
        id="note-title"
        onChange={handleValueChange}
        name="title"
        value={note.title}
        className="form-control"
      />
    </>
  );

  const ContentInput = (
    <>
      <label htmlFor="note-content" className="form-label">
        Content
      </label>
      <textarea
        value={note.content}
        type="text"
        onChange={handleValueChange}
        id="note-content"
        name="content"
        className="form-control"
        rows={5}
      />
    </>
  );

  const FormButton = (
    <div className={style.btn}>
      <AppButton action={submit}>Submit</AppButton>
    </div>
  );
  return (
    <div className={style.container}>
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h3 className="mb-3">{title}</h3>
        </div>
        {ActionIcons}
      </div>
      <div className="mb-3 col-xs-12 col-md-4">{TitleInput}</div>
      <div className="mb-3">{ContentInput}</div>
      {handleSubmit && FormButton}
    </div>
  );
};

export default NoteForm;
