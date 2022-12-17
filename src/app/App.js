import { useEffect, useState } from "react";
import { IMG_SERVER } from "../api/config";
import { TVShowAPI } from "../api/tv-show-api";
import "./App.css";
import TvLogo from "./components/logo/TvLogo";
import SearchBar from "./components/search-bar/SearchBar";
import TvShowDetail from "./components/tv-details/TvShowDetail";
import TvShowItem from "./components/tv-show/TvShowItem";
import style from "./style.module.css";

function App() {
  const [currentTvShow, setCurrentTvShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  async function fetchMostPopular() {
    const results = await TVShowAPI.fetchPopular();
    if (results.length > 0) setCurrentTvShow(results[0]);
  }

  const fetchRecommendations = async (tvId) => {
    const resultList = await TVShowAPI.fetchRecommendations(tvId);
    if (resultList.length > 0) setRecommendationList(resultList.slice(0, 10));
  };

  async function handleSearch(keyWords) {
    const results = await TVShowAPI.tvShowSearch(keyWords);
    if (results.length > 0) setCurrentTvShow(results[0]);
  }

  const updateCurrentTvShow = (tvShow) => {
    setCurrentTvShow(tvShow);
  };

  useEffect(() => {
    fetchMostPopular();
  }, []);

  useEffect(
    function () {
      if (currentTvShow) fetchRecommendations(currentTvShow.id);
    },
    [currentTvShow]
  );

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
            <TvLogo />
          </div>
          <div className="col-sm-12 col-lg-4">
            <SearchBar handleChange={handleSearch} />
          </div>
        </div>
      </div>
      <div className={style.details}>
        <div className={style.overview}>
          {currentTvShow && <TvShowDetail tvShow={currentTvShow} />}
        </div>
      </div>
      <div className={style.recommendations}>
        {recommendationList &&
          recommendationList.map((tvShowElement) => (
            <TvShowItem
              key={tvShowElement.id}
              tvShow={tvShowElement}
              onClick_={updateCurrentTvShow}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
