import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CUser } from '@models/user.model';
import { CLogin } from '@models/auth.model';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginApi } from '@apis/auth.api';
import Toast from 'react-native-toast-message';
import { HttpStatusCode } from 'axios';
import { removeAsyncStorage, saveAsyncStorage } from '@utils/storage.util';

export type TAuthState = {
  user: CUser | null;
  isLoading: boolean;
  isSignedIn: boolean;
};

export type TAuthAction = {
  login: (payload: CLogin) => void;
  logout: () => void;
};

const initialState: TAuthState = {
  user: null,
  isLoading: false,
  isSignedIn: false,
};

export const useAuthStore = create<TAuthState & TAuthAction>()(
  persist(
    immer((set) => ({
      ...initialState,
      login: async (payload: CLogin) => {
        set((state) => (state.isLoading = true));
        try {
          const { data, status } = await loginApi(payload);
          if (status === HttpStatusCode.Ok) {
            Toast.show({
              type: 'success',
              text1: 'Thành công',
              text2: 'Đăng nhập thành công !',
            });
            set((state) => (state.user = data));
            set((state) => (state.isSignedIn = true));
            saveAsyncStorage('user', data);
          }
        } catch {
          Toast.show({
            type: 'error',
            text1: 'Thất bại',
            text2: 'Đăng nhập thất bại !',
          });
          set((state) => (state.user = null));
          set((state) => (state.isSignedIn = false));
        } finally {
          set((state) => (state.isLoading = false));
        }
      },
      logout: () => {
        set((state) => (state.user = null));
        set((state) => (state.isSignedIn = false));
        removeAsyncStorage('user');
      },
    })),
    {
      name: 'auth-store',
      storage: createJSONStorage(() => AsyncStorage),
      // partialize: (state) => ({
      // })
    },
  ),
);
