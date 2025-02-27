import React, {useMemo, useState} from 'react';
import Box from '../../components/layout/Box';
import globalStyles, {height} from '../../globalStyles/globalStyles';
import HeaderComponent from '../../components/header/Header';
import {useNavigation} from '@react-navigation/native';
import {BrandNavigationProps} from '../../constants/types/types';
import Feather from 'react-native-vector-icons/Feather';
import {FlashList} from '@shopify/flash-list';
import {ListingCardProps} from '../../components/cards/ListingCard';
import LayoutWithSafeArea from '../../components/layout/LayoutWithSafeAreaWithoutBg';
import InvitationCard from '../../components/cards/InvitationCard';
import TextComponent from '../../components/text/TextComponent';
import {useAppSelector} from '../../constants/utils/hooks';

const Invitations = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const {navigate} = useNavigation<BrandNavigationProps>();

  const invitations = useMemo<ListingCardProps[]>(
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
          title="Invitations"
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
      <Box flex={1} style={[globalStyles.px22, globalStyles.pt0p2]}>
        {/* <TextComponent>{height}</TextComponent> */}
        <Box style={[]}>
          <FlashList
            showsVerticalScrollIndicator={false}
            data={invitations}
            renderItem={({item}) => (
              <Box
                style={[
                  globalStyles.mb3p2,
                  globalStyles.p0p9,
                  globalStyles.w10,
                ]}>
                <InvitationCard
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
    </LayoutWithSafeArea>
  );
};

export default Invitations;
