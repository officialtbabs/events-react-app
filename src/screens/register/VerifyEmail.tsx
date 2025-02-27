import React, {useState} from 'react';
import Box from '../../components/layout/Box';
import globalStyles from '../../globalStyles/globalStyles';
import HeaderComponent from '../../components/header/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  AuthNavigationProps,
  forgotPasswordRouteProp,
} from '../../constants/types/types';
import VerifyLayout from '../../components/layout/VerifyLayout';
import LayoutWithSafeAreaWithBgWithoutScroll from '../../components/layout/LayoutWithSafeAreaWithBgWithoutScroll';
import Feather from 'react-native-vector-icons/Feather';
import useAuth from '../../service/auth';
import {useAppDispatch, useAppSelector} from '../../constants/utils/hooks';
import {showToast} from '../../reducerSlices/toastSlice';
import {setAlreadyAuth} from '../../reducerSlices/authCheckSlice';
import {setAcessToken} from '../../reducerSlices/loginSlice';
import {clearRegisteringUser} from '../../reducerSlices/registeringUserSlice';

const VerifyEmailPassword = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);
  const dispatch = useAppDispatch();
  const {navigate, reset: resetNavigation} =
    useNavigation<AuthNavigationProps>();
  const {
    params: {email},
  } = useRoute<forgotPasswordRouteProp>();

  const {useVerifyEmailOtpMutation, useResendEmailOtpMutation} = useAuth();
  const {isLoadingVerifyEmailOtp, verifyEmailOtpMutation} =
    useVerifyEmailOtpMutation();
  const {isLoadingResendEmailOtp, resendEmailOtpMutation} =
    useResendEmailOtpMutation();

  const [error, setError] = useState(false);
  const [otp, setOtp] = useState('');

  const onNext = () => {
    verifyEmailOtpMutation(
      {
        email,
        code: otp,
      },
      {
        onSuccess: verifyEmailOtpRes => {
          console.log(verifyEmailOtpRes);
          dispatch(
            setAlreadyAuth({
              alreadyAuth: true,
            }),
          );

          dispatch(
            setAcessToken({
              access_token: '',
            }),
          );

          dispatch(clearRegisteringUser());

          navigate('loginStack', {
            screen: 'loginScreen',
          });

          resetNavigation({
            index: 0,
            routes: [{name: 'loginStack'}],
          });

          dispatch(
            showToast({
              status: 1,
              message: verifyEmailOtpRes.data.message,
            }),
          );
        },
        onError: (verifyEmailOtp: any) => {
          console.log({
            verifyEmailOtp,
          });

          dispatch(
            showToast({
              status: 2,
              message: verifyEmailOtp?.data?.message ?? 'An error occurred',
            }),
          );
        },
      },
    );
  };

  const onResendEmailOtp = () => {
    resendEmailOtpMutation(
      {email},
      {
        onSuccess: resendEmailOtpRes => {
          console.log(resendEmailOtpRes);
        },
        onError: (resendEmailOtp: any) => {
          console.log({
            resendEmailOtp,
          });

          dispatch(
            showToast({
              status: 2,
              message: resendEmailOtp?.data?.message ?? 'An error occurred',
            }),
          );
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
      <Box flex={1} style={[globalStyles.px31, globalStyles.pt121]}>
        <VerifyLayout
          btnText="Verify"
          error={error}
          onResendPress={onResendEmailOtp}
          onSubmit={onNext}
          otp={otp}
          setError={setError}
          setOtp={setOtp}
          isLoading={isLoadingVerifyEmailOtp || isLoadingResendEmailOtp}
          title="Verification"
          to={email ?? ''}
        />
      </Box>
    </LayoutWithSafeAreaWithBgWithoutScroll>
  );
};

export default VerifyEmailPassword;
