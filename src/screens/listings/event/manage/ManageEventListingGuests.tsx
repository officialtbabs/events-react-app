import React, {useMemo} from 'react';
import Box from '../../../../components/layout/Box';
import HeaderComponent from '../../../../components/header/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  NestedManageEventListingNavigationProps,
  NestedMangeEventListingRouteProp,
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
import {useAppSelector} from '../../../../constants/utils/hooks';

const ManageEventListingGuests = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const {navigate} = useNavigation<NestedManageEventListingNavigationProps>();
  const {name: activeRouteName} = useRoute();

  const {
    params: {id},
  } = useRoute<NestedMangeEventListingRouteProp>();

  const navOptions = useMemo<NavItemOptionProps[]>(
    () => [
      {
        name: 'overview',
        isActive: activeRouteName === 'overview',
        onPress: () =>
          navigate('overview', {
            id: 'Jay Night Party',
          }),
      },
      {
        name: 'guests',
        isActive: activeRouteName === 'guests',
        onPress: () =>
          navigate('guests', {
            id: 'Jay Night Party',
          }),
      },
      {
        name: 'access',
        isActive: activeRouteName === 'access',
        onPress: () =>
          navigate('access', {
            id: 'Jay Night Party',
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
          title={id}
          bottomBorder
          leftIcon={{
            type: 'icon',
            icon: (
              <Feather
                name="chevron-left"
                size={22}
                style={[globalStyles.textCulrMainBlack]}
              />
            ),
          }}
        />
      }>
      <Box flex={1} style={[globalStyles.px31]}>
        <Box>
          <ScrollNav
            navOptions={navOptions}
            // eslint-disable-next-line react/no-unstable-nested-components
            navItem={({item}) => (
              <Box style={[globalStyles.mx1]}>
                <ChipComponent
                  text={capialiseFirst(item.name)}
                  variant={item.isActive ? 'filled' : 'text'}
                  disabled={
                    activeRouteName.toLowerCase() !== item.name.toLowerCase()
                  }
                  onPress={item.onPress}
                />
              </Box>
            )}
          />
        </Box>

        <Box style={[globalStyles.mt2]}>
          <TextComponent
            style={[
              globalStyles.fontNeulisAlt_Regular,
              isIos() && globalStyles.fontWeight400,
              globalStyles.fontSize14,
              globalStyles.textCulrMainVermilion,
              globalStyles.lineHeight18p88,
            ]}>
            {totalNumberOfGuests} guests
          </TextComponent>

          <Slider
            style={[globalStyles.bgTransparent, globalStyles.h1p2]}
            thumbTintColor={pallete.transparent}
            minimumValue={0}
            maximumValue={totalNumberOfGuests}
            value={totalNumberOfGuestsGoing}
            minimumTrackTintColor={pallete.culrMainVermilion}
            maximumTrackTintColor={pallete.culrLightBlack}
          />

          <Box style={[globalStyles.flexrow, globalStyles.gapX20]}>
            <Box
              style={[
                globalStyles.flexrow,
                globalStyles.gapX5,
                globalStyles.alignItemsCenter,
              ]}>
              <Octicons
                name="dot-fill"
                size={15}
                style={[globalStyles.textCulrMainVermilion]}
              />

              <TextComponent
                style={[
                  globalStyles.fontNeulisAlt_Regular,
                  isIos() && globalStyles.fontWeight400,
                  globalStyles.fontSize14,
                  globalStyles.textCulrMainVermilion,
                  globalStyles.lineHeight18p88,
                ]}>
                {totalNumberOfGuestsGoing} going
              </TextComponent>
            </Box>

            <Box
              style={[
                globalStyles.flexrow,
                globalStyles.gapX5,
                globalStyles.alignItemsCenter,
              ]}>
              <Octicons
                name="dot-fill"
                size={15}
                style={[globalStyles.textCulrLightBlack]}
              />

              <TextComponent
                style={[
                  globalStyles.fontNeulisAlt_Regular,
                  isIos() && globalStyles.fontWeight400,
                  globalStyles.fontSize14,
                  globalStyles.textCulrLightBlack,
                  globalStyles.lineHeight18p88,
                ]}>
                {totalNumberOfGuests - totalNumberOfGuestsGoing} not going
              </TextComponent>
            </Box>
          </Box>
        </Box>

        <Box style={[globalStyles.flexrow, globalStyles.mt2]}>
          <PressableComponent
            style={[
              globalStyles.flexrow,
              globalStyles.alignItemsCenter,
              globalStyles.gapX10,
              globalStyles.br,
              globalStyles.bgWhite,
              globalStyles.px0p8,
              globalStyles.py0p6,
            ]}>
            <Box
              style={[
                globalStyles.p1,
                globalStyles.bgCulrMaximumBluePurpleOpacity20,
                globalStyles.br,
              ]}>
              <SimpleLineIcons
                name="envelope-open"
                size={15}
                style={[globalStyles.textCulrMaximumBluePurple]}
              />
            </Box>

            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Regular,
                isIos() && globalStyles.fontWeight400,
                globalStyles.fontSize14,
                globalStyles.textCulrMainBlack,
                globalStyles.lineHeight18p88,
              ]}>
              Invite Guests
            </TextComponent>
          </PressableComponent>
        </Box>

        <Box
          style={[
            globalStyles.mt1,
            globalStyles.borderTop,
            globalStyles.borderCulrMainBlackOpacity20,
            globalStyles.pt1,
          ]}>
          <TextComponent
            style={[
              globalStyles.fontNeulisAlt_Bold,
              isIos() && globalStyles.fontWeight700,
              globalStyles.fontSize18,
              globalStyles.textCulrMainBlack,
              globalStyles.lineHeight24p1,
            ]}>
            Guests
          </TextComponent>
        </Box>

        <Box
          style={[
            globalStyles.mt4,
            globalStyles.bgWhite,
            globalStyles.borderRadius20,
            globalStyles.py2,
            globalStyles.minH80Per,
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

export default ManageEventListingGuests;
