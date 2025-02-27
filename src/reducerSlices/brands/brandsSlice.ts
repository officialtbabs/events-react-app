import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {BrandDetailsResponseData} from '../../constants/types/types';

interface BrandsState {
  brands: BrandDetailsResponseData[] | null;
}

const initialState: BrandsState = {
  brands: null,
};

export const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
    setBrands: (state, {payload}: PayloadAction<BrandsState>) => {
      state.brands = payload.brands;
    },

    updateBrands: (state, {payload}: PayloadAction<BrandsState>) => {
      if (state.brands && payload.brands) {
        state.brands = [...state.brands, ...payload.brands];
      }
    },

    resetBrands: () => ({...initialState}),
  },
});

export const {setBrands, updateBrands, resetBrands} = brandsSlice.actions;
export default brandsSlice.reducer;
