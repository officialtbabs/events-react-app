import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Box from '../../components/layout/Box';
import PressableComponent from '../../components/pressable/PressableComponent';
import TextComponent from '../../components/text/TextComponent';
import ProfileHeader from '../../components/header/ProfileHeader';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {
  ListingFilterEnums,
  MainBottomTabNavigationProps,
} from '../../constants/types/types';
import HeaderComponent from '../../components/header/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import WalletCard from '../../components/cards/WalletCard';
import ShareIcon from '../../assets/svgs/icons/share.svg';
import HeadsetIcon from '../../assets/svgs/icons/headset-outlined.svg';
import pallete from '../../constants/colors/pallete';
import {FlashList} from '@shopify/flash-list';
import ProfileNavButtonComponent from '../../components/button/ProfileNavButtonComponent';
import {isIos} from '../../constants/utils/utils';
import {useAppSelector} from '../../constants/utils/hooks';
import LayoutWithSafeAreaWithBgWithPullDownRefresh from '../../components/layout/LayoutWithSafeAreaWithBgWithPullDownRefresh';
import CreateBrandComponent from '../../components/brand/CreateBrandComponent';
import {RefreshControl} from 'react-native-gesture-handler';
import useBrandApi from '../../service/brandApi';
import {useDispatch} from 'react-redux';
import {setBrands} from '../../reducerSlices/brands/brandsSlice';
import {Image} from 'react-native';

const Profile = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const dispatch = useDispatch();
  const {navigate} = useNavigation<MainBottomTabNavigationProps>();

  // const [refreshing, setRefreshing] = useState(false);

  const profileNavOptions = useMemo(
    () => [
      {
        title: 'By You',
        icon: (
          <Fontisto
            name="cloudy"
            size={22}
            style={[globalStyles.textCulrMainBlack]}
          />
        ),
        onPress: () =>
          navigate('nestedProfileNav', {
            screen: 'listingsByYou',
            params: {
              filter: ListingFilterEnums.ALL,
            },
          }),
      },
      {
        title: 'Recently Viewed',
        icon: (
          <Ionicons
            name="eye-outline"
            size={22}
            style={[globalStyles.textCulrMainBlack]}
          />
        ),
        onPress: () =>
          navigate('nestedProfileNav', {
            screen: 'recentlyViewed',
          }),
      },
      {
        title: 'Bookmarked',
        icon: (
          <Feather
            name="bookmark"
            size={22}
            style={[globalStyles.textCulrMainBlack]}
          />
        ),
        onPress: () =>
          navigate('nestedProfileNav', {
            screen: 'bookmarked',
          }),
      },
      {
        title: 'Invitations',
        icon: (
          <Ionicons
            name="mail-open-outline"
            size={22}
            style={[globalStyles.textCulrMainBlack]}
          />
        ),
        onPress: () =>
          navigate('nestedProfileNav', {
            screen: 'invitations',
          }),
      },
      {
        title: 'Support',
        icon: <HeadsetIcon fontSize={22} color={pallete.culrMainBlack} />,
        onPress: () => null,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const usersBrands = useAppSelector(state => state.brands.brands);

  const {useGetBrands} = useBrandApi();
  const {getBrandsMutation, isLoadingGetBrands} = useGetBrands();

  const handleGetsBrandsCallback = useCallback(() => {
    getBrandsMutation(undefined, {
      onSuccess: getBrandsRes => {
        console.log(getBrandsRes);

        const brands = getBrandsRes.data.data;

        if (brands && brands.length) {
          dispatch(setBrands({brands}));
        }
      },

      onError: (getBrandsErr: any) => {
        console.log(getBrandsErr.data.message || getBrandsErr.data.error);
      },
    });
  }, [getBrandsMutation, dispatch]);

  useEffect(() => {
    handleGetsBrandsCallback();
  }, [handleGetsBrandsCallback]);

  const onRefresh = () => {
    // setRefreshing(true);
    handleGetsBrandsCallback();
    // setTimeout(() => setRefreshing(false), 2000);
  };

  const onCreateBrandButtonClick = () => {
    navigate('brand', {
      screen: 'brandCreation',
      params: {
        screen: 'brandCreationTypeSelection',
      },
    });
  };

  return (
    <LayoutWithSafeAreaWithBgWithPullDownRefresh
      refreshing={isLoadingGetBrands}
      layoutHeader={
        <HeaderComponent
          title=""
          rightIcon={{
            type: 'icon',
            icon: (
              <>
                <Box
                  style={[
                    globalStyles.p1,
                    globalStyles.bgCulrAlertVermilion,
                    globalStyles.br,
                  ]}>
                  <ShareIcon color={pallete.culrMainVermilion} />
                </Box>

                <PressableComponent
                  style={[
                    globalStyles.p1,
                    globalStyles.bgCulrAlertVermilion,
                    globalStyles.br,
                  ]}
                  onPress={() =>
                    navigate('nestedProfileNav', {
                      screen: 'settings',
                    })
                  }>
                  <Ionicons
                    name="settings-outline"
                    size={22}
                    style={[globalStyles.textCulrMainVermilion]}
                  />
                </PressableComponent>
              </>
            ),
          }}
        />
      }
      onRefresh={onRefresh}>
      <Box flex={1} style={[globalStyles.w10]}>
        <ProfileHeader />

        <Box style={[globalStyles.px31]}>
          <Box style={[globalStyles.mt2]}>
            <WalletCard
              amount="20,000"
              onButtonClick={() =>
                navigate('nestedProfileNav', {
                  screen: 'userWallet',
                  params: {
                    screen: 'withdraw',
                  },
                })
              }
            />
          </Box>
        </Box>

        <Box style={[globalStyles.h36, globalStyles.mt2]}>
          <FlashList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={profileNavOptions}
            renderItem={({item}) => (
              <Box style={[globalStyles.mx1]}>
                <ProfileNavButtonComponent
                  title={item.title}
                  icon={item.icon}
                  onPress={item.onPress}
                />
              </Box>
            )}
            estimatedItemSize={200}
          />
        </Box>

        <Box style={[globalStyles.mt4]}>
          <Box style={[globalStyles.px31]}>
            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Bold,
                isIos() && globalStyles.fontWeight700,
                globalStyles.fontSize14,
                globalStyles.textCulrMainBlack,
                globalStyles.lineHeight18p88,
              ]}>
              Previously Experienced
            </TextComponent>
          </Box>

          <Box
            style={[
              globalStyles.flexrow,
              globalStyles.justifyCenter,
              globalStyles.py2,
            ]}>
            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Light,
                isIos() && globalStyles.fontWeight300,
                globalStyles.fontSize12,
                globalStyles.textCulrMainBlackOpacity56,
                globalStyles.textCenter,
                globalStyles.lineHeight16p27,
                globalStyles.w6,
              ]}>
              Oops! book and enjoy a listing and they show up here.
            </TextComponent>
          </Box>
        </Box>

        <Box style={[globalStyles.mt2]}>
          <Box style={[globalStyles.px31]}>
            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Bold,
                isIos() && globalStyles.fontWeight700,
                globalStyles.fontSize14,
                globalStyles.textCulrMainBlack,
                globalStyles.lineHeight18p88,
              ]}>
              Poddles
            </TextComponent>
          </Box>

          <Box
            style={[
              globalStyles.flexrow,
              globalStyles.justifyCenter,
              globalStyles.gapX10,
              globalStyles.py2,
            ]}>
            <Box>
              <PressableComponent
                style={[
                  globalStyles.bgCulrAlertVermilion,
                  globalStyles.p1,
                  globalStyles.borderRadius20,
                ]}>
                <TextComponent
                  style={[
                    globalStyles.fontNeulisAlt_Regular,
                    isIos() && globalStyles.fontWeight400,
                    globalStyles.fontSize12,
                    globalStyles.textCulrMainVermilion,
                    globalStyles.lineHeight16p27,
                  ]}>
                  Create a Poddle
                </TextComponent>
              </PressableComponent>
            </Box>

            <Box>
              <PressableComponent
                style={[
                  globalStyles.bgCulrAlertVermilion,
                  globalStyles.p1,
                  globalStyles.borderRadius20,
                ]}>
                <TextComponent
                  style={[
                    globalStyles.fontNeulisAlt_Regular,
                    isIos() && globalStyles.fontWeight400,
                    globalStyles.fontSize12,
                    globalStyles.textCulrMainVermilion,
                    globalStyles.lineHeight16p27,
                  ]}>
                  Find a Poddle
                </TextComponent>
              </PressableComponent>
            </Box>
          </Box>
        </Box>

        <Box style={[globalStyles.mt2, globalStyles.gapY10]}>
          <Box style={[globalStyles.px31]}>
            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Bold,
                isIos() && globalStyles.fontWeight700,
                globalStyles.fontSize14,
                globalStyles.textCulrMainBlack,
                globalStyles.lineHeight18p88,
              ]}>
              Brands you manage
            </TextComponent>
          </Box>

          <Box
            style={[
              globalStyles.flexrow,
              globalStyles.justifyBetween,
              globalStyles.gapX15,
              globalStyles.pr31,
            ]}>
            <Box flex={1} style={[]}>
              <FlashList
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={usersBrands}
                renderItem={({item, index}) => (
                  <PressableComponent
                    style={[index === 0 && globalStyles.pl31]}>
                    <Image
                      source={{uri: item.logoUrl}}
                      style={[
                        globalStyles.w62,
                        globalStyles.h62,
                        globalStyles.borderRadius8,
                      ]}
                      alt={`${item.name} brand logo`}
                    />
                  </PressableComponent>
                )}
                ItemSeparatorComponent={() => (
                  <Box
                    style={[
                      globalStyles.w17,
                      globalStyles.h62,
                      globalStyles.bgBlack,
                    ]}
                  />
                )}
                // contentContainerStyle={{
                //   backgroundColor: pallete.black,
                //   paddingHorizontal: 31,
                // }}
                // onScrollEndDrag={event => console.log(event)}
                refreshControl={
                  <RefreshControl
                    colors={[pallete.culrMainVermilion]}
                    tintColor={pallete.culrMainVermilion}
                    refreshing={isLoadingGetBrands}
                    onRefresh={onRefresh}
                  />
                }
                ListEmptyComponent={
                  <CreateBrandComponent
                    onCreateBrandButtonClick={onCreateBrandButtonClick}
                  />
                }
                estimatedItemSize={200}
              />
            </Box>

            {!!(usersBrands && usersBrands.length) && (
              <PressableComponent onPress={onCreateBrandButtonClick}>
                <AntDesign
                  name="pluscircle"
                  size={65}
                  style={[globalStyles.textCulrMainVermilion]}
                />
              </PressableComponent>
            )}
          </Box>
        </Box>

        <Box style={[globalStyles.mt2]}>
          <Box style={[globalStyles.px31]}>
            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Bold,
                isIos() && globalStyles.fontWeight700,
                globalStyles.fontSize14,
                globalStyles.textCulrMainBlack,
                globalStyles.lineHeight18p88,
              ]}>
              Rewards
            </TextComponent>
          </Box>

          <Box
            style={[
              globalStyles.flexrow,
              globalStyles.justifyCenter,
              globalStyles.py2,
            ]}>
            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Light,
                isIos() && globalStyles.fontWeight300,
                globalStyles.fontSize12,
                globalStyles.textCulrMainBlackOpacity56,
                globalStyles.lineHeight16p27,
                globalStyles.textCenter,
                globalStyles.w6,
              ]}>
              Oops! nothing to see here 🥹 Book an experience to get a reward.
            </TextComponent>
          </Box>
        </Box>
      </Box>
    </LayoutWithSafeAreaWithBgWithPullDownRefresh>
  );
};

export default Profile;
