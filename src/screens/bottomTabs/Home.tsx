import React, {useEffect, useState} from 'react';
import LayoutWithSafeArea from '../../components/layout/LayoutWithSafeAreaWithoutBg';
import Box from '../../components/layout/Box';
import createGlobalStyles, {width} from '../../globalStyles/globalStyles';
import {ScaledSheet} from 'react-native-size-matters';

import PressableComponent from '../../components/pressable/PressableComponent';
import TextComponent from '../../components/text/TextComponent';
import dashboardBg from '../../assets/images/dashboardBg.png';
import savedBg from '../../assets/images/saveBg.png';
import SendPoint from '../../assets/svgs/sendPoint.svg';
import JarIcon from '../../assets/svgs/jarIcon.svg';
import Bhf from '../../assets/svgs/bhf.svg';
import CollectPoint from '../../assets/svgs/collectPoint.svg';
import ArrowRightLong from '../../assets/svgs/arrowRightLong.svg';
import {FlatList, ImageBackground, ScrollView} from 'react-native';
import {appName} from '../../constants/utils/constants';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import Dot from '../../components/dot/Dot';
import {useNavigation} from '@react-navigation/native';
import {MainBottomTabNavigationProps} from '../../constants/types/types';
import ProfileHeader from '../../components/header/ProfileHeader';
import {useAppSelector, useGetAllBalances} from '../../constants/utils/hooks';
import {Spinner, spinnerStyle} from '../../components/loader/Spinner';
import useWallet from '../../service/wallet';
import {numberWithCommas, useAmountText} from '../../constants/utils/utils';
import useProfile from '../../service/profile';
import {Image} from 'react-native';
import LayoutWithSafeAreaWithBg from '../../components/layout/LayoutWithSafeAreaWithBg';
const Home = () => {
  // const flatListRef = useAnimatedRef<ScrollView>();
  // const {navigate} = useNavigation<MainBottomTabNavigationProps>();
  // const {getAllBalances, isLoadingGetWallet} = useGetAllBalances();
  // const {useGetBankListNga} = useWallet();
  // const {getNgBanksMutation} = useGetBankListNga();
  // const [merchantList, setMerchantList] = useState<any[]>([]);
  // const [charityList, setCharityList] = useState<any[]>([]);
  // const displayData = useAppSelector(state => state.usrDisplayData);
  // const {balance} = useAppSelector(state => state.userBalance);
  // const amountText = useAmountText(balance);
  // console.log({
  //   amountText,
  // });

  const {useGetProfileMutation} = useProfile();
  const {getProfileMutation, isLoadingGetProfile} = useGetProfileMutation();

  // const getCharities = () => {
  //   getAllCharitiesMutation(
  //     {},
  //     {
  //       onSuccess: charityRes => {
  //         console.log({
  //           charityRes,
  //         });
  //         setCharityList(charityRes?.data?.data ?? []);
  //       },
  //       onError: charityErr => {
  //         console.log({
  //           charityErr,
  //         });
  //       },
  //     },
  //   );
  // };
  useEffect(() => {
    getProfileMutation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log({
  //   displayData,
  // });

  // const translationX = useSharedValue(0);
  // const onScroll = useAnimatedScrollHandler({
  //   onScroll: event => {
  //     let offset = Math.round(event.contentOffset.x / width);
  //     translationX.value = offset;
  //   },
  // });
  return <LayoutWithSafeAreaWithBg></LayoutWithSafeAreaWithBg>;
};
export const homeStyle = ScaledSheet.create({
  iconSize: {
    width: '32@s',
    height: '32@s',
  },
  btnIconSize: {
    width: '20@s',
    height: '20@s',
  },
  scrollIconSize: {
    width: '56@s',
    height: '56@s',
  },
  scrollWidth: {
    width: '56@s',
  },
  picSize: {
    width: '38@s',
    height: '38@s',
  },
  walletBox: {
    height: '120@s',
    borderRadius: '12@s',
  },
  lineStyle: {
    width: '1.5@s',
    height: '25@s',
  },
  bigScroll: {
    height: '170@s',
  },
} as Record<any, any>);
export default Home;
