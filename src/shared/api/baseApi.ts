import axios, { type AxiosInstance } from 'axios';
import { API_URL } from '../../const/env';

export interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

export const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000
});

// api.interceptors.request.use((config) => {
//   if (!config.headers) {
//     config.headers = new AxiosHeaders();
//   }

//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.set('Authorization', `Bearer ${token}`);
//   }

//   return config;
// });

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       console.warn('Неавторизован — делаем редирект на логин');
//     }
//     return Promise.reject(error);
//   }
// );
