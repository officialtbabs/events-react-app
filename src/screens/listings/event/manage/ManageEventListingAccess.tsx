import React, {useMemo} from 'react';
import Box from '../../../../components/layout/Box';
import HeaderComponent from '../../../../components/header/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  NestedManageEventListingNavigationProps,
  NestedMangeEventListingRouteProp,
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
import {useAppSelector} from '../../../../constants/utils/hooks';

const ManageEventListingAccess = () => {
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

  const requiredPersonalInfos = useMemo(
    () => [
      {
        title: 'Name',
        icon: (
          <Octicons
            name="person"
            size={20}
            style={[globalStyles.textCulrMainBlack]}
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
            style={[globalStyles.textCulrMainBlack]}
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
            style={[globalStyles.textCulrMainBlack]}
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
      <Box style={[globalStyles.px31]}>
        <Box>
          <ScrollNav
            navOptions={navOptions}
            // eslint-disable-next-line react/no-unstable-nested-components
            navItem={({item}) => (
              <Box style={[globalStyles.mx1]}>
                <ChipComponent
                  text={capialiseFirst(item.name)}
                  variant={
                    item.isActive
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

        <Box
          style={[globalStyles.flexrow, globalStyles.gapX10, globalStyles.mt2]}>
          <Box style={[globalStyles.flexrow]}>
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
                  globalStyles.p0p4,
                  globalStyles.bgCulrAlertVermilion,
                  globalStyles.br,
                ]}>
                <TicketOutlinedIcon
                  color={pallete.culrMainVermilion}
                  style={[globalStyles.scale65]}
                />
              </Box>

              <Box>
                <TextComponent
                  style={[
                    globalStyles.fontNeulisAlt_Regular,
                    isIos() && globalStyles.fontWeight400,
                    globalStyles.fontSize14,
                    globalStyles.textCulrMainBlack,
                    globalStyles.lineHeight18p88,
                  ]}>
                  Registration
                </TextComponent>

                <TextComponent
                  style={[
                    globalStyles.fontNeulisAlt_Light,
                    isIos() && globalStyles.fontWeight300,
                    globalStyles.fontSize12,
                    globalStyles.textCulrMainBlack,
                    globalStyles.lineHeight16p27,
                  ]}>
                  Open
                </TextComponent>
              </Box>
            </PressableComponent>
          </Box>

          <Box style={[globalStyles.flexrow]}>
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
                  globalStyles.p0p6,
                  globalStyles.bgCulrAmericanPurpleOpacity20,
                  globalStyles.br,
                ]}>
                <CapacityOutlinedIcon
                  color={pallete.culrAmericanPurple}
                  // style={[globalStyle.scale65]}
                />
              </Box>

              <Box>
                <TextComponent
                  style={[
                    globalStyles.fontNeulisAlt_Regular,
                    isIos() && globalStyles.fontWeight400,
                    globalStyles.fontSize14,
                    globalStyles.textCulrMainBlack,
                    globalStyles.lineHeight18p88,
                  ]}>
                  Event Capacity
                </TextComponent>

                <TextComponent
                  style={[
                    globalStyles.fontNeulisAlt_Light,
                    isIos() && globalStyles.fontWeight300,
                    globalStyles.fontSize12,
                    globalStyles.textCulrMainBlack,
                    globalStyles.lineHeight16p27,
                  ]}>
                  Unlimited
                </TextComponent>
              </Box>
            </PressableComponent>
          </Box>
        </Box>

        <Box style={[globalStyles.mt3, globalStyles.flexrow]}>
          <TextComponent
            style={[
              globalStyles.fontNeulisAlt_Bold,
              isIos() && globalStyles.fontWeight700,
              globalStyles.fontSize18,
              globalStyles.textCulrMainBlack,
              globalStyles.lineHeight24p1,
            ]}>
            Tickets
          </TextComponent>
        </Box>

        <Box style={[globalStyles.mt1]}>
          <FlashList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={tickets}
            renderItem={({item, index}) => (
              <Box key={index} style={[globalStyles.p0p8, globalStyles.w10]}>
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

        <Box style={[globalStyles.mt4]}>
          <TextComponent
            style={[
              globalStyles.fontNeulisAlt_Bold,
              isIos() && globalStyles.fontWeight700,
              globalStyles.fontSize18,
              globalStyles.textCulrMainBlack,
              globalStyles.lineHeight24p1,
            ]}>
            Registration Questions
          </TextComponent>

          <TextComponent
            style={[
              globalStyles.mt0p5,
              globalStyles.fontNeulisAlt_Light,
              isIos() && globalStyles.fontWeight300,
              globalStyles.fontSize14,
              globalStyles.textCulrMainBlack,
              globalStyles.lineHeight18p88,
            ]}>
            We will ask guests the following when they register for the event.
          </TextComponent>
        </Box>

        <Box style={[globalStyles.mt2, globalStyles.gapY16]}>
          <Box
            style={[
              globalStyles.flexrow,
              globalStyles.gapX10,
              globalStyles.alignItemsCenter,
            ]}>
            <Box
              style={[
                globalStyles.p0p6,
                globalStyles.bgCulrMainBlack,
                globalStyles.br,
              ]}>
              <AntDesign
                name="contacts"
                size={15}
                style={[globalStyles.textWhite]}
              />
            </Box>

            <TextComponent
              style={[
                globalStyles.textCulrMainBlack,
                globalStyles.fontSize14,
                globalStyles.fontNeulisAlt_Bold,
                isIos() && globalStyles.fontWeight700,
                globalStyles.lineHeight18p88,
              ]}>
              Personal Information
            </TextComponent>
          </Box>

          <Shadow
            style={[globalStyles.flexrow]}
            startColor={pallete.culrMainBlackOpacity2}
            offset={[0, 4]}>
            <Box
              flex={1}
              style={[
                globalStyles.bgWhite,
                globalStyles.borderRadius20,
                globalStyles.p2,
              ]}>
              {requiredPersonalInfos.map((info, index) => (
                <Box
                  key={index}
                  style={[
                    globalStyles.py1,
                    globalStyles.px1,
                    globalStyles.borderBottom,
                    globalStyles.borderCulrLightBlackOpacity20,
                  ]}>
                  <Box
                    style={[
                      globalStyles.flexrow,
                      globalStyles.gapX5,
                      globalStyles.alignItemsCenter,
                    ]}>
                    {info.icon}

                    <TextComponent
                      style={[
                        globalStyles.textCulrMainBlack,
                        globalStyles.fontSize12,
                        globalStyles.fontNeulisAlt_Regular,
                        globalStyles.lineHeight16p27,
                        isIos() && globalStyles.fontWeight400,
                      ]}>
                      {info.title}
                    </TextComponent>
                  </Box>
                </Box>
              ))}
            </Box>
          </Shadow>
        </Box>

        <Box style={[globalStyles.mt2]}>
          <Box
            style={[
              globalStyles.flexrow,
              globalStyles.gapX5,
              globalStyles.alignItemsCenter,
            ]}>
            <Box
              style={[
                globalStyles.p0p6,
                globalStyles.bgCulrMainBlack,
                globalStyles.br,
              ]}>
              <AntDesign
                name="question"
                size={15}
                style={[globalStyles.textWhite]}
              />
            </Box>

            <TextComponent
              style={[
                globalStyles.textCulrMainBlack,
                globalStyles.fontSize14,
                globalStyles.fontNeulisAlt_Bold,
                isIos() && globalStyles.fontWeight700,
                globalStyles.lineHeight18p88,
              ]}>
              Custom Questions
            </TextComponent>
          </Box>
        </Box>
      </Box>
    </LayoutWithSafeArea>
  );
};

export default ManageEventListingAccess;
