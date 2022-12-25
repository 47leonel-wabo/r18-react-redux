import React from "react";
import AppButton from "../button/AppButton";
import { useNavigate } from "react-router-dom";
import AppLogo from "../logo/AppLogo";
import style from "./header.module.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={`row ${style.container}`}>
      <div className={`col-xs-12 col-sm-4 ${style.logo}`}>
        <AppLogo navigateHome={() => navigate("/")} />
      </div>
      <div className={`col-xs-12 col-sm-8 text-end ${style.add}`}>
        {window.location.pathname !== "/note/new" && (
          <AppButton action={() => navigate("/note/new")}>
            Create note
          </AppButton>
        )}
      </div>
    </div>
  );
};

export default Header;
