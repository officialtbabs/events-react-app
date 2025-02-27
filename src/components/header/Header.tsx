import React, {FC, ReactNode} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import Box from '../layout/Box';
import TextComponent from '../text/TextComponent';
import pallete from '../../constants/colors/pallete';
import PressableComponent from '../pressable/PressableComponent';
import {isIos} from '../../constants/utils/utils';
import {useAppSelector} from '../../constants/utils/hooks';

export interface headerIconProps {
  type: 'text' | 'icon';
  text?: string;
  icon?: ReactNode;
  onPress?: () => void;
}

interface headerProps {
  title: string;
  showSettings?: boolean;
  showBack?: boolean;
  transparent?: boolean;
  bgTransparent?: boolean;
  grayBg?: boolean;
  leftIcon?: headerIconProps;
  rightIcon?: headerIconProps;
  onPress?: () => void;
  onBackPress?: () => void;
  bottomBorder?: boolean;
}

const HeaderComponent: FC<headerProps> = ({
  title,
  // showSettings = false,
  // showBack = true,
  leftIcon,
  rightIcon,
  // onPress,
  // onBackPress,
  transparent,
  bgTransparent,
  // grayBg,
  bottomBorder,
}) => {
  const {goBack} = useNavigation();
  // const {darkMode} = useAppSelector(state => state.darkMode);
  const globalStyles = useAppSelector(state => state.globalStyles.styles);
  return (
    <Box
      style={[
        globalStyles.w10,
        globalStyles.h48,
        globalStyles.px31,
        globalStyles.flexrow,
        globalStyles.alignItemsCenter,
        globalStyles.borderCulrMainBlackOpacity5,
        bottomBorder && globalStyles.borderBottom,
        (transparent || bgTransparent) && globalStyles.bgTransparent,
      ]}>
      <Box
        zIndex={30}
        style={[
          globalStyles.w10,
          globalStyles.h10,
          globalStyles.flexrow,
          globalStyles.justifyBetween,
          globalStyles.alignItemsCenter,
          globalStyles.bgTransparent,
        ]}>
        <Box
          style={[
            globalStyles.flexrow,
            globalStyles.alignItemsCenter,
            globalStyles.zIndex,
          ]}>
          {leftIcon && leftIcon.type === 'icon' ? (
            <PressableComponent
              onPress={leftIcon?.onPress ? leftIcon.onPress : goBack}>
              {leftIcon.icon}
            </PressableComponent>
          ) : leftIcon && leftIcon.type === 'text' ? (
            <PressableComponent
              onPress={leftIcon?.onPress ? leftIcon.onPress : goBack}>
              <TextComponent
                style={[
                  globalStyles.fontSize14,
                  globalStyles.fontNeulisAlt_Bold,
                  isIos() && globalStyles.fontWeight700,
                  globalStyles.textCulrMainVermilion,
                  transparent && globalStyles.textWhite,
                  globalStyles.lineHeight18p88,
                ]}>
                {leftIcon?.text ? leftIcon.text : 'Go Back'}
              </TextComponent>
            </PressableComponent>
          ) : (
            <></>
          )}
        </Box>

        <Box
          style={[
            globalStyles.absolute,
            globalStyles.justifyCenter,
            globalStyles.w10,
            globalStyles.h10,
          ]}>
          <Box style={[globalStyles.flexrow, globalStyles.justifyCenter]}>
            <TextComponent
              style={[
                globalStyles.fontSize20,
                globalStyles.fontNeulisAlt_Bold,
                globalStyles.lineHeight29p32,
                isIos() && globalStyles.fontWeight700,
                globalStyles.textCulrMainBlack,
                transparent && globalStyles.textWhite,
              ]}>
              {title}
            </TextComponent>
          </Box>
        </Box>

        <Box
          style={[
            globalStyles.flexrow,
            globalStyles.alignItemsCenter,
            globalStyles.justifyEnd,
            globalStyles.zIndex,
            globalStyles.gapX10,
          ]}>
          {rightIcon && rightIcon.type === 'icon' ? (
            rightIcon.icon
          ) : rightIcon && rightIcon.type === 'text' ? (
            <PressableComponent onPress={rightIcon?.onPress}>
              <TextComponent
                style={[
                  globalStyles.fontSize14,
                  globalStyles.fontNeulisAlt_Bold,
                  isIos() && globalStyles.fontWeight700,
                  globalStyles.textCulrMainVermilion,
                  transparent && globalStyles.textWhite,
                  globalStyles.lineHeight18p88,
                ]}>
                {rightIcon?.text}
              </TextComponent>
            </PressableComponent>
          ) : (
            <></>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export const headerStyle = ScaledSheet.create({
  arrow: {
    borderRadius: '12@s',
    borderWidth: '2@s',
    height: '36@s',
    width: '36@s',
    borderColor: pallete.black0p1,
  },
  arrowWhite: {
    borderColor: pallete.headerWhite,
  },
} as Record<any, any>);

export default HeaderComponent;
