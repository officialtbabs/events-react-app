import React from 'react';
import {useAppSelector, useModalManager} from '../../constants/utils/hooks';
import Box from '../layout/Box';
import TextComponent from '../text/TextComponent';
import {isIos} from '../../constants/utils/utils';
import {Controller, useForm} from 'react-hook-form';
import PhonePickerTextInputComponent from '../textInputs/PhonePickerTextInputComponent';
import {ChangePhoneDto} from '../../constants/types/types';
import {MODAL_NAMES} from '../../constants/utils/constants';
import useProfile from '../../service/profile';
import ButtonComponent from '../button/ButtonComponent';

const ChangePhoneModal = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const {phone} = useAppSelector(state => state.usrDisplayData);

  const {
    control,
    handleSubmit,
    formState: {errors: phoneModalErrors, isValid: phoneModalIsValid},
    // watch,
    reset,
  } = useForm({
    defaultValues: {
      phone: phone,
    },
  });

  const setContactValue = (value: string) => {
    reset({
      phone: value,
    });
  };

  const {openModal} = useModalManager();

  const {useChangePhoneMutation} = useProfile();
  const {changePhoneMutation, isLoadingChangePhone} = useChangePhoneMutation();

  const onRequestChangePhone = (data: ChangePhoneDto) => {
    openModal(MODAL_NAMES.VERIFY_PHONE_MODAL);
    // changePhoneMutation(
    //   {phone: `+234${data.phone}`},
    //   {
    //     onSuccess: changePhoneRes => {
    //       console.log(changePhoneRes);
    //       setShowEmailModal(false);
    //       setShowVerifyEmailModal(true);
    //     },
    //     onError: (changePhoneErr: any) => {
    //       console.log({
    //         changePhoneErr,
    //       });

    //       dispatch(
    //         showToast({
    //           status: 2,
    //           message: changePhoneErr?.data?.message ?? 'An error occurred',
    //         }),
    //       );
    //       // reset();
    //     },
    //   },
    // );
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
                    Phone Number
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
                    Please, type in your new phone number. We’ll send a code to
                    the phone number to confirm you own it
                  </TextComponent>
                </Box>
              </Box>
            </Box>

            <Box
              style={[
                globalStyles.mt1p2,
                globalStyles.px2p2,
                globalStyles.w10,
              ]}>
              <Box>
                <Controller
                  control={control}
                  name="phone"
                  rules={{
                    required: {
                      value: true,
                      message: 'Phone number is required',
                    },
                    //   pattern: {
                    //     value: emailPattern,
                    //     message: 'Enter a valid email',
                    //   },
                  }}
                  render={({field: {value, onBlur, onChange}}) => (
                    <PhonePickerTextInputComponent
                      editable={!isLoadingChangePhone}
                      title="Enter Phone"
                      keyboardType="number-pad"
                      placeholder="Enter Phone"
                      errorText={phoneModalErrors?.phone?.message}
                      onChangeText={onChange}
                      setValue={setContactValue}
                      value={value}
                      showContacts
                      onBlur={onBlur}
                    />
                  )}
                />
              </Box>

              <Box style={[globalStyles.mt7]}>
                <ButtonComponent
                  title="Save"
                  text14
                  loading={isLoadingChangePhone}
                  disabled={!phoneModalIsValid}
                  onPress={handleSubmit(onRequestChangePhone)}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ChangePhoneModal;
