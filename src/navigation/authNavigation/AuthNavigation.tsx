import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {useAppSelector} from '../../constants/utils/hooks';
import RegisterNavigation from '../registerNavigation/Registernavigation';
import ForgotPasswordNavigation from '../forgotPasswordNavigation/ForgotPasswordnavigation';
import useLogout from '../../service/logout';
import {AuthStackParamList} from '../../constants/types/types';
import LoginNavigation from '../loginNavigatin/LoginNavigation';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigation = () => {
  const {logout} = useLogout();

  useEffect(() => {
    logout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const {alreadyAuth} = useAppSelector(state => state.authChecker);

  return (
    <AuthStack.Navigator
      initialRouteName={alreadyAuth ? 'loginStack' : 'registerStack'}
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="registerStack" component={RegisterNavigation} />
      <AuthStack.Screen name="loginStack" component={LoginNavigation} />
      {/* <AuthStack.Screen name="updateStack" component={Update} /> */}
      <AuthStack.Screen
        name="forgotPassword"
        component={ForgotPasswordNavigation}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
