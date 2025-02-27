import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RegisterRequestDto} from '../constants/types/types';

interface RegisteringUserState extends RegisterRequestDto {}

const initialState: RegisteringUserState = {
  email: '',
  firstName: '',
  lastName: '',
  username: '',
  password: '',
  countryCode: '',
  callingCode: '',
  gender: null,
  dob: new Date(),
  phone: '',
};

const registeringUserSlice = createSlice({
  name: 'registeringUser',
  initialState,
  reducers: {
    setRegisteringUser(
      state,
      {payload}: PayloadAction<Partial<RegisteringUserState>>,
    ) {
      return {
        ...state,
        ...payload,
      };
    },
    clearRegisteringUser() {
      return {
        ...initialState,
      };
    },
  },
});

export const setRegisteringUser =
  registeringUserSlice?.actions?.setRegisteringUser;
export const clearRegisteringUser =
  registeringUserSlice?.actions?.clearRegisteringUser;
export default registeringUserSlice?.reducer;
