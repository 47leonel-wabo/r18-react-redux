import React from "react";
import style from "./logo.module.css";

const AppLogo = ({ navigateHome }) => {
  return (
    <div className={style.container} onClick={navigateHome}>
      <span className={style.title}>Note Manager</span>
      <span className={style.subtitle}>Organize and structure your notes</span>
    </div>
  );
};

export default AppLogo;
