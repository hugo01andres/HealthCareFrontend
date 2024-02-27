import axios from "axios";

const baseURL: string = import.meta.env.VITE_API_BASE_URL;

export const heartSafeApi = axios.create({
  baseURL,
});
