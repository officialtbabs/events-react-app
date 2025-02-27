import React from 'react';
import {NestedExperienceListingNavigationStackParamList} from '../../../constants/types/types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NestedCreateEventListingNavigation from './NestedCreateExperienceListingNavigation';
import NestedManageEventListingNavigation from './NestedManageExperienceListingNavigation';

const NestedExperienceListingNavigationStack =
  createNativeStackNavigator<NestedExperienceListingNavigationStackParamList>();
const NestedExperienceListingNavigation = () => (
  <NestedExperienceListingNavigationStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <NestedExperienceListingNavigationStack.Screen
      name="createExperience"
      component={NestedCreateEventListingNavigation}
    />
    <NestedExperienceListingNavigationStack.Screen
      name="manageExperience"
      component={NestedManageEventListingNavigation}
    />
  </NestedExperienceListingNavigationStack.Navigator>
);
export default NestedExperienceListingNavigation;
