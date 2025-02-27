import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ImageData {
  imageUrl: string | null;
  progress: number | 'Failed';
}

interface UploadState {
  imageData: {[key: string]: ImageData} | null;
}

const initialState: UploadState = {
  imageData: {},
};

const imageUploadSlice = createSlice({
  name: 'imageUpload',
  initialState,
  reducers: {
    updateImageProgress: (
      state,
      action: PayloadAction<{
        imageName: string | undefined;
        progress: number | 'Failed';
      }>,
    ) => {
      const {imageName, progress} = action.payload;
      if (!state.imageData) {
        state.imageData = {};
      }

      if (imageName) {
        if (!state.imageData[imageName]) {
          state.imageData[imageName] = {imageUrl: null, progress: 0};
        }
        state.imageData[imageName].progress = progress;
      }
    },

    setImageUrl: (
      state,
      action: PayloadAction<{imageName: string | undefined; imageUrl: string}>,
    ) => {
      const {imageName, imageUrl} = action.payload;

      if (!state.imageData) {
        state.imageData = {};
      }

      if (imageName) {
        if (!state.imageData[imageName]) {
          state.imageData[imageName] = {imageUrl: null, progress: 0};
        }
        state.imageData[imageName].imageUrl = imageUrl;
      }
    },

    deleteImageData: (state, action: PayloadAction<{imageName: string}>) => {
      if (state.imageData && action.payload.imageName in state.imageData) {
        delete state.imageData[action.payload.imageName];
      }
    },

    resetUploadState: state => {
      state.imageData = null;
    },
  },
});

export const {
  updateImageProgress,
  setImageUrl,
  deleteImageData,
  resetUploadState,
} = imageUploadSlice.actions;
export default imageUploadSlice.reducer;
