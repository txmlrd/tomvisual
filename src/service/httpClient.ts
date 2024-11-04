import axios, { AxiosRequestConfig } from 'axios';

import { FetchResponse } from '@/types';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // params: {
  //   apikey: process.env.API_KEY,
  // },
  headers: {
    'Content-Type': 'application/json',
  },
});

class HttpClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((response) => response.data);
  };

  get = (id: number | string, config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<{ data: T }>(`${this.endpoint}/${id}`, config)
      .then((response) => response.data.data);
  };
}

export default HttpClient;
