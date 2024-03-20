import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Welcome: undefined;
  Onboarding: undefined;
};

export type WelcomeProp = NativeStackScreenProps<RootStackParamList, 'Welcome'>;
export type OnboardingProp = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;
