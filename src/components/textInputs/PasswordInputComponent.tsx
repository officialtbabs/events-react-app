import {TextInput, TextInputProps} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
import TextComponent from '../text/TextComponent';
import inputStyles from './inputStyles';
import pallete from '../../constants/colors/pallete';
import {MotiView} from 'moti';
import Box from '../layout/Box';
import PressableComponent from '../pressable/PressableComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {isIos} from '../../constants/utils/utils';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useAppSelector} from '../../constants/utils/hooks';

export interface InputProps extends TextInputProps {
  errorText?: string;
  title?: string;
  whiteBg?: boolean;
}

const PasswordInputComponent: FC<InputProps> = ({
  placeholder,
  value,
  onChangeText,
  errorText,
  title,
  onFocus,
  onBlur,
  whiteBg,
  editable = true,
  ...rest
}) => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const inputRef = useRef<TextInput>(null);
  const [focus, setFocus] = useState(false);
  const [visible, setVisible] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const animationValue = useSharedValue(0);

  // Toggle password visibility
  const toggleShowPassword = () => {
    setVisible(prev => !prev);
    setShowPassword(prev => !prev);
  };

  // Animation for error text
  useEffect(() => {
    animationValue.value = errorText ? withTiming(1) : withTiming(0);
  }, [errorText, animationValue]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          animationValue.value,
          [0, 0.2, 0.4, 0.8, 1],
          [0, -4, 0, 4, 0],
          {
            extrapolateRight: Extrapolation.CLAMP,
          },
        ),
      },
    ],
  }));

  // Icon for showing/hiding password
  const iconView = showPassword ? (
    <Ionicons
      name="eye-outline"
      size={24}
      style={globalStyles.textCulrMainBlack}
    />
  ) : (
    <Ionicons
      name="eye-off-outline"
      size={24}
      style={globalStyles.textCulrMainBlack}
    />
  );

  const inputStylesCombined = [
    globalStyles.textCulrMainBlack,
    globalStyles.w10,
    globalStyles.textInputHeight,
    globalStyles.px2,
    globalStyles.fontNeulisAlt_Regular,
    globalStyles.fontSize14,
    globalStyles.lineHeight18p88,
    isIos() && globalStyles.fontWeight400,
    globalStyles.bgCulrLightestBlack,
    globalStyles.border,
    globalStyles.borderCulrLighterBlack,
    globalStyles.borderRadius15,
    globalStyles.justifyCenter,
    globalStyles.alignItemsCenter,
    focus && globalStyles.bgCulrInputFocusBg,
    (focus || !!value) && globalStyles.pt2p9,
    (focus || !!value) && isIos() && globalStyles.pt2,
    !!errorText && inputStyles.errorStyle,
    whiteBg && globalStyles.bgWhite,
  ];

  return (
    <Animated.View
      style={[
        globalStyles.relative,
        globalStyles.borderRadius15,
        animatedStyle,
      ]}>
      {title && (
        <TextComponent
          onPress={() => {
            if (editable) {
              setFocus(true);
              inputRef.current?.focus();
            }
          }}
          style={[
            globalStyles.fontNeulisAlt_Regular,
            globalStyles.fontSize14,
            globalStyles.lineHeight18p88,
            isIos() && globalStyles.fontWeight400,
            globalStyles.textCulrLightBlack,
            globalStyles.absolute,
            globalStyles.textAlignMiddle,
            globalStyles.top20,
            globalStyles.left20,
            globalStyles.zIndex,
            (focus || !!value) && globalStyles.fontSize12,
            (focus || !!value) && globalStyles.fontNeulisAlt_Light,
            (focus || !!value) && isIos() && globalStyles.fontWeight300,
            (focus || !!value) && globalStyles.top14,
          ]}>
          {title}
        </TextComponent>
      )}
      <MotiView
        style={[
          globalStyles.w10,
          globalStyles.justifyCenter,
          globalStyles.alignItemsCenter,
          whiteBg && globalStyles.bgWhite,
        ]}>
        <TextInput
          ref={inputRef}
          value={value}
          onChangeText={onChangeText}
          selectionColor={pallete.culrMainVermilion}
          style={inputStylesCombined}
          placeholder={placeholder}
          onFocus={e => {
            onFocus?.(e);
            setFocus(true);
          }}
          onBlur={e => {
            onBlur?.(e);
            setFocus(false);
          }}
          placeholderTextColor={pallete.transparent}
          secureTextEntry={visible}
          textContentType={showPassword ? 'name' : 'password'}
          {...rest}
        />
        <Box style={[inputStyles.iconView, globalStyles.h10]}>
          <PressableComponent
            onPress={toggleShowPassword}
            style={[
              globalStyles.h10,
              globalStyles.justifyCenter,
              globalStyles.alignItemsCenter,
            ]}>
            <Box>{iconView}</Box>
          </PressableComponent>
        </Box>
      </MotiView>

      {errorText && (
        <TextComponent
          style={[
            globalStyles.fontSize12,
            globalStyles.fontNeulisAlt_Light,
            isIos() && globalStyles.fontWeight300,
            globalStyles.errorText,
            globalStyles.ml0p5,
            globalStyles.mt0p4,
          ]}>
          {errorText}
        </TextComponent>
      )}
    </Animated.View>
  );
};

export default PasswordInputComponent;
