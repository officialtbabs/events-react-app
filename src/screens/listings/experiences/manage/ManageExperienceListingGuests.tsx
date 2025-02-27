import React, {useMemo, useState} from 'react';
import Box from '../../../../components/layout/Box';
import createGlobalStyles from '../../../../globalStyles/globalStyles';
import HeaderComponent from '../../../../components/header/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  NestedManageEventListingNavigationProps,
  NestedManageExperienceListingNavigationProps,
  NestedMangeEventListingRouteProp,
  NestedMangeExperienceListingRouteProp,
} from '../../../../constants/types/types';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {capialiseFirst, isIos} from '../../../../constants/utils/utils';
import TextComponent from '../../../../components/text/TextComponent';
import LayoutWithSafeArea from '../../../../components/layout/LayoutWithSafeAreaWithoutBg';
import GuestCard, {
  GuestCardProps,
  GuestCardStatusEnum,
} from '../../../../components/cards/GuestCard';
import {FlashList} from '@shopify/flash-list';
import Slider from '@react-native-community/slider';
import pallete from '../../../../constants/colors/pallete';
import PressableComponent from '../../../../components/pressable/PressableComponent';
import ScrollNav, {
  NavItemOptionProps,
} from '../../../../components/scrollNav/ScrollNav';
import ChipComponent from '../../../../components/chip/ChipComponent';

const ManageExperienceListingGuests = () => {
  const {navigate} =
    useNavigation<NestedManageExperienceListingNavigationProps>();
  const {name: activeRouteName} = useRoute();

  const {
    params: {experienceId},
  } = useRoute<NestedMangeExperienceListingRouteProp>();

  const navOptions = useMemo<NavItemOptionProps[]>(
    () => [
      {
        name: 'overview',
        onPress: () =>
          navigate('overview', {
            experienceId: 'Hike ATV',
          }),
      },
      {
        name: 'bookings',
        onPress: () =>
          navigate('bookings', {
            experienceId: 'Hike ATV',
          }),
      },
      {
        name: 'access',
        onPress: () =>
          navigate('access', {
            experienceId: 'Hike ATV',
          }),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const eventGuestOptions = useMemo<GuestCardProps[]>(
    () => [
      {
        name: 'Jay Mark',
        email: 'jay@gmail.com',
        status: GuestCardStatusEnum.GOING,
        date: new Date(),
        onPress: () => null,
      },

      {
        name: 'Jay Mark',
        email: 'jay@gmail.com',
        status: GuestCardStatusEnum.GOING,
        date: new Date(),
        onPress: () => null,
      },

      {
        name: 'Jay Mark',
        email: 'jay@gmail.com',
        status: GuestCardStatusEnum.NOT_GOING,
        date: new Date(),
        onPress: () => null,
      },
    ],
    [],
  );

  const totalNumberOfGuests = useMemo(() => eventGuestOptions.length, []);

  const totalNumberOfGuestsGoing = useMemo(
    () =>
      eventGuestOptions.filter(
        guest => guest.status === GuestCardStatusEnum.GOING,
      ).length,
    [eventGuestOptions],
  );

  return (
    <LayoutWithSafeArea
      layoutHeader={
        <HeaderComponent
          title={experienceId}
          bottomBorder
          leftIcon={{
            type: 'icon',
            icon: (
              <Feather
                name="chevron-left"
                size={22}
                style={[createGlobalStyles.textCulrMainBlack]}
              />
            ),
          }}
        />
      }>
      <Box flex={1} style={[createGlobalStyles.px31]}>
        <Box>
          <ScrollNav
            navOptions={navOptions}
            // eslint-disable-next-line react/no-unstable-nested-components
            navItem={({item}) => (
              <Box style={[createGlobalStyles.mx1]}>
                <ChipComponent
                  text={capialiseFirst(item.name)}
                  variant={
                    activeRouteName.toLowerCase() === item.name.toLowerCase()
                      ? 'filled'
                      : 'text'
                  }
                  disabled={
                    activeRouteName.toLowerCase() !== item.name.toLowerCase()
                  }
                  onPress={item.onPress}
                />
              </Box>
            )}
          />
        </Box>

        <Box style={[createGlobalStyles.mt2]}>
          <TextComponent
            style={[
              createGlobalStyles.fontNeulisAlt_Regular,
              isIos() && createGlobalStyles.fontWeight400,
              createGlobalStyles.fontSize14,
              createGlobalStyles.textCulrMainVermilion,
              createGlobalStyles.lineHeight18p88,
            ]}>
            {totalNumberOfGuests} guests
          </TextComponent>

          <Slider
            style={[createGlobalStyles.bgTransparent, createGlobalStyles.h1p2]}
            thumbTintColor={pallete.transparent}
            minimumValue={0}
            maximumValue={totalNumberOfGuests}
            value={totalNumberOfGuestsGoing}
            minimumTrackTintColor={pallete.culrMainVermilion}
            maximumTrackTintColor={pallete.culrLightBlack}
          />

          <Box style={[createGlobalStyles.flexrow, createGlobalStyles.gapX20]}>
            <Box
              style={[
                createGlobalStyles.flexrow,
                createGlobalStyles.gapX5,
                createGlobalStyles.alignItemsCenter,
              ]}>
              <Octicons
                name="dot-fill"
                size={15}
                style={[createGlobalStyles.textCulrMainVermilion]}
              />

              <TextComponent
                style={[
                  createGlobalStyles.fontNeulisAlt_Regular,
                  isIos() && createGlobalStyles.fontWeight400,
                  createGlobalStyles.fontSize14,
                  createGlobalStyles.textCulrMainVermilion,
                  createGlobalStyles.lineHeight18p88,
                ]}>
                {totalNumberOfGuestsGoing} going
              </TextComponent>
            </Box>

            <Box
              style={[
                createGlobalStyles.flexrow,
                createGlobalStyles.gapX5,
                createGlobalStyles.alignItemsCenter,
              ]}>
              <Octicons
                name="dot-fill"
                size={15}
                style={[createGlobalStyles.textCulrLightBlack]}
              />

              <TextComponent
                style={[
                  createGlobalStyles.fontNeulisAlt_Regular,
                  isIos() && createGlobalStyles.fontWeight400,
                  createGlobalStyles.fontSize14,
                  createGlobalStyles.textCulrLightBlack,
                  createGlobalStyles.lineHeight18p88,
                ]}>
                {totalNumberOfGuests - totalNumberOfGuestsGoing} not going
              </TextComponent>
            </Box>
          </Box>
        </Box>

        <Box style={[createGlobalStyles.flexrow, createGlobalStyles.mt2]}>
          <PressableComponent
            style={[
              createGlobalStyles.flexrow,
              createGlobalStyles.alignItemsCenter,
              createGlobalStyles.gapX10,
              createGlobalStyles.br,
              createGlobalStyles.bgWhite,
              createGlobalStyles.px0p8,
              createGlobalStyles.py0p6,
            ]}>
            <Box
              style={[
                createGlobalStyles.p1,
                createGlobalStyles.bgCulrMaximumBluePurpleOpacity20,
                createGlobalStyles.br,
              ]}>
              <SimpleLineIcons
                name="envelope-open"
                size={15}
                style={[createGlobalStyles.textCulrMaximumBluePurple]}
              />
            </Box>

            <TextComponent
              style={[
                createGlobalStyles.fontNeulisAlt_Regular,
                isIos() && createGlobalStyles.fontWeight400,
                createGlobalStyles.fontSize14,
                createGlobalStyles.textCulrMainBlack,
                createGlobalStyles.lineHeight18p88,
              ]}>
              Invite Guests
            </TextComponent>
          </PressableComponent>
        </Box>

        <Box
          style={[
            createGlobalStyles.mt1,
            createGlobalStyles.borderTop,
            createGlobalStyles.borderCulrMainBlackOpacity20,
            createGlobalStyles.pt1,
          ]}>
          <TextComponent
            style={[
              createGlobalStyles.fontNeulisAlt_Bold,
              isIos() && createGlobalStyles.fontWeight700,
              createGlobalStyles.fontSize18,
              createGlobalStyles.textCulrMainBlack,
              createGlobalStyles.lineHeight24p1,
            ]}>
            Bookings
          </TextComponent>
        </Box>

        <Box
          style={[
            createGlobalStyles.mt4,
            createGlobalStyles.bgWhite,
            createGlobalStyles.borderRadius20,
            createGlobalStyles.py2,
            createGlobalStyles.minH80Per,
          ]}>
          <FlashList
            showsVerticalScrollIndicator={false}
            data={eventGuestOptions}
            renderItem={({item}) => (
              <GuestCard
                key={item.name}
                name={item.name}
                email={item.email}
                status={item.status}
                date={item.date}
                onPress={item.onPress}
              />
            )}
            estimatedItemSize={5}
          />
        </Box>
      </Box>
    </LayoutWithSafeArea>
  );
};

export default ManageExperienceListingGuests;
