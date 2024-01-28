import React from 'react';
import { TOnPress } from '@type/common.type';
import { Button, Text, useTheme } from 'native-base';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

interface IButtonProps {
  content: string;
  onPress?: TOnPress | null;
  isLoading?: boolean;
  isLoadingText?: string;
  style?: StyleProp<ViewStyle>;
  variant?: 'ghost' | 'outline' | 'solid' | 'subtle' | 'link' | 'unstyled';
}

export const TechcellButton = ({ content, variant = 'solid', style, ...props }: IButtonProps) => {
  let color = '#fff';
  const theme = useTheme();

  const getStyle = () => {
    switch (variant) {
      case 'solid':
        return styles.solidStyle;
      case 'outline':
        color = theme.colors.red;
        return styles.outlineStyle;
      case 'ghost':
        color = theme.colors.red;
        return styles.ghostStyle;
      default:
        return styles.solidStyle;
    }
  };

  return (
    <Button
      {...props}
      variant={variant}
      style={[getStyle(), style]}
      fontWeight={600}
      spinnerPlacement="end"
    >
      <Text fontFamily="quicksandSemiBold" fontSize={16} color={color}>
        {content}
      </Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  solidStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#ee4949',
    color: '#fff',
    borderRadius: 4,
    marginVertical: 'auto',
  },
  outlineStyle: {},
  ghostStyle: {},
});
