import React, {useMemo} from 'react';
import Box from '../../../components/layout/Box';
import HeaderComponent from '../../../components/header/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  BrandNavigationProps,
  NestedBrandListingDetailsRouteProp,
} from '../../../constants/types/types';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {isIos} from '../../../constants/utils/utils';
import TextComponent from '../../../components/text/TextComponent';
import CalenderOutlined from '../../../assets/svgs/icons/calender-outlined.svg';
import Carousel from 'react-native-reanimated-carousel';
import {width} from '../../login/LoginScreen';
import {ImageBackground} from 'react-native';
import nikeImage from '../../../assets/images/NikeBg.png';
import bgIllustrationImage from '../../../assets/images/dashboardBg.png';
import ButtonComponent from '../../../components/button/ButtonComponent';
import {useAppSelector} from '../../../constants/utils/hooks';
import LayoutWithSafeAreaWithoutBg from '../../../components/layout/LayoutWithSafeAreaWithoutBg';

const BrandListingDetails = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const {navigate} = useNavigation<BrandNavigationProps>();

  const {
    params: {id},
  } = useRoute<NestedBrandListingDetailsRouteProp>();

  const carouselItemOptions = useMemo(
    () => [nikeImage, bgIllustrationImage],
    [],
  );

  return (
    <LayoutWithSafeAreaWithoutBg
      layoutHeader={
        <HeaderComponent
          title=""
          bottomBorder
          leftIcon={{
            type: 'icon',
            icon: (
              <Box
                style={[
                  globalStyles.p1p2,
                  globalStyles.bgCulrAlertVermilion,
                  globalStyles.br,
                ]}>
                <Feather
                  name="chevron-left"
                  size={24}
                  style={[globalStyles.textCulrMainVermilion]}
                />
              </Box>
            ),
          }}
        />
      }>
      <Box flex={1} style={[]}>
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

        <Carousel
          // style={[globalStyle.absolute, globalStyle.top0]}
          loop
          width={width}
          height={293}
          autoPlay={true}
          data={carouselItemOptions}
          scrollAnimationDuration={1000}
          // onSnapToItem={index => console.log('current index:', index)}
          renderItem={({item, index}) => (
            <Box
              key={index}
              style={{
                flex: 1,
                // borderWidth: 1,
                justifyContent: 'center',
              }}>
              <ImageBackground
                source={item}
                style={[globalStyles.flexOne]}></ImageBackground>
            </Box>
          )}
        />

        <Box
          style={[
            globalStyles.px31,
            globalStyles.borderBottom,
            globalStyles.borderCulrMainBlackOpacity20,
            globalStyles.pb1,
            globalStyles.mt2,
          ]}>
          <TextComponent
            style={[
              globalStyles.textCulrMainBlack,
              globalStyles.fontSize22,
              globalStyles.fontNeulisAlt_Bold,
              isIos() && globalStyles.fontWeight700,
            ]}>
            Apple Leadership Summit
          </TextComponent>

          <Box
            style={[
              globalStyles.flexrow,
              globalStyles.gapX20,
              globalStyles.mt2,
              globalStyles.alignItemsBaseline,
            ]}>
            <Box
              style={[
                globalStyles.flexrow,
                globalStyles.gapX5,
                globalStyles.alignItemsBaseline,
              ]}>
              <Ionicons
                name="star-sharp"
                size={13}
                style={[globalStyles.textCulrMainBlack]}
              />

              <TextComponent
                style={[
                  globalStyles.textCulrMainBlack,
                  globalStyles.fontSize18,
                  globalStyles.fontNeulisAlt_Bold,
                  globalStyles.lineHeight24p1,
                  isIos() && globalStyles.fontWeight700,
                ]}>
                4.99
              </TextComponent>

              <Ionicons
                name="star-sharp"
                size={13}
                style={[globalStyles.textCulrMainBlack]}
              />
            </Box>

            <TextComponent
              style={[
                globalStyles.textCulrMainBlack,
                globalStyles.fontSize12,
                globalStyles.fontNeulisAlt_Light,
                globalStyles.underline,
                globalStyles.lineHeight16p27,
                isIos() && globalStyles.fontWeight300,
              ]}>
              25 Reviews
            </TextComponent>
          </Box>

          <TextComponent
            style={[
              globalStyles.textCulrMainBlack,
              globalStyles.fontSize14,
              globalStyles.fontNeulisAlt_Bold,
              isIos() && globalStyles.fontWeight700,
              globalStyles.mt1p6,
            ]}>
            About
          </TextComponent>

          <TextComponent
            style={[
              globalStyles.textCulrMainBlack,
              globalStyles.fontSize14,
              globalStyles.fontNeulisAlt_Regular,
              isIos() && globalStyles.fontWeight400,
              globalStyles.lineHeight18p88,
              globalStyles.mt1,
            ]}>
            Time to get days off with your family and friends in Lagos city,
            have fun and also eat up. Have fun with people you love and really
            care about, check it out.
          </TextComponent>

          <Box style={[globalStyles.flexrow, globalStyles.gapX5]}>
            <TextComponent
              style={[
                globalStyles.textCulrMainBlack,
                globalStyles.fontSize14,
                globalStyles.fontNeulisAlt_Medium,
                isIos() && globalStyles.fontWeight500,
                globalStyles.lineHeight18p88,
                globalStyles.underline,
              ]}>
              Read more
            </TextComponent>

            <Feather
              name="chevron-down"
              size={24}
              style={[globalStyles.textBlack]}
            />
          </Box>
        </Box>

        <Box
          style={[
            globalStyles.px31,
            globalStyles.borderBottom,
            globalStyles.borderCulrMainBlackOpacity20,
            globalStyles.py1,
            globalStyles.gapY10,
          ]}>
          <Box
            style={[
              globalStyles.flexrow,
              globalStyles.gapX5,
              globalStyles.alignItemsCenter,
            ]}>
            <CalenderOutlined />

            <TextComponent
              style={[
                globalStyles.textCulrMainBlack,
                globalStyles.fontSize14,
                globalStyles.fontNeulisAlt_Regular,
                globalStyles.lineHeight18p88,
                isIos() && globalStyles.fontWeight400,
              ]}>
              Mon - Sat
            </TextComponent>
          </Box>

          <Box
            style={[
              globalStyles.flexrow,
              globalStyles.gapX5,
              globalStyles.alignItemsCenter,
            ]}>
            <Ionicons
              name="time-outline"
              size={24}
              style={[globalStyles.textCulrMainBlack]}
            />

            <TextComponent
              style={[
                globalStyles.textCulrMainBlack,
                globalStyles.fontSize14,
                globalStyles.fontNeulisAlt_Regular,
                globalStyles.lineHeight18p88,
                isIos() && globalStyles.fontWeight400,
              ]}>
              8am - 5am GMT+1:00
            </TextComponent>
          </Box>

          <Box
            style={[
              globalStyles.flexrow,
              globalStyles.gapX5,
              globalStyles.alignItemsCenter,
            ]}>
            <Ionicons
              name="location-outline"
              size={24}
              style={[globalStyles.textCulrMainBlack]}
            />

            <TextComponent
              style={[
                globalStyles.textCulrMainBlack,
                globalStyles.fontSize14,
                globalStyles.fontNeulisAlt_Regular,
                globalStyles.lineHeight18p88,
                isIos() && globalStyles.fontWeight400,
              ]}>
              Lekki phase 1
            </TextComponent>
          </Box>
        </Box>

        <Box
          style={[
            globalStyles.py1,
            globalStyles.px31,
            globalStyles.borderBottom,
            globalStyles.borderCulrMainBlackOpacity20,
          ]}>
          <TextComponent
            style={[
              globalStyles.textCulrMainBlack,
              globalStyles.fontSize14,
              globalStyles.fontNeulisAlt_Bold,
              globalStyles.lineHeight18p88,
              isIos() && globalStyles.fontWeight700,
              globalStyles.mb0p8,
            ]}>
            Perks
          </TextComponent>

          <Box style={[globalStyles.gapY10]}>
            <Box
              style={[
                globalStyles.flexrow,
                globalStyles.gapX5,
                globalStyles.alignItemsCenter,
              ]}>
              <CalenderOutlined />

              <TextComponent
                style={[
                  globalStyles.textCulrMainBlack,
                  globalStyles.fontSize14,
                  globalStyles.fontNeulisAlt_Regular,
                  globalStyles.lineHeight18p88,
                  isIos() && globalStyles.fontWeight400,
                ]}>
                Massaging Room
              </TextComponent>
            </Box>

            <Box
              style={[
                globalStyles.flexrow,
                globalStyles.gapX5,
                globalStyles.alignItemsCenter,
              ]}>
              <Ionicons
                name="time-outline"
                size={24}
                style={[globalStyles.textCulrMainBlack]}
              />

              <TextComponent
                style={[
                  globalStyles.textCulrMainBlack,
                  globalStyles.fontSize14,
                  globalStyles.fontNeulisAlt_Regular,
                  globalStyles.lineHeight18p88,
                  isIos() && globalStyles.fontWeight400,
                ]}>
                Cinema Room
              </TextComponent>
            </Box>

            <Box
              style={[
                globalStyles.flexrow,
                globalStyles.gapX5,
                globalStyles.alignItemsCenter,
              ]}>
              <Ionicons
                name="location-outline"
                size={24}
                style={[globalStyles.textCulrMainBlack]}
              />

              <TextComponent
                style={[
                  globalStyles.textCulrMainBlack,
                  globalStyles.fontSize14,
                  globalStyles.fontNeulisAlt_Regular,
                  globalStyles.lineHeight18p88,
                  isIos() && globalStyles.fontWeight400,
                ]}>
                Daily Meal
              </TextComponent>
            </Box>
          </Box>
        </Box>

        <Box
          style={[
            globalStyles.py1,
            globalStyles.px31,
            globalStyles.borderBottom,
            globalStyles.borderCulrMainBlackOpacity20,
          ]}>
          <TextComponent
            style={[
              globalStyles.textCulrMainBlack,
              globalStyles.fontSize14,
              globalStyles.fontNeulisAlt_Bold,
              globalStyles.lineHeight18p88,
              isIos() && globalStyles.fontWeight700,
              globalStyles.mb0p8,
            ]}>
            Rules
          </TextComponent>

          <Box style={[globalStyles.gapY2]}>
            <TextComponent
              style={[
                globalStyles.textCulrMainBlack,
                globalStyles.fontSize14,
                globalStyles.fontNeulisAlt_Regular,
                globalStyles.lineHeight18p88,
                isIos() && globalStyles.fontWeight400,
              ]}>
              &#x2022; Taking in of sharp objects is prohibited
            </TextComponent>

            <TextComponent
              style={[
                globalStyles.textCulrMainBlack,
                globalStyles.fontSize14,
                globalStyles.fontNeulisAlt_Regular,
                globalStyles.lineHeight18p88,
                isIos() && globalStyles.fontWeight400,
              ]}>
              &#x2022; No Smoking
            </TextComponent>

            <TextComponent
              style={[
                globalStyles.textCulrMainBlack,
                globalStyles.fontSize14,
                globalStyles.fontNeulisAlt_Regular,
                globalStyles.lineHeight18p88,
                isIos() && globalStyles.fontWeight400,
              ]}>
              &#x2022; No hard drinks is allowed
            </TextComponent>

            <TextComponent
              style={[
                globalStyles.textCulrMainBlack,
                globalStyles.fontSize14,
                globalStyles.fontNeulisAlt_Regular,
                globalStyles.lineHeight18p88,
                isIos() && globalStyles.fontWeight400,
              ]}>
              &#x2022; No Indecent Dressing
            </TextComponent>
          </Box>
        </Box>

        <Box
          style={[
            globalStyles.py1,
            globalStyles.px31,
            globalStyles.borderBottom,
            globalStyles.borderCulrMainBlackOpacity20,
          ]}>
          <TextComponent
            style={[
              globalStyles.textCulrMainBlack,
              globalStyles.fontSize14,
              globalStyles.fontNeulisAlt_Bold,
              globalStyles.lineHeight18p88,
              isIos() && globalStyles.fontWeight700,
              globalStyles.mb0p8,
            ]}>
            Contact Info.
          </TextComponent>

          <Box
            style={[
              globalStyles.flexrow,
              globalStyles.alignItemsCenter,
              globalStyles.gapX10,
            ]}>
            <Feather
              name="phone-call"
              size={22}
              style={[globalStyles.textCulrMainBlack]}
            />

            <TextComponent
              style={[
                globalStyles.textCulrMainBlack,
                globalStyles.fontSize13,
                globalStyles.fontNeulisAlt_Regular,
                globalStyles.lineHeight16p27,
                isIos() && globalStyles.fontWeight400,
              ]}>
              +234 987 9878 908
            </TextComponent>

            <MaterialIcons
              name="content-copy"
              size={22}
              style={[globalStyles.textCulrMainVermilion]}
            />
          </Box>
        </Box>

        <Box
          style={[
            globalStyles.py1,
            globalStyles.px31,
            globalStyles.borderBottom,
            globalStyles.borderCulrMainBlackOpacity20,
            globalStyles.alignItemsCenter,
          ]}>
          <Box
            style={[
              globalStyles.flexrow,
              globalStyles.gapX5,
              globalStyles.alignItemsBaseline,
            ]}>
            <Ionicons
              name="star-sharp"
              size={13}
              style={[globalStyles.textCulrMainBlack]}
            />

            <TextComponent
              style={[
                globalStyles.textCulrMainBlack,
                globalStyles.fontSize28,
                globalStyles.fontNeulisAlt_Bold,
                globalStyles.lineHeight37p15,
                isIos() && globalStyles.fontWeight700,
              ]}>
              4.99
            </TextComponent>

            <Ionicons
              name="star-sharp"
              size={13}
              style={[globalStyles.textCulrMainBlack]}
            />
          </Box>

          <TextComponent
            style={[
              globalStyles.mt1,
              globalStyles.textCulrMainBlack,
              globalStyles.fontSize11,
              globalStyles.fontNeulisAlt_Light,
              globalStyles.lineHeight13p66,
              globalStyles.textCenter,
              isIos() && globalStyles.fontWeight300,
            ]}>
            One of the most patronised vacation
          </TextComponent>

          <TextComponent
            style={[
              globalStyles.textCulrMainBlack,
              globalStyles.fontSize11,
              globalStyles.fontNeulisAlt_Light,
              globalStyles.lineHeight13p66,
              globalStyles.textCenter,
              isIos() && globalStyles.fontWeight300,
            ]}>
            deals in Lagos based on ratings, reviews, and reliability.
          </TextComponent>

          <Box style={[globalStyles.w10, globalStyles.mt2]}>
            <ButtonComponent
              defaultOutlined
              text14
              height40
              title="Show all Reviews"
              onPress={() => {}}
            />
          </Box>
        </Box>
      </Box>
    </LayoutWithSafeAreaWithoutBg>
  );
};

export default BrandListingDetails;
