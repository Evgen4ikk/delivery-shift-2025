import axios from 'axios';

import { AUTH_TOKEN } from '../consts/localstorage';

const API_URL = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: API_URL,
  validateStatus: () => true
});

api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem(AUTH_TOKEN)}`;
  }
  return config;
});
