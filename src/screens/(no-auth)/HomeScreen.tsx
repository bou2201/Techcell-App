import React from 'react';
import { HomeScreenProps } from '@type/navigation.type';
import { Text } from 'native-base';
import { View } from 'react-native';

export const HomeScreen = ({ navigation, route }: HomeScreenProps) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text fontFamily='quicksandRegular'>Quá là điều bình thường luôn</Text>
    </View>
  );
};
