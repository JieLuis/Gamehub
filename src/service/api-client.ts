import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2b80d0ef3e704da7a12e2d6c95f0bf4d",
  },
});
