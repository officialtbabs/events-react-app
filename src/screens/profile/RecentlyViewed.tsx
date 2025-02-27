import React, {useEffect, useMemo, useRef, useState} from 'react';
import Box from '../../components/layout/Box';
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

const RecentlyViewed = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const {navigate} = useNavigation<BrandNavigationProps>();
  const [currentFilter, setCurrentFilter] = useState('events');

  const filterOptions = useMemo<NavItemOptionProps[]>(
    () => [
      {
        name: 'all',
        isActive: currentFilter.toLocaleLowerCase() === 'all',
        onPress: () => setCurrentFilter(preFilter => preFilter && 'all'),
      },
      {
        name: 'events',
        isActive: currentFilter.toLocaleLowerCase() === 'events',
        onPress: () => setCurrentFilter('events'),
      },
      {
        name: 'places',
        isActive: currentFilter.toLocaleLowerCase() === 'places',
        onPress: () => setCurrentFilter('places'),
      },
      {
        name: 'experiences',
        isActive: currentFilter.toLocaleLowerCase() === 'experiences',
        onPress: () => setCurrentFilter('experiences'),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentFilter],
  );

  const listingOptions = useMemo<ListingCardProps[]>(
    () => [
      {
        title: 'Jay’s Don Hotel',
        location: 'Lekki phase 1',
        purpose: 'Hotels',
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
          title="Recently Viewed"
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
      <Box flex={1}>
        {/* <Box style={[globalStyle.mb9]}>
          <Box style={[globalStyle.w8]}>
            <TextComponent
              style={[
                globalStyle.fontNeulisAlt_Bold,
                globalStyle.fontSize24,
                globalStyle.textCulrMainBlack,
              ]}>
              Hi MTN,{' '}
              <TextComponent
                style={[
                  globalStyle.fontNeulisAlt_Light,
                  globalStyle.fontSize24,
                  globalStyle.textCulrMainBlack,
                ]}>
                here’s
              </TextComponent>{' '}
              what’s happening in your store.
            </TextComponent>
          </Box>
        </Box> */}

        <Box style={[globalStyles.py1]}>
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
                currentFilter.toLocaleLowerCase() !== 'all'
                  ? listingOptions.filter(
                      option =>
                        option.purpose.toLocaleLowerCase() ===
                        currentFilter.toLocaleLowerCase(),
                    )
                  : listingOptions
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

export default RecentlyViewed;
