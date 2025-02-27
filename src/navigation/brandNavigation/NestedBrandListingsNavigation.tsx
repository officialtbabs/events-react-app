import React from 'react';
import {NestedBrandListingsStackParamList} from '../../constants/types/types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BrandListings from '../../screens/brands/brandListings/BrandListings';
import BrandListingDetails from '../../screens/brands/brandListings/BrandListingDetails';

const NestedBrandListingsStack =
  createNativeStackNavigator<NestedBrandListingsStackParamList>();
const NestedBrandListingsNavigation = () => (
  <NestedBrandListingsStack.Navigator
    initialRouteName="listings"
    screenOptions={{
      headerShown: false,
    }}>
    <NestedBrandListingsStack.Screen
      name="listings"
      component={BrandListings}
    />
    <NestedBrandListingsStack.Screen
      name="listingDetails"
      component={BrandListingDetails}
    />
  </NestedBrandListingsStack.Navigator>
);
export default NestedBrandListingsNavigation;
