import { useEffect, useState } from "react";
import { IMG_SERVER } from "../api/config";
import { TVShowAPI } from "../api/tv-show-api";
import "./App.css";
import TvShowDetail from "./components/tv-details/TvShowDetail";
import style from "./style.module.css";

function App() {
  const [currentTvShow, setCurrentTvShow] = useState();

  async function fetchMostPopular() {
    const results = await TVShowAPI.fetchPopular();
    if (results.length > 0) setCurrentTvShow(results[0]);
  }

  useEffect(() => {
    fetchMostPopular();
  }, []);

  return (
    <div
      className={style.container}
      style={{
        background: currentTvShow
          ? `linear-gradient(rgba(0, 0, 0, .55),rgba(0, 0, 0, .55)), url("${IMG_SERVER}${currentTvShow.backdrop_path}") no-repeat center / cover`
          : "#3e3e3e",
      }}
    >
      <div className={style.header}>
        <div className="row">
          <div className="col-4">
            <div>LOGO</div>
            <div>Subtitle</div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <input style={{ width: "100%" }} type="text" />
          </div>
        </div>
      </div>
      <div className={style.details}>
        <div className={style.overview}>
          {currentTvShow && <TvShowDetail tvShow={currentTvShow} />}
        </div>
      </div>
      <div className={style.recommendations}>Recommendations</div>
    </div>
  );
}

export default App;
