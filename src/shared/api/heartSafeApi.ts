import axios from "axios";
import snakecaseKeys from "snakecase-keys";
import camelcaseKeys from "camelcase-keys";

const baseURL: string = import.meta.env.VITE_API_BASE_URL;

export const heartSafeApi = axios.create({
  baseURL,
});

heartSafeApi.interceptors.request.use(
  function (config) {
    config.data = snakecaseKeys(config.data, { deep: true });
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

heartSafeApi.interceptors.response.use(
  function (response) {
    response.data = camelcaseKeys(response.data, { deep: true });
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
