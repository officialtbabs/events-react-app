import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NestedProfileNavigationScreensParamList} from '../../constants/types/types';
import Settings from '../../screens/profile/Settings';
import ListingsByYou from '../../screens/profile/ListingsByYou';
import RecentlyViewed from '../../screens/profile/RecentlyViewed';
import Bookmarked from '../../screens/profile/Bookmarked';
import Invitations from '../../screens/profile/Invitations';
import UserWalletNavigation from './userWalletNavigation/UserWalletNavigation';

const NestedProfileNavigationStack =
  createNativeStackNavigator<NestedProfileNavigationScreensParamList>();
const NestedProfileNavigation = () => {
  return (
    <NestedProfileNavigationStack.Navigator
      screenOptions={{headerShown: false}}>
      <NestedProfileNavigationStack.Screen
        name="settings"
        component={Settings}
      />
      <NestedProfileNavigationStack.Screen
        name="listingsByYou"
        component={ListingsByYou}
      />
      <NestedProfileNavigationStack.Screen
        name="recentlyViewed"
        component={RecentlyViewed}
      />
      <NestedProfileNavigationStack.Screen
        name="bookmarked"
        component={Bookmarked}
      />
      <NestedProfileNavigationStack.Screen
        name="invitations"
        component={Invitations}
      />
      <NestedProfileNavigationStack.Screen
        name="userWallet"
        component={UserWalletNavigation}
      />
    </NestedProfileNavigationStack.Navigator>
  );
};

export default NestedProfileNavigation;
