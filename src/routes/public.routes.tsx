import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';

const { Navigator, Screen } = createStackNavigator();

export function PublicRoutes() {
  return (
    <Navigator initialRouteName='Public'>
      <Screen name='Home' component={Home} />
    </Navigator>
  );
}