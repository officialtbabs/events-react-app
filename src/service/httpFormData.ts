// import CookieManager from '@react-native-cookies/cookies';
import axios from 'axios';
import {BASE_URL, CLOUDINARY_API_BASE_URL} from './config';
import {useHandleUnAuthenticatedError} from './serviceUtils';

import {showToast} from '../reducerSlices/toastSlice';
import {setLoginStatus} from '../reducerSlices/loginSlice';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../store/store';
import {useAppSelector} from '../constants/utils/hooks';
import {useMemo} from 'react';

export const useHttpFormData = () => {
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();
  const {access_token} = useAppSelector(state => state.isLoggedIn);
  const {handleUnAuthenticatedError} = useHandleUnAuthenticatedError();
  // console.log(isFormData ? 'multipart/form-data' : 'application/json');
  const headers = useMemo(
    () => ({
      'Content-Type': 'multipart/form-data',
    }),
    [],
  );

  const http = axios.create({
    baseURL: BASE_URL,
    headers,
  });

  const cloudinaryHttp = axios.create({
    baseURL: CLOUDINARY_API_BASE_URL,
    headers,
  });

  const axiosInstances = [http, cloudinaryHttp];

  http.interceptors.request.use(params => {
    if (access_token) {
      params.headers.Authorization = `Bearer ${access_token}`;
    }
    return params;
  });

  axiosInstances.forEach(instance =>
    instance.interceptors.response.use(
      async response => {
        return response;
      },
      error => {
        handleUnAuthenticatedError(error, () => {
          dispatch(
            showToast({
              message: 'Session expired!, logged out',
              status: 2,
            }),
          );
          dispatch(
            setLoginStatus({
              loggedIn: false,
            }),
          );
        });
        return Promise.reject(error?.response ?? error);
      },
    ),
  );

  return {
    http,
    cloudinaryHttp,
  };
};
