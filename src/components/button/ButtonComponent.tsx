import {TouchableOpacityProps} from 'react-native';
import React, {FC, useCallback, useEffect} from 'react';
import TextComponent from '../text/TextComponent';
import Box from '../layout/Box';
import {useSharedValue} from 'react-native-reanimated';
import PressableComponent from '../pressable/PressableComponent';
import {Spinner, spinnerStyle} from '../loader/Spinner';
import {ScaledSheet} from 'react-native-size-matters';
import {isIos} from '../../constants/utils/utils';
import {useAppSelector} from '../../constants/utils/hooks';
interface buttonProps extends TouchableOpacityProps {
  disabled?: boolean;
  title: string;
  onPress: () => void;
  loading?: boolean;
  transparent?: boolean;
  secondary?: boolean;
  secondaryFilled?: boolean;
  defaultOutlined?: boolean;
  defaultFilled?: boolean;
  error?: boolean;
  text11?: boolean;
  text12?: boolean;
  text14?: boolean;
  redBtn?: boolean;
  orangeText?: boolean;
  whiteFilled?: boolean;
  height38?: boolean;
  height40?: boolean;
  height48?: boolean;
  fontRegular?: boolean;
}

const ButtonComponent: FC<buttonProps> = ({
  disabled,
  title,
  onPress,
  loading = false,
  text11,
  text12,
  text14,
  height38,
  height40,
  height48,
  transparent,
  secondary,
  secondaryFilled,
  defaultOutlined,
  defaultFilled,
  orangeText,
  whiteFilled,
  fontRegular,
  ...rest
}) => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);
  const currentPos = useSharedValue(0);
  const changer = useCallback(() => {
    if (loading) {
      if (currentPos.value === 2) {
        currentPos.value = 0;
      } else {
        currentPos.value = currentPos.value + 1;
      }
    }
  }, [currentPos, loading]);
  useEffect(() => {
    const interval = setInterval(() => {
      changer();
    }, 250);

    return () => clearInterval(interval);
  }, [changer]);

  return (
    <Box
      style={[
        buttonComponentStyles.btnHeight,
        globalStyles.w10,
        globalStyles.bgCulrMainVermilion,
        globalStyles.borderRadius15,
        defaultOutlined && globalStyles.bgTransparent,
        defaultOutlined && globalStyles.border,
        defaultOutlined && globalStyles.borderCulrMainBlack,
        defaultFilled && globalStyles.bgCulrMainBlack,
        (transparent || secondary || orangeText) && globalStyles.bgTransparent,
        transparent && globalStyles.borderBtnTransparent,
        secondaryFilled && globalStyles.bgPurplePrimary10,
        disabled && globalStyles.bgCulrBtnDisabledBg,
        secondaryFilled && disabled && globalStyles.bgTransparent,
        secondaryFilled && disabled && globalStyles.borderBtnPurple,
        secondary && globalStyles.borderBtnPurple,
        whiteFilled && globalStyles.bgWhite,
        height40 && globalStyles.h40,
        height48 && globalStyles.h48,
        height38 && globalStyles.h38,
      ]}>
      <PressableComponent
        activeOpacity={0.5}
        onPress={onPress}
        disabled={disabled || loading}
        {...rest}
        style={[
          globalStyles.h10,
          globalStyles.borderRadius15,
          globalStyles.flexrow,
          globalStyles.justifyCenter,
          globalStyles.alignItemsCenter,
          globalStyles.px2,
        ]}>
        {!loading && (
          <TextComponent
            style={[
              // globalStyles.flexrow,
              globalStyles.textCenter,
              globalStyles.textWhite,
              globalStyles.fontNeulisAlt_Bold,
              globalStyles.fontSize16,
              isIos() && globalStyles.fontWeight700,
              defaultOutlined && globalStyles.textCulrMainBlack,
              (secondary || secondaryFilled) && globalStyles.textPurple,
              orangeText && globalStyles.textSecondaryDark,
              text14 && globalStyles.fontSize14,
              whiteFilled && globalStyles.textCulrMainBlack,
              text12 && globalStyles.fontSize12,
              transparent && globalStyles.textCulrMainBlack,
              fontRegular && globalStyles.fontNeulisAlt_Regular,
              fontRegular && isIos() && globalStyles.fontWeight400,
              disabled && globalStyles.textCulrBtnTextDisabled,
              text11 && globalStyles.fontSize11,
            ]}>
            {title}
          </TextComponent>
        )}
        {/* {loading && <ActivityIndicator color={palette.white} />} */}
        {loading && (
          <Box>
            <Spinner small />
          </Box>
        )}
        {/* {loading &&
          new Array(3).fill('*').map((item, index) => {
            return (
              <ButtonDot
                currentIndex={currentPos}
                index={index}
                key={index.toString() + item}
              />
            );
          })} */}
      </PressableComponent>
    </Box>
  );
};

const buttonComponentStyles = ScaledSheet.create({
  btnHeight: {
    height: '60@ms',
  },
});

export default ButtonComponent;
