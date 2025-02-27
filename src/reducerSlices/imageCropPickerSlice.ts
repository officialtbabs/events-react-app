import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ImageOrVideo} from 'react-native-image-crop-picker';

interface ImageCropPickerState {
  singleImageFile: ImageOrVideo | null;
  multipleImageFiles: ImageOrVideo[] | null;
}

const initialState: ImageCropPickerState = {
  singleImageFile: null,
  multipleImageFiles: null,
};

const imageCropPickerSlice = createSlice({
  name: 'imageCropPicker',
  initialState,
  reducers: {
    setSingleImageFile: (
      state,
      {payload}: PayloadAction<Pick<ImageCropPickerState, 'singleImageFile'>>,
    ) => {
      state.singleImageFile = payload.singleImageFile;
    },

    clearSingleImageFile: state => {
      state.singleImageFile = null;
    },

    setMultipleImageFiles: (
      state,
      {
        payload,
      }: PayloadAction<Pick<ImageCropPickerState, 'multipleImageFiles'>>,
    ) => {
      state.multipleImageFiles = payload.multipleImageFiles;
    },

    clearMultipleImageFiles: state => {
      state.multipleImageFiles = null;
    },
  },
});

export const {
  setSingleImageFile,
  clearSingleImageFile,
  setMultipleImageFiles,
  clearMultipleImageFiles,
} = imageCropPickerSlice.actions;

export default imageCropPickerSlice.reducer;
