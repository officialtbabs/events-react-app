import React from 'react';
import {NestedCreateExperienceListingNavigationStackParamList} from '../../../constants/types/types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ExperienceInfo from '../../../screens/listings/experiences/create/EventInfo';
import TicketInfo from '../../../screens/listings/experiences/create/TicketInfo';
import UploadTicketImage from '../../../screens/listings/experiences/create/UploadTicketImage';
import MoreEventInfo from '../../../screens/listings/experiences/create/MoreEventInfo';

const NestedCreateExperienceListingNavigationStack =
  createNativeStackNavigator<NestedCreateExperienceListingNavigationStackParamList>();

const NestedCreateEventListingNavigation = () => (
  <NestedCreateExperienceListingNavigationStack.Navigator
    initialRouteName="experienceInfo"
    screenOptions={{
      headerShown: false,
    }}>
    <NestedCreateExperienceListingNavigationStack.Screen
      name="experienceInfo"
      component={ExperienceInfo}
    />
    <NestedCreateExperienceListingNavigationStack.Screen
      name="experienceTicketInfo"
      component={TicketInfo}
    />
    <NestedCreateExperienceListingNavigationStack.Screen
      name="uploadExperienceImage"
      component={UploadTicketImage}
    />
    <NestedCreateExperienceListingNavigationStack.Screen
      name="experienceMoreInfo"
      component={MoreEventInfo}
    />
  </NestedCreateExperienceListingNavigationStack.Navigator>
);
export default NestedCreateEventListingNavigation;
