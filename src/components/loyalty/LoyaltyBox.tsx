import Smart from '../../assets/svgs/smart.svg';
import Star from '../../assets/svgs/star.svg';
import React from 'react';
import Box from '../layout/Box';
import createGlobalStyles from '../../globalStyles/globalStyles';
import {ScaledSheet} from 'react-native-size-matters';
import TextComponent from '../text/TextComponent';
import pallete from '../../constants/colors/pallete';
import PressableComponent from '../pressable/PressableComponent';
import {useNavigation} from '@react-navigation/native';
import {NestedLoyaltyNavigationProps} from '../../constants/types/types';

const LoyaltyBox = () => {
  const {navigate} = useNavigation<NestedLoyaltyNavigationProps>();

  return (
    <Box
      style={[
        createGlobalStyles.w10,
        createGlobalStyles.borderRadius,
        createGlobalStyles.overflowHidden,
        loyaltyStyle.border,
      ]}>
      <Box style={[createGlobalStyles.w10, loyaltyStyle.imgHeight]}>
        <Smart />
      </Box>
      <Box style={[createGlobalStyles.pt1p6, createGlobalStyles.p0p8]}>
        <TextComponent
          style={[createGlobalStyles.fontSize12, createGlobalStyles.fontWeight500]}>
          Natural Shop
        </TextComponent>
        <Box
          style={[
            createGlobalStyles.flexrow,
            createGlobalStyles.pt0p8,
            createGlobalStyles.alignItemsCenter,
          ]}>
          <Star />
          <TextComponent
            secondary
            style={[
              createGlobalStyles.fontSize10,
              createGlobalStyles.pl0p4,
              createGlobalStyles.fontWeight500,
            ]}>
            100 Loyalty Points
          </TextComponent>
        </Box>
        <Box style={[createGlobalStyles.pt2]}>
          <PressableComponent
            onPress={() => {
              navigate('loyaltyDetail', {
                storeId: 'aasdd',
              });
            }}
            style={[
              createGlobalStyles.bgSecondaryDark,
              createGlobalStyles.borderRadius4,
              createGlobalStyles.px4,
              createGlobalStyles.py0p6,
            ]}>
            <TextComponent
              style={[
                createGlobalStyles.textWhite,
                createGlobalStyles.fontWeight500,
                createGlobalStyles.fontSize12,
              ]}>
              Join Now
            </TextComponent>
          </PressableComponent>
        </Box>
      </Box>
    </Box>
  );
};

const loyaltyStyle = ScaledSheet.create({
  imgHeight: {
    height: '80@s',
  },
  border: {
    borderWidth: '1@s',
    borderColor: pallete.borderUpload,
  },
} as Record<any, any>);

export default LoyaltyBox;
