import axios from "axios";
import { store } from "../stores/index";
const axiosClient = axios.create({
  headers: {
    "Content-Type": "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

axiosClient.interceptors.request.use(async (config) => {
  const token = store.getState().auth.token;
  if (
    config.url.indexOf("/auth/login") >= 0 ||
    config.url.indexOf("/auth/register") >= 0
  ) {
    return config;
  }
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    throw error.response.data;
  }
);

export default axiosClient;
