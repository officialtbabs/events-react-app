import React from 'react';
import Box from '../layout/Box';
import {useAppSelector, useModalManager} from '../../constants/utils/hooks';
import TextComponent from '../text/TextComponent';
import {isIos} from '../../constants/utils/utils';
import {Controller, useForm} from 'react-hook-form';
import PasswordInputComponent from '../textInputs/PasswordInputComponent';
import ButtonComponent from '../button/ButtonComponent';
import {passwordPattern, passwordText} from '../../constants/utils/constants';

const ResetPasswordModal = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const {closeModal} = useModalManager();

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    // watch,
    reset,
  } = useForm({
    defaultValues: {
      password: '',
      confirmPassword: '',
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
                    Reset Password
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
                      globalStyles.lineHeight29p32,
                      globalStyles.fontNeulisAlt_Regular,
                      isIos() && globalStyles.fontWeight400,
                      globalStyles.textCulrMainBlack,
                    ]}>
                    Please enter a new password and confirm your new password to
                    proceed
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
              <Box style={[globalStyles.gapY20]}>
                <Box>
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
                        placeholder="Password"
                        errorText={errors?.password?.message}
                        value={value}
                        keyboardType="default"
                        onChangeText={onChange}
                        onBlur={onBlur}
                      />
                    )}
                  />
                </Box>

                <Box>
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
                    }}
                    render={({field: {value, onBlur, onChange}}) => (
                      <PasswordInputComponent
                        title="Confirm Password"
                        placeholder="Confirm Password"
                        errorText={errors?.confirmPassword?.message}
                        value={value}
                        keyboardType="default"
                        onChangeText={onChange}
                        onBlur={onBlur}
                      />
                    )}
                  />
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
                    closeModal();
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

export default ResetPasswordModal;
