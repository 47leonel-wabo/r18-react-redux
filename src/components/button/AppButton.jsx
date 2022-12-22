import React from "react";
import style from "./btn.module.css";

const AppButton = ({ children, action }) => {
  return (
    <button className={style.container} onClick={action}>
      {children}
    </button>
  );
};

export default AppButton;
