import {
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TextInputProps,
} from 'react-native';
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import TextComponent from '../text/TextComponent';
import Box from '../layout/Box';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import pallete from '../../constants/colors/pallete';
import {ScaledSheet} from 'react-native-size-matters';
import {otpLength} from '../../constants/utils/constants';
import {isIos} from '../../constants/utils/utils';
import {useAppSelector} from '../../constants/utils/hooks';

interface passCodeInterface extends TextInputProps {
  length?: 4 | 5 | 6;
  code: string;
  setCode: Dispatch<SetStateAction<string>>;
  setError?: Dispatch<SetStateAction<boolean>>;
  error?: boolean;
}

const PassCodeInput: FC<passCodeInterface> = ({
  length = otpLength,
  code,
  setCode,
  onFocus,
  onBlur,
  error,
  setError,
}) => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const input = useRef<any>();
  const [focus, setFocus] = useState(false);
  const opacity = useSharedValue(1);
  const changer = useCallback(() => {
    if (opacity.value === 1) {
      opacity.value = 0;
    } else {
      opacity.value = 1;
    }
  }, [opacity]);
  useEffect(() => {
    const interval = setInterval(() => {
      changer();
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [changer]);
  const blinkerStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value),
      scale: withTiming(opacity.value),
    };
  });
  useEffect(() => {
    // if (setError) {
    //   if (code.length === 0) {
    //     setError(false);
    //   } else {
    //     return;
    //   }
    // }
    if (error && setError && code.length < length) {
      setError(false);
    }
  }, [code, error, length, setError]);
  return (
    <Box style={[globalStyles.w10]}>
      <Box>
        <TextInput
          ref={input}
          keyboardType="number-pad"
          maxLength={length}
          secureTextEntry
          style={[globalStyles.w0, globalStyles.h0] as any}
          onChangeText={text => {
            setCode(text);
            if (text.length === length) {
              Keyboard.dismiss();
            }
          }}
          onFocus={e => {
            onFocus && onFocus(e);
            setFocus(true);
          }}
          onBlur={e => {
            onBlur && onBlur(e);
            setFocus(false);
          }}
        />

        <Box style={[globalStyles.alignItemsCenter]}>
          <TouchableWithoutFeedback onPress={() => input?.current.focus()}>
            <Box style={[globalStyles.flexrow]}>
              {new Array(length).fill('a').map((_, index) => {
                return (
                  <Box
                    key={index.toString()}
                    style={[
                      inputStyles.pin,

                      globalStyles.bgCulrLightestBlack,
                      globalStyles.border,
                      globalStyles.borderCulrLighterBlack,
                      globalStyles.borderRadius15,
                      globalStyles.justifyCenter,
                      globalStyles.alignItemsCenter,
                      focus && globalStyles.bgCulrInputFocusBg,
                      error && globalStyles.borderRed,
                      error && globalStyles.bgPinError,
                    ]}>
                    {index === code.length && (
                      <Animated.View
                        style={[
                          inputStyles.line,
                          blinkerStyle,
                          // globalStyle.w10,
                        ]}
                      />
                    )}
                    {code[index] && (
                      <TextComponent
                        style={[
                          globalStyles.fontSize16,
                          globalStyles.fontNeulisAlt_SemiBold,
                          isIos() && globalStyles.fontWeight400,
                          globalStyles.textCulrMainBlack,
                          globalStyles.textCenter,
                          globalStyles.lineHeight18p88,
                        ]}>
                        {code[index]}
                      </TextComponent>
                    )}
                  </Box>
                );
              })}
            </Box>
          </TouchableWithoutFeedback>
        </Box>

        {error && (
          <Box
            style={[
              globalStyles.flexrow,
              globalStyles.alignItemsCenter,
              globalStyles.ml0p5,
              globalStyles.mt0p4,
            ]}>
            <MaterialIcons
              size={19}
              color={pallete.error}
              name="error-outline"
            />

            <TextComponent
              style={[
                globalStyles.fontSize12,
                globalStyles.fontNeulisAlt_Light,
                isIos() && globalStyles.fontWeight300,
                globalStyles.errorText,
                globalStyles.ml0p5,
                globalStyles.mt0p4,
              ]}>
              Sorry, the OTP code you entered is incorrect
            </TextComponent>
          </Box>
        )}
      </Box>
    </Box>
  );
};
const inputStyles = ScaledSheet.create({
  iconView: {
    position: 'absolute',
    right: 0,
    width: '38@s',
  },
  lockView: {
    // position: 'absolute',
    // left: 0,
    width: '35@s',
  },
  br8: {
    borderRadius: '8@s',
  },
  br12: {
    borderRadius: '12@s',
  },
  borwidth: {
    borderColor: pallete.primaryDefault,
    borderWidth: 1,
  },
  borTransparent: {
    borderColor: 'transparent',
  },
  inputFocused: {
    borderWidth: '0.5@s',
    borderColor: pallete.primaryDefault,
  },
  pinInput: {
    flexDirection: 'row',
    marginVertical: 20,
    padding: 17,
    borderRadius: 50,
  },
  pin: {
    width: '66@s',
    height: '62@s',
    marginHorizontal: '5@s',
    backgroundColor: pallete.pinBg,
  },
  borderRed: {
    borderColor: pallete.error,
  },
  line: {
    width: '2@s',
    height: '20@s',
    backgroundColor: pallete.culrMainVermilion,
  },
} as Record<string, any>);
export default PassCodeInput;
