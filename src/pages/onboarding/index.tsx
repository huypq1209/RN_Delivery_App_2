import { View, Text, TouchableOpacity } from 'react-native';
import React, { FunctionComponent } from 'react';
import styles from './styles';
import { OnboardingProp } from 'navigation/type';

const OnboardingScreen: FunctionComponent<OnboardingProp> = ({ navigation }) => {
  const _moveToWelComeScreen = () => navigation.navigate('Welcome');

  return (
    <View style={[styles.container, styles.content]}>
      <TouchableOpacity>
        <Text>OnboardingScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={_moveToWelComeScreen}>
        <Text>Go to Welcome Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingScreen;
