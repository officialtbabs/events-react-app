import React, {useState} from 'react';
import Box from '../../components/layout/Box';
import HeaderComponent from '../../components/header/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  ForgotNavigationProps,
  forgotPasswordRouteProp,
} from '../../constants/types/types';
import VerifyLayout from '../../components/layout/VerifyLayout';
import LayoutWithSafeAreaWithBgWithoutScroll from '../../components/layout/LayoutWithSafeAreaWithBgWithoutScroll';
import Feather from 'react-native-vector-icons/Feather';
import {useAppSelector} from '../../constants/utils/hooks';

const VerifyEmailPassword = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const {
    params: {email},
  } = useRoute<forgotPasswordRouteProp>();
  // console.log({
  //   email,
  // });

  const [error, setError] = useState(false);
  const [otp, setOtp] = useState('');
  const {navigate} = useNavigation<ForgotNavigationProps>();

  const onNext = () => {
    navigate('resetPassword', {
      email,
      code: otp,
    });
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
                  globalStyles.p1p2,
                  globalStyles.bgCulrAlertVermilion,
                  globalStyles.br,
                ]}>
                <Feather
                  name="chevron-left"
                  size={24}
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
        <VerifyLayout
          btnText="Continue"
          error={error}
          onResendPress={() => {
            // resetPin({
            //   pin: watchPin,
            //   pinConfirm: watchConfirmPin,
            //   oldPin: watchOldPin,
            // });
          }}
          onSubmit={onNext}
          otp={otp}
          setError={setError}
          setOtp={setOtp}
          title="Verification"
          to={email ?? ''}
        />
      </Box>
    </LayoutWithSafeAreaWithBgWithoutScroll>
  );
};

export default VerifyEmailPassword;
