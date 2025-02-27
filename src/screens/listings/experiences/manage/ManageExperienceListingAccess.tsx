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
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {capialiseFirst, isIos} from '../../../../constants/utils/utils';
import TextComponent from '../../../../components/text/TextComponent';
import LayoutWithSafeArea from '../../../../components/layout/LayoutWithSafeAreaWithoutBg';
import PressableComponent from '../../../../components/pressable/PressableComponent';
import TicketOutlinedIcon from '../../../../assets/svgs/icons/ticket-outlined.svg';
import CapacityOutlinedIcon from '../../../../assets/svgs/icons/capacity-outlined.svg';
import pallete from '../../../../constants/colors/pallete';
import {FlashList} from '@shopify/flash-list';
import TicketCard from '../../../../components/cards/TicketCard';
import {Shadow} from 'react-native-shadow-2';
import ScrollNav, {
  NavItemOptionProps,
} from '../../../../components/scrollNav/ScrollNav';
import ChipComponent from '../../../../components/chip/ChipComponent';

const ManageExperienceListingAccess = () => {
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

  const requiredPersonalInfos = useMemo(
    () => [
      {
        title: 'Name',
        icon: (
          <Octicons
            name="person"
            size={20}
            style={[createGlobalStyles.textCulrMainBlack]}
          />
        ),
        status: 'required',
      },
      {
        title: 'Email',
        icon: (
          <Fontisto
            name="email"
            size={20}
            style={[createGlobalStyles.textCulrMainBlack]}
          />
        ),
        status: 'required',
      },
      {
        title: 'Phone',
        icon: (
          <Ionicons
            name="phone-portrait-outline"
            size={20}
            style={[createGlobalStyles.textCulrMainBlack]}
          />
        ),
        status: 'required',
      },
    ],
    [],
  );

  const tickets = useMemo(
    () => [
      {
        key: 0,
        type: 'Regular',
        totalNumberAvailable: Infinity,
        totalNumberofAttendees: 124,
        amount: 0,
        perks: ['Free Drinks', 'Daily Meal', 'A free lounge', 'Wifi'],
      },

      {
        key: 1,
        type: 'VIP',
        totalNumberAvailable: 200,
        totalNumberofAttendees: 124,
        amount: 50000,
        perks: ['Free Drinks', 'Daily Meal', 'A free lounge', 'Wifi'],
      },
    ],
    [],
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
      <Box>
        <Box style={[createGlobalStyles.pl31]}>
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

        <Box style={[createGlobalStyles.px31]}>
          <Box
            style={[createGlobalStyles.flexrow, createGlobalStyles.gapX10, createGlobalStyles.mt2]}>
            <Box style={[createGlobalStyles.flexrow]}>
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
                    createGlobalStyles.p0p4,
                    createGlobalStyles.bgCulrAlertVermilion,
                    createGlobalStyles.br,
                  ]}>
                  <TicketOutlinedIcon
                    color={pallete.culrMainVermilion}
                    style={[createGlobalStyles.scale65]}
                  />
                </Box>

                <Box>
                  <TextComponent
                    style={[
                      createGlobalStyles.fontNeulisAlt_Regular,
                      isIos() && createGlobalStyles.fontWeight400,
                      createGlobalStyles.fontSize14,
                      createGlobalStyles.textCulrMainBlack,
                      createGlobalStyles.lineHeight18p88,
                    ]}>
                    Registration
                  </TextComponent>

                  <TextComponent
                    style={[
                      createGlobalStyles.fontNeulisAlt_Light,
                      isIos() && createGlobalStyles.fontWeight300,
                      createGlobalStyles.fontSize12,
                      createGlobalStyles.textCulrMainBlack,
                      createGlobalStyles.lineHeight16p27,
                    ]}>
                    Open
                  </TextComponent>
                </Box>
              </PressableComponent>
            </Box>

            <Box style={[createGlobalStyles.flexrow]}>
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
                    createGlobalStyles.p0p6,
                    createGlobalStyles.bgCulrAmericanPurpleOpacity20,
                    createGlobalStyles.br,
                  ]}>
                  <CapacityOutlinedIcon
                    color={pallete.culrAmericanPurple}
                    // style={[globalStyle.scale65]}
                  />
                </Box>

                <Box>
                  <TextComponent
                    style={[
                      createGlobalStyles.fontNeulisAlt_Regular,
                      isIos() && createGlobalStyles.fontWeight400,
                      createGlobalStyles.fontSize14,
                      createGlobalStyles.textCulrMainBlack,
                      createGlobalStyles.lineHeight18p88,
                    ]}>
                    Event Capacity
                  </TextComponent>

                  <TextComponent
                    style={[
                      createGlobalStyles.fontNeulisAlt_Light,
                      isIos() && createGlobalStyles.fontWeight300,
                      createGlobalStyles.fontSize12,
                      createGlobalStyles.textCulrMainBlack,
                      createGlobalStyles.lineHeight16p27,
                    ]}>
                    Unlimited
                  </TextComponent>
                </Box>
              </PressableComponent>
            </Box>
          </Box>

          <Box style={[createGlobalStyles.mt3, createGlobalStyles.flexrow]}>
            <TextComponent
              style={[
                createGlobalStyles.fontNeulisAlt_Bold,
                isIos() && createGlobalStyles.fontWeight700,
                createGlobalStyles.fontSize18,
                createGlobalStyles.textCulrMainBlack,
                createGlobalStyles.lineHeight24p1,
              ]}>
              Tickets
            </TextComponent>
          </Box>

          <Box style={[createGlobalStyles.mt1]}>
            <FlashList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={tickets}
              renderItem={({item, index}) => (
                <Box key={index} style={[createGlobalStyles.p0p8, createGlobalStyles.w10]}>
                  <TicketCard
                    type={item.type}
                    totalNumberAvailable={item.totalNumberAvailable}
                    totalNumberofAttendees={item.totalNumberofAttendees}
                    perks={item.perks}
                    amount={item.amount}
                  />
                </Box>
              )}
              estimatedItemSize={200}
            />
          </Box>

          <Box style={[createGlobalStyles.mt4]}>
            <TextComponent
              style={[
                createGlobalStyles.fontNeulisAlt_Bold,
                isIos() && createGlobalStyles.fontWeight700,
                createGlobalStyles.fontSize18,
                createGlobalStyles.textCulrMainBlack,
                createGlobalStyles.lineHeight24p1,
              ]}>
              Registration Questions
            </TextComponent>

            <TextComponent
              style={[
                createGlobalStyles.mt0p5,
                createGlobalStyles.fontNeulisAlt_Light,
                isIos() && createGlobalStyles.fontWeight300,
                createGlobalStyles.fontSize14,
                createGlobalStyles.textCulrMainBlack,
                createGlobalStyles.lineHeight18p88,
              ]}>
              We will ask guests the following when they register for the event.
            </TextComponent>
          </Box>

          <Box style={[createGlobalStyles.mt2, createGlobalStyles.gapY16]}>
            <Box
              style={[
                createGlobalStyles.flexrow,
                createGlobalStyles.gapX10,
                createGlobalStyles.alignItemsCenter,
              ]}>
              <Box
                style={[
                  createGlobalStyles.p0p6,
                  createGlobalStyles.bgCulrMainBlack,
                  createGlobalStyles.br,
                ]}>
                <AntDesign
                  name="contacts"
                  size={15}
                  style={[createGlobalStyles.textWhite]}
                />
              </Box>

              <TextComponent
                style={[
                  createGlobalStyles.textCulrMainBlack,
                  createGlobalStyles.fontSize14,
                  createGlobalStyles.fontNeulisAlt_Bold,
                  isIos() && createGlobalStyles.fontWeight700,
                  createGlobalStyles.lineHeight18p88,
                ]}>
                Personal Information
              </TextComponent>
            </Box>

            <Shadow
              style={[createGlobalStyles.flexrow]}
              startColor={pallete.culrMainBlackOpacity2}
              offset={[0, 4]}>
              <Box
                flex={1}
                style={[
                  createGlobalStyles.bgWhite,
                  createGlobalStyles.borderRadius20,
                  createGlobalStyles.p2,
                ]}>
                {requiredPersonalInfos.map((info, index) => (
                  <Box
                    key={index}
                    style={[
                      createGlobalStyles.py1,
                      createGlobalStyles.px1,
                      createGlobalStyles.borderBottom,
                      createGlobalStyles.borderCulrLightBlackOpacity20,
                    ]}>
                    <Box
                      style={[
                        createGlobalStyles.flexrow,
                        createGlobalStyles.gapX5,
                        createGlobalStyles.alignItemsCenter,
                      ]}>
                      {info.icon}

                      <TextComponent
                        style={[
                          createGlobalStyles.textCulrMainBlack,
                          createGlobalStyles.fontSize12,
                          createGlobalStyles.fontNeulisAlt_Regular,
                          createGlobalStyles.lineHeight16p27,
                          isIos() && createGlobalStyles.fontWeight400,
                        ]}>
                        {info.title}
                      </TextComponent>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Shadow>
          </Box>

          <Box style={[createGlobalStyles.mt2]}>
            <Box
              style={[
                createGlobalStyles.flexrow,
                createGlobalStyles.gapX5,
                createGlobalStyles.alignItemsCenter,
              ]}>
              <Box
                style={[
                  createGlobalStyles.p0p6,
                  createGlobalStyles.bgCulrMainBlack,
                  createGlobalStyles.br,
                ]}>
                <AntDesign
                  name="question"
                  size={15}
                  style={[createGlobalStyles.textWhite]}
                />
              </Box>

              <TextComponent
                style={[
                  createGlobalStyles.textCulrMainBlack,
                  createGlobalStyles.fontSize14,
                  createGlobalStyles.fontNeulisAlt_Bold,
                  isIos() && createGlobalStyles.fontWeight700,
                  createGlobalStyles.lineHeight18p88,
                ]}>
                Custom Questions
              </TextComponent>
            </Box>
          </Box>
        </Box>
      </Box>
    </LayoutWithSafeArea>
  );
};

export default ManageExperienceListingAccess;
