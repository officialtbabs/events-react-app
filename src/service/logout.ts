import {useAppDispatch} from '../constants/utils/hooks';
import {setAcessToken, setLoginStatus} from '../reducerSlices/loginSlice';
import {clearUserDisplayData} from '../reducerSlices/userDisplayData';

const useLogout = () => {
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(clearUserDisplayData());
    dispatch(
      setLoginStatus({
        loggedIn: false,
      }),
    );
    dispatch(
      setAcessToken({
        access_token: '',
        refresh_token: '',
      }),
    );
  };

  return {
    logout,
  };
};

export default useLogout;
