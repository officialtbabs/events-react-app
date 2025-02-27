import React from 'react';
import {ForgotStackParamList} from '../../constants/types/types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ResetPassword from '../../screens/forgotPassword/ResetPassword';
import InputEmail from '../../screens/forgotPassword/InputEmail';
import VerifyEmailPassword from '../../screens/forgotPassword/VerifyEmailPassword';

const ForgotStack = createNativeStackNavigator<ForgotStackParamList>();
const ForgotPasswordNavigation = () => (
  <ForgotStack.Navigator
    initialRouteName="inputEmail"
    screenOptions={{
      headerShown: false,
    }}>
    <ForgotStack.Screen name="inputEmail" component={InputEmail} />
    <ForgotStack.Screen name="resetPassword" component={ResetPassword} />
    <ForgotStack.Screen
      name="verifyEmailPassword"
      component={VerifyEmailPassword}
    />
  </ForgotStack.Navigator>
);
export default ForgotPasswordNavigation;
