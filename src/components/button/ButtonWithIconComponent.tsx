import {TouchableOpacityProps} from 'react-native';
import React, {FC, ReactNode, useCallback, useEffect} from 'react';
import TextComponent from '../text/TextComponent';
import Box from '../layout/Box';
import {useSharedValue} from 'react-native-reanimated';
import PressableComponent from '../pressable/PressableComponent';
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
  defaultOutlined?: boolean;
  text14?: boolean;
  icon: ReactNode;
  iconRight?: boolean;
}

const ButtonWithIconComponent: FC<buttonProps> = ({
  disabled,
  title,
  onPress,
  loading = false,
  transparent = false,
  icon,
  iconRight,
  text14,
  defaultOutlined,
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
      // backgroundColor={'mainBackground'}
      style={[
        buttonComponentStyles.btnHeight,
        globalStyles.w10,
        globalStyles.bgCulrMainVermilion,
        globalStyles.borderRadius15,
        defaultOutlined && globalStyles.bgTransparent,
        defaultOutlined && globalStyles.border,
        defaultOutlined && globalStyles.borderCulrMainBlack,
        transparent && globalStyles.bgTransparent,
        transparent && globalStyles.borderBtnTransparent,
      ]}>
      <PressableComponent
        activeOpacity={0.5}
        onPress={onPress}
        disabled={disabled}
        {...rest}
        style={[
          globalStyles.h10,
          globalStyles.borderRadius15,
          globalStyles.flexrow,
          globalStyles.justifyCenter,
          globalStyles.alignItemsCenter,
        ]}>
        {!loading && (
          <Box
            style={[
              globalStyles.w10,
              globalStyles.flexrow,
              globalStyles.alignItemsCenter,
              globalStyles.justifyCenter,
              !iconRight && globalStyles.gapX10,
            ]}>
            <Box
              style={[
                iconRight && globalStyles.absolute,
                iconRight && globalStyles.left20,

                globalStyles.flexrow,
                // globalStyle.pl1p2,
                globalStyles.alignItemsCenter,
              ]}>
              {icon}
            </Box>
            <Box
              style={[
                globalStyles.flexrow,
                // globalStyle.w10,
                globalStyles.h10,
                globalStyles.alignItemsCenter,
                globalStyles.justifyCenter,
              ]}>
              <TextComponent
                style={[
                  globalStyles.flexrow,
                  globalStyles.textCenter,
                  globalStyles.textWhite,
                  globalStyles.fontNeulisAlt_Bold,
                  isIos() && globalStyles.fontWeight700,
                  globalStyles.fontSize16,
                  defaultOutlined && globalStyles.textCulrMainBlack,
                  text14 && globalStyles.fontSize14,
                ]}>
                {title}
              </TextComponent>
            </Box>
          </Box>
        )}
        {loading &&
          new Array(3).fill('*').map(() => {
            return <></>;
          })}
      </PressableComponent>
    </Box>
  );
};

const buttonComponentStyles = ScaledSheet.create({
  btnHeight: {
    height: '60@s',
  },
});

export default ButtonWithIconComponent;
