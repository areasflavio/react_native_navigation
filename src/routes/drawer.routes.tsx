import Ionicons from '@expo/vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';

const Drawer = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerIcon: ({ color, focused, size }) => (
          <Ionicons
            name={focused ? 'airplane' : 'airplane-outline'}
            size={size}
            color={color}
          />
        ),
        drawerActiveTintColor: 'dodgerblue',
        drawerInactiveTintColor: 'gray',
      }}
    >
      <Drawer.Screen name="ScreenA" component={ScreenA} />
      <Drawer.Screen name="ScreenB" component={ScreenB} />
    </Drawer.Navigator>
  );
}
