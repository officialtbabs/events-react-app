import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useAppSelector, useModalManager} from '../../constants/utils/hooks';
import Box from '../layout/Box';
import TextComponent from '../text/TextComponent';
import {isIos} from '../../constants/utils/utils';
import {emailPattern, MODAL_NAMES} from '../../constants/utils/constants';
import TextInputComponent from '../textInputs/TextInputComponent';
import useProfile from '../../service/profile';
import {ChangeEmailDto} from '../../constants/types/types';
import ButtonComponent from '../button/ButtonComponent';

const ChangeEmailModal = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const {email} = useAppSelector(state => state.usrDisplayData);

  const {openModal} = useModalManager();

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    watch,
    reset,
    getValues,
  } = useForm({
    defaultValues: {
      email: email,
    },
  });

  const {useChangeEmailMutation} = useProfile();
  const {changeEmailMutation, isLoadingChangeEmail} = useChangeEmailMutation();

  const onRequestChangeEmail = (data: ChangeEmailDto) => {
    // closeModal();

    openModal(MODAL_NAMES.VERIFY_PHONE_MODAL);
    // changeEmailMutation(data, {
    //   onSuccess: changeEmailRes => {
    //     console.log(changeEmailRes);
    //     setShowEmailModal(false);
    //   },
    //   onError: (changeEmailErr: any) => {
    //     // console.log({
    //     //   loginErr,
    //     // });

    //     dispatch(
    //       showToast({
    //         status: 2,
    //         message: changeEmailErr?.data?.message ?? 'An error occurred',
    //       }),
    //     );
    //     // reset();
    //   },
    // });
  };

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
              <Box style={[globalStyles.alignItemsCenter, globalStyles.w10]}>
                <Box style={[]}>
                  <TextComponent
                    style={[
                      globalStyles.fontSize22,
                      globalStyles.lineHeight29p32,
                      globalStyles.fontNeulisAlt_Bold,
                      isIos() && globalStyles.fontWeight700,
                      globalStyles.textCulrMainBlack,
                    ]}>
                    Email Address
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
                    The email address on your account.
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
              <Box>
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
                      editable={!isLoadingChangeEmail}
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

              <Box style={[globalStyles.mt7]}>
                <ButtonComponent
                  title="Change"
                  text14
                  loading={isLoadingChangeEmail}
                  disabled={!isValid}
                  //   transparent
                  //   loading={isLoadingLogin}
                  onPress={handleSubmit(onRequestChangeEmail)}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ChangeEmailModal;
