/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import GlobalStyle from 'constants/styles';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={GlobalStyle.flexOne}>
      <SafeAreaProvider></SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
