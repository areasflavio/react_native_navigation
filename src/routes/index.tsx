import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { DrawerRoutes } from './drawer.routes';
import { StackRoutes } from './stack.routes';
import { TabRoutes } from './tab.routes';

export function Routes() {
  return (
    <NavigationContainer>
      {/* <StackRoutes /> */}
      {/* <TabRoutes /> */}
      <DrawerRoutes />
    </NavigationContainer>
  );
}
