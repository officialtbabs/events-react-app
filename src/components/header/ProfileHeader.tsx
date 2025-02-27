import React from 'react';
import Box from '../layout/Box';
import PressableComponent from '../pressable/PressableComponent';
import {ScaledSheet} from 'react-native-size-matters';
import TextComponent from '../text/TextComponent';
import {useAppSelector} from '../../constants/utils/hooks';
import {isIos} from '../../constants/utils/utils';
const ProfileHeader = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);
  const {firstName, lastName, email} = useAppSelector(
    state => state.usrDisplayData,
  );

  return (
    <Box style={[globalStyles.alignItemsCenter, globalStyles.px1p6]}>
      <PressableComponent style={[profileStyle.picSize]}>
        <Box
          style={[
            globalStyles.w10,
            globalStyles.h10,
            globalStyles.br,
            globalStyles.bgBlack,
            globalStyles.border,
            globalStyles.borderCulrAlertVermilion,
          ]}
        />
      </PressableComponent>

      <Box style={[globalStyles.mt1]} flex={1}>
        <Box style={[globalStyles.alignItemsCenter, globalStyles.gapY1]}>
          <TextComponent
            style={[
              globalStyles.fontNeulisAlt_Bold,
              isIos() && globalStyles.fontWeight700,
              globalStyles.fontSize22,
              globalStyles.textCulrMainBlack,
              globalStyles.lineHeight29p32,
            ]}>
            {firstName} {lastName}
          </TextComponent>

          <TextComponent
            secondary
            style={[
              globalStyles.fontNeulisAlt_Regular,
              isIos() && globalStyles.fontWeight400,
              globalStyles.fontSize12,
              globalStyles.textCulrMainBlack,
              globalStyles.lineHeight16p27,
            ]}>
            {email}
          </TextComponent>
        </Box>
      </Box>
    </Box>
  );
};
export const profileStyle = ScaledSheet.create({
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
  picSize: {
    width: '111@s',
    height: '111@s',
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
export default ProfileHeader;
