import React, {FC, useState, useEffect, useRef} from 'react';
import TextComponent from '../text/TextComponent';
import {height} from '../../globalStyles/globalStyles';
import inputStyles from './inputStyles';
import pallete from '../../constants/colors/pallete';
import Box from '../layout/Box';
import {ScaledSheet} from 'react-native-size-matters';
import {MotiView} from 'moti';
import {TextInput} from 'react-native';
import {
  useAppDispatch,
  useAppSelector,
  useModalManager,
} from '../../constants/utils/hooks';
import {InputProps} from './PasswordInputComponent';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PressableComponent from '../pressable/PressableComponent';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {selectContactPhone} from 'react-native-select-contact';
import {isIos, parsePhoneNumber} from '../../constants/utils/utils';
import {setPreferredCountry} from '../../reducerSlices/flagPreferenceSlice';
import Feather from 'react-native-vector-icons/Feather';
import {MODAL_NAMES} from '../../constants/utils/constants';

interface PhonePickerTextInputProps extends InputProps {
  showContacts: boolean;
  setValue: (value: string) => void;
}

const PhonePickerTextInputComponent: FC<PhonePickerTextInputProps> = ({
  errorText,
  value,
  onChangeText,
  title,
  placeholder,
  whiteBg,
  showContacts,
  setValue,
  editable = true,
  ...rest
}) => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const dispatch = useAppDispatch();

  const inputRef = useRef<TextInput>(null);
  const [focus, setFocus] = useState(false);
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

  const changeFocus = () => {
    setFocus(true);
  };

  const blur = () => {
    setFocus(false);
  };
  const {currentCountry, flagList} = useAppSelector(state => state.flagList);
  const {
    currentCountry: {flag: flagIcon},
  } = useAppSelector(state => state.flagList);

  const selectContact = async () => {
    const selection: any = await selectContactPhone();
    const {selectedPhone} = selection;
    // console.log({selection});

    setValue &&
      setValue(
        selectedPhone && selectedPhone.number
          ? parsePhoneNumber(selectedPhone.number)
          : '',
      );
  };

  const {activeModal, openModal, closeModal} = useModalManager();

  useEffect(() => {
    if (errorText && errorText?.length > 0) {
      animationValue.value = withTiming(1);
    } else {
      animationValue.value = withTiming(0);
    }
  }, [errorText, animationValue]);

  return (
    <>
      {/* <BottomSheetComponent
        isVisible={activeModal === MODAL_NAMES.PHONE_PICKER_COUNTRY_CODE_MODAL}>
        <Box
          style={[
            globalStyles.w10,
            globalStyles.pb3,
            globalStyles.pt1p6,
            // styles.maxHeight,
          ]}>
          <Box
            style={[
              globalStyles.flexrow,
              globalStyles.justifyBetween,
              globalStyles.alignItemsCenter,
              globalStyles.px2p4,
            ]}>
            <Box>
              <TextComponent
                style={[
                  globalStyles.fontNeulisAlt_Bold,
                  isIos() && globalStyles.fontWeight700,
                  globalStyles.fontSize14,
                  globalStyles.lineHeight18p88,
                  globalStyles.textCulrMainBlack,
                ]}>
                Select country
              </TextComponent>
            </Box>

            <PressableComponent onPress={() => closeModal()}>
              <AntDesign
                name="close"
                size={16}
                style={[globalStyles.textCulrMainBlack]}
              />
            </PressableComponent>
          </Box>

          <Box>
            {flagList.map(
              (
                {name, dial_code, flag, code, currencyName, currencySymbol},
                index,
              ) => (
                <PressableComponent
                  onPress={() => {
                    dispatch(
                      setPreferredCountry({
                        code,
                        dial_code,
                        flag,
                        name,
                        currencyName,
                        currencySymbol,
                      }),
                    );
                    closeModal();
                  }}
                  key={index.toString()}
                  style={[
                    globalStyles.w10,
                    globalStyles.flexrow,
                    globalStyles.alignItemsCenter,
                    globalStyles.px2p4,
                    globalStyles.py1p6,
                  ]}>
                  <Box
                    style={[
                      globalStyles.mr0p8,
                      globalStyles.justifyCenter,
                      globalStyles.alignItemsCenter,
                    ]}>
                    <TextComponent>{flag}</TextComponent>
                  </Box>
                  <Box>
                    <TextComponent
                      style={[
                        globalStyles.fontNeulisAlt_Regular,
                        isIos() && globalStyles.fontWeight400,
                        globalStyles.fontSize14,
                        globalStyles.lineHeight18p88,
                        globalStyles.textCulrMainBlack,
                      ]}>
                      {name} ({dial_code})
                    </TextComponent>
                  </Box>
                </PressableComponent>
              ),
            )}
          </Box>
        </Box>
      </BottomSheetComponent> */}

      <Animated.View style={[globalStyles.w10, animatedStyle]}>
        {title && (
          <TextComponent
            style={[
              globalStyles.fontNeulisAlt_Regular,
              isIos() && globalStyles.fontWeight400,
              globalStyles.fontSize14,
              globalStyles.lineHeight18p88,
              globalStyles.textCulrLightBlack,
              // globalStyle.mb0p8,
              globalStyles.absolute,
              globalStyles.textAlignMiddle,
              globalStyles.top20,
              globalStyles.left141p5,
              globalStyles.zIndex,
              (focus || !!value) && globalStyles.fontSize12,
              (focus || !!value) && globalStyles.fontNeulisAlt_Light,
              (focus || !!value) && isIos() && globalStyles.fontWeight300,
              (focus || !!value) && globalStyles.top14,
            ]}
            onPress={() => {
              if (editable) {
                setFocus(true);
                inputRef.current?.focus();
              }
            }}>
            {title}
          </TextComponent>
        )}

        <MotiView
          style={[
            globalStyles.w10,
            globalStyles.bgCulrLightestBlack,
            globalStyles.border,
            globalStyles.borderCulrLighterBlack,
            globalStyles.borderRadius15,
            globalStyles.justifyCenter,
            globalStyles.alignItemsCenter,
            globalStyles.flexrow,
            whiteBg && globalStyles.bgWhite,
            focus && globalStyles.bgCulrInputFocusBg,
            globalStyles.textInputHeight,
            !!errorText && inputStyles.errorStyle,
            // {
            //   backgroundColor: 'red',
            // },
          ]}>
          <PressableComponent
            onPress={() => {
              if (editable) {
                openModal(MODAL_NAMES.PHONE_PICKER_COUNTRY_CODE_MODAL);
              }
            }}>
            <Box
              style={[
                globalStyles.h10,
                globalStyles.justifyCenter,
                globalStyles.alignItemsCenter,
                globalStyles.pl2,
                globalStyles.pr1,
                globalStyles.borderRight,
                globalStyles.borderCulrLighterBlack,
                // globalStyle.borderInput,
                // globalStyle.borderRadius6,
                // globalStyle.mr1p6,
                // !!errorText && inputStyles.errorStyle,

                globalStyles.flexrow,
                globalStyles.alignItemsCenter,
              ]}>
              <Box
                style={[
                  // styles.iconWidth,
                  // globalStyle.bgPurple,
                  globalStyles.alignItemsCenter,
                ]}>
                <TextComponent>{flagIcon}</TextComponent>
              </Box>

              <TextComponent
                style={[
                  globalStyles.pl0p8,
                  globalStyles.fontNeulisAlt_Regular,
                  isIos() && globalStyles.fontWeight400,
                  globalStyles.fontSize14,
                  globalStyles.lineHeight18p88,
                  globalStyles.textCulrLightBlack,
                ]}>
                {currentCountry.dial_code}
              </TextComponent>

              <Box style={[globalStyles.pl0p5]}>
                <Feather
                  name="chevron-down"
                  size={24}
                  style={[globalStyles.textCulrLightBlack]}
                />
              </Box>
            </Box>
          </PressableComponent>

          <TextInput
            ref={inputRef}
            value={value}
            onChangeText={onChangeText}
            maxLength={10}
            selectionColor={pallete.culrMainVermilion}
            textContentType="telephoneNumber"
            keyboardType="phone-pad"
            style={[
              globalStyles.textCulrMainBlack,
              globalStyles.textInputHeight,
              globalStyles.px2,
              globalStyles.fontNeulisAlt_Regular,
              globalStyles.fontSize14,
              globalStyles.lineHeight18p88,
              globalStyles.flexOne,
              globalStyles.justifyCenter,
              globalStyles.alignItemsCenter,
              // globalStyle.borderInput,
              globalStyles.borderRadius15,
              (focus || !!value) && globalStyles.pt2p9,
              (focus || !!value) && isIos() && globalStyles.pt2,
              // focus && inputStyles.focusedStyle,
              // !!errorText && inputStyles.errorStyle,
              whiteBg && globalStyles.bgWhite,
            ]}
            onFocus={changeFocus}
            onBlur={blur}
            placeholder={placeholder}
            placeholderTextColor={pallete.transparent}
            {...rest}
          />
          {/* {showContacts && (
            <Box style={[inputStyles.iconView]}>
              <PressableComponent
                onPress={() => {
                  selectContact();
                }}
                style={[
                  globalStyle.justifyCenter,
                  globalStyle.alignItemsCenter,
                  globalStyle.w10,
                ]}>
                <AntDesign color={pallete.grey4} size={20} name="contacts" />
              </PressableComponent>
            </Box>
          )} */}
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
              // inputStyles.br8,
            ]}>
            {errorText}
          </TextComponent>
        )}
      </Animated.View>
    </>
  );
};

export const styles = ScaledSheet.create({
  contactIcon: {
    left: -200,
  },
  labelStyle: {
    left: '10@s',
    top: '5@s',
  },
  overlay: {
    height: height * 0.7,
  },
  maxHeight: {
    height: height + 25,
  },
  listBox: {
    borderWidth: 1,
    borderRadius: '10@s',
  },
  iconStyle: {
    width: '32@s',
    height: '32@s',
  },
  iconWidth: {
    width: '18@s',
    height: '18@s',
  },
} as Record<any, any>);
export const searchInputStyle = ScaledSheet.create({
  textInputHeight: {
    height: '50@s',
  },
  br: {
    borderRadius: '15@s',
  },
} as Record<any, any>);

export default PhonePickerTextInputComponent;
