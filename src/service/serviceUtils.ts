import axios, {AxiosError} from 'axios';
import useLogout from './logout';
import {useAppDispatch} from '../constants/utils/hooks';
import {showToast} from '../reducerSlices/toastSlice';

export const useHandleUnAuthenticatedError = () => {
  const {logout} = useLogout();
  const dispatch = useAppDispatch();
  const handleUnAuthenticatedError = (
    error: AxiosError,
    onExpectedError: () => void,
  ) => {
    if (error === null) {
      throw new Error('Unrecoverable error!! occured, Try again');
    }
    if (axios.isAxiosError(error)) {
      const response = error?.response;

      if (error.code === 'ERR_NETWORK') {
        dispatch(
          showToast({
            message: error.message,
            status: 2,
          }),
        );
        // console.error('connection problems..');
      } else if (error.code === 'ERR_CANCELED') {
        // console.error('connection canceled..');
      }
      if (response) {
        const resData = response?.data as any;

        if (
          resData?.message === 'Un-authenticated!' ||
          resData?.statusCode === '401'
        ) {
          onExpectedError();
          logout();
          dispatch(
            showToast({
              message: 'Session expired, Logged out!',
              status: 2,
            }),
          );
        }
      }
    }
  };

  return {
    handleUnAuthenticatedError,
  };
};

export const defaultPayload = {
  // datasource: 'MOBILE',
  // dataappsysverion: 'V19',
};
