import React from 'react';
import Box from '../../components/layout/Box';
import HeaderComponent from '../../components/header/Header';
import ButtonComponent from '../../components/button/ButtonComponent';
import TextInputComponent from '../../components/textInputs/TextInputComponent';
import TextComponent from '../../components/text/TextComponent';
import {useNavigation} from '@react-navigation/native';
import {
  ForgotNavigationProps,
  ForgotPasswordRequestDto,
} from '../../constants/types/types';
import useAuth from '../../service/auth';
import {Controller, useForm} from 'react-hook-form';
import {emailPattern} from '../../constants/utils/constants';
import {showToast} from '../../reducerSlices/toastSlice';
import {useAppDispatch, useAppSelector} from '../../constants/utils/hooks';
import LayoutWithSafeAreaWithBgWithoutScroll from '../../components/layout/LayoutWithSafeAreaWithBgWithoutScroll';
import Feather from 'react-native-vector-icons/Feather';
import {isIos} from '../../constants/utils/utils';

const InputEmail = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);
  const {useForgotPasswordMutation} = useAuth();
  const {forgotPasswordMutation, isLoadingForgotPassword} =
    useForgotPasswordMutation();
  const {navigate} = useNavigation<ForgotNavigationProps>();
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    reset,
  } = useForm({
    defaultValues: {
      email: '',
    },
  });

  const onRequestOtp = (data: ForgotPasswordRequestDto) => {
    forgotPasswordMutation(
      {
        email: data.email,
      },
      {
        onSuccess: forgotPassRes => {
          console.log(forgotPassRes);

          navigate('verifyEmailPassword', {
            email: data.email,
          });

          dispatch(
            showToast({
              status: 1,
              message: forgotPassRes.data.message,
            }),
          );
        },
        onError: (resetErr: any) => {
          console.log(resetErr);
          dispatch(
            showToast({
              status: 2,
              message: resetErr?.data?.message ?? 'An error occurred',
            }),
          );
          reset();
        },
      },
    );
  };

  return (
    <LayoutWithSafeAreaWithBgWithoutScroll
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
        />
      }>
      <Box
        flex={1}
        style={[
          globalStyles.w10,
          globalStyles.px31,
          globalStyles.mtPrimaryAuth,
        ]}>
        <Box flex={1} style={[globalStyles.w10, globalStyles.justifyBetween]}>
          <Box>
            <Box style={[]}>
              <TextComponent
                style={[
                  globalStyles.fontNeulisAlt_Bold,
                  globalStyles.fontSize26,
                  isIos() && globalStyles.fontWeight700,
                  globalStyles.textCulrMainBlack,
                  globalStyles.lineHeight37p15,
                ]}>
                Forgot Password
              </TextComponent>
            </Box>

            <Box style={[globalStyles.pt0p5]}>
              <TextComponent
                style={[
                  globalStyles.fontNeulisAlt_Regular,
                  globalStyles.fontSize14,
                  isIos() && globalStyles.fontWeight400,
                  globalStyles.textCulrMainBlack,
                  globalStyles.lineHeight18p88,
                ]}>
                Please enter your email address to proceed
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
                    editable={!isLoadingForgotPassword}
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
          </Box>

          <Box style={[globalStyles.pb6]}>
            <ButtonComponent
              loading={isLoadingForgotPassword}
              disabled={!isValid}
              title="Continue"
              text14
              onPress={handleSubmit(onRequestOtp)}
            />
          </Box>
        </Box>
      </Box>
    </LayoutWithSafeAreaWithBgWithoutScroll>
  );
};

export default InputEmail;
