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
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FlashList} from '@shopify/flash-list';
import {useAppSelector} from '../../../constants/utils/hooks';
import CardHolderOutlined from '../../../assets/svgs/icons/cardholder-outlined.svg';
import {isIos} from '../../../constants/utils/utils';
import LayoutWithSafeArea from '../../../components/layout/LayoutWithSafeAreaWithoutBg';
import EarningCard, {
  EarningCardProps,
} from '../../../components/cards/EarningCard';
import {Shadow} from 'react-native-shadow-2';

const UserWallet = () => {
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
    <LayoutWithSafeArea
      layoutHeader={
        <HeaderComponent
          title="Wallet"
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

        <Box
          style={[globalStyles.mt2, globalStyles.flexrow, globalStyles.gapX40]}>
          <Box style={[globalStyles.alignItemsCenter]}>
            <Shadow startColor={pallete.culrErrorErrorRed} offset={[4, 5]}>
              <PressableComponent
                style={[
                  globalStyles.flexrow,
                  globalStyles.justifyCenter,
                  globalStyles.alignItemsCenter,
                  globalStyles.bgCulrAlertVermilion,
                  globalStyles.br,
                  globalStyles.h57,
                  globalStyles.w57,
                ]}>
                {/* <Box
                  style={[
                    globalStyle.flexrow,
                    globalStyle.alignItemsCenter,
                    globalStyle.gapX5,
                  ]}> */}
                <Feather
                  name="send"
                  size={20}
                  color={pallete.culrMainVermilion}
                />
                {/* </Box> */}
              </PressableComponent>
            </Shadow>

            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Regular,
                isIos() && globalStyles.fontWeight400,
                globalStyles.fontSize12,
                globalStyles.mt0p5,
                globalStyles.lineHeight16p27,
              ]}>
              Send
            </TextComponent>
          </Box>

          <Box style={[globalStyles.alignItemsCenter]}>
            <Shadow startColor={pallete.culrErrorErrorRed} offset={[4, 5]}>
              <PressableComponent
                style={[
                  globalStyles.flexrow,
                  globalStyles.justifyCenter,
                  globalStyles.alignItemsCenter,
                  globalStyles.bgCulrAlertVermilion,
                  globalStyles.br,
                  globalStyles.h57,
                  globalStyles.w57,
                ]}>
                <Box
                  style={[
                    globalStyles.flexrow,
                    globalStyles.alignItemsCenter,
                    globalStyles.gapX5,
                  ]}>
                  <CardHolderOutlined color={pallete.culrMainVermilion} />
                </Box>
              </PressableComponent>
            </Shadow>

            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Regular,
                isIos() && globalStyles.fontWeight400,
                globalStyles.fontSize12,
                globalStyles.mt0p5,
                globalStyles.lineHeight16p27,
              ]}>
              Withdraw
            </TextComponent>
          </Box>

          <Box style={[globalStyles.alignItemsCenter]}>
            <Shadow startColor={pallete.culrErrorErrorRed} offset={[4, 5]}>
              <PressableComponent
                style={[
                  globalStyles.flexrow,
                  globalStyles.justifyCenter,
                  globalStyles.alignItemsCenter,
                  globalStyles.bgCulrAlertVermilion,
                  globalStyles.br,
                  globalStyles.h57,
                  globalStyles.w57,
                ]}>
                <AntDesign
                  name="creditcard"
                  size={20}
                  color={pallete.culrMainVermilion}
                />
              </PressableComponent>
            </Shadow>

            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Regular,
                isIos() && globalStyles.fontWeight400,
                globalStyles.fontSize12,
                globalStyles.mt0p5,
                globalStyles.lineHeight16p27,
              ]}>
              Fund
            </TextComponent>
          </Box>
        </Box>

        <Box style={[globalStyles.mt4]}>
          {/* <Box style={[globalStyle.flexrow, globalStyle.justifyCenter]}>
            <Box
              style={[
                globalStyle.flexrow,
                globalStyle.gapX40,
                globalStyle.px31,
                globalStyle.py0p9,
                globalStyle.bgCulrAlertVermilion,
                globalStyle.br,
              ]}>
              <PressableComponent>
                <TextComponent
                  style={[
                    globalStyle.fontNeulisAlt_Bold,
                    isIos() && globalStyle.fontWeight700,
                    globalStyle.fontSize14,
                    globalStyle.textCulrMainBlack,
                    globalStyle.lineHeight18p88,
                  ]}>
                  Earnings
                </TextComponent>
              </PressableComponent>

              <PressableComponent>
                <TextComponent
                  style={[
                    globalStyle.fontNeulisAlt_Bold,
                    isIos() && globalStyle.fontWeight700,
                    globalStyle.fontSize14,
                    globalStyle.textCulrLightBlack,
                    globalStyle.lineHeight18p88,
                  ]}>
                  Withdrawals
                </TextComponent>
              </PressableComponent>
            </Box>
          </Box> */}

          <Box
            style={[
              globalStyles.flexrow,
              globalStyles.justifyBetween,
              globalStyles.alignItemsCenter,
              globalStyles.mt2,
              globalStyles.px1,
            ]}>
            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Light,
                isIos() && globalStyles.fontWeight300,
                globalStyles.fontSize12,
                globalStyles.textCulrHoverBlack,
                globalStyles.lineHeight16p27,
              ]}>
              Transactions
            </TextComponent>

            <TextComponent
              // onPress={() =>
              //   navigate('brandEarnings', {
              //     screen: 'earningsHistory',
              //   })
              // }
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
    </LayoutWithSafeArea>
  );
};

export default UserWallet;
