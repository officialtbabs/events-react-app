import React from 'react';
import {LoginStackParamList} from '../../constants/types/types';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screens/login/LoginScreen';

const LoginStack = createStackNavigator<LoginStackParamList>();
const LoginNavigation = () => {
  return (
    <LoginStack.Navigator
      initialRouteName="loginScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <LoginStack.Screen name="loginScreen" component={LoginScreen} />
    </LoginStack.Navigator>
  );
};

export default LoginNavigation;
