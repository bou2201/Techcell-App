import axios, { AxiosInstance, HttpStatusCode, InternalAxiosRequestConfig } from 'axios';
import { TECHCELL_API } from '@env';
import { getAsyncStorage, removeAsyncStorage, saveAsyncStorage } from '@utils/storage.util';
import { ETechcellApis } from '@constants/enum.const';
import { CUser } from '@models/user.model';

const instance: AxiosInstance = axios.create({
  baseURL: TECHCELL_API,
  timeout: 4000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const user = await getAsyncStorage('user', true);
    if (user && user?.accessToken) {
      config.headers.Authorization = `Bearer ${user?.accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.resolve(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const prevRequest = error.config;
    const status = error.response?.status;

    if (status === HttpStatusCode.Unauthorized) {
      const { refreshToken } = await getAsyncStorage('user', true);

      if (!refreshToken) {
        return Promise.reject(error);
      }

      try {
        const { data } = await instance.post<CUser>(`${ETechcellApis.Auth}/refresh-token`, {
          refreshToken,
        });
        await saveAsyncStorage('user', data);

        prevRequest.headers.Authorization = `Bearer ${data.accessToken}`;

        return instance(prevRequest);
      } catch (error) {
        removeAsyncStorage('user');
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
);

export default instance;
