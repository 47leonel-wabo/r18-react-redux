import axios from "axios";
import { API_KEY, BASE_API_URL } from "./config";

export class TVShowAPI {
  static async fetchPopular() {
    const response = await axios.get(
      `${BASE_API_URL}tv/popular?api_key=${API_KEY}`
    );
    return response.data.results;
    // return FAKE_TV_SHOW;
  }

  static async fetchRecommendations(tvShowId) {
    const response = await axios.get(
      `${BASE_API_URL}tv/${tvShowId}/recommendations?api_key=${API_KEY}`
    );
    return response.data.results;
    // return FAKE_RECOMMENDATIONS;
  }

  static async tvShowSearch(keyWords) {
    const response = await axios.get(
      `${BASE_API_URL}search/tv?api_key=${API_KEY}&query=${keyWords}`
    );
    return response.data.results;
  }
}
