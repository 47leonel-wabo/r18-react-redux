import React, { useState } from "react";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import { ValidatorService } from "../../services/validator";
import AppButton from "../button/AppButton";
import FieldError from "../field-error/FieldError";
import style from "./note-form.module.css";

const VALIDATOR = {
  title: (value) =>
    ValidatorService.min(value, 3) || ValidatorService.max(value, 20),
  content: (value) =>
    ValidatorService.min(value, 3) || ValidatorService.max(value, 255),
};

const NoteForm = ({
  noteTitle,
  isEditable = true,
  editableNote,
  handleEdit,
  handleDelete,
  handleSubmit,
}) => {
  const [note, setNote] = useState({
    title: editableNote?.title || "",
    content: editableNote?.content || "",
  });
  const [formErrors, setFormErrors] = useState({
    title: editableNote?.title ? undefined : true,
    content: editableNote?.content ? undefined : true,
  });

  function handleValueChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setNote((prev) => ({ ...prev, [inputName]: inputValue }));
    formInputValidation(inputValue, inputName);
  }

  function formInputValidation(value, inputName) {
    setFormErrors((prev) => ({
      ...prev,
      [inputName]: VALIDATOR[inputName](value),
    }));
  }

  function disableBtn() {
    for (const name in formErrors) {
      if (formErrors[name]) {
        return true;
      }
    }
    return false;
  }

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
        {handleEdit && (
          <PencilFill onClick={handleEdit} className={style.icon} />
        )}
      </div>
      <div className="col-1">
        {handleDelete && (
          <TrashFill onClick={handleDelete} className={style.icon} />
        )}
      </div>
    </>
  );

  const TitleInput = (
    <div className="mb-5">
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
      <FieldError message={formErrors.title} />
    </div>
  );

  const ContentInput = (
    <div className="mb-5">
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
      <FieldError message={formErrors.content} />
    </div>
  );

  const FormButton = (
    <div className={style.btn}>
      <AppButton action={submit} disabled_={disableBtn()}>
        Submit
      </AppButton>
    </div>
  );
  return (
    <div className={style.container}>
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h3 className="mb-3">{isEditable ? `Edit note mode` : noteTitle}</h3>
        </div>
        {ActionIcons}
      </div>
      <div className="mb-3 col-xs-12 col-md-4">{isEditable && TitleInput}</div>
      <div className="mb-3">
        {isEditable ? ContentInput : <pre>{editableNote.content}</pre>}
      </div>
      {handleSubmit && isEditable && FormButton}
    </div>
  );
};

export default NoteForm;
