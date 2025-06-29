import {StackNavigationProp} from '@react-navigation/stack';

export type AuthNavigationType = {
  OnboardingScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
};

export type AuthNavigationProp = StackNavigationProp<AuthNavigationType>;
