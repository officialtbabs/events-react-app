import React, {useMemo, useState} from 'react';
import Box from '../../../../components/layout/Box';
import createGlobalStyles from '../../../../globalStyles/globalStyles';
import HeaderComponent from '../../../../components/header/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  BrandNavigationProps,
  NestedBrandListingDetailsRouteProp,
  NestedManageEventListingNavigationProps,
  NestedManageExperienceListingNavigationProps,
  NestedMangeEventListingRouteProp,
  NestedMangeExperienceListingRouteProp,
} from '../../../../constants/types/types';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {capialiseFirst, isIos} from '../../../../constants/utils/utils';
import TextComponent from '../../../../components/text/TextComponent';
import CalenderOutlined from '../../../../assets/svgs/icons/calender-outlined.svg';
import Carousel from 'react-native-reanimated-carousel';
import {width} from '../../../login/LoginScreen';
import {ImageBackground} from 'react-native';
import nikeImage from '../../../../assets/images/NikeBg.png';
import bgIllustrationImage from '../../../../assets/images/dashboardBg.png';
import ButtonComponent from '../../../../components/button/ButtonComponent';
import LayoutWithSafeArea from '../../../../components/layout/LayoutWithSafeAreaWithoutBg';
import ScrollNav, {
  NavItemOptionProps,
} from '../../../../components/scrollNav/ScrollNav';
import ChipComponent from '../../../../components/chip/ChipComponent';

const ManageExperienceListingOverview = () => {
  const {navigate} =
    useNavigation<NestedManageExperienceListingNavigationProps>();
  const {name: activeRouteName} = useRoute();

  const {
    params: {experienceId},
  } = useRoute<NestedMangeExperienceListingRouteProp>();

  const carouselItemOptions = useMemo(
    () => [nikeImage, bgIllustrationImage],
    [],
  );

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
      <Box flex={1} style={[]}>
        <Box style={[createGlobalStyles.px31]}>
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

        <Box
          style={[
            createGlobalStyles.px31,
            createGlobalStyles.borderBottom,
            createGlobalStyles.borderCulrMainBlackOpacity20,
            createGlobalStyles.pb1p6,
            createGlobalStyles.mt2,
          ]}>
          <TextComponent
            style={[
              createGlobalStyles.textCulrMainBlack,
              createGlobalStyles.fontSize14,
              createGlobalStyles.fontNeulisAlt_Bold,
              isIos() && createGlobalStyles.fontWeight700,
              createGlobalStyles.lineHeight18p88,
            ]}>
            Gallery
          </TextComponent>

          <Carousel
            style={[createGlobalStyles.flexOne, createGlobalStyles.mt1]}
            loop
            width={width - 62}
            height={229}
            autoPlay={true}
            data={carouselItemOptions}
            scrollAnimationDuration={1000}
            onSnapToItem={index => console.log('current index:', index)}
            renderItem={({item, index}) => (
              <Box
                style={{
                  flex: 1,
                  // borderWidth: 1,
                  justifyContent: 'center',
                }}>
                <ImageBackground
                  source={item}
                  style={[createGlobalStyles.flexOne]}></ImageBackground>
              </Box>
            )}
          />
        </Box>

        <Box
          style={[
            createGlobalStyles.px31,
            createGlobalStyles.borderBottom,
            createGlobalStyles.borderCulrMainBlackOpacity20,
            createGlobalStyles.pb1p6,
            createGlobalStyles.mt2,
          ]}>
          <TextComponent
            style={[
              createGlobalStyles.textCulrMainBlack,
              createGlobalStyles.fontSize14,
              createGlobalStyles.fontNeulisAlt_Bold,
              isIos() && createGlobalStyles.fontWeight700,
            ]}>
            About the Experience
          </TextComponent>

          <TextComponent
            style={[
              createGlobalStyles.textCulrMainBlack,
              createGlobalStyles.fontSize14,
              createGlobalStyles.fontNeulisAlt_Regular,
              isIos() && createGlobalStyles.fontWeight400,
              createGlobalStyles.lineHeight18p88,
              createGlobalStyles.mt1,
            ]}>
            Time to get days off with your family and friends in Lagos city,
            have fun and also eat up. Have fun with people you love and really
            care about, check it out.
          </TextComponent>

          <Box style={[createGlobalStyles.flexrow, createGlobalStyles.gapX5]}>
            <TextComponent
              style={[
                createGlobalStyles.textCulrMainBlack,
                createGlobalStyles.fontSize14,
                createGlobalStyles.fontNeulisAlt_Medium,
                isIos() && createGlobalStyles.fontWeight500,
                createGlobalStyles.lineHeight18p88,
                createGlobalStyles.underline,
              ]}>
              Read more
            </TextComponent>

            <Feather
              name="chevron-down"
              size={24}
              style={[createGlobalStyles.textBlack]}
            />
          </Box>
        </Box>

        <Box
          style={[
            createGlobalStyles.px31,
            createGlobalStyles.borderBottom,
            createGlobalStyles.borderCulrMainBlackOpacity20,
            createGlobalStyles.pb1p6,
            createGlobalStyles.mt2,
            createGlobalStyles.gapY10,
          ]}>
          <TextComponent
            style={[
              createGlobalStyles.textCulrMainBlack,
              createGlobalStyles.fontSize14,
              createGlobalStyles.fontNeulisAlt_Bold,
              isIos() && createGlobalStyles.fontWeight700,
            ]}>
            More Details
          </TextComponent>

          <Box
            style={[
              createGlobalStyles.flexrow,
              createGlobalStyles.gapX5,
              createGlobalStyles.alignItemsCenter,
            ]}>
            <CalenderOutlined />

            <TextComponent
              style={[
                createGlobalStyles.textCulrMainBlack,
                createGlobalStyles.fontSize14,
                createGlobalStyles.fontNeulisAlt_Regular,
                createGlobalStyles.lineHeight18p88,
                isIos() && createGlobalStyles.fontWeight400,
              ]}>
              Mon - Sat
            </TextComponent>
          </Box>

          <Box
            style={[
              createGlobalStyles.flexrow,
              createGlobalStyles.gapX5,
              createGlobalStyles.alignItemsCenter,
            ]}>
            <Ionicons
              name="time-outline"
              size={24}
              style={[createGlobalStyles.textCulrMainBlack]}
            />

            <TextComponent
              style={[
                createGlobalStyles.textCulrMainBlack,
                createGlobalStyles.fontSize14,
                createGlobalStyles.fontNeulisAlt_Regular,
                createGlobalStyles.lineHeight18p88,
                isIos() && createGlobalStyles.fontWeight400,
              ]}>
              8am - 5am GMT+1:00
            </TextComponent>
          </Box>

          <Box
            style={[
              createGlobalStyles.flexrow,
              createGlobalStyles.gapX5,
              createGlobalStyles.alignItemsCenter,
            ]}>
            <Ionicons
              name="location-outline"
              size={24}
              style={[createGlobalStyles.textCulrMainBlack]}
            />

            <TextComponent
              style={[
                createGlobalStyles.textCulrMainBlack,
                createGlobalStyles.fontSize14,
                createGlobalStyles.fontNeulisAlt_Regular,
                createGlobalStyles.lineHeight18p88,
                isIos() && createGlobalStyles.fontWeight400,
              ]}>
              Lekki phase 1
            </TextComponent>
          </Box>
        </Box>

        <Box
          style={[
            createGlobalStyles.px31,
            createGlobalStyles.borderBottom,
            createGlobalStyles.borderCulrMainBlackOpacity20,
            createGlobalStyles.pb1p6,
            createGlobalStyles.mt2,
          ]}>
          <TextComponent
            style={[
              createGlobalStyles.textCulrMainBlack,
              createGlobalStyles.fontSize14,
              createGlobalStyles.fontNeulisAlt_Bold,
              createGlobalStyles.lineHeight18p88,
              isIos() && createGlobalStyles.fontWeight700,
              createGlobalStyles.mb0p8,
            ]}>
            Perks
          </TextComponent>

          <Box style={[createGlobalStyles.gapY10]}>
            <Box
              style={[
                createGlobalStyles.flexrow,
                createGlobalStyles.gapX5,
                createGlobalStyles.alignItemsCenter,
              ]}>
              <CalenderOutlined />

              <TextComponent
                style={[
                  createGlobalStyles.textCulrMainBlack,
                  createGlobalStyles.fontSize14,
                  createGlobalStyles.fontNeulisAlt_Regular,
                  createGlobalStyles.lineHeight18p88,
                  isIos() && createGlobalStyles.fontWeight400,
                ]}>
                Massaging Room
              </TextComponent>
            </Box>

            <Box
              style={[
                createGlobalStyles.flexrow,
                createGlobalStyles.gapX5,
                createGlobalStyles.alignItemsCenter,
              ]}>
              <Ionicons
                name="time-outline"
                size={24}
                style={[createGlobalStyles.textCulrMainBlack]}
              />

              <TextComponent
                style={[
                  createGlobalStyles.textCulrMainBlack,
                  createGlobalStyles.fontSize14,
                  createGlobalStyles.fontNeulisAlt_Regular,
                  createGlobalStyles.lineHeight18p88,
                  isIos() && createGlobalStyles.fontWeight400,
                ]}>
                Cinema Room
              </TextComponent>
            </Box>

            <Box
              style={[
                createGlobalStyles.flexrow,
                createGlobalStyles.gapX5,
                createGlobalStyles.alignItemsCenter,
              ]}>
              <Ionicons
                name="location-outline"
                size={24}
                style={[createGlobalStyles.textCulrMainBlack]}
              />

              <TextComponent
                style={[
                  createGlobalStyles.textCulrMainBlack,
                  createGlobalStyles.fontSize14,
                  createGlobalStyles.fontNeulisAlt_Regular,
                  createGlobalStyles.lineHeight18p88,
                  isIos() && createGlobalStyles.fontWeight400,
                ]}>
                Daily Meal
              </TextComponent>
            </Box>
          </Box>
        </Box>

        <Box
          style={[
            createGlobalStyles.px31,
            createGlobalStyles.borderBottom,
            createGlobalStyles.borderCulrMainBlackOpacity20,
            createGlobalStyles.pb1p6,
            createGlobalStyles.mt2,
          ]}>
          <TextComponent
            style={[
              createGlobalStyles.textCulrMainBlack,
              createGlobalStyles.fontSize14,
              createGlobalStyles.fontNeulisAlt_Bold,
              createGlobalStyles.lineHeight18p88,
              isIos() && createGlobalStyles.fontWeight700,
              createGlobalStyles.mb0p8,
            ]}>
            Rules
          </TextComponent>

          <Box style={[createGlobalStyles.gapY2]}>
            <TextComponent
              style={[
                createGlobalStyles.textCulrMainBlack,
                createGlobalStyles.fontSize14,
                createGlobalStyles.fontNeulisAlt_Regular,
                createGlobalStyles.lineHeight18p88,
                isIos() && createGlobalStyles.fontWeight400,
              ]}>
              &#x2022; Taking in of sharp objects is prohibited
            </TextComponent>

            <TextComponent
              style={[
                createGlobalStyles.textCulrMainBlack,
                createGlobalStyles.fontSize14,
                createGlobalStyles.fontNeulisAlt_Regular,
                createGlobalStyles.lineHeight18p88,
                isIos() && createGlobalStyles.fontWeight400,
              ]}>
              &#x2022; No Smoking
            </TextComponent>

            <TextComponent
              style={[
                createGlobalStyles.textCulrMainBlack,
                createGlobalStyles.fontSize14,
                createGlobalStyles.fontNeulisAlt_Regular,
                createGlobalStyles.lineHeight18p88,
                isIos() && createGlobalStyles.fontWeight400,
              ]}>
              &#x2022; No hard drinks is allowed
            </TextComponent>

            <TextComponent
              style={[
                createGlobalStyles.textCulrMainBlack,
                createGlobalStyles.fontSize14,
                createGlobalStyles.fontNeulisAlt_Regular,
                createGlobalStyles.lineHeight18p88,
                isIos() && createGlobalStyles.fontWeight400,
              ]}>
              &#x2022; No Indecent Dressing
            </TextComponent>
          </Box>
        </Box>

        <Box style={[createGlobalStyles.px31, createGlobalStyles.pb1p6, createGlobalStyles.mt2]}>
          <TextComponent
            style={[
              createGlobalStyles.textCulrMainBlack,
              createGlobalStyles.fontSize14,
              createGlobalStyles.fontNeulisAlt_Bold,
              createGlobalStyles.lineHeight18p88,
              isIos() && createGlobalStyles.fontWeight700,
              createGlobalStyles.mb0p8,
            ]}>
            Contact Info.
          </TextComponent>

          <Box
            style={[
              createGlobalStyles.flexrow,
              createGlobalStyles.alignItemsCenter,
              createGlobalStyles.gapX10,
            ]}>
            <Feather
              name="phone-call"
              size={22}
              style={[createGlobalStyles.textCulrMainBlack]}
            />

            <TextComponent
              style={[
                createGlobalStyles.textCulrMainBlack,
                createGlobalStyles.fontSize13,
                createGlobalStyles.fontNeulisAlt_Regular,
                createGlobalStyles.lineHeight16p27,
                isIos() && createGlobalStyles.fontWeight400,
              ]}>
              +234 987 9878 908
            </TextComponent>

            <MaterialIcons
              name="content-copy"
              size={22}
              style={[createGlobalStyles.textCulrMainVermilion]}
            />
          </Box>
        </Box>
      </Box>
    </LayoutWithSafeArea>
  );
};

export default ManageExperienceListingOverview;
