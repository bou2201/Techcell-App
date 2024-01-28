import { StyleProp, TextStyle } from 'react-native';
import { BaseToast, BaseToastProps, ErrorToast, ToastConfig } from 'react-native-toast-message';

const text1Style: StyleProp<TextStyle> = {
  fontFamily: 'Quicksand_700Bold',
  fontSize: 16,
  paddingTop: 10,
};

const text2Style: StyleProp<TextStyle> = {
  fontFamily: 'Quicksand_500Medium',
  fontSize: 14,
  paddingBottom: 10,
};

const toastConfig: ToastConfig = {
  success: (props: BaseToastProps) => (
    <BaseToast {...props} text1Style={text1Style} text2Style={text2Style} />
  ),
  error: (props: BaseToastProps) => (
    <ErrorToast {...props} text1Style={text1Style} text2Style={text2Style} />
  ),
};

export default toastConfig;
