import React from 'react';
import Box from '../layout/Box';
import {useAppSelector, useModalManager} from '../../constants/utils/hooks';
import TextComponent from '../text/TextComponent';
import {isIos} from '../../constants/utils/utils';
import {Controller, useForm} from 'react-hook-form';
import PasswordInputComponent from '../textInputs/PasswordInputComponent';
import ButtonComponent from '../button/ButtonComponent';
import {
  MODAL_NAMES,
  passwordPattern,
  passwordText,
} from '../../constants/utils/constants';
import {invalid} from 'moment';

const VerifyOldPasswordModal = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const {openModal} = useModalManager();

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    // watch,
    reset,
  } = useForm({
    defaultValues: {
      oldPassword: '',
    },
  });

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
                    Verify Old Password
                  </TextComponent>
                </Box>

                <Box
                  style={[
                    globalStyles.mt2,
                    globalStyles.w10,
                    globalStyles.px2p2,
                  ]}>
                  <TextComponent
                    style={[
                      globalStyles.fontSize14,
                      globalStyles.lineHeight18p88,
                      globalStyles.fontNeulisAlt_Regular,
                      isIos() && globalStyles.fontWeight400,
                      globalStyles.textCulrMainBlack,
                    ]}>
                    Please enter a your old password to proceed.
                  </TextComponent>
                </Box>
              </Box>
            </Box>

            <Box
              style={[
                globalStyles.mt1p6,
                globalStyles.px2p2,
                globalStyles.w10,
              ]}>
              <Box style={[globalStyles.gapY5]}>
                <Box>
                  <Controller
                    control={control}
                    name="oldPassword"
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
                        title="Old Password"
                        placeholder="Old Password"
                        errorText={errors?.oldPassword?.message}
                        value={value}
                        keyboardType="default"
                        onChangeText={onChange}
                        onBlur={onBlur}
                      />
                    )}
                  />
                </Box>

                <Box>
                  <TextComponent
                    style={[
                      globalStyles.fontNeulisAlt_Bold,
                      isIos() && globalStyles.fontWeight700,
                      globalStyles.fontSize14,
                      globalStyles.lineHeight18p88,
                      globalStyles.textCulrMainBlack,
                    ]}
                    onPress={() => {
                      openModal(MODAL_NAMES.VERIFY_PHONE_MODAL);
                    }}>
                    Forgot Old Password?
                  </TextComponent>
                </Box>
              </Box>

              <Box style={[globalStyles.mt7]}>
                <ButtonComponent
                  title="Proceed"
                  text14
                  disabled={!isValid}
                  //   transparent
                  //   loading={isLoadingLogin}
                  onPress={() => {
                    openModal(MODAL_NAMES.RESET_PASSWORD_MODAL);
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default VerifyOldPasswordModal;
