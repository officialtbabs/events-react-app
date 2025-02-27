import {TouchableOpacityProps} from 'react-native';
import React, {FC, ReactNode} from 'react';
import TextComponent from '../text/TextComponent';
import Box from '../layout/Box';
import PressableComponent from '../pressable/PressableComponent';
import {Spinner} from '../loader/Spinner';
import {ScaledSheet} from 'react-native-size-matters';
import {isIos} from '../../constants/utils/utils';
import {useAppSelector} from '../../constants/utils/hooks';
import {styleType} from '../../globalStyles/globalStyles';

interface chipButtonProps extends TouchableOpacityProps {
  text: string;
  variant?: 'filled' | 'outlined' | 'light' | 'text';
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  onPress?: () => void;
  wrapperStyle?: styleType;
  textStyle?: styleType;
}

const ChipComponent: FC<chipButtonProps> = ({
  text,
  variant,
  color = 'primary',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  onPress,
  wrapperStyle,
  textStyle,
  ...rest
}) => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  return (
    <Box
      style={[
        chipComponentStyles.chipHeight,
        globalStyles.w10,
        globalStyles.br,
        variant === 'filled' &&
          color === 'primary' &&
          globalStyles.bgCulrMainBlack,
        variant === 'filled' &&
          color === 'secondary' &&
          globalStyles.bgCulrMainVermilion,
        variant === 'filled' && disabled && globalStyles.bgCulrBtnDisabledBg,

        (variant === 'outlined' || variant === 'light' || variant === 'text') &&
          globalStyles.bgTransparent,
        variant === 'outlined' && globalStyles.border,
        variant === 'outlined' &&
          color === 'primary' &&
          globalStyles.borderCulrMainBlack,
        variant === 'outlined' &&
          color === 'secondary' &&
          globalStyles.borderCulrMainVermilion,
        variant === 'outlined' && disabled && globalStyles.borderCulrLightBlack,

        variant === 'light' &&
          color === 'primary' &&
          globalStyles.bgCulrMainBlackOpacity20,
        variant === 'light' &&
          color === 'secondary' &&
          globalStyles.bgCulrAlertVermilion,
        variant === 'light' &&
          disabled &&
          globalStyles.bgCulrMainBlackOpacity10,

        wrapperStyle,
      ]}>
      <PressableComponent
        activeOpacity={0.5}
        onPress={onPress}
        disabled={disabled}
        {...rest}
        style={[
          globalStyles.h10,
          globalStyles.br,
          globalStyles.flexrow,
          globalStyles.justifyCenter,
          globalStyles.alignItemsCenter,
          globalStyles.px2,
          globalStyles.py1,
          globalStyles.gapX3,
        ]}>
        {!loading && (
          <>
            {iconPosition === 'left' && <Box>{icon}</Box>}

            <TextComponent
              style={[
                globalStyles.flexrow,
                globalStyles.textCenter,
                globalStyles.fontNeulisAlt_Regular,
                isIos() && globalStyles.fontWeight400,
                globalStyles.fontSize12,
                globalStyles.lineHeight16p27,
                variant === 'filled' &&
                  (color === 'primary' || color === 'secondary') &&
                  globalStyles.textWhite,
                (variant === 'filled' ||
                  variant === 'outlined' ||
                  variant === 'light' ||
                  variant === 'text') &&
                  disabled &&
                  globalStyles.textCulrBtnTextDisabled,

                (variant === 'outlined' ||
                  variant === 'light' ||
                  variant === 'text') &&
                  color === 'primary' &&
                  !disabled &&
                  globalStyles.textCulrMainBlack,

                (variant === 'outlined' ||
                  variant === 'light' ||
                  variant === 'text') &&
                  color === 'secondary' &&
                  !disabled &&
                  globalStyles.textCulrMainVermilion,
                textStyle,
              ]}>
              {text}
            </TextComponent>

            {iconPosition === 'right' && <Box>{icon}</Box>}
          </>
        )}
        {loading && (
          <Box>
            <Spinner small />
          </Box>
        )}
      </PressableComponent>
    </Box>
  );
};

const chipComponentStyles = ScaledSheet.create({
  chipHeight: {
    height: '38@ms',
  },
});

export default ChipComponent;
