import React, { useEffect, useState } from 'react';
import { TechcellProvider, RootTabs } from '@components/index';
import { Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Toast from 'react-native-toast-message';

export default function App() {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  useEffect(() => {
    const prepareApp = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({ Quicksand_400Regular });
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
        <RootTabs />
      </TechcellProvider>
      <Toast />
    </>
  );
}
