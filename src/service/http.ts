import axios from 'axios';
import {BASE_URL, GOOGLE_PLACE_API_BASE_URL} from './config';
import {useHandleUnAuthenticatedError} from './serviceUtils';

import {showToast} from '../reducerSlices/toastSlice';
import {setLoginStatus} from '../reducerSlices/loginSlice';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../store/store';
import {useAppSelector} from '../constants/utils/hooks';
import {useMemo} from 'react';
import {GOOGLE_PLACE_API_SECRET} from '../secrets';

export const useHttp = () => {
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();
  const {access_token} = useAppSelector(state => state.isLoggedIn);
  const {handleUnAuthenticatedError} = useHandleUnAuthenticatedError();
  const headers = useMemo(
    () => ({
      'Content-Type': 'application/json',
    }),
    [],
  );

  const googlePlaceHeaders = useMemo(
    () => ({
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': GOOGLE_PLACE_API_SECRET,
      'X-Goog-FieldMask':
        'places.displayName,places.formattedAddress,places.location',
    }),
    [],
  );

  const http = axios.create({
    baseURL: BASE_URL,
    headers,
  });

  const googleMapHttp = axios.create({
    baseURL: GOOGLE_PLACE_API_BASE_URL,
    headers: googlePlaceHeaders,
  });

  const axiosInstances = [http, googleMapHttp];

  http.interceptors.request.use(params => {
    if (access_token) {
      params.headers.Authorization = `Bearer ${access_token}`;
    }
    return params;
  });

  // googleMapHttp.interceptors.request.use(params => {
  //   console.log(params);
  // });

  axiosInstances.forEach(instance => {
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
    );
  });

  return {
    http,
    googleMapHttp,
  };
};
