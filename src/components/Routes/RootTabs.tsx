import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '@type/tabs.type';
import { HomeScreen, LoginScreen, RegisterScreen } from '@screens/index';
import { useTheme } from 'native-base';
import { ETechcellRoutes } from '@constants/enum.const';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator<RootTabParamList>();

export const RootTabs = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.red,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: ETechcellRoutes.Home,
          tabBarIcon: ({ color, size }) => <AntDesign name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Register" component={RegisterScreen} />
    </Tab.Navigator>
  );
};
