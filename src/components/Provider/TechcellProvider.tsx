import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { customTheme } from '@components/Theme/theme';

export const TechcellProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NativeBaseProvider theme={customTheme}>
      <NavigationContainer>{children}</NavigationContainer>
    </NativeBaseProvider>
  );
};
