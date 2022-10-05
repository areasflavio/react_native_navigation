import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'ScreenA') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'ScreenB') {
            iconName = focused ? 'ios-list-circle' : 'ios-list-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'dodgerblue',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="ScreenA" component={ScreenA} />
      <Tab.Screen name="ScreenB" component={ScreenB} />
    </Tab.Navigator>
  );
}
