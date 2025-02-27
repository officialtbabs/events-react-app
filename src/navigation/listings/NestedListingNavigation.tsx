import React from 'react';
import {NestedListingNavigationStackParamList} from '../../constants/types/types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NestedEventListingNavigation from './events/NestedEventListingNavigation';
import NestedExperienceListingNavigation from './experiences/NestedExperienceListingNavigation';

const NestedListingNavigationStack =
  createNativeStackNavigator<NestedListingNavigationStackParamList>();
const NestedListingNavigation = () => (
  <NestedListingNavigationStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <NestedListingNavigationStack.Screen
      name="event"
      component={NestedEventListingNavigation}
    />
    <NestedListingNavigationStack.Screen
      name="experience"
      component={NestedExperienceListingNavigation}
    />
    {/* <NestedListingNavigationStack.Screen
      name="manage"
      component={ResetPassword}
    /> */}
  </NestedListingNavigationStack.Navigator>
);
export default NestedListingNavigation;
