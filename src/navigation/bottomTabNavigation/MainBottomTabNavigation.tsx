import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {MainBottomTabParamList} from '../../constants/types/types';
import HolderBottomTab from './HolderBottomTabNavigation';
import ComingSoon from '../../screens/bottomTabs/ComingSoon';
import BrandNavigation from '../brandNavigation/BrandNavigation';
import NestedListingNavigation from '../listings/NestedListingNavigation';
import NestedProfileNavigation from '../profileNavigation/NestedProfileNavigation';

const MainBottomTab = createNativeStackNavigator<MainBottomTabParamList>();
const MainBottomtab = () => {
  return (
    <MainBottomTab.Navigator screenOptions={{headerShown: false}}>
      <MainBottomTab.Screen
        name="holderBottomTab"
        component={HolderBottomTab}
      />
      <MainBottomTab.Screen name="comingSoon" component={ComingSoon} />
      <MainBottomTab.Screen
        name="nestedProfileNav"
        component={NestedProfileNavigation}
      />
      <MainBottomTab.Screen name="brand" component={BrandNavigation} />
      <MainBottomTab.Screen
        name="listings"
        component={NestedListingNavigation}
      />
    </MainBottomTab.Navigator>
  );
};

export default MainBottomtab;
