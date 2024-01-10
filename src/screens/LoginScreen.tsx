import React from 'react';
import { LoginScreenProps } from '@type/tabs.type';
import { Text, View } from 'react-native';

export const LoginScreen = ({ navigation, route }: LoginScreenProps) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
};

