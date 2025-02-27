import React from 'react';
import Box from '../../components/layout/Box';
import HeaderComponent from '../../components/header/Header';
import ButtonComponent from '../../components/button/ButtonComponent';
import TextComponent from '../../components/text/TextComponent';
import PasswordInputComponent from '../../components/textInputs/PasswordInputComponent';
import {
  AuthNavigationProps,
  forgotPasswordRouteProp,
  ResetPasswordRequestDto,
} from '../../constants/types/types';
import {useNavigation, useRoute} from '@react-navigation/native';
import useAuth from '../../service/auth';
import Loader from '../../components/loader/Loader';
import {Controller, useForm} from 'react-hook-form';
import {passwordPattern, passwordText} from '../../constants/utils/constants';
import {showToast} from '../../reducerSlices/toastSlice';
import {useAppDispatch, useAppSelector} from '../../constants/utils/hooks';
import LayoutWithSafeAreaWithBgWithoutScroll from '../../components/layout/LayoutWithSafeAreaWithBgWithoutScroll';
import Feather from 'react-native-vector-icons/Feather';
import {isIos} from '../../constants/utils/utils';

const ResetPassword = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const {
    params: {email, code},
  } = useRoute<forgotPasswordRouteProp>();
  // if (email) {
  // }
  const dispatch = useAppDispatch();
  const {navigate, reset: resetNavigation} =
    useNavigation<AuthNavigationProps>();
  const {useResetPassMutation} = useAuth();
  const {resetPassMutation, isLoadingReset} = useResetPassMutation();
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    watch,
    reset,
  } = useForm({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const watchPassword = watch('password');

  const onResetPassword = (data: ResetPasswordRequestDto) => {
    resetPassMutation(
      {
        email,
        code,
        password: data.password,
      },
      {
        onSuccess: resetRes => {
          console.log({
            resetRes,
          });

          resetNavigation({
            index: 0,
            routes: [{name: 'loginStack'}],
          });
          // navigate('loginStack', {
          //   screen: 'loginScreen',
          // });

          dispatch(
            showToast({
              status: 1,
              message: resetRes.data.message ?? 'Password successfully changed',
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
    <>
      {isLoadingReset ? (
        <Loader />
      ) : (
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
            <Box flex={1} style={[globalStyles.justifyBetween]}>
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
                    New Password
                  </TextComponent>
                </Box>

                <Box style={[globalStyles.pt0p5]}>
                  <TextComponent
                    secondary
                    style={[
                      globalStyles.fontNeulisAlt_Regular,
                      globalStyles.fontSize14,
                      isIos() && globalStyles.fontWeight400,
                      globalStyles.textCulrMainBlack,
                      globalStyles.lineHeight18p88,
                    ]}>
                    Please enter your new preferred password
                  </TextComponent>
                </Box>

                <Box style={[globalStyles.pt2p4]}>
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
                        editable={!isLoadingReset}
                        title="New password"
                        placeholder={'Enter new password'}
                        errorText={errors?.password?.message}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                      />
                    )}
                  />
                </Box>

                <Box style={[globalStyles.pt2p4]}>
                  <Controller
                    control={control}
                    name="confirmPassword"
                    rules={{
                      required: {
                        value: true,
                        message: 'Confirm Password is required',
                      },
                      pattern: {
                        value: passwordPattern,
                        message: passwordText,
                      },
                      validate: value =>
                        value === watchPassword || 'The passwords do not match',
                      minLength: {
                        value: 8,
                        message: 'Password should be at least 8 characters',
                      },
                    }}
                    render={({field: {value, onBlur, onChange}}) => (
                      <PasswordInputComponent
                        editable={!isLoadingReset}
                        value={value}
                        title="Confirm Password"
                        placeholder={'Confirm new password'}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        errorText={errors?.confirmPassword?.message}
                      />
                    )}
                  />
                </Box>
              </Box>

              <Box style={[globalStyles.pb6]}>
                <ButtonComponent
                  title="Set Password"
                  text14
                  loading={isLoadingReset}
                  disabled={!isValid}
                  onPress={handleSubmit(onResetPassword)}
                />
              </Box>
            </Box>
          </Box>
        </LayoutWithSafeAreaWithBgWithoutScroll>
      )}
    </>
  );
};

export default ResetPassword;
