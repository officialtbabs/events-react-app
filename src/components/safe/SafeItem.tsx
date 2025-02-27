import {View, Text} from 'react-native';
import React, {FC} from 'react';
import GreenLock from '../../assets/svgs/greenLock.svg';
import OrangeLock from '../../assets/svgs/orangeLock.svg';
import RedLock from '../../assets/svgs/redLock.svg';
import PressableComponent from '../pressable/PressableComponent';
import createGlobalStyles from '../../globalStyles/globalStyles';
import Box from '../layout/Box';
import TextComponent from '../text/TextComponent';
import {capialiseFirst, numberWithCommas} from '../../constants/utils/utils';
import {ScaledSheet} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {MainBottomTabNavigationProps} from '../../constants/types/types';
import dayjs from 'dayjs';

interface itemInterface {
  index: number;
  item: any;
}
const SafeItem: FC<itemInterface> = ({index, item}) => {
  const {navigate} = useNavigation<MainBottomTabNavigationProps>();
  //   console.log({
  //     item,
  //   });

  const pattern = [
    {
      icon: <GreenLock />,
    },
    {
      icon: <OrangeLock />,
    },
    {
      icon: <RedLock />,
    },
  ];
  const current = index < pattern.length ? index : index % pattern.length;
  return (
    <PressableComponent
      onPress={() => {
        navigate('nestedSafe', {
          screen: 'safeDetails',
          params: {
            id: item?.id ?? '',
          },
        });
      }}
      style={[
        createGlobalStyles.flexrow,
        createGlobalStyles.py1p6,
        createGlobalStyles.alignItemsCenter,
      ]}>
      <Box>{pattern[current].icon}</Box>
      <Box flex={1} style={[createGlobalStyles.pl1p6]}>
        <Box flexDirection={'row'} justifyContent={'space-between'}>
          <TextComponent
            style={[
              createGlobalStyles.fontSize15,
              createGlobalStyles.fontSansSemiBold,
              createGlobalStyles.fontWeight500,
            ]}>
            {item?.title ?? ''}
          </TextComponent>
          <TextComponent
            style={[
              createGlobalStyles.fontSize15,
              createGlobalStyles.fontSansSemiBold,
              createGlobalStyles.fontWeight500,
            ]}>
            {numberWithCommas(item?.balance ?? '')}
          </TextComponent>
        </Box>
        <Box
          flexDirection={'row'}
          justifyContent={'space-between'}
          style={[createGlobalStyles.pt0p4]}>
          <TextComponent
            secondary
            style={[
              createGlobalStyles.fontSize12,
              createGlobalStyles.fontSansLight,
              createGlobalStyles.fontWeight500,
            ]}>
            {dayjs(item?.maturityDate ?? '').format('YYYY-MM-DD')}
          </TextComponent>
          <Box style={[createGlobalStyles.flexrow, createGlobalStyles.alignItemsCenter]}>
            <Box
              style={[
                itemStyle.dot as any,
                createGlobalStyles.bgPurplePrimary,
                createGlobalStyles.mr0p5,
                item?.status === 'BROKEN' && createGlobalStyles.bgRed,
              ]}
            />
            <Box>
              <TextComponent
                purple
                style={[
                  createGlobalStyles.fontSize12,
                  createGlobalStyles.fontSansLight,
                  createGlobalStyles.fontWeight500,
                  item?.status === 'BROKEN' && createGlobalStyles.textRed,
                ]}>
                {capialiseFirst(item?.status ?? '')}
              </TextComponent>
            </Box>
          </Box>
        </Box>
      </Box>
    </PressableComponent>
  );
};

export const itemStyle = ScaledSheet.create({
  dot: {
    width: '4@s',
    height: '4@s',
    borderRadius: '30@s',
  },
});

export default SafeItem;
