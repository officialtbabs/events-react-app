import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {BrandCreationRequestDto} from '../../constants/types/types';

interface BrandCreationState extends BrandCreationRequestDto {}

const initialState: BrandCreationState = {
  name: '',
  type: null,
  description: '',
  email: '',
  address: '',
  latitude: 0,
  longitude: 0,
  logoUrl: '',
};

export const brandCreationSlice = createSlice({
  name: 'brandCreation',
  initialState,
  reducers: {
    updateBrandCreationState: (
      state,
      {payload}: PayloadAction<Partial<BrandCreationState>>,
    ) => ({...state, ...payload}),

    resetBrandCreationState: () => ({...initialState}),
  },
});

export const {updateBrandCreationState, resetBrandCreationState} =
  brandCreationSlice.actions;
export default brandCreationSlice.reducer;
