import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { customTheme } from '@components/Theme';

export const TechcellProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NativeBaseProvider theme={customTheme}>
      <NavigationContainer>{children}</NavigationContainer>
    </NativeBaseProvider>
  );
};
