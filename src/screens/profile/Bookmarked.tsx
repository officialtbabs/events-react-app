import React, {useMemo, useState} from 'react';
import Box from '../../components/layout/Box';
import globalStyles from '../../globalStyles/globalStyles';
import HeaderComponent from '../../components/header/Header';
import {useNavigation} from '@react-navigation/native';
import {BrandNavigationProps} from '../../constants/types/types';
import Feather from 'react-native-vector-icons/Feather';
import {FlashList} from '@shopify/flash-list';
import {ListingCardProps} from '../../components/cards/ListingCard';
import LayoutWithSafeArea from '../../components/layout/LayoutWithSafeAreaWithoutBg';
import RecentlyViewedCard from '../../components/cards/RecentlyViewedCard';
import ScrollNav, {
  NavItemOptionProps,
} from '../../components/scrollNav/ScrollNav';
import ChipComponent from '../../components/chip/ChipComponent';
import {capialiseFirst} from '../../constants/utils/utils';
import {useAppSelector} from '../../constants/utils/hooks';

const Bookmarked = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const {navigate} = useNavigation<BrandNavigationProps>();
  const [currentFilter, setCurrentFilter] = useState('events');

  const filterOptions = useMemo<NavItemOptionProps[]>(
    () => [
      {
        name: 'all',
        isActive: currentFilter === 'all',
        onPress: () => setCurrentFilter(preFilter => preFilter && 'all'),
      },
      {
        name: 'events',
        isActive: currentFilter === 'events',
        onPress: () => setCurrentFilter('events'),
      },
      {
        name: 'places',
        isActive: currentFilter === 'places',
        onPress: () => setCurrentFilter('places'),
      },
      {
        name: 'experiences',
        isActive: currentFilter === 'experiences',
        onPress: () => setCurrentFilter('experiences'),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentFilter],
  );

  const bookmarkedOptions = useMemo<ListingCardProps[]>(
    () => [
      {
        title: 'Jay’s Don Hotel',
        location: 'Lekki phase 1',
        purpose: 'Hotel',
        views: 22,
        comments: 20,
        boomarks: 20,
        onPress: () => null,
      },

      {
        title: 'TED business Talk',
        location: 'Lekki phase 1',
        purpose: 'Events',
        views: 22,
        comments: 20,
        boomarks: 20,
        onPress: () => null,
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
    [],
  );

  return (
    <LayoutWithSafeArea
      layoutHeader={
        <HeaderComponent
          title="Bookmarked"
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
      }>
      <Box flex={1} style={[globalStyles.pt1]}>
        <Box style={[globalStyles.pb1]}>
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
                  disabled={!item.isActive}
                  onPress={() => item.onPress()}
                />
              </Box>
            )}
          />
        </Box>

        <Box style={[globalStyles.px31]}>
          <Box style={[globalStyles.pb6]}>
            <FlashList
              showsVerticalScrollIndicator={false}
              data={
                currentFilter !== 'all'
                  ? bookmarkedOptions.filter(
                      option =>
                        option.purpose.toLocaleLowerCase() ===
                        currentFilter.toLocaleLowerCase(),
                    )
                  : bookmarkedOptions
              }
              renderItem={({item}) => (
                <Box style={[globalStyles.mb4]}>
                  <RecentlyViewedCard
                  //   title={item.title}
                  //   location={item.location}
                  //   purpose={item.purpose}
                  //   views={item.views}
                  //   comments={item.comments}
                  //   boomarks={item.boomarks}
                  //   onPress={item.onPress}
                  />
                </Box>
              )}
              estimatedItemSize={5}
            />
          </Box>
        </Box>
      </Box>
    </LayoutWithSafeArea>
  );
};

export default Bookmarked;
