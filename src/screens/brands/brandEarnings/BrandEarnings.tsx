import React, {useMemo} from 'react';
import Box from '../../../components/layout/Box';
import HeaderComponent from '../../../components/header/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextComponent from '../../../components/text/TextComponent';
import PressableComponent from '../../../components/pressable/PressableComponent';
import {useNavigation} from '@react-navigation/native';
import {BrandNavigationProps} from '../../../constants/types/types';
import pallete from '../../../constants/colors/pallete';
import {useForm} from 'react-hook-form';
import Feather from 'react-native-vector-icons/Feather';
import {FlashList} from '@shopify/flash-list';
import {useAppSelector} from '../../../constants/utils/hooks';
import CardHolderOutlined from '../../../assets/svgs/icons/cardholder-outlined.svg';
import {isIos} from '../../../constants/utils/utils';
import LayoutWithSafeAreaWithoutBg from '../../../components/layout/LayoutWithSafeAreaWithoutBg';
import EarningCard, {
  EarningCardProps,
} from '../../../components/cards/EarningCard';

const BrandEarnings = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const {currentCountry} = useAppSelector(state => state.flagList);
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

  const earningOptions = useMemo<EarningCardProps[]>(
    () => [
      {
        title: 'Mall Park Ticket',
        amount: 50_000,
        date: new Date(),
        onPress: () => null,
      },

      {
        title: 'Jay Night Ticket',
        amount: 50_000,
        date: new Date(),
        onPress: () => null,
      },

      {
        title: 'Jay’s Don Hotel',
        amount: 50_000,
        date: new Date(),
        onPress: () => null,
      },
    ],
    [],
  );

  return (
    <LayoutWithSafeAreaWithoutBg
      layoutHeader={
        <HeaderComponent
          title="Earnings"
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
              <>
                <PressableComponent
                  onPress={() =>
                    navigate('brandEarnings', {
                      screen: 'earningsHistory',
                    })
                  }>
                  <Ionicons
                    name="grid-outline"
                    size={22}
                    style={[
                      globalStyles.textCulrMainVermilion,
                      globalStyles.p1,
                      globalStyles.bgCulrAlertVermilion,
                      globalStyles.br,
                    ]}
                  />
                </PressableComponent>
              </>
            ),
          }}
        />
      }>
      <Box flex={1} style={[globalStyles.pt1, globalStyles.px31]}>
        <Box
          style={[
            globalStyles.flexrow,
            globalStyles.justifyBetween,
            globalStyles.alignItemsCenter,
            globalStyles.p2,
            globalStyles.borderRadius20,
            globalStyles.bgCulrMainVermilion,
          ]}>
          <Box style={[globalStyles.gapY10]}>
            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Light,
                isIos() && globalStyles.fontWeight300,
                globalStyles.fontSize12,
                globalStyles.textWhite,
                globalStyles.lineHeight16p27,
              ]}>
              🇳🇬 Nigeria Naira
            </TextComponent>
            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Bold,
                isIos() && globalStyles.fontWeight700,
                globalStyles.fontSize28,
                globalStyles.textWhite,
                globalStyles.lineHeight37p15,
              ]}>
              ₦50,000
            </TextComponent>
            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Light,
                isIos() && globalStyles.fontWeight300,
                globalStyles.fontSize11,
                globalStyles.textWhite,
              ]}>
              Last updated 1 sec ago
            </TextComponent>
          </Box>

          <Box>
            <Ionicons
              name="eye-outline"
              size={24}
              style={[globalStyles.textWhite]}
            />
          </Box>
        </Box>

        <Box style={[globalStyles.mt1]}>
          <PressableComponent
            style={[
              globalStyles.flexrow,
              globalStyles.justifyCenter,
              globalStyles.alignItemsCenter,
              globalStyles.bgCulrAlertVermilion,
              globalStyles.borderRadius10,
              globalStyles.h57,
            ]}>
            <Box
              style={[
                globalStyles.flexrow,
                globalStyles.alignItemsCenter,
                globalStyles.gapX5,
              ]}>
              <CardHolderOutlined color={pallete.culrMainVermilion} />

              <TextComponent
                style={[
                  globalStyles.fontNeulisAlt_Regular,
                  globalStyles.fontSize12,
                ]}>
                Withdraw
              </TextComponent>
            </Box>
          </PressableComponent>
        </Box>

        <Box style={[globalStyles.mt4]}>
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
                  Earnings
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
                  Withdrawals
                </TextComponent>
              </PressableComponent>
            </Box>
          </Box>

          <Box
            style={[
              globalStyles.flexrow,
              globalStyles.justifyBetween,
              globalStyles.alignItemsCenter,
              globalStyles.mt2,
            ]}>
            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Light,
                isIos() && globalStyles.fontWeight300,
                globalStyles.fontSize12,
                globalStyles.textCulrHoverBlack,
                globalStyles.lineHeight16p27,
              ]}>
              Recent Earnings
            </TextComponent>

            <TextComponent
              onPress={() =>
                navigate('brandEarnings', {
                  screen: 'earningsHistory',
                })
              }
              style={[
                globalStyles.fontNeulisAlt_Bold,
                isIos() && globalStyles.fontWeight700,
                globalStyles.fontSize14,
                globalStyles.textCulrMainBlack,
                globalStyles.lineHeight18p88,
              ]}>
              View All
            </TextComponent>
          </Box>

          <Box style={[globalStyles.pb6, globalStyles.mt1]}>
            <FlashList
              showsVerticalScrollIndicator={false}
              data={earningOptions}
              renderItem={({item}) => (
                <EarningCard
                  title={item.title}
                  date={item.date}
                  amount={item.amount}
                  onPress={item.onPress}
                />
              )}
              estimatedItemSize={5}
            />
          </Box>
        </Box>
      </Box>
    </LayoutWithSafeAreaWithoutBg>
  );
};

export default BrandEarnings;
