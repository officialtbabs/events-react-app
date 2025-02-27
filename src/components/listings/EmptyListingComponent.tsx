import React, {memo} from 'react';
import Box from '../layout/Box';
import EmptyListingSvgIllustration from '../../assets/svgs/illustrations/empty-listing.svg';
import {useAppSelector} from '../../constants/utils/hooks';
import {width} from '../../globalStyles/globalStyles';
import TextComponent from '../text/TextComponent';
import {isIos} from '../../constants/utils/utils';
import ButtonComponent from '../button/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import {MainBottomTabNavigationProps} from '../../constants/types/types';

const EmptyListingComponent = memo(() => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);
  const {navigate} = useNavigation<MainBottomTabNavigationProps>();

  const navigateToCreateListing = () => {
    navigate('holderBottomTab', {
      screen: 'create',
    });
  };

  return (
    <Box width={width} style={[globalStyles.pt6, globalStyles.px31]}>
      <Box style={[globalStyles.alignItemsCenter, globalStyles.gapY20]}>
        <EmptyListingSvgIllustration />

        <TextComponent
          style={[
            globalStyles.textCenter,
            globalStyles.fontNeulisAlt_Regular,
            isIos() && globalStyles.fontWeight400,
            globalStyles.textCulrMainBlack,
          ]}>
          Oops! nothing to see here, Create a listing
        </TextComponent>

        <Box style={[globalStyles.wFull]}>
          <ButtonComponent
            title="Create a Listing"
            text14
            onPress={navigateToCreateListing}
          />
        </Box>
      </Box>
    </Box>
  );
});

export default EmptyListingComponent;
