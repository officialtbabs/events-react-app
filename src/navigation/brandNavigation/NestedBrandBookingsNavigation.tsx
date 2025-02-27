import React from 'react';
import {NestedBrandBookingsStackParamList} from '../../constants/types/types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BrandCreationMetaDataScreen from '../../screens/brands/brandCreation/BrandCreationMetaDataScreen';
import BrandBookings from '../../screens/brands/brandBookings/BrandBookings';

const NestedBrandBookingsStack =
  createNativeStackNavigator<NestedBrandBookingsStackParamList>();
const NestedBrandBookingsNavigation = () => (
  <NestedBrandBookingsStack.Navigator
    initialRouteName="bookings"
    screenOptions={{
      headerShown: false,
    }}>
    <NestedBrandBookingsStack.Screen
      name="bookings"
      component={BrandBookings}
    />
    <NestedBrandBookingsStack.Screen
      name="bookingDetails"
      component={BrandCreationMetaDataScreen}
    />
  </NestedBrandBookingsStack.Navigator>
);
export default NestedBrandBookingsNavigation;
