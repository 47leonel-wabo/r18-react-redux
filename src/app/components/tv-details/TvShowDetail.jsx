import React from "react";
import RatingStar from "../rating/RatingStar";
import detailStyle from "./detail.module.css";

const TvShowDetail = ({ tvShow }) => {
  return (
    <div className={detailStyle.container}>
      <div className={detailStyle.title}>{tvShow.name}</div>
      <div className={detailStyle.rating_vote}>
        <RatingStar rating={tvShow.vote_average / 2} />
        <div className={detailStyle.average}>{tvShow.vote_average / 2}/5</div>
      </div>
      <div className={detailStyle.overview}>{tvShow.overview}</div>
    </div>
  );
};

export default TvShowDetail;
