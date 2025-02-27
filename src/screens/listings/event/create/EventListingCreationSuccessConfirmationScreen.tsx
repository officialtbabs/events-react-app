import React, {useMemo} from 'react';
import LayoutWithSafeAreaWithoutBgWithoutScroll from '../../../../components/layout/LayoutWithSafeAreaWithoutBgWithoutScroll';
import SuccessConfirmationComponent from '../../../../components/success/SuccessConfirmationComponent';
import {useAppSelector} from '../../../../constants/utils/hooks';
import {useNavigation} from '@react-navigation/native';
import {
  ListingFilterEnums,
  MainBottomTabNavigationProps,
} from '../../../../constants/types/types';

const EventListingCreationSuccessConfirmationScreen = () => {
  const {reset} = useNavigation<MainBottomTabNavigationProps>();

  const {event_name} = useAppSelector(state => state.eventCreation);

  const renderedSuccessMessage = useMemo(
    () => `You have successfully created “${event_name}”`,
    [event_name],
  );

  const handleButtonPress = () => {
    reset({
      index: 1,
      routes: [
        {
          name: 'holderBottomTab',
          state: {
            index: 0,
            routes: [{name: 'profile'}],
          },
        },

        {
          name: 'nestedProfileNav',
          state: {
            index: 0,
            routes: [
              {
                name: 'listingsByYou',
                params: {
                  filter: ListingFilterEnums.EVENTS,
                },
              },
            ],
          },
        },
      ],
    });
  };

  return (
    <LayoutWithSafeAreaWithoutBgWithoutScroll>
      <SuccessConfirmationComponent
        message={renderedSuccessMessage}
        buttonText="Go to Listing Management"
        onButtonPress={handleButtonPress}
      />
    </LayoutWithSafeAreaWithoutBgWithoutScroll>
  );
};

export default EventListingCreationSuccessConfirmationScreen;
