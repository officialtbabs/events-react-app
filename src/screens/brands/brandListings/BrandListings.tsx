import React, {useMemo} from 'react';
import Box from '../../../components/layout/Box';
import HeaderComponent from '../../../components/header/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  NestedBrandListingsProps,
  NestedBrandListingsRouteProp,
} from '../../../constants/types/types';
import Feather from 'react-native-vector-icons/Feather';
import {FlashList} from '@shopify/flash-list';
import ListingCard, {
  ListingCardProps,
} from '../../../components/cards/ListingCard';
import LayoutWithSafeArea from '../../../components/layout/LayoutWithSafeAreaWithoutBg';
import {capialiseFirst} from '../../../constants/utils/utils';
import ScrollNav, {
  NavItemOptionProps,
} from '../../../components/scrollNav/ScrollNav';
import ChipComponent from '../../../components/chip/ChipComponent';
import {useAppSelector} from '../../../constants/utils/hooks';

const BrandListings = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const {navigate} = useNavigation<NestedBrandListingsProps>();

  const {
    params: {filter},
  } = useRoute<NestedBrandListingsRouteProp>();

  const filterOptions = useMemo<NavItemOptionProps[]>(
    () => [
      {
        name: 'all',
        isActive: filter.toLocaleLowerCase() === 'all',
        onPress: () =>
          navigate('listings', {
            filter: 'all',
          }),
      },
      {
        name: 'events',
        isActive: filter.toLocaleLowerCase() === 'events',
        onPress: () =>
          navigate('listings', {
            filter: 'events',
          }),
      },
      {
        name: 'places',
        isActive: filter.toLocaleLowerCase() === 'places',
        onPress: () =>
          navigate('listings', {
            filter: 'places',
          }),
      },
      {
        name: 'experiences',
        isActive: filter.toLocaleLowerCase() === 'experiences',
        onPress: () =>
          navigate('listings', {
            filter: 'experiences',
          }),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filter],
  );

  const listingOptions = useMemo<ListingCardProps[]>(
    () => [
      {
        title: 'Jay’s Don Hotel',
        location: 'Lekki phase 1',
        purpose: 'Places',
        views: 22,
        comments: 20,
        boomarks: 20,
        onPress: () =>
          navigate('listingDetails', {
            id: 'Jay’s Don Hotel',
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
          navigate('listingDetails', {
            id: 'TED business Talk',
          }),
      },

      {
        title: 'Pie Horse Ride',
        location: 'Lekki phase 1',
        purpose: 'Experiences',
        views: 22,
        comments: 20,
        boomarks: 20,
        onPress: () =>
          navigate('listingDetails', {
            id: 'Pie Horse Ride',
          }),
      },

      {
        title: 'TJ launch party',
        location: 'Lekki phase 1',
        purpose: 'Events',
        views: 22,
        comments: 20,
        boomarks: 20,
        onPress: () =>
          navigate('listingDetails', {
            id: 'TJ launch party',
          }),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <LayoutWithSafeArea
      layoutHeader={
        <HeaderComponent
          title={
            filter.toLocaleLowerCase() !== 'all'
              ? capialiseFirst(filter)
              : 'All Listings'
          }
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
          //   rightIcon={{
          //     type: 'icon',
          //     icon: (
          //       <>
          //         <PressableComponent onPress={() => navigate('brandMore')}>
          //           <Ionicons
          //             name="grid-outline"
          //             size={24}
          //             style={[
          //               globalStyle.textCulrMainVermilion,
          //               globalStyle.p1p2,
          //               globalStyle.bgCulrAlertVermilion,
          //               globalStyle.br,
          //             ]}
          //           />
          //         </PressableComponent>
          //       </>
          //     ),
          //   }}
        />
      }>
      <Box flex={1}>
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
                filter.toLocaleLowerCase() !== 'all'
                  ? listingOptions.filter(
                      option =>
                        option.purpose.toLocaleLowerCase() ===
                        filter.toLocaleLowerCase(),
                    )
                  : listingOptions
              }
              renderItem={({item}) => (
                <Box style={[globalStyles.mb2]}>
                  <ListingCard
                    title={item.title}
                    location={item.location}
                    purpose={item.purpose}
                    views={item.views}
                    comments={item.comments}
                    boomarks={item.boomarks}
                    onPress={item.onPress}
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

export default BrandListings;
