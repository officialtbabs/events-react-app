import React from 'react';
import Box from '../../components/layout/Box';
import TextComponent from '../../components/text/TextComponent';
import TextInputComponent from '../../components/textInputs/TextInputComponent';
import PasswordInputComponent from '../../components/textInputs/PasswordInputComponent';
import ButtonComponent from '../../components/button/ButtonComponent';
import PressableComponent from '../../components/pressable/PressableComponent';
import {useNavigation} from '@react-navigation/native';
import {
  AuthNavigationProps,
  RegisterRequestDto,
} from '../../constants/types/types';
import {Controller, useForm} from 'react-hook-form';
import {
  emailPattern,
  passwordPattern,
  passwordText,
} from '../../constants/utils/constants';
import {useAppDispatch, useAppSelector} from '../../constants/utils/hooks';
import HeaderComponent from '../../components/header/Header';
import LayoutWithSafeAreaWithBgWithoutScroll from '../../components/layout/LayoutWithSafeAreaWithBgWithoutScroll';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Google from '../../assets/svgs/logos/google_32.svg';
import {setRegisteringUser} from '../../reducerSlices/registeringUserSlice';
import {isIos} from '../../constants/utils/utils';
import LayoutWithSafeAreaWithBg from '../../components/layout/LayoutWithSafeAreaWithBg';

const EnterEmail = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);
  const {navigate} = useNavigation<AuthNavigationProps>();
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onNext = (data: Pick<RegisterRequestDto, 'email' | 'password'>) => {
    dispatch(
      setRegisteringUser({
        email: data.email,
        password: data.password,
      }),
    );
    navigate('registerStack', {screen: 'enterKyc'});
  };

  return (
    <>
      <LayoutWithSafeAreaWithBg
        layoutHeader={
          <HeaderComponent
            title=""
            leftIcon={{
              type: 'icon',
              icon: (
                <Box
                  style={[
                    globalStyles.p1,
                    globalStyles.bgCulrAlertVermilion,
                    globalStyles.br,
                  ]}>
                  <Feather
                    name="chevron-left"
                    size={22}
                    style={[globalStyles.textCulrMainVermilion]}
                  />
                </Box>
              ),
            }}
            rightIcon={{
              type: 'text',
              text: 'Sign In',
              onPress: () => {
                navigate('loginStack', {
                  screen: 'loginScreen',
                });
              },
            }}
          />
        }>
        <Box
          flex={1}
          style={[
            globalStyles.w10,
            globalStyles.px31,
            globalStyles.mtPrimaryAuth,
          ]}>
          <Box style={[globalStyles.w10]} flex={1}>
            <Box style={[]}>
              <TextComponent
                style={[
                  globalStyles.fontNeulisAlt_Bold,
                  isIos() && globalStyles.fontWeight700,
                  globalStyles.fontSize26,
                  globalStyles.textCulrMainBlack,
                  globalStyles.lineHeight37p15,
                ]}>
                Sign Up
              </TextComponent>
            </Box>

            <Box style={[globalStyles.pt0p5]}>
              <TextComponent
                style={[
                  globalStyles.fontNeulisAlt_Regular,
                  isIos() && globalStyles.fontWeight400,
                  globalStyles.fontSize14,
                  globalStyles.textCulrMainBlack,
                  globalStyles.lineHeight18p88,
                ]}>
                Please fill out appriorately to get started
              </TextComponent>
            </Box>

            <Box style={[globalStyles.pt2p4]}>
              <Controller
                control={control}
                name="email"
                rules={{
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                  pattern: {
                    value: emailPattern,
                    message: 'Enter a valid email',
                  },
                }}
                render={({field: {value, onBlur, onChange}}) => (
                  <TextInputComponent
                    title="Email Address"
                    placeholder="Email Address"
                    errorText={errors?.email?.message}
                    value={value}
                    keyboardType="email-address"
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </Box>

            <Box style={[globalStyles.pt1p6]}>
              <Controller
                control={control}
                name="password"
                rules={{
                  required: {
                    value: true,
                    message: 'Password is required',
                  },
                  pattern: {
                    value: passwordPattern,
                    message: passwordText,
                  },
                }}
                render={({field: {value, onBlur, onChange}}) => (
                  <PasswordInputComponent
                    title="Password"
                    placeholder={'Enter your password'}
                    errorText={errors?.password?.message}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </Box>

            <Box style={[globalStyles.mt2p4]}>
              <ButtonComponent
                title="Continue"
                text14
                disabled={!isValid}
                onPress={handleSubmit(onNext)}
              />
            </Box>

            <Box
              style={[
                globalStyles.w10,
                globalStyles.flexrow,
                globalStyles.justifyBetween,
                globalStyles.alignItemsCenter,
                globalStyles.gapX10,
                globalStyles.mt2p4,
              ]}>
              <Box
                style={[
                  globalStyles.borderBottom,
                  globalStyles.borderCulrLightBlack,
                  globalStyles.w2,
                ]}
              />

              <Box style={[globalStyles.w5]}>
                <TextComponent
                  style={[
                    globalStyles.fontNeulisAlt_Regular,
                    isIos() && globalStyles.fontWeight400,
                    globalStyles.fontSize14,
                    globalStyles.textCulrLightBlack,
                    globalStyles.textCenter,
                  ]}>
                  Or Signup With
                </TextComponent>
              </Box>

              <Box
                style={[
                  globalStyles.borderBottom,
                  globalStyles.borderCulrLightBlack,
                  globalStyles.w2,
                ]}
              />
            </Box>

            <Box
              style={[
                globalStyles.mb4,
                globalStyles.pt2,
                globalStyles.flexrow,
                globalStyles.alignItemsCenter,
                globalStyles.justifyCenter,
                globalStyles.gapX40,
              ]}>
              <PressableComponent
                onPress={() => null}
                style={[
                  globalStyles.w68,
                  globalStyles.h62,
                  globalStyles.border,
                  globalStyles.borderRadius25,
                  globalStyles.flexrow,
                  globalStyles.justifyCenter,
                  globalStyles.alignItemsCenter,
                ]}>
                <Google fontSize={32} />
              </PressableComponent>

              <PressableComponent
                onPress={() => null}
                style={[
                  globalStyles.w68,
                  globalStyles.h62,
                  globalStyles.border,
                  globalStyles.borderRadius25,
                  globalStyles.flexrow,
                  globalStyles.justifyCenter,
                  globalStyles.alignItemsCenter,
                  // globalStyle.px1p8,
                  // globalStyle.py1p5,
                ]}>
                <FontAwesome
                  name="apple"
                  size={32}
                  style={[globalStyles.textCulrMainBlack]}
                />
              </PressableComponent>
            </Box>
          </Box>
        </Box>
      </LayoutWithSafeAreaWithBg>
    </>
  );
};

export default EnterEmail;
