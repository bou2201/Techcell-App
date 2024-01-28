import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CUser } from '@models/user.model';
import { CLogin } from '@models/auth.model';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginApi } from '@apis/auth.api';
import { HttpStatusCode } from 'axios';
import { removeAsyncStorage, saveAsyncStorage } from '@utils/storage.util';
import { ApiReturn } from '@models/common.model';
import Toast from 'react-native-toast-message';

export type TAuthState = {
  user: CUser | null;
  isLoading: boolean;
  isSignedIn: boolean;
};

export type TAuthAction = {
  // login: (payload: CLogin) => void;
  setAuthenticated: (user: CUser) => void;
  logout: () => void;
  reset: () => void;
};

const initialState: TAuthState = {
  user: null,
  isLoading: false,
  isSignedIn: false,
};

const useAuthStore = create<TAuthState & TAuthAction>()(
  persist(
    immer((set) => ({
      ...initialState,
      setAuthenticated: (user: CUser) => {
        set((state) => {
          state.isLoading = false;
          state.isSignedIn = true;
          state.user = user;
        })
      },
      // login: (payload: CLogin) => {
      //   set((state) => (state.isLoading = true));
      //   try {
      //     const { data, status } = await loginApi(payload);
      //     if (status === HttpStatusCode.Ok) {
      //       set((state) => {
      //         state.user = data;
      //         state.isSignedIn = true;
      //         state.isLoading = false;
      //       });
      //       saveAsyncStorage('user', data);

      //       Toast.show({
      //         type: 'success',
      //         text1: 'Thành công!',
      //         text2: 'Đăng nhập thành công 👋',
      //       });
      //     }
      //   } catch {
      //     set((state) => {
      //       state.user = null;
      //       state.isSignedIn = false;
      //       state.isLoading = false;
      //     });

      //     Toast.show({
      //       type: 'error',
      //       text1: 'Thất bại!',
      //       text2: 'Đăng nhập không thành công!',
      //     });
      //   }
      // },
      logout: () => {
        set((state) => (state.user = null));
        set((state) => (state.isSignedIn = false));
        removeAsyncStorage('user');
      },
      reset: () => {
        set(initialState);
      },
    })),
    {
      name: 'auth-store',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        user: state.user,
      }),
    },
  ),
);

export default useAuthStore;
