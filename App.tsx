import React, { useEffect, useState } from 'react';
import {
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Toast from 'react-native-toast-message';
import 'react-native-gesture-handler';
import { RootRoutes } from '@components/Routes';
import { TechcellProvider } from '@components/Provider';
import toastConfig from '@configs/toast-message.config';

export default function App() {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  useEffect(() => {
    const prepareApp = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Quicksand_400Regular,
          Quicksand_500Medium,
          Quicksand_600SemiBold,
          Quicksand_700Bold,
        });
      } catch (error) {
        throw error;
      } finally {
        setAppIsReady(true);
      }
    };
    prepareApp();
  }, []);

  if (!appIsReady) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <>
      <TechcellProvider>
        <RootRoutes />
      </TechcellProvider>
      <Toast config={toastConfig} />
    </>
  );
}
