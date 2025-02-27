import React, {useEffect, useMemo} from 'react';
import Box from '../../components/layout/Box';
import TextComponent from '../../components/text/TextComponent';
import TextInputComponent from '../../components/textInputs/TextInputComponent';
import ButtonComponent from '../../components/button/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import {
  AuthNavigationProps,
  RegisterNavigationProps,
  RegisterRequestDto,
  UserGenderEnum,
} from '../../constants/types/types';
import useAuth from '../../service/auth';
import Loader from '../../components/loader/Loader';
import {Controller, useForm} from 'react-hook-form';
import {useAppDispatch, useAppSelector} from '../../constants/utils/hooks';
import {showToast} from '../../reducerSlices/toastSlice';
import {setAcessToken} from '../../reducerSlices/loginSlice';
import HeaderComponent from '../../components/header/Header';
import Feather from 'react-native-vector-icons/Feather';
import LayoutWithSafeAreaWithBg from '../../components/layout/LayoutWithSafeAreaWithBg';
import PhonePickerTextInputComponent from '../../components/textInputs/PhonePickerTextInputComponent';
import DateTime from '../../components/dateTime/DateTime';
import {isIos, validateDOB} from '../../constants/utils/utils';
import {setRegisteringUser} from '../../reducerSlices/registeringUserSlice';
import {usernamePattern, usernameText} from '../../constants/utils/constants';

export type KYCFormFields = Omit<RegisterRequestDto, 'email' | 'password'>;

const EnterKyc = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const dispatch = useAppDispatch();
  const {navigate: registerNavigate} = useNavigation<RegisterNavigationProps>();
  const {navigate: authNavigate} = useNavigation<AuthNavigationProps>();

  const {useRegisterUserMutation} = useAuth();
  const {isLoadingRegister, registerMutation} = useRegisterUserMutation();

  const {email, password} = useAppSelector(state => state.registeringUser);
  const {currentCountry} = useAppSelector(state => state.flagList);

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    setValue,
    reset,
    watch,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      username: '',
      phone: '',
      gender: UserGenderEnum.MALE,
      referralCode: '',
      countryCode: currentCountry.code,
      callingCode: currentCountry.dial_code,
      dob: new Date(),
    },
  });

  const now = useMemo(() => new Date(), []);

  const setContactValue = (value: string) => {
    setValue('phone', value);
  };

  const onRegister = (data: KYCFormFields) => {
    const {
      firstName,
      lastName,
      username,
      phone,
      dob,
      referralCode,
      countryCode,
      callingCode,
    } = data;

    registerMutation(
      {
        firstName,
        lastName,
        username,
        email,
        countryCode,
        callingCode,
        password,
        dob,
        phone,
        // referralCode,
      },
      {
        onSuccess: registerRes => {
          console.log({
            registerRes,
          });

          dispatch(
            setAcessToken({
              access_token: registerRes?.data?.data?.accessToken ?? '',
              // refresh_token: loginRes?.data?.data?.token ?? '',
            }),
          );

          dispatch(
            setRegisteringUser({
              firstName,
              lastName,
              username,
              dob,
              phone,
              countryCode,
              callingCode,
            }),
          );

          reset();

          registerNavigate('verifyEmail', {
            email,
          });
        },
        onError: (loginErr: any) => {
          console.log({
            loginErr,
          });

          dispatch(
            showToast({
              status: 2,
              message: loginErr?.data?.message ?? 'An error occurred',
            }),
          );
          // reset();
        },
      },
    );
  };

  useEffect(() => {
    console.log(errors);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors.firstName, errors.dob]);

  return (
    <>
      {isLoadingRegister ? (
        <Loader />
      ) : (
        <LayoutWithSafeAreaWithBg
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
              rightIcon={{
                type: 'text',
                text: 'Sign In',
                onPress: () => {
                  authNavigate('loginStack', {
                    screen: 'loginScreen',
                  });
                },
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
            <Box style={[globalStyles.w10]} flex={1}>
              <Box style={[]}>
                <TextComponent
                  style={[
                    globalStyles.fontNeulisAlt_Bold,
                    isIos() && globalStyles.fontWeight700,
                    globalStyles.fontSize26,
                    globalStyles.textCulrMainBlack,
                    globalStyles.lineHeight37p15,
                  ]}>
                  Let’s Know About You
                </TextComponent>
              </Box>

              <Box style={[globalStyles.pt0p5]}>
                <TextComponent
                  style={[
                    globalStyles.fontNeulisAlt_Regular,
                    isIos() && globalStyles.fontWeight400,
                    globalStyles.fontSize14,
                    globalStyles.textCulrMainBlack,
                    globalStyles.lineHeight18p88,
                  ]}>
                  Please give a little information about you
                </TextComponent>
              </Box>

              <Box style={[globalStyles.pt2p4]}>
                <Controller
                  control={control}
                  name="firstName"
                  rules={{
                    required: {
                      value: true,
                      message: 'First Name is required',
                    },
                  }}
                  render={({field: {value, onBlur, onChange}}) => (
                    <TextInputComponent
                      editable={!isLoadingRegister}
                      title="First Name"
                      placeholder="First Name"
                      errorText={errors?.firstName?.message}
                      value={value}
                      keyboardType="default"
                      onChangeText={onChange}
                      onBlur={onBlur}
                    />
                  )}
                />
              </Box>

              <Box style={[globalStyles.pt2]}>
                <Controller
                  control={control}
                  name="lastName"
                  rules={{
                    required: {
                      value: true,
                      message: 'Last Name is required',
                    },
                  }}
                  render={({field: {value, onBlur, onChange}}) => (
                    <TextInputComponent
                      editable={!isLoadingRegister}
                      title="Last Name"
                      placeholder="Last Name"
                      errorText={errors?.lastName?.message}
                      value={value}
                      keyboardType="default"
                      onChangeText={onChange}
                      onBlur={onBlur}
                    />
                  )}
                />
              </Box>

              <Box style={[globalStyles.pt2]}>
                <Controller
                  control={control}
                  name="username"
                  rules={{
                    required: {
                      value: true,
                      message: 'Username is required',
                    },
                    pattern: {
                      value: usernamePattern,
                      message: usernameText,
                    },
                  }}
                  render={({field: {value, onBlur, onChange}}) => (
                    <TextInputComponent
                      editable={!isLoadingRegister}
                      title="Username"
                      placeholder="Username"
                      errorText={errors?.username?.message}
                      value={value}
                      keyboardType="default"
                      onChangeText={onChange}
                      onBlur={onBlur}
                    />
                  )}
                />
              </Box>

              <Box style={[globalStyles.pt2]}>
                <Controller
                  control={control}
                  name="phone"
                  rules={{
                    required: {
                      value: true,
                      message: 'Phone number is required',
                    },
                    minLength: {
                      value: 10,
                      message: 'Phone number must be at least 10 digits',
                    },
                  }}
                  render={({field: {value, onBlur, onChange}}) => (
                    <PhonePickerTextInputComponent
                      editable={!isLoadingRegister}
                      title="Phone Number"
                      keyboardType="number-pad"
                      placeholder="Phone Number"
                      errorText={errors?.phone?.message}
                      onChangeText={onChange}
                      setValue={setContactValue}
                      maxLength={10}
                      value={value}
                      showContacts
                      onBlur={onBlur}
                    />
                  )}
                />
              </Box>

              <Box style={[globalStyles.pt2p4]}>
                <Controller
                  control={control}
                  name="dob"
                  rules={{
                    required: {
                      value: true,
                      message: 'Date of Birth (DOB) is required',
                    },
                    validate: value => validateDOB(String(value)),
                  }}
                  render={({field: {value, onChange}}) => (
                    <DateTime
                      date={value}
                      onChange={onChange}
                      maximumDate={now}
                      initial={value.toString() !== now.toString()}
                      title="Date of Birth (DD / MM)"
                      mode="date"
                      errorText={errors?.dob?.message}
                    />
                  )}
                />
              </Box>

              <Box style={[globalStyles.pt2p4]}>
                <Controller
                  control={control}
                  name="referralCode"
                  render={({field: {value, onBlur, onChange}}) => (
                    <TextInputComponent
                      title="Referral Code"
                      placeholder="Referral Code"
                      errorText={errors?.referralCode?.message}
                      value={value}
                      keyboardType="default"
                      onChangeText={onChange}
                      onBlur={onBlur}
                    />
                  )}
                />
              </Box>

              <Box style={[globalStyles.mt2p4, globalStyles.mb6]}>
                <ButtonComponent
                  title="Continue"
                  text14
                  loading={isLoadingRegister}
                  disabled={!isValid}
                  onPress={handleSubmit(onRegister)}
                />
              </Box>
            </Box>
          </Box>
        </LayoutWithSafeAreaWithBg>
      )}
    </>
  );
};

export default EnterKyc;
