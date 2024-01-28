import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';

// Stack Routes
export type RootStackRoutes = {
  Root: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

export type RegisterScreenProps = StackScreenProps<RootStackRoutes, 'Register'>;
export type ForgotPasswordScreenProps = StackScreenProps<RootStackRoutes, 'ForgotPassword'>;

// Bottom tabs
export type RootTabParamList = {
  Home: undefined;
  Login: undefined;
  Notification: undefined;
  Me: undefined;

  // Redirect Stack
  Register: undefined;
  ForgotPassword: undefined;
};

export type HomeScreenProps = BottomTabScreenProps<RootTabParamList, 'Home'>;
export type LoginScreenProps = BottomTabScreenProps<RootTabParamList, 'Login'>;
export type NofificationScreenProps = BottomTabScreenProps<RootTabParamList, 'Notification'>;
export type MeScreenProps = BottomTabScreenProps<RootTabParamList, 'Me'>;
