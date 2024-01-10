import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { TECHCELL_API } from '@env';
import { getAsyncStorage } from '@utils/storage.util';

const instance: AxiosInstance = axios.create({
  baseURL: TECHCELL_API,
  timeout: 4000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const user = getAsyncStorage('auth-store', true);
    // if(user) {
    //   config.headers.Authorization = 'Bearer'
    // }
    return config;
  },
  (error) => {},
);

export default instance
