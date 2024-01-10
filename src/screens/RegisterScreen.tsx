import { RegisterScreenProps } from '@type/tabs.type';
import React from 'react';
import { Text, View } from 'react-native';

export const RegisterScreen = ({ navigation, route }: RegisterScreenProps) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
};

