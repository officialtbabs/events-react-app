import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserResponseData, UserTypeEnum} from '../constants/types/types';

interface displayState extends UserResponseData {}

const initialState: displayState = {
  id: '',
  uuid: '',
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  emailVerified: false,
  countryCode: '',
  callingCode: '',
  phone: '',
  referralCode: null,
  phoneVerified: false,
  isActive: false,
  dob: '',
  password: '',
  note: '',
  type: UserTypeEnum.USER,
  createdAt: null,
  updatedAt: null,
  lastLoggedInAt: null,
  isDeleted: false,
  deletedAt: null,
};

export const userDisplaySlice = createSlice({
  name: 'displayData',
  initialState,
  reducers: {
    setUserDisplayData: (
      state,
      {payload}: PayloadAction<Partial<displayState>>,
    ) => {
      return {
        ...state,
        ...payload,
      };
    },
    clearUserDisplayData() {
      return {
        ...initialState,
      };
    },
  },
});

export const setUserDisplayData = userDisplaySlice?.actions?.setUserDisplayData;
export const clearUserDisplayData =
  userDisplaySlice?.actions?.clearUserDisplayData;
export default userDisplaySlice?.reducer;
