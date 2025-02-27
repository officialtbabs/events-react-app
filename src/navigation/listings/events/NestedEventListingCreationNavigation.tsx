import React from 'react';
import {NestedEventListingCreationNavigationStackParamList} from '../../../constants/types/types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EventListingCreationEventInfoScreen from '../../../screens/listings/event/create/EventListingCreationEventInfoScreen';
import EventListingCreationTicketInfoScreen from '../../../screens/listings/event/create/EventListingCreationTicketInfoScreen';
import EventListingCreationImagesUploadScreen from '../../../screens/listings/event/create/EventListingCreationImagesUploadScreen';
import EventListingCreationMoreInfoScreen from '../../../screens/listings/event/create/EventListingCreationMoreInfoScreen';
import EventListingCreationPreviewScreen from '../../../screens/listings/event/preview/EventListingCreationPreviewScreen';
import EventListingCreationSuccessConfirmationScreen from '../../../screens/listings/event/create/EventListingCreationSuccessConfirmationScreen';

const NestedEventListingCreationNavigationStack =
  createNativeStackNavigator<NestedEventListingCreationNavigationStackParamList>();

const NestedEventListingCreationNavigation = () => (
  <NestedEventListingCreationNavigationStack.Navigator
    initialRouteName="eventListingCreationEventInfo"
    screenOptions={{
      headerShown: false,
    }}>
    <NestedEventListingCreationNavigationStack.Screen
      name="eventListingCreationEventInfo"
      component={EventListingCreationEventInfoScreen}
    />
    <NestedEventListingCreationNavigationStack.Screen
      name="eventListingCreationTicketInfo"
      component={EventListingCreationTicketInfoScreen}
    />
    <NestedEventListingCreationNavigationStack.Screen
      name="eventListingCreationImagesUpload"
      component={EventListingCreationImagesUploadScreen}
    />
    <NestedEventListingCreationNavigationStack.Screen
      name="eventListingCreationMoreInfo"
      component={EventListingCreationMoreInfoScreen}
    />
    <NestedEventListingCreationNavigationStack.Screen
      name="eventListingCreationPreview"
      component={EventListingCreationPreviewScreen}
    />
    <NestedEventListingCreationNavigationStack.Screen
      name="eventListingCreationSuccessConfirmation"
      component={EventListingCreationSuccessConfirmationScreen}
    />
  </NestedEventListingCreationNavigationStack.Navigator>
);
export default NestedEventListingCreationNavigation;
