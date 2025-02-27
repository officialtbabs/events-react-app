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
  LoginRequestDto,
} from '../../constants/types/types';
import useAuth from '../../service/auth';
import Loader from '../../components/loader/Loader';
import {Controller, useForm} from 'react-hook-form';
import {
  emailPattern,
  passwordPattern,
  passwordText,
} from '../../constants/utils/constants';
import {useAppDispatch, useAppSelector} from '../../constants/utils/hooks';
import {showToast} from '../../reducerSlices/toastSlice';
import {setAcessToken, setLoginStatus} from '../../reducerSlices/loginSlice';
import {setUserDisplayData} from '../../reducerSlices/userDisplayData';
import {setAlreadyAuth} from '../../reducerSlices/authCheckSlice';
import HeaderComponent from '../../components/header/Header';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Google from '../../assets/svgs/logos/google_32.svg';
import {Dimensions} from 'react-native';
import {isIos} from '../../constants/utils/utils';
import LayoutWithSafeAreaWithBg from '../../components/layout/LayoutWithSafeAreaWithBg';

export const {height, width} = Dimensions.get('window');

const LoginScreen = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<AuthNavigationProps>();

  const {useLoginMutation} = useAuth();
  const {isLoadingLogin, loginMutation} = useLoginMutation();

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    watch,
    reset,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const emailValue = watch('email');
  if (!emailValue) {
  }
  const logUserIn = (data: LoginRequestDto) => {
    loginMutation(data, {
      onSuccess: loginRes => {
        console.log(loginRes);
        dispatch(
          setAlreadyAuth({
            alreadyAuth: true,
          }),
        );

        dispatch(
          setLoginStatus({
            loggedIn: true,
          }),
        );

        dispatch(
          setAcessToken({
            access_token: loginRes?.data?.data?.accessToken ?? '',
            // refresh_token: loginRes?.data?.data?.token ?? '',
          }),
        );

        dispatch(
          setUserDisplayData({
            ...loginRes.data.data,
          }),
        );

        reset();
      },
      onError: (loginErr: any) => {
        // console.log({
        //   loginErr,
        // });

        dispatch(
          showToast({
            status: 2,
            message: loginErr?.data?.message ?? 'An error occurred',
          }),
        );
        // reset();
      },
    });
  };

  return (
    <>
      {isLoadingLogin ? (
        <Loader />
      ) : (
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
                text: 'Sign Up',
                onPress: () => {
                  navigate('registerStack', {
                    screen: 'signUpOptions',
                  });
                },
              }}
            />
          }>
          <Box style={[globalStyles.px31, globalStyles.mtPrimaryAuth]}>
            <Box>
              <Box>
                <TextComponent
                  style={[
                    globalStyles.fontNeulisAlt_Bold,
                    isIos() && globalStyles.fontWeight700,
                    globalStyles.fontSize26,
                    globalStyles.textCulrMainBlack,
                    globalStyles.lineHeight37p15,
                  ]}>
                  Welcome Back
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
                  Please login into your account
                </TextComponent>
              </Box>

              <Box style={[globalStyles.pt2p4]}>
                <Controller
                  control={control}
                  name="email"
                  rules={{
                    required: {value: true, message: 'Email is required'},
                    pattern: {
                      value: emailPattern,
                      message: 'Enter a valid email',
                    },
                  }}
                  render={({field: {value, onBlur, onChange}}) => (
                    <TextInputComponent
                      editable={!isLoadingLogin}
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
                    required: {value: true, message: 'Password is required'},
                    pattern: {value: passwordPattern, message: passwordText},
                  }}
                  render={({field: {value, onBlur, onChange}}) => (
                    <PasswordInputComponent
                      editable={!isLoadingLogin}
                      title="Password"
                      placeholder="Enter your password"
                      errorText={errors?.password?.message}
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                    />
                  )}
                />
              </Box>

              <Box style={[globalStyles.pt0p5, globalStyles.flexrow]}>
                <PressableComponent
                  onPress={() =>
                    navigate('forgotPassword', {screen: 'inputEmail'})
                  }>
                  <TextComponent
                    orange
                    style={[
                      globalStyles.fontNeulisAlt_Regular,
                      isIos() && globalStyles.fontWeight400,
                      globalStyles.fontSize14,
                      globalStyles.textCulrMainBlack,
                      globalStyles.lineHeight18p88,
                    ]}>
                    Forgot Password?
                  </TextComponent>
                </PressableComponent>
              </Box>

              <Box style={[globalStyles.mt2p4]}>
                <ButtonComponent
                  title="Sign In"
                  text14
                  loading={isLoadingLogin}
                  disabled={!isValid}
                  onPress={handleSubmit(logUserIn)}
                />
              </Box>

              <Box
                style={[
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
                    globalStyles.w2p5,
                  ]}
                />
                <Box style={[globalStyles.w3p8]}>
                  <TextComponent
                    style={[
                      globalStyles.fontNeulisAlt_Regular,
                      isIos() && globalStyles.fontWeight400,
                      globalStyles.fontSize14,
                      globalStyles.textCulrLightBlack,
                      globalStyles.textCenter,
                      globalStyles.lineHeight18p88,
                    ]}>
                    Or Login With
                  </TextComponent>
                </Box>
                <Box
                  style={[
                    globalStyles.borderBottom,
                    globalStyles.borderCulrLightBlack,
                    globalStyles.w2p5,
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
                  onPress={() => {}}
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
                  onPress={() => {}}
                  style={[
                    globalStyles.w68,
                    globalStyles.h62,
                    globalStyles.border,
                    globalStyles.borderRadius25,
                    globalStyles.flexrow,
                    globalStyles.justifyCenter,
                    globalStyles.alignItemsCenter,
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
      )}
    </>
  );
};

export default LoginScreen;
