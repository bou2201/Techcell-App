import React from 'react';
import { LoginScreenProps } from '@type/navigation.type';
import { Box, Button, Text, useTheme } from 'native-base';
import { LoginForm } from '@components/Form';

export const LoginScreen = (props: LoginScreenProps) => {
  const theme = useTheme();

  return (
    <Box safeArea flex={1} justifyContent="center" p={2} w="95%" mx="auto">
      <Box mb={5}>
        <Text fontFamily="quicksandBold" fontSize={34}>
          Đăng nhập
        </Text>
        <Text fontFamily="quicksandMedium" fontSize={17}>
          Chào mừng bạn đến với Techcell.
        </Text>
      </Box>

      <LoginForm {...props} />
    </Box>
  );
};
