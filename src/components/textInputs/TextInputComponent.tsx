import {TextInput, TextInputProps} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
import TextComponent from '../text/TextComponent';
import inputStyles from './inputStyles';
import pallete from '../../constants/colors/pallete';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {isIos} from '../../constants/utils/utils';
import {useAppSelector} from '../../constants/utils/hooks';

interface TextInputComponentProps extends TextInputProps {
  errorText?: string;
  title?: string;
  whiteBg?: boolean;
}

const TextInputComponent: FC<TextInputComponentProps> = ({
  value,
  onChangeText,
  errorText,
  title,
  multiline,
  onFocus,
  onBlur,
  whiteBg,
  editable = true,
  ...rest
}) => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const inputRef = useRef<TextInput>(null);
  const [focus, setFocus] = useState(false);
  const animationValue = useSharedValue(0);

  // Trigger animation based on error text presence
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

  const inputStylesCombined = [
    globalStyles.textCulrMainBlack,
    globalStyles.w10,
    globalStyles.textInputHeight,
    globalStyles.px2,
    globalStyles.fontNeulisAlt_Regular,
    isIos() && globalStyles.fontWeight400,
    globalStyles.fontSize14,
    globalStyles.lineHeight18p88,
    globalStyles.bgCulrLightestBlack,
    globalStyles.border,
    globalStyles.borderCulrLighterBlack,
    globalStyles.borderRadius15,
    globalStyles.justifyCenter,
    globalStyles.alignItemsCenter,
    focus && globalStyles.bgCulrInputFocusBg,
    (focus || !!value) && globalStyles.pt2p9,
    (focus || !!value) && isIos() && globalStyles.pt2,
    multiline && globalStyles.multiTextInputHeight,
    multiline && (focus || !!value) && isIos() && globalStyles.pt3p2,
    multiline && globalStyles.textAlignVertical,
    !!errorText && inputStyles.errorStyle,
    whiteBg && globalStyles.bgWhite,
  ];

  return (
    <Animated.View
      style={[
        globalStyles.relative,
        globalStyles.borderRadius15,
        errorText && animatedStyle,
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

      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={onChangeText}
        selectionColor={pallete.culrMainVermilion}
        style={inputStylesCombined}
        placeholderTextColor={pallete.transparent}
        onFocus={e => {
          onFocus?.(e);
          setFocus(true);
        }}
        onBlur={e => {
          onBlur?.(e);
          setFocus(false);
        }}
        multiline={multiline}
        {...rest}
      />

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

export default TextInputComponent;
