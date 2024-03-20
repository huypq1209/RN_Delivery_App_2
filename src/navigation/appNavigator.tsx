import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import RootNavigator from './rootNavigator';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
