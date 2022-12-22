import React from "react";
import style from "./logo.module.css";

const AppLogo = () => {
  return (
    <div className={style.container}>
      <span className={style.title}>Spend Tracker</span>
      <span className={style.subtitle}>Spend responsibly my friend!</span>
    </div>
  );
};

export default AppLogo;
