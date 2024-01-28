import { createStackNavigator } from '@react-navigation/stack';
import { RootTabs } from './RootTabs';
import { RootStackRoutes } from '@type/navigation.type';
import { ForgotPasswordScreen, RegisterScreen } from '@screens/(no-auth)';

const Stack = createStackNavigator<RootStackRoutes>();

export const RootRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={RootTabs} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
