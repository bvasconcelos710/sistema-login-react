import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.homologation.cliqdrive.com.br",
});

api.defaults.headers.common['Accept'] = 'application/json;version=v1_web';
api.defaults.headers.common['Content-Type'] = 'application/json';

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);