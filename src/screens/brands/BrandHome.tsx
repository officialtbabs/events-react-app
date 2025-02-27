import React, {useMemo} from 'react';
import Box from '../../components/layout/Box';
import HeaderComponent from '../../components/header/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextComponent from '../../components/text/TextComponent';
import PressableComponent from '../../components/pressable/PressableComponent';
import ButtonComponent from '../../components/button/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import {BrandNavigationProps} from '../../constants/types/types';
import pallete from '../../constants/colors/pallete';
import {useForm} from 'react-hook-form';
import Feather from 'react-native-vector-icons/Feather';
import LayoutWithSafeAreaWithoutBgWithGradient from '../../components/layout/LayoutWithSafeAreaWithoutBgWithGradient';
import LinearGradient from 'react-native-linear-gradient';
import {FlashList} from '@shopify/flash-list';
import ListingCard, {
  ListingCardProps,
} from '../../components/cards/ListingCard';
import {isIos} from '../../constants/utils/utils';
import {useAppSelector} from '../../constants/utils/hooks';

const BrandHome = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);
  const {navigate} = useNavigation<BrandNavigationProps>();

  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
    reset,
  } = useForm({
    defaultValues: {
      brandName: '',
      email: '',
    },
  });

  const listingOptions = useMemo<ListingCardProps[]>(
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
        purpose: 'Event',
        views: 22,
        comments: 20,
        boomarks: 20,
        onPress: () => null,
      },
      {
        title: 'Pie Horse Ride',
        location: 'Lekki phase 1',
        purpose: 'Place',
        views: 22,
        comments: 20,
        boomarks: 20,
        onPress: () => null,
      },

      {
        title: 'TJ launch party',
        location: 'Lekki phase 1',
        purpose: 'Event',
        views: 22,
        comments: 20,
        boomarks: 20,
        onPress: () => null,
      },
    ],
    [],
  );

  return (
    <LayoutWithSafeAreaWithoutBgWithGradient
      layoutHeader={
        <HeaderComponent
          title=""
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
              <>
                <PressableComponent
                  style={[
                    globalStyles.p1,
                    globalStyles.bgCulrAlertVermilion,
                    globalStyles.br,
                  ]}
                  onPress={() => navigate('brandMore')}>
                  <Ionicons
                    name="grid-outline"
                    size={22}
                    style={[globalStyles.textCulrMainVermilion]}
                  />
                </PressableComponent>
              </>
            ),
          }}
        />
      }>
      <Box flex={1}>
        <Box style={[globalStyles.px31]}>
          <Box style={[globalStyles.w7]}>
            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Bold,
                isIos() && globalStyles.fontWeight700,
                globalStyles.fontSize22,
                globalStyles.textCulrMainBlack,
                globalStyles.lineHeight29p32,
              ]}>
              Hi MTN,{' '}
              <TextComponent
                style={[
                  globalStyles.fontNeulisAlt_Light,
                  isIos() && globalStyles.fontWeight300,
                  globalStyles.fontSize22,
                  globalStyles.textCulrMainBlack,
                  globalStyles.lineHeight29p32,
                ]}>
                here’s
              </TextComponent>{' '}
              what’s happening in your store.
            </TextComponent>
          </Box>
        </Box>

        <Box>
          <LinearGradient
            colors={[pallete.culrLayoutBg, pallete.culrAlertVermilion]}
            locations={[0.03, 0.3]}
            useAngle
            angle={180}
            angleCenter={{x: 0.5, y: 0.5}}
            style={[
              globalStyles.bgCulrAlertVermilion,
              globalStyles.borderBottomRadius50,
            ]}>
            <Box style={[globalStyles.mt2, globalStyles.px31]}>
              <Box style={[globalStyles.pt0p5]}>
                <TextComponent
                  style={[
                    globalStyles.fontNeulisAlt_Regular,
                    isIos() && globalStyles.fontWeight400,
                    globalStyles.fontSize12,
                    globalStyles.textCulrMainBlack,
                    globalStyles.lineHeight16p27,
                  ]}>
                  This month your store have sold
                </TextComponent>
              </Box>

              <Box
                style={[
                  globalStyles.flexrow,
                  globalStyles.justifyBetween,
                  globalStyles.alignItemsEnd,
                  globalStyles.mt0p2,
                  globalStyles.mb4,
                  globalStyles.gapX13,
                ]}>
                <TextComponent
                  style={[
                    globalStyles.fontNeulisAlt_Bold,
                    isIos() && globalStyles.fontWeight700,
                    globalStyles.fontSize26,
                    globalStyles.textCulrMainBlack,
                    globalStyles.lineHeight37p15,
                  ]}>
                  ₦500,000.00
                </TextComponent>

                <Box flex={1}>
                  <ButtonComponent
                    defaultFilled
                    height40
                    fontRegular
                    text14
                    title="View Earnings"
                    onPress={() =>
                      navigate('brandEarnings', {
                        screen: 'earnings',
                      })
                    }
                  />
                </Box>
              </Box>
            </Box>
          </LinearGradient>
        </Box>

        <Box style={[globalStyles.mt4, globalStyles.px31]}>
          <Box style={[globalStyles.flexrow, globalStyles.justifyCenter]}>
            <Box
              style={[
                globalStyles.flexrow,
                globalStyles.gapX40,
                globalStyles.px31,
                globalStyles.py0p9,
                globalStyles.bgCulrAlertVermilion,
                globalStyles.br,
              ]}>
              <PressableComponent>
                <TextComponent
                  style={[
                    globalStyles.fontNeulisAlt_Bold,
                    isIos() && globalStyles.fontWeight700,
                    globalStyles.fontSize14,
                    globalStyles.textCulrMainBlack,
                    globalStyles.lineHeight18p88,
                  ]}>
                  Listings
                </TextComponent>
              </PressableComponent>

              <PressableComponent>
                <TextComponent
                  style={[
                    globalStyles.fontNeulisAlt_Bold,
                    isIos() && globalStyles.fontWeight700,
                    globalStyles.fontSize14,
                    globalStyles.textCulrLightBlack,
                    globalStyles.lineHeight18p88,
                  ]}>
                  Bookings
                </TextComponent>
              </PressableComponent>
            </Box>
          </Box>

          <Box style={[globalStyles.pb6, globalStyles.mt2]}>
            <FlashList
              showsVerticalScrollIndicator={false}
              data={listingOptions}
              renderItem={({item}) => (
                <Box style={[globalStyles.my10]}>
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
    </LayoutWithSafeAreaWithoutBgWithGradient>
  );
};

export default BrandHome;
