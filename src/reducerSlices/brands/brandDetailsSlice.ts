import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {BrandDetailsResponseData} from '../../constants/types/types';

interface BrandDetailsState extends BrandDetailsResponseData {}

const initialState: BrandDetailsState = {
  id: '',
  brandId: '',
  name: '',
  type: null,
  description: '',
  email: '',
  address: '',
  latitude: 0,
  longitude: 0,
  logoUrl: '',
  interests: null,
  ownerId: '',
  slug: '',
  teamMembers: null,
  createdAt: null,
  updatedAt: null,
};

const brandDetailsSlice = createSlice({
  name: 'brandDetails',
  initialState,
  reducers: {
    updateBrandDetails: (
      state,
      {payload}: PayloadAction<BrandDetailsState>,
    ) => ({...state, ...payload}),

    resetBrandDetails: () => ({...initialState}),
  },
});

export const {updateBrandDetails, resetBrandDetails} =
  brandDetailsSlice.actions;
export default brandDetailsSlice.reducer;
