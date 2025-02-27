import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NestedUserWalletStackParamList} from '../../../constants/types/types';
import UserWallet from '../../../screens/profile/wallet/Wallet';

const UserWalletStack = createStackNavigator<NestedUserWalletStackParamList>();
const UserWalletNavigation = () => {
  return (
    <UserWalletStack.Navigator
      initialRouteName="userWalletDetails"
      screenOptions={{
        headerShown: false,
      }}>
      <UserWalletStack.Screen name="userWalletDetails" component={UserWallet} />
    </UserWalletStack.Navigator>
  );
};

export default UserWalletNavigation;
