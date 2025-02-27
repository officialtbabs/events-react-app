import {useHttp} from './http';
import {useMutation} from '@tanstack/react-query';
import {defaultPayload} from './serviceUtils';
import {AxiosResponse} from 'axios';
import {
  ForgotPasswordRequestDto,
  ForgotPasswordResponse,
  LoginRequestDto,
  LoginResponse,
  RegisterRequestDto,
  RegisterResponse,
  ResendEmailOtpRequestDto,
  ResetPasswordRequestDto,
  ResetPasswordResponse,
  VerifyEmailOtpRequestDto,
  VerifyEmailOtpResponse,
} from '../constants/types/types';

const useAuth = () => {
  const {http} = useHttp();

  const useLoginMutation = () => {
    const mutationFn = async (
      payload: LoginRequestDto,
    ): Promise<AxiosResponse<LoginResponse>> => {
      return await http.post<
        LoginResponse,
        AxiosResponse<LoginResponse>,
        LoginRequestDto
      >('auth/login', {
        ...defaultPayload,
        ...payload,
      });
    };

    const {mutate: loginMutation, isPending: isLoadingLogin} = useMutation({
      mutationFn,
    });

    return {loginMutation, isLoadingLogin};
  };

  const useRegisterUserMutation = () => {
    const mutationFn = async (
      payload: RegisterRequestDto,
    ): Promise<AxiosResponse<RegisterResponse>> => {
      return await http.post<
        RegisterResponse,
        AxiosResponse<RegisterResponse>,
        RegisterRequestDto
      >('auth/register', {
        ...defaultPayload,
        ...payload,
        // profileType: 'USER',
      });
    };

    const {mutate: registerMutation, isPending: isLoadingRegister} =
      useMutation({mutationFn});

    return {registerMutation, isLoadingRegister};
  };

  const useSendPhoneOtpMutation = () => {
    const mutationFn = async (payload: {email: string; phone: string}) => {
      const otpPayload = {
        ...defaultPayload,
        ...payload,
      };

      return await http.post<any>('auth/phone-otp', otpPayload);
    };

    const {mutate: sendOtpMutation, isPending: isLoadingSendOtp} = useMutation({
      mutationFn,
    });

    return {sendOtpMutation, isLoadingSendOtp};
  };

  const useVerifyEmailOtpMutation = () => {
    const mutationFn = async (
      payload: VerifyEmailOtpRequestDto,
    ): Promise<AxiosResponse<VerifyEmailOtpResponse>> => {
      return await http.post<
        VerifyEmailOtpResponse,
        AxiosResponse<VerifyEmailOtpResponse>,
        VerifyEmailOtpRequestDto
      >('auth/verify-otp', {
        ...defaultPayload,
        ...payload,
      });
    };

    const {mutate: verifyEmailOtpMutation, isPending: isLoadingVerifyEmailOtp} =
      useMutation({mutationFn});

    return {verifyEmailOtpMutation, isLoadingVerifyEmailOtp};
  };

  const useResendEmailOtpMutation = () => {
    const mutationFn = async (payload: ResendEmailOtpRequestDto) => {
      return await http.get<any>(`resend-otp/${payload.email}`, {
        ...defaultPayload,
      });
    };

    const {mutate: resendEmailOtpMutation, isPending: isLoadingResendEmailOtp} =
      useMutation({mutationFn});

    return {resendEmailOtpMutation, isLoadingResendEmailOtp};
  };

  const useVerifyPhoneOtpMutation = () => {
    const mutationFn = async (payload: {otp: string; phone: string}) => {
      return await http.post<any>('auth/verify-phone-otp', {
        ...defaultPayload,
        ...payload,
      });
    };

    const {mutate: verifyOtpMutation, isPending: isLoadingVerifyOtp} =
      useMutation({mutationFn});

    return {verifyOtpMutation, isLoadingVerifyOtp};
  };

  const useForgotPasswordMutation = () => {
    const mutationFn = async (payload: ForgotPasswordRequestDto) => {
      return await http.post<
        ForgotPasswordResponse,
        AxiosResponse<ForgotPasswordResponse>,
        ForgotPasswordRequestDto
      >('auth/forgot-password', {
        ...defaultPayload,
        ...payload,
      });
    };

    const {mutate: forgotPasswordMutation, isPending: isLoadingForgotPassword} =
      useMutation({mutationFn});

    return {forgotPasswordMutation, isLoadingForgotPassword};
  };

  const useResetPassMutation = () => {
    const mutationFn = async (payload: ResetPasswordRequestDto) => {
      return await http.post<
        ResetPasswordResponse,
        AxiosResponse<ResetPasswordResponse>,
        ResetPasswordRequestDto
      >('auth/reset-password', {
        ...defaultPayload,
        ...payload,
      });
    };

    const {mutate: resetPassMutation, isPending: isLoadingReset} = useMutation({
      mutationFn,
    });

    return {resetPassMutation, isLoadingReset};
  };

  const useSetTransPinMutation = () => {
    const mutationFn = async (payload: {pin: string; confirmPin: string}) => {
      return await http.post<any>('profile/pin', {
        ...defaultPayload,
        ...payload,
      });
    };

    const {mutate: setPinMutation, isLoading: isLoadingSetPin} =
      useMutation(mutationFn);

    return {setPinMutation, isLoadingSetPin};
  };

  return {
    useLoginMutation,
    useVerifyEmailOtpMutation,
    useVerifyPhoneOtpMutation,
    useSendPhoneOtpMutation,
    useResendEmailOtpMutation,
    useRegisterUserMutation,
    useForgotPasswordMutation,
    useResetPassMutation,
    useSetTransPinMutation,
  };
};

export default useAuth;
