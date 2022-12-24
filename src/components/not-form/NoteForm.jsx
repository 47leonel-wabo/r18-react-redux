import React from "react";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import AppButton from "../button/AppButton";
import style from "./note-form.module.css";

const NoteForm = ({ title }) => {
  const ActionIcons = (
    <>
      <div className="col-1">
        <PencilFill className={style.icon} />
      </div>
      <div className="col-1">
        <TrashFill className={style.icon} />
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
        name="title"
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
        type="text"
        id="note-content"
        name="content"
        className="form-control"
        rows={5}
      />
    </>
  );

  const FormButton = (
    <div className={style.btn}>
      <AppButton>Submit</AppButton>
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
      {FormButton}
    </div>
  );
};

export default NoteForm;
