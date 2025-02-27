import React from 'react';
import Box from '../layout/Box';
import {useAppSelector, useModalManager} from '../../constants/utils/hooks';
import TextComponent from '../text/TextComponent';
import {isIos} from '../../constants/utils/utils';
import {Controller, useForm} from 'react-hook-form';
import TextInputComponent from '../textInputs/TextInputComponent';
import ButtonComponent from '../button/ButtonComponent';

const ChangeBankDetailsModal = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const {closeModal} = useModalManager();

  const {
    control,
    handleSubmit,
    formState: {errors},
    // watch,
    reset,
  } = useForm({
    defaultValues: {
      accountName: '',
      accountNumber: '',
      bankName: '',
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
                    Account Details
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
                globalStyles.mt1p6,
                globalStyles.px2p2,
                globalStyles.w10,
              ]}>
              <Box style={[globalStyles.gapY20]}>
                <Box>
                  <Controller
                    control={control}
                    name="accountName"
                    rules={{
                      required: {
                        value: true,
                        message: 'Account Name is required',
                      },
                    }}
                    render={({field: {value, onBlur, onChange}}) => (
                      <TextInputComponent
                        title="Account name"
                        placeholder="Account name"
                        errorText={errors?.accountName?.message}
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
                    name="bankName"
                    rules={{
                      required: {
                        value: true,
                        message: 'Bank Name is required',
                      },
                    }}
                    render={({field: {value, onBlur, onChange}}) => (
                      <TextInputComponent
                        title="Enter your bank"
                        placeholder="Enter your bank"
                        errorText={errors?.bankName?.message}
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
                    name="accountNumber"
                    rules={{
                      required: {
                        value: true,
                        message: 'Account Number is required',
                      },
                    }}
                    render={({field: {value, onBlur, onChange}}) => (
                      <TextInputComponent
                        title="Account number"
                        placeholder="Account number"
                        errorText={errors?.accountNumber?.message}
                        value={value}
                        keyboardType="number-pad"
                        onChangeText={onChange}
                        onBlur={onBlur}
                      />
                    )}
                  />
                </Box>
              </Box>

              <Box style={[globalStyles.mt7]}>
                <ButtonComponent
                  title="Save"
                  text14
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

export default ChangeBankDetailsModal;
