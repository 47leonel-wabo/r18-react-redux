// import axios from "axios";
import { FAKE } from "./fake";
// import {BASE_API_URL, API_KEY} from './config'

export class TVShowAPI {
  static async fetchPopular() {
    // const response = await axios.get(
    //   `${BASE_API_URL}tv/popular?api_key=${API_KEY}`
    // );
    // return response.data.results;
    return FAKE;
  }
}
