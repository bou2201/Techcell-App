import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootTabParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
};

export type HomeScreenProps = BottomTabScreenProps<RootTabParamList, 'Home'>;
export type LoginScreenProps = BottomTabScreenProps<RootTabParamList, 'Login'>;
export type RegisterScreenProps = BottomTabScreenProps<RootTabParamList, 'Register'>;
