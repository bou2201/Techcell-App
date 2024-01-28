import { NofificationScreenProps } from '@type/navigation.type';
import { Text } from 'native-base';
import React from 'react';
import { View } from 'react-native';

export const NotificationScreen = ({ navigation, route }: NofificationScreenProps) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
};
