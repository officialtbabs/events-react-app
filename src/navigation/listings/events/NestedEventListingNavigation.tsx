import React from 'react';
import {NestedEventListingNavigationStackParamList} from '../../../constants/types/types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NestedEventListingCreationNavigation from './NestedEventListingCreationNavigation';
import NestedManageEventListingNavigation from './NestedManageEventListingNavigation';

const NestedEventListingNavigationStack =
  createNativeStackNavigator<NestedEventListingNavigationStackParamList>();
const NestedEventListingNavigation = () => (
  <NestedEventListingNavigationStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <NestedEventListingNavigationStack.Screen
      name="create"
      component={NestedEventListingCreationNavigation}
    />
    <NestedEventListingNavigationStack.Screen
      name="manage"
      component={NestedManageEventListingNavigation}
    />
  </NestedEventListingNavigationStack.Navigator>
);
export default NestedEventListingNavigation;
