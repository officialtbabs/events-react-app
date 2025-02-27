import React from 'react';
import {RegisterStackParamList} from '../../constants/types/types';
import {createStackNavigator} from '@react-navigation/stack';
import {useAppSelector} from '../../constants/utils/hooks';
import EnterEmail from '../../screens/register/EnterEmail';
import VerifyEmail from '../../screens/register/VerifyEmail';
import SignUpOptionsScreen from '../../screens/register/SignUpOptionsScreen';
import EnterKyc from '../../screens/register/EnterKyc';

const RegisterStack = createStackNavigator<RegisterStackParamList>();
const RegisterNavigation = () => {
  const {onboarded} = useAppSelector(state => state.userOnboarded);
  if (true) {
    return (
      <RegisterStack.Navigator
        initialRouteName="signUpOptions"
        screenOptions={{
          headerShown: false,
        }}>
        <RegisterStack.Screen
          name="signUpOptions"
          component={SignUpOptionsScreen}
        />
        <RegisterStack.Screen name="enterEmail" component={EnterEmail} />
        <RegisterStack.Screen name="enterKyc" component={EnterKyc} />
        <RegisterStack.Screen name="verifyEmail" component={VerifyEmail} />
      </RegisterStack.Navigator>
    );
  } else {
    return (
      <RegisterStack.Navigator
        initialRouteName="onboardingStack"
        screenOptions={{
          headerShown: false,
        }}>
        {/* <RegisterStack.Screen
          name="onboardingStack"
          component={OnboardingNavigation}
        /> */}
        <RegisterStack.Screen
          name="signUpOptions"
          component={SignUpOptionsScreen}
        />
        <RegisterStack.Screen name="enterEmail" component={EnterEmail} />
        <RegisterStack.Screen name="enterKyc" component={EnterKyc} />
        <RegisterStack.Screen name="verifyEmail" component={VerifyEmail} />
      </RegisterStack.Navigator>
    );
  }
};

export default RegisterNavigation;
