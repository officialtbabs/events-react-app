import React from 'react';
import {NestedManageExperienceListingNavigationStackParamList} from '../../../constants/types/types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EventListingCreationImagesUploadScreen from '../../../screens/listings/event/create/EventListingCreationImagesUploadScreen';
import ManageExperienceListingOverview from '../../../screens/listings/experiences/manage/ManageExperienceListingOverview';
import ManageExperienceListingGuests from '../../../screens/listings/experiences/manage/ManageExperienceListingGuests';
import ManageExperienceListingAccess from '../../../screens/listings/experiences/manage/ManageExperienceListingAccess';

const NestedManageExperienceListingNavigationStack =
  createNativeStackNavigator<NestedManageExperienceListingNavigationStackParamList>();

const NestedManageExperienceListingNavigation = () => (
  <NestedManageExperienceListingNavigationStack.Navigator
    initialRouteName="overview"
    screenOptions={{
      headerShown: false,
    }}>
    <NestedManageExperienceListingNavigationStack.Screen
      name="overview"
      component={ManageExperienceListingOverview}
    />
    <NestedManageExperienceListingNavigationStack.Screen
      name="bookings"
      component={ManageExperienceListingGuests}
    />
    <NestedManageExperienceListingNavigationStack.Screen
      name="access"
      component={ManageExperienceListingAccess}
    />
    <NestedManageExperienceListingNavigationStack.Screen
      name="emails"
      component={EventListingCreationImagesUploadScreen}
    />
  </NestedManageExperienceListingNavigationStack.Navigator>
);
export default NestedManageExperienceListingNavigation;
