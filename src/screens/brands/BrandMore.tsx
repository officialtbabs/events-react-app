import React, {useMemo} from 'react';
import Box from '../../components/layout/Box';
import TextComponent from '../../components/text/TextComponent';
import {useNavigation} from '@react-navigation/native';
import {MainBottomTabNavigationProps} from '../../constants/types/types';
import {useAppSelector} from '../../constants/utils/hooks';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderComponent from '../../components/header/Header';
import PressableComponent from '../../components/pressable/PressableComponent';
import LayoutWithSafeAreaWithoutScroll from '../../components/layout/LayoutWithSafeAreaWithoutBgWithoutScroll';
import Feather from 'react-native-vector-icons/Feather';
import CreateIconFilled from '../../assets/svgs/icons/create-filled.svg';
import TicketOutlined from '../../assets/svgs/icons/ticket-outlined.svg';
import MoneyWavyOutlined from '../../assets/svgs/icons/money-wavy-outlined.svg';
import CalenderStarOutlined from '../../assets/svgs/icons/calendar-star-outlined.svg';
import pallete from '../../constants/colors/pallete';
import {isIos} from '../../constants/utils/utils';

const BrandMore = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const {navigate} = useNavigation<MainBottomTabNavigationProps>();

  const engagementOptions = useMemo(
    () => [
      {
        title: 'Reviews',
        icon: (
          <Box
            style={[
              globalStyles.p0p5,
              globalStyles.bgCulrYellowShadeBg,
              globalStyles.br,
            ]}>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={22}
              style={[globalStyles.textCulrMainBlack]}
            />
          </Box>
        ),
        onPress: () =>
          navigate('brand', {
            screen: 'brandReviews',
          }),
      },
      {
        title: 'Earnings',
        icon: (
          <Box
            style={[
              globalStyles.p0p4,
              globalStyles.br,
              globalStyles.bgCulrGreenShadeBg,
            ]}>
            <MoneyWavyOutlined color={pallete.white} />
          </Box>
        ),
        onPress: () =>
          navigate('brand', {
            screen: 'brandEarnings',
            params: {
              screen: 'earnings',
            },
          }),
      },
      {
        title: 'Bookings',
        icon: (
          <Box
            style={[
              globalStyles.p0p5,
              globalStyles.bgCulrOrangeShadeBg,
              globalStyles.br,
            ]}>
            <TicketOutlined color={pallete.white} />
          </Box>
        ),
        onPress: () =>
          navigate('brand', {
            screen: 'brandBookings',
            params: {
              screen: 'bookings',
            },
          }),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const listingOptions = useMemo(
    () => [
      {
        title: 'Events',
        icon: (
          <Box
            style={[
              globalStyles.p0p5,
              globalStyles.br,
              globalStyles.bgCulrPurpleShadeBg,
            ]}>
            <CalenderStarOutlined color={pallete.white} />
          </Box>
        ),
        onPress: () =>
          navigate('brand', {
            screen: 'brandListings',
            params: {
              screen: 'listings',
              params: {
                filter: 'Events',
              },
            },
          }),
      },
      {
        title: 'Experiences',
        icon: (
          <Box
            style={[
              globalStyles.p0p5,
              globalStyles.bgCulrLemonShadeBg,
              globalStyles.br,
            ]}>
            <SimpleLineIcons
              name="emotsmile"
              size={22}
              style={[globalStyles.textCulrMainBlack]}
            />
          </Box>
        ),
        onPress: () =>
          navigate('brand', {
            screen: 'brandListings',
            params: {
              screen: 'listings',
              params: {
                filter: 'Experiences',
              },
            },
          }),
      },
      {
        title: 'Places',
        icon: (
          <Box
            style={[
              globalStyles.p0p5,
              globalStyles.bgCulrBlueShadeBg,
              globalStyles.br,
            ]}>
            <SimpleLineIcons
              name="location-pin"
              size={22}
              style={[globalStyles.textCulrMainBlack]}
            />
          </Box>
        ),
        onPress: () =>
          navigate('brand', {
            screen: 'brandListings',
            params: {
              screen: 'listings',
              params: {
                filter: 'Places',
              },
            },
          }),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <>
      <LayoutWithSafeAreaWithoutScroll
        layoutHeader={
          <HeaderComponent
            title="More"
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
            rightIcon={{
              type: 'icon',
              icon: (
                <PressableComponent
                  style={[
                    globalStyles.p1,
                    globalStyles.bgCulrAlertVermilion,
                    globalStyles.br,
                  ]}
                  onPress={() =>
                    navigate('brand', {
                      screen: 'brandSettings',
                    })
                  }>
                  <Ionicons
                    name="settings-outline"
                    size={22}
                    style={[globalStyles.textCulrMainVermilion]}
                  />
                </PressableComponent>
              ),
            }}
          />
        }>
        <Box flex={1} style={[globalStyles.px31, globalStyles.mt1]}>
          <PressableComponent
            style={[
              globalStyles.flexrow,
              globalStyles.alignItemsCenter,
              globalStyles.px1p6,
              globalStyles.bgCulrAlertVermilion,
              globalStyles.py1p1,
              globalStyles.px2,
              globalStyles.gapX13,
              globalStyles.borderRadius20,
            ]}
            onPress={() =>
              navigate('holderBottomTab', {
                screen: 'create',
              })
            }>
            <CreateIconFilled />

            <Box style={[globalStyles.alignItemsCenter]}>
              <TextComponent
                style={[
                  globalStyles.fontNeulisAlt_Bold,
                  isIos() && globalStyles.fontWeight700,
                  globalStyles.fontSize14,
                  globalStyles.textCulrMainBlack,
                  globalStyles.lineHeight18p88,
                ]}>
                Create New Listing
              </TextComponent>
            </Box>
          </PressableComponent>

          <Box
            style={[
              globalStyles.w10,
              globalStyles.flexrow,
              globalStyles.gapX10,
              globalStyles.mt2,
            ]}>
            {engagementOptions.map((option, index) => (
              <Box
                flex={1}
                key={index}
                style={[
                  globalStyles.maxW116,
                  globalStyles.maxH97,
                  globalStyles.borderRadius20,
                  globalStyles.border,
                  globalStyles.borderCulrLightBlack,
                ]}>
                <PressableComponent
                  onPress={option.onPress}
                  style={[
                    globalStyles.h10,
                    globalStyles.w10,
                    globalStyles.px1,
                    globalStyles.py1p3,
                  ]}>
                  <Box style={[globalStyles.flexrow, globalStyles.justifyEnd]}>
                    {option.icon}
                  </Box>

                  <TextComponent
                    style={[
                      globalStyles.fontNeulisAlt_Regular,
                      isIos() && globalStyles.fontWeight400,
                      globalStyles.fontSize12,
                      globalStyles.textCulrMainBlack,
                      globalStyles.pt1p6,
                      globalStyles.lineHeight16p27,
                    ]}>
                    {option.title}
                  </TextComponent>
                </PressableComponent>
              </Box>
            ))}
          </Box>

          <Box style={[globalStyles.pt2]}>
            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Bold,
                isIos() && globalStyles.fontWeight700,
                globalStyles.fontSize14,
                globalStyles.textCulrMainBlack,
                // globalStyle.pt1p6,
                globalStyles.lineHeight18p88,
              ]}>
              Current Listings
            </TextComponent>
            <Box
              style={[
                globalStyles.w10,
                globalStyles.flexrow,
                globalStyles.gapX10,
                globalStyles.mt1,
              ]}>
              {listingOptions.map((option, index) => (
                <Box
                  flex={1}
                  key={index}
                  style={[
                    globalStyles.maxW116,
                    globalStyles.maxH97,
                    globalStyles.borderRadius20,
                    globalStyles.border,
                    globalStyles.borderCulrLightBlack,
                  ]}>
                  <PressableComponent
                    onPress={option.onPress}
                    style={[
                      // globalStyle.h10,
                      globalStyles.w10,
                      globalStyles.px1,
                      globalStyles.py1,
                    ]}>
                    <Box
                      style={[globalStyles.flexrow, globalStyles.justifyEnd]}>
                      {option.icon}
                    </Box>

                    <TextComponent
                      numberOfLines={1}
                      style={[
                        globalStyles.fontNeulisAlt_Regular,
                        isIos() && globalStyles.fontWeight400,
                        globalStyles.fontSize12,
                        globalStyles.textCulrMainBlack,
                        globalStyles.pt1p6,
                        globalStyles.lineHeight16p27,
                      ]}>
                      {option.title}
                    </TextComponent>
                  </PressableComponent>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </LayoutWithSafeAreaWithoutScroll>
    </>
  );
};

export default BrandMore;
