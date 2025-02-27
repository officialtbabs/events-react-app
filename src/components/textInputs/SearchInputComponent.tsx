import {TextInput, TextInputProps} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import TextComponent from '../text/TextComponent';
import inputStyles from './inputStyles';
import pallete from '../../constants/colors/pallete';
import {MotiView} from 'moti';
import Box from '../layout/Box';
import Search from '../../assets/svgs/search.svg';
import PressableComponent from '../pressable/PressableComponent';
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
  showContacts?: boolean;
  whiteBg?: boolean;
  setValue?: (val: string) => void;
}
const SearchInputComponent: FC<InputProps> = ({
  placeholder,
  value,
  onChangeText,
  errorText,
  title,
  onFocus,
  onBlur,
  whiteBg,
  ...rest
}) => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const [focus, setFocus] = useState(false);

  const animationValue = useSharedValue(0);

  useEffect(() => {
    if (errorText && errorText?.length > 0) {
      animationValue.value = withTiming(1);
    } else {
      animationValue.value = withTiming(0);
    }
  }, [errorText, animationValue]);
  const animatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      animationValue.value,
      [0, 0.2, 0.4, 0.8, 1],
      [0, -4, 0, 4, 0],
      {
        extrapolateRight: Extrapolation.CLAMP,
      },
    );
    return {
      transform: [
        {
          translateX,
        },
      ],
    };
  });
  return (
    <Animated.View style={[globalStyles.w10, animatedStyle]}>
      {title && (
        <TextComponent style={[globalStyles.fontSize12, globalStyles.mb0p8]}>
          {title}
        </TextComponent>
      )}
      <MotiView
        style={[
          globalStyles.w10,
          globalStyles.justifyCenter,
          globalStyles.alignItemsCenter,
          // !!errorText && inputStyles.errorStyle,
          whiteBg && globalStyles.bgWhite,
        ]}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          selectionColor={pallete.culrMainVermilion}
          style={[
            globalStyles.textBlack,
            globalStyles.w10,
            globalStyles.textInputHeight,
            globalStyles.px1,
            globalStyles.fontSize14,
            globalStyles.w10,
            globalStyles.justifyCenter,
            globalStyles.alignItemsCenter,
            globalStyles.borderInput,
            globalStyles.borderRadius6,
            globalStyles.pl4,
            focus && inputStyles.focusedStyle,
            !!errorText && inputStyles.errorStyle,
            whiteBg && globalStyles.bgWhite,
          ]}
          placeholder={placeholder}
          keyboardType="web-search"
          onFocus={e => {
            onFocus && onFocus(e);
            setFocus(true);
          }}
          onBlur={e => {
            onBlur && onBlur(e);
            setFocus(false);
          }}
          placeholderTextColor={pallete.grey4}
          {...rest}
        />
        <Box style={[inputStyles.searchView]}>
          <PressableComponent
            disabled
            style={[
              globalStyles.h10,
              globalStyles.justifyCenter,
              globalStyles.alignItemsCenter,
            ]}>
            <Box>
              <Search />
            </Box>
          </PressableComponent>
        </Box>
      </MotiView>

      {errorText && (
        <TextComponent
          style={[
            globalStyles.fontSize11,
            globalStyles.errorText,
            globalStyles.ml1,
            globalStyles.mt1,
          ]}>
          {`* ${errorText}`}
        </TextComponent>
      )}
    </Animated.View>
  );
};

export default SearchInputComponent;
