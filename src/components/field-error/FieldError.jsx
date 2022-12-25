import React from "react";
import style from "./field-error.module.css";

const FieldError = ({ message }) => {
  return <span className={`${style.container}`}>{message}</span>;
};

export default FieldError;
