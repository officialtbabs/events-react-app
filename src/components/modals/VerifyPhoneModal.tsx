import React, {useState} from 'react';
import {useAppSelector, useModalManager} from '../../constants/utils/hooks';
import Box from '../layout/Box';
import TextComponent from '../text/TextComponent';
import {isIos} from '../../constants/utils/utils';
import VerifyLayout from '../layout/VerifyLayout';

const VerifyPhoneModal = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const {phone} = useAppSelector(state => state.usrDisplayData);

  const {closeModal} = useModalManager();

  const [hasError, setHasError] = useState(false);
  const [otp, setOtp] = useState('');

  return (
    <>
      <Box flex={1} style={[globalStyles.justifyEnd]}>
        <Box
          style={[
            globalStyles.modalBr,
            globalStyles.pb3,
            globalStyles.py1,
            globalStyles.bgCulrAlertVermilion,
          ]}>
          <Box style={[globalStyles.w10]}>
            <Box style={[globalStyles.pt1p6]}>
              <Box
                style={[
                  // globalStyle.flexrow,
                  globalStyles.alignItemsCenter,
                  globalStyles.w10,
                ]}>
                <Box style={[]}>
                  <TextComponent
                    style={[
                      globalStyles.fontSize22,
                      globalStyles.lineHeight29p32,
                      globalStyles.fontNeulisAlt_Bold,
                      isIos() && globalStyles.fontWeight700,
                      globalStyles.textCulrMainBlack,
                    ]}>
                    Phone Verification
                  </TextComponent>
                </Box>
              </Box>
            </Box>

            <Box
              style={[globalStyles.pt2, globalStyles.px2p2, globalStyles.w10]}>
              <VerifyLayout
                btnText="Verify"
                error={hasError}
                onResendPress={() => {
                  // resetPin({
                  //   pin: watchPin,
                  //   pinConfirm: watchConfirmPin,
                  //   oldPin: watchOldPin,
                  // });
                }}
                onSubmit={() => closeModal()}
                otp={otp}
                setError={setHasError}
                setOtp={setOtp}
                title=""
                to={phone ?? ''}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default VerifyPhoneModal;
