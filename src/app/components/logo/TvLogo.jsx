import React from "react";
import { TvFill } from "react-bootstrap-icons";
import logoStyle from "./logo.module.css";

const TvLogo = () => {
  return (
    <div className={logoStyle.container}>
      <div className={logoStyle.title}>
        <TvFill />
        <span>TV Show</span>
      </div>
      <div className={logoStyle.subtitle}>enjoy the show</div>
    </div>
  );
};

export default TvLogo;
