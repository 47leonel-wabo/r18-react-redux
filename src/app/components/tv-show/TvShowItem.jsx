import React from "react";
import { SMALL_IMG } from "../../../api/config";
import style from "./tvshow.module.css";

const MAX_CHARACTERS = 25;

const TvShowItem = ({ tvShow, onClick_ }) => {
  const handleShowClick = () => {
    onClick_(tvShow);
  };

  return (
    <div className={style.container} onClick={handleShowClick}>
      <img
        src={`${SMALL_IMG}${tvShow.poster_path}`}
        alt={tvShow.name}
        className={style.img}
      />
      <div className={style.title}>
        {tvShow.original_name.length > MAX_CHARACTERS
          ? tvShow.original_name.slice(0, 30) + "..."
          : tvShow.original_name}
      </div>
    </div>
  );
};

export default TvShowItem;
