import { ForgotPasswordScreenProps } from '@type/navigation.type';
import { Box, Text } from 'native-base';
import React from 'react';

export const ForgotPasswordScreen = (props: ForgotPasswordScreenProps) => {
  return (
    <Box safeArea flex={1} justifyContent="center" p={2} w="95%" mx="auto">
      <Text onPress={() => props.navigation.goBack()}>Quay lại</Text>
    </Box>
  );
};
