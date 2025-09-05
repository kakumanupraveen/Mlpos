import axios from 'axios';

export const API_BASE = 'http://localhost:8000';

export const http = axios.create({
  baseURL: API_BASE,
  withCredentials: true,
});
