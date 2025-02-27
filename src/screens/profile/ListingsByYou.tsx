import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Box from '../../components/layout/Box';
import HeaderComponent from '../../components/header/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  ListingFilterEnums,
  ListingsByYouScreenRouteProp,
  MainBottomTabNavigationProps,
} from '../../constants/types/types';
import Feather from 'react-native-vector-icons/Feather';
import {FlashList} from '@shopify/flash-list';
import ListingCard, {
  ListingCardProps,
} from '../../components/cards/ListingCard';
import LayoutWithSafeAreaWithoutBg from '../../components/layout/LayoutWithSafeAreaWithoutBg';
import ScrollNav, {
  NavItemOptionProps,
} from '../../components/scrollNav/ScrollNav';
import ChipComponent from '../../components/chip/ChipComponent';
import {capialiseFirst} from '../../constants/utils/utils';
import {useAppDispatch, useAppSelector} from '../../constants/utils/hooks';
import useEventApi from '../../service/eventApi';
import LayoutWithSafeAreaWithoutBgWithPullDownRefresh from '../../components/layout/LayoutWithSafeAreaWithoutBgWithPullDownRefresh';
import {RefreshControl} from 'react-native-gesture-handler';
import pallete from '../../constants/colors/pallete';
import EmptyListingComponent from '../../components/listings/EmptyListingComponent';
import {setEvents} from '../../reducerSlices/events/eventsSlice';

const ListingsByYou = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);
  const dispatch = useAppDispatch();

  const {navigate} = useNavigation<MainBottomTabNavigationProps>();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  const {
    params: {filter},
  } = useRoute<ListingsByYouScreenRouteProp>();

  const currentFilter = useMemo(() => filter, [filter]);

  const filterOptions = useMemo<NavItemOptionProps[]>(
    () => [
      {
        name: 'All',
        isActive: currentFilter === ListingFilterEnums.ALL,
        onPress: () =>
          navigate('nestedProfileNav', {
            screen: 'listingsByYou',
            params: {
              filter: ListingFilterEnums.ALL,
            },
          }),
      },
      {
        name: 'Events',
        isActive: currentFilter === ListingFilterEnums.EVENTS,
        onPress: () =>
          navigate('nestedProfileNav', {
            screen: 'listingsByYou',
            params: {
              filter: ListingFilterEnums.EVENTS,
            },
          }),
      },
      {
        name: 'Places',
        isActive: currentFilter === ListingFilterEnums.PLACES,
        onPress: () =>
          navigate('nestedProfileNav', {
            screen: 'listingsByYou',
            params: {
              filter: ListingFilterEnums.PLACES,
            },
          }),
      },
      {
        name: 'experiences',
        isActive: currentFilter === ListingFilterEnums.EXPERIENCES,
        onPress: () =>
          navigate('nestedProfileNav', {
            screen: 'listingsByYou',
            params: {
              filter: ListingFilterEnums.EXPERIENCES,
            },
          }),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentFilter],
  );

  const listingOptions = useMemo<ListingCardProps[]>(
    () => [
      {
        title: 'Hike ATV',
        location: 'Lekki phase 1',
        purpose: 'Experience',
        views: 22,
        comments: 20,
        boomarks: 20,
        onPress: () =>
          navigate('listings', {
            screen: 'experience',
            params: {
              screen: 'manageExperience',
              params: {
                screen: 'overview',
                params: {
                  experienceId: 'Hike ATV',
                },
              },
            },
          }),
      },

      {
        title: 'TED business Talk',
        location: 'Lekki phase 1',
        purpose: 'Events',
        views: 22,
        comments: 20,
        boomarks: 20,
        onPress: () =>
          navigate('listings', {
            screen: 'event',
            params: {
              screen: 'manage',
              params: {
                screen: 'overview',
                params: {
                  id: 'TED business Talk',
                },
              },
            },
          }),
      },

      {
        title: 'Pie Horse Ride',
        location: 'Lekki phase 1',
        purpose: 'Places',
        views: 22,
        comments: 20,
        boomarks: 20,
        onPress: () => null,
      },

      {
        title: 'TJ launch party',
        location: 'Lekki phase 1',
        purpose: 'Events',
        views: 22,
        comments: 20,
        boomarks: 20,
        onPress: () => null,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const userEvents = useAppSelector(state => state.events.events);

  const {useGetUserEvents} = useEventApi();
  const {getUserEventsMutation, isLoadingGetUserEvents} = useGetUserEvents();

  const getUserEventsCallback = useCallback(() => {
    getUserEventsMutation(undefined, {
      onSuccess: getUserEventsRes => {
        console.log('getUserEventsRes', getUserEventsRes);

        const events = getUserEventsRes.data.data;

        if (events && events.length) {
          dispatch(setEvents({events}));
        }
      },
      onError: getUserEventsErr => {
        console.log('getUserEventsErr', getUserEventsErr);
      },
    });
  }, [getUserEventsMutation, dispatch]);

  useEffect(() => {
    console.log('Hello');
    getUserEventsCallback();
  }, [getUserEventsCallback]);

  return (
    <LayoutWithSafeAreaWithoutBgWithPullDownRefresh
      refreshing={isLoadingGetUserEvents}
      layoutHeader={
        <HeaderComponent
          title="By You"
          bottomBorder
          leftIcon={{
            type: 'icon',
            icon: (
              <Feather
                name="chevron-left"
                size={24}
                style={[globalStyles.textCulrMainBlack]}
              />
            ),
          }}
        />
      }
      nav={
        <ScrollNav
          navOptions={filterOptions}
          // eslint-disable-next-line react/no-unstable-nested-components
          navItem={({item, index}) => (
            <Box
              key={index}
              style={[
                globalStyles.mx1,
                index === 0 && globalStyles.pl31,
                index === filterOptions.length - 1 && globalStyles.pr31,
              ]}>
              <ChipComponent
                text={capialiseFirst(item.name)}
                variant={item.isActive ? 'filled' : 'outlined'}
                // disabled={!item.isActive}
                onPress={() => item.onPress()}
              />
            </Box>
          )}
        />
      }
      onRefresh={onRefresh}>
      <Box flex={1}>
        <Box style={[!![].length && globalStyles.px31]}>
          <Box style={[globalStyles.pb6]}>
            <FlashList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={userEvents}
              renderItem={({item}) => (
                <Box style={[globalStyles.mb2]}>
                  <ListingCard
                    title={item.}
                    location={item.location}
                    purpose={item.purpose}
                    views={item.views}
                    comments={item.comments}
                    boomarks={item.boomarks}
                    onPress={item.onPress}
                  />
                </Box>
              )}
              ListEmptyComponent={<EmptyListingComponent />}
              estimatedItemSize={200}
            />
          </Box>
        </Box>
      </Box>
    </LayoutWithSafeAreaWithoutBgWithPullDownRefresh>
  );
};

export default ListingsByYou;
