import React, {FC, useCallback, useEffect, useState} from 'react';
import Box from '../layout/Box';
import TextComponent from '../text/TextComponent';
import {ScaledSheet} from 'react-native-size-matters';
import Calender from '../../assets/svgs/icons/calender-outlined.svg';
import DatePicker, {DatePickerProps} from 'react-native-date-picker';
import moment from 'moment-timezone';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PressableComponent from '../pressable/PressableComponent';
import pallete from '../../constants/colors/pallete';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import inputStyles from '../textInputs/inputStyles';
import {isIos} from '../../constants/utils/utils';
import {useAppSelector} from '../../constants/utils/hooks';

interface DateTimeComponentProps extends DatePickerProps {
  errorText?: string;
  onChange: (...event: any[]) => void;
  initial?: boolean;
}

const DateTime: FC<DateTimeComponentProps> = ({
  title,
  date,
  mode,
  errorText,
  onChange,
  initial = false,
  ...rest
}) => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const [show, setShow] = useState(false);

  const showDatepicker = () => {
    setShow(true);
  };

  const formatDate = useCallback(
    (val: Date) => {
      return moment(val)
        .tz('Africa/Lagos')
        .format(
          mode === 'datetime'
            ? 'Do MMM. YYYY | h:mma [GMT]Z'
            : mode === 'time'
            ? 'h:mma [GMT]Z'
            : 'Do MMM. YYYY',
        );
    },
    [mode],
  );

  const animationValue = useSharedValue(0);

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

  useEffect(() => {
    if (errorText && errorText?.length > 0) {
      animationValue.value = withTiming(1);
    } else {
      animationValue.value = withTiming(0);
    }
  }, [errorText, animationValue]);

  return (
    <Animated.View style={[globalStyles.w10, !!errorText && animatedStyle]}>
      {title && (
        <TextComponent
          onPress={showDatepicker}
          style={[
            globalStyles.fontNeulisAlt_Regular,
            isIos() && globalStyles.fontWeight400,
            globalStyles.fontSize14,
            globalStyles.lineHeight18p88,
            globalStyles.textCulrLightBlack,
            globalStyles.mb0p8,
            globalStyles.absolute,
            globalStyles.textAlignMiddle,
            globalStyles.top20,
            globalStyles.left20,
            globalStyles.zIndex,
            initial && globalStyles.fontSize12,
            initial && globalStyles.fontNeulisAlt_Light,
            initial && isIos() && globalStyles.fontWeight300,
            initial && globalStyles.top14,
          ]}>
          {title}
        </TextComponent>
      )}
      <PressableComponent
        onPress={showDatepicker}
        style={[
          globalStyles.w10,
          globalStyles.textInputHeight,
          // globalStyle.borderInput,
          globalStyles.border,
          globalStyles.borderCulrLighterBlack,
          globalStyles.relative,
          globalStyles.borderRadius15,
          globalStyles.bgCulrLightestBlack,
          !!errorText && inputStyles.errorStyle,
        ]}>
        <Box
          flex={1}
          style={[
            globalStyles.flexrow,
            globalStyles.justifyCenter,
            globalStyles.alignItemsCenter,
            globalStyles.justifyBetween,
            globalStyles.px2,
            globalStyles.relative,
          ]}>
          <TextComponent
            numberOfLines={1}
            style={[
              globalStyles.fontNeulisAlt_Regular,
              isIos() && globalStyles.fontWeight400,
              globalStyles.fontSize14,
              globalStyles.lineHeight18p88,
              globalStyles.textCulrLightBlack,
              initial && globalStyles.pt2,
              initial && isIos() && globalStyles.pt1p8,
              initial && globalStyles.textCulrMainBlack,
            ]}>
            {initial ? formatDate(date) : ''}
          </TextComponent>

          <Box
            style={[
              globalStyles.absolute,
              globalStyles.top0,
              // globalStyles.bottom0,
              globalStyles.h10,
              globalStyles.right0,
              globalStyles.justifyCenter,
              globalStyles.alignItemsEnd,
            ]}>
            <Box style={[dateTimeStyle.iconBox]}>
              {mode === 'time' ? (
                <Ionicons
                  name="time-outline"
                  size={20}
                  color={pallete.culrMainBlack}
                />
              ) : (
                <Calender width={20} height={20} />
              )}
            </Box>
          </Box>
        </Box>
      </PressableComponent>

      <DatePicker
        modal
        open={show}
        date={date}
        title={title}
        mode={mode}
        onConfirm={val => {
          onChange(val);
          setShow(false);
        }}
        onCancel={() => {
          setShow(false);
        }}
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

export const dateTimeStyle = ScaledSheet.create({
  iconBox: {
    height: '25@s',
    width: '25@s',
  },
} as Record<any, any>);
export default DateTime;
