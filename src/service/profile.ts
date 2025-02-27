import {useAppDispatch} from '../constants/utils/hooks';
import {setUserDisplayData} from '../reducerSlices/userDisplayData';
import {useHttp} from './http';
import {useMutation} from '@tanstack/react-query';
import {defaultPayload} from './serviceUtils';
import {useHttpFormData} from './httpFormData';
import {ChangeEmailDto, UserResponse} from '../constants/types/types';
import {AxiosResponse} from 'axios';
const useProfile = () => {
  const {http} = useHttp();
  const {http: httpFormData} = useHttpFormData();
  const dispatch = useAppDispatch();

  const useGetProfileMutation = () => {
    const mutationFn = async (): Promise<AxiosResponse<UserResponse>> => {
      return await http.get<UserResponse, AxiosResponse<UserResponse>>(
        'auth/me',
      );
    };

    const {mutate: getProfileMutation, isPending: isLoadingGetProfile} =
      useMutation({
        mutationFn,
        onSuccess: userProfileRes => {
          console.log(userProfileRes);
          // dispatch(
          //   setUserDisplayData({
          //     ...userProfileRes.data.data?.user,
          //   }),
          // );
        },
      });
    return {getProfileMutation, isLoadingGetProfile};
  };

  const useVerifyNameMutation = () => {
    const mutateFn = async ({phoneNumber}: {phoneNumber: string}) => {
      return await http.get<any>(`/profile/phoneId/${phoneNumber}`, {});
    };
    const {mutate: verifyNameMutation, isPending: isLoadingVerifyName} =
      useMutation({mutateFn});
    return {verifyNameMutation, isLoadingVerifyName};
  };
  const useGetTransactionSummary = () => {
    const mutateFn = async (payload: {}) => {
      return await http.get<any>(`/profile/transaction/dash`, payload);
    };
    const {mutate: transSummaryMutation, isLoading: isLoadingTransSummary} =
      useMutation(mutateFn);
    return {transSummaryMutation, isLoadingTransSummary};
  };
  const useGetProfileByPidMutation = () => {
    const mutateFn = async ({pid}: {pid: string}) => {
      return await http.get<any>(`/profile/${pid}`, {});
    };
    const {mutate: getProfileBgPidMutation, isLoading: isLoadingGetPidProfile} =
      useMutation(mutateFn);
    return {getProfileBgPidMutation, isLoadingGetPidProfile};
  };
  const useGetAllMerchantsMutation = () => {
    const mutateFn = async (payload: {}) => {
      return await http.get<any>(`/profile/merchant/all`, payload);
    };
    const {
      mutate: getAllMerchantsMutation,
      isLoading: isLoadingGetAllMerchants,
    } = useMutation(mutateFn);
    return {getAllMerchantsMutation, isLoadingGetAllMerchants};
  };
  const useGetProfileRelatedTransMutation = () => {
    const mutateFn = async ({pid}: {pid: number}) => {
      return await http.get<any>(`profile/related-transactions/${pid}`, {});
    };
    const {mutate: getRelateedTransMutation, isLoading: isLoadingRelatedTrans} =
      useMutation(mutateFn);
    return {getRelateedTransMutation, isLoadingRelatedTrans};
  };
  const useGetAllCharitiesMutation = () => {
    const mutateFn = async (payload: {}) => {
      return await http.get<any>(`profile/charity/all`, payload);
    };
    const {
      mutate: getAllCharitiesMutation,
      isLoading: isLoadingGetAllCharities,
    } = useMutation(mutateFn);
    return {getAllCharitiesMutation, isLoadingGetAllCharities};
  };

  const useUpdateKycMutation = () => {
    const mutationFn = async (payload: {
      country: string;
      // documentType: string;
      // documentLinks: string[];
      documentVerified: boolean;
      // selfieLink: string;
      selfieVerified: boolean;
    }) => {
      return await http.put<any>('profile/user/kyc/verify', {
        ...defaultPayload,
        ...payload,
      });
    };

    const {mutate: updateKycMutation, isLoading: isLoadingKyc} =
      useMutation(mutationFn);

    return {updateKycMutation, isLoadingKyc};
  };
  const useUpdateKycMerchantMutation = () => {
    const mutationFn = async (payload: {
      country: string;
      // documentType: string;
      // documentLinks: string[];
      documentVerified: boolean;
      // selfieLink: string;
      selfieVerified: boolean;
    }) => {
      return await httpFormData.put<any>('profile/merchant/kyc/verify', {
        ...defaultPayload,
        ...payload,
      });
    };

    const {mutate: updateKycMutation, isLoading: isLoadingKyc} =
      useMutation(mutationFn);

    return {updateKycMutation, isLoadingKyc};
  };
  const useChangePasswordMutation = () => {
    const mutationFn = async (payload: {
      oldPassword: string;
      newPassword: string;
      confirmNewPassword: string;
    }) => {
      return await http.post<any>('profile/password/change', {
        ...defaultPayload,
        ...payload,
      });
    };

    const {
      mutate: changePasswordMutation,
      isLoading: isLoadingChangePassword,
      isSuccess,
    } = useMutation(mutationFn);

    return {changePasswordMutation, isLoadingChangePassword, isSuccess};
  };

  const useChangePinMutation = () => {
    const mutationFn = async (payload: {
      oldPin: string;
      newPin: string;
      confirmNewPin: string;
    }) => {
      return await http.post<any>('profile/pin/change', {
        ...defaultPayload,
        ...payload,
      });
    };

    const {
      mutate: changePinMutation,
      isLoading: isLoadingChangePin,
      isSuccess,
    } = useMutation(mutationFn);

    return {changePinMutation, isLoadingChangePin, isSuccess};
  };
  const useFinishChangePinMutation = () => {
    const mutationFn = async (payload: {
      oldPin: string;
      newPin: string;
      confirmNewPin: string;
      otp: string;
    }) => {
      return await http.put<any>(`profile/pin/change/${payload.otp}`, {
        ...defaultPayload,
        ...payload,
      });
    };

    const {
      mutate: finishPinMutation,
      isLoading: isLoadingFinishPin,
      isSuccess: finishSuccess,
    } = useMutation(mutationFn);

    return {finishPinMutation, isLoadingFinishPin, finishSuccess};
  };

  const useChangeEmailMutation = () => {
    const mutationFn = async (payload: ChangeEmailDto) => {
      return await http.post<any, AxiosResponse<any>, ChangeEmailDto>(
        'profile/email/update',
        {
          ...defaultPayload,
          ...payload,
        },
      );
    };

    const {
      mutate: changeEmailMutation,
      isPending: isLoadingChangeEmail,
      isSuccess,
    } = useMutation({mutationFn});

    return {changeEmailMutation, isLoadingChangeEmail, isSuccess};
  };

  const useFinishChangeEmailMutation = () => {
    const mutationFn = async (payload: {email: string; otp: string}) => {
      return await http.put<any>(`profile/email/change/${payload.otp}`, {
        ...defaultPayload,
        ...payload,
      });
    };

    const {
      mutate: finishEmailMutation,
      isLoading: isLoadingFinishEmail,
      isSuccess: finishSuccess,
    } = useMutation(mutationFn);

    return {finishEmailMutation, isLoadingFinishEmail, finishSuccess};
  };

  const useChangePhoneMutation = () => {
    const mutationFn = async (payload: {phone: string}) => {
      return await http.post<any>('profile/phone', {
        ...defaultPayload,
        ...payload,
      });
    };

    const {
      mutate: changePhoneMutation,
      isPending: isLoadingChangePhone,
      isSuccess,
    } = useMutation({mutationFn});

    return {changePhoneMutation, isLoadingChangePhone, isSuccess};
  };

  const useFinishChangePhoneMutation = () => {
    const mutationFn = async (payload: {phone: string; otp: string}) => {
      return await http.put<any>(`profile/phone/change/${payload.otp}`, {
        ...defaultPayload,
        ...payload,
      });
    };

    const {
      mutate: finishPhoneMutation,
      isLoading: isLoadingFinishPhone,
      isSuccess: finishSuccess,
    } = useMutation(mutationFn);

    return {finishPhoneMutation, isLoadingFinishPhone, finishSuccess};
  };
  const useFileUploadMutation = () => {
    const mutationFn = async (payload: FormData) => {
      return await httpFormData.post<any>('file/upload', payload);
    };

    const {mutateAsync: uploadFileMutation, isLoading: isLoadingUplaodFile} =
      useMutation(mutationFn);

    return {uploadFileMutation, isLoadingUplaodFile};
  };
  const useInitUserKyc = () => {
    const mutationFn = async (payload: FormData) => {
      return await httpFormData.post<any>('profile/user/kyc', payload);
    };

    const {
      mutateAsync: uploadInitUserKycMutation,
      isLoading: isLoadingInitUserKyc,
    } = useMutation(mutationFn);

    return {uploadInitUserKycMutation, isLoadingInitUserKyc};
  };
  const useInitMerchantKyc = () => {
    const mutationFn = async (payload: FormData) => {
      return await httpFormData.post<any>('profile/merchant/kyc', payload);
    };

    const {
      mutateAsync: uploadInitUserKycMutation,
      isLoading: isLoadingInitUserKyc,
    } = useMutation(mutationFn);

    return {uploadInitUserKycMutation, isLoadingInitUserKyc};
  };
  const useVerifyUserKyc = () => {
    const mutationFn = async (payload: FormData) => {
      return await httpFormData.post<any>('profile/user/kyc/verify', payload);
    };

    const {
      mutateAsync: uploadVerifyUserKycMutation,
      isLoading: isLoadingVerifyUserKyc,
    } = useMutation(mutationFn);

    return {uploadVerifyUserKycMutation, isLoadingVerifyUserKyc};
  };

  return {
    useInitUserKyc,
    useVerifyUserKyc,
    useGetProfileMutation,
    useUpdateKycMutation,
    useFileUploadMutation,
    useVerifyNameMutation,
    useGetAllCharitiesMutation,
    useGetAllMerchantsMutation,
    useGetProfileByPidMutation,
    useGetProfileRelatedTransMutation,
    useChangePasswordMutation,
    useChangePinMutation,
    useFinishChangePinMutation,
    useChangeEmailMutation,
    useFinishChangeEmailMutation,
    useChangePhoneMutation,
    useFinishChangePhoneMutation,
    useGetTransactionSummary,
    useInitMerchantKyc,
    useUpdateKycMerchantMutation,
  };
};

export default useProfile;
