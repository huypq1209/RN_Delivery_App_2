import { View, Text, TouchableOpacity } from 'react-native';
import React, { FunctionComponent } from 'react';
import styles from './styles';
import { WelcomeProp } from 'navigation/type';

const WelcomeScreen: FunctionComponent<WelcomeProp> = ({ navigation }) => {
  const _moveToOnboardingScreen = () => navigation.navigate('Onboarding');
  return (
    <View style={[styles.container, styles.content]}>
      <TouchableOpacity>
        <Text>Welcome Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={_moveToOnboardingScreen}>
        <Text>Go to OnBoarding Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
