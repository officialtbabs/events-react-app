import React, {useMemo} from 'react';
import LayoutWithSafeAreaWithoutBgWithoutScroll from '../../../components/layout/LayoutWithSafeAreaWithoutBgWithoutScroll';
import SuccessConfirmationComponent from '../../../components/success/SuccessConfirmationComponent';
import {useAppSelector} from '../../../constants/utils/hooks';
import {useNavigation} from '@react-navigation/native';
import {MainBottomTabNavigationProps} from '../../../constants/types/types';

const BrandCreationSuccessConfirmationScreen = () => {
  const {reset} = useNavigation<MainBottomTabNavigationProps>();

  const {name} = useAppSelector(state => state.brandCreation);

  const renderedSuccessMessage = useMemo(
    () => `You have successfully created “${name}”`,
    [name],
  );

  const handleButtonPress = () => {
    reset({
      index: 0,
      routes: [
        {
          name: 'holderBottomTab',
          state: {
            index: 0,
            routes: [{name: 'profile'}],
          },
        },
      ],
    });
  };

  return (
    <LayoutWithSafeAreaWithoutBgWithoutScroll>
      <SuccessConfirmationComponent
        message={renderedSuccessMessage}
        buttonText="Go to Profile"
        onButtonPress={handleButtonPress}
      />
    </LayoutWithSafeAreaWithoutBgWithoutScroll>
  );
};

export default BrandCreationSuccessConfirmationScreen;
