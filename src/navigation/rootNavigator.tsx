import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from 'pages/onboarding';
import WelcomeScreen from 'pages/welcome';
import React from 'react';
import { RootStackParamList } from './type';

const RootNavigator = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();
  return (
    <>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Welcome" component={WelcomeScreen} />
        <RootStack.Screen name="Onboarding" component={OnboardingScreen} />
      </RootStack.Navigator>
    </>
  );
};

export default RootNavigator;
