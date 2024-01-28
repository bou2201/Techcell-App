import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '@type/navigation.type';
import { HomeScreen, LoginScreen } from '@screens/(no-auth)';
import { MeScreen, NotificationScreen } from '@screens/(auth)';
import { useTheme } from 'native-base';
import { ETechcellRoutes } from '@constants/enum.const';
import { AntDesign } from '@expo/vector-icons';
import useAuthStore from '@store/auth.store';

const Tab = createBottomTabNavigator<RootTabParamList>();

export const RootTabs = () => {
  const theme = useTheme();
  const { isSignedIn } = useAuthStore();

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
      {isSignedIn ? (
        <>
          <Tab.Screen
            name="Notification"
            component={NotificationScreen}
            options={{
              headerShown: false,
              tabBarLabel: ETechcellRoutes.Notification,
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="notification" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Me"
            component={MeScreen}
            options={{
              headerShown: false,
              tabBarLabel: ETechcellRoutes.Me,
              tabBarIcon: ({ color, size }) => <AntDesign name="user" color={color} size={size} />,
            }}
          />
        </>
      ) : (
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
            tabBarLabel: ETechcellRoutes.Login,
            tabBarIcon: ({ color, size }) => <AntDesign name="user" color={color} size={size} />,
          }}
        />
      )}
    </Tab.Navigator>
  );
};
