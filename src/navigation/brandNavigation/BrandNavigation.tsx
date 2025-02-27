import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {BrandNavigationStackParamList} from '../../constants/types/types';
import BrandHome from '../../screens/brands/BrandHome';
import BrandSettings from '../../screens/brands/BrandSettings';
import BrandMore from '../../screens/brands/BrandMore';
import BrandReviews from '../../screens/brands/BrandReviews';
import NestedBrandBookingsNavigation from './NestedBrandBookingsNavigation';
import NestedBrandListingsNavigation from './NestedBrandListingsNavigation';
import NestedBrandEarningsNavigation from './NestedBrandEarningsNavigation';
import NestedBrandCreationNavigation from './NestedBrandCreationNavigation';

const BrandNavigationStack =
  createNativeStackNavigator<BrandNavigationStackParamList>();
const BrandNavigation = () => {
  return (
    <BrandNavigationStack.Navigator
      initialRouteName="brandHome"
      screenOptions={{headerShown: false}}>
      <BrandNavigationStack.Screen
        name="brandCreation"
        component={NestedBrandCreationNavigation}
      />
      <BrandNavigationStack.Screen name="brandHome" component={BrandHome} />
      <BrandNavigationStack.Screen
        name="brandSettings"
        component={BrandSettings}
      />
      <BrandNavigationStack.Screen name="brandMore" component={BrandMore} />
      <BrandNavigationStack.Screen
        name="brandReviews"
        component={BrandReviews}
      />
      <BrandNavigationStack.Screen
        name="brandBookings"
        component={NestedBrandBookingsNavigation}
      />

      <BrandNavigationStack.Screen
        name="brandListings"
        component={NestedBrandListingsNavigation}
      />

      <BrandNavigationStack.Screen
        name="brandEarnings"
        component={NestedBrandEarningsNavigation}
      />

      {/* <BrandNavigationStack.Screen name="nestedKyc" component={KycNavigation} />
      <BrandNavigationStack.Screen
        name="nestedKycBusiness"
        component={KycBusinessNavigation}
      />
      <BrandNavigationStack.Screen name="nestedSafe" component={SafeNavigation} />
      <BrandNavigationStack.Screen
        name="nestedDiscover"
        component={NestedDiscoverNavigation}
      />
      <BrandNavigationStack.Screen
        name="collectPoint"
        component={CollectPointNavigation}
      />
      <BrandNavigationStack.Screen name="sendPoint" component={SendPointNavigation} />
      <BrandNavigationStack.Screen
        name="nestedLoyalty"
        component={LoyaltyNavigation}
      />
      <BrandNavigationStack.Screen
        name="nestedWallet"
        component={NestedWalletNavigation}
      />
      <BrandNavigationStack.Screen name="comingSoon" component={ComingSoon} />
      <BrandNavigationStack.Screen
        name="nestedMore"
        component={NestedMoreNavigation}
      />
      <BrandNavigationStack.Screen name="profileSettings" component={Settings} /> */}
    </BrandNavigationStack.Navigator>
  );
};

export default BrandNavigation;
