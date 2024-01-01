import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2b80d0ef3e704da7a12e2d6c95f0bf4d",
  },
});

class APIClient<T> {
  constructor(public endpoint: string) {}

  getAll = (config: AxiosRequestConfig): Promise<FetchResponse<T>> => {
    return axiosInstance.get(this.endpoint, config).then((res) => res.data);
  };
}

export default APIClient;
