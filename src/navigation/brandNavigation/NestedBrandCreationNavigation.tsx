import React from 'react';
import {NestedBrandCreationNavigationScreenParamList} from '../../constants/types/types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BrandCreationTypeSelectionScreen from '../../screens/brands/brandCreation/BrandCreationTypeSelectionScreen';
import BrandCreationMetaDataScreen from '../../screens/brands/brandCreation/BrandCreationMetaDataScreen';
import BrandCreationDescriptionScreen from '../../screens/brands/brandCreation/BrandCreationDescriptionScreen';
import BrandCreationLogoUploadScreen from '../../screens/brands/brandCreation/BrandCreationLogoUploadScreen';
import BrandCreationSuccessConfirmationScreen from '../../screens/brands/brandCreation/BrandCreationSuccessConfirmationScreen';

const NestedBrandCreationNavigationStack =
  createNativeStackNavigator<NestedBrandCreationNavigationScreenParamList>();

const NestedBrandCreationNavigation = () => (
  <NestedBrandCreationNavigationStack.Navigator
    initialRouteName="brandCreationTypeSelection"
    screenOptions={{
      headerShown: false,
    }}>
    <NestedBrandCreationNavigationStack.Screen
      name="brandCreationTypeSelection"
      component={BrandCreationTypeSelectionScreen}
    />
    <NestedBrandCreationNavigationStack.Screen
      name="brandCreationMetaData"
      component={BrandCreationMetaDataScreen}
    />
    <NestedBrandCreationNavigationStack.Screen
      name="brandCreationDescription"
      component={BrandCreationDescriptionScreen}
    />
    <NestedBrandCreationNavigationStack.Screen
      name="brandCreationLogoUpload"
      component={BrandCreationLogoUploadScreen}
    />
    <NestedBrandCreationNavigationStack.Screen
      name="brandCreationSuccessConfirmation"
      component={BrandCreationSuccessConfirmationScreen}
    />
  </NestedBrandCreationNavigationStack.Navigator>
);

export default NestedBrandCreationNavigation;
