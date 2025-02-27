import React from 'react';
import {NestedManageEventListingNavigationStackParamList} from '../../../constants/types/types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EventListingCreationImagesUploadScreen from '../../../screens/listings/event/create/EventListingCreationImagesUploadScreen';
import ManageEventListingOverview from '../../../screens/listings/event/manage/ManageEventListingOverview';
import ManageEventListingGuests from '../../../screens/listings/event/manage/ManageEventListingGuests';
import ManageEventListingAccess from '../../../screens/listings/event/manage/ManageEventListingAccess';

const NestedManageEventListingNavigationStack =
  createNativeStackNavigator<NestedManageEventListingNavigationStackParamList>();

const NestedManageEventListingNavigation = () => (
  <NestedManageEventListingNavigationStack.Navigator
    initialRouteName="overview"
    screenOptions={{
      headerShown: false,
    }}>
    <NestedManageEventListingNavigationStack.Screen
      name="overview"
      component={ManageEventListingOverview}
    />
    <NestedManageEventListingNavigationStack.Screen
      name="guests"
      component={ManageEventListingGuests}
    />
    <NestedManageEventListingNavigationStack.Screen
      name="access"
      component={ManageEventListingAccess}
    />
    <NestedManageEventListingNavigationStack.Screen
      name="emails"
      component={EventListingCreationImagesUploadScreen}
    />
  </NestedManageEventListingNavigationStack.Navigator>
);
export default NestedManageEventListingNavigation;
