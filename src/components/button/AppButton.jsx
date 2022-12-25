import React from "react";
import style from "./btn.module.css";

const AppButton = ({ children, action, disabled_ = false }) => {
  return (
    <button className={style.container} onClick={action} disabled={disabled_}>
      {children}
    </button>
  );
};

export default AppButton;
