import React from 'react';
import {NestedBrandEarningsStackParamList} from '../../constants/types/types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BrandEarnings from '../../screens/brands/brandEarnings/BrandEarnings';
import BrandEarningHistory from '../../screens/brands/brandEarnings/BrandEarningHistory';

const NestedBrandEarningsStack =
  createNativeStackNavigator<NestedBrandEarningsStackParamList>();
const NestedBrandEarningsNavigation = () => (
  <NestedBrandEarningsStack.Navigator
    initialRouteName="earnings"
    screenOptions={{
      headerShown: false,
    }}>
    <NestedBrandEarningsStack.Screen
      name="earnings"
      component={BrandEarnings}
    />
    <NestedBrandEarningsStack.Screen
      name="earningsHistory"
      component={BrandEarningHistory}
    />
  </NestedBrandEarningsStack.Navigator>
);
export default NestedBrandEarningsNavigation;
