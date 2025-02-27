import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineSlices, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import toastSlice from '../reducerSlices/toastSlice';
import authCheckSlice from '../reducerSlices/authCheckSlice';
import onboardSlice from '../reducerSlices/userOnboarded';
import themeSlice from '../reducerSlices/themeSlice';
import loginSlice from '../reducerSlices/loginSlice';
import showBalance from '../reducerSlices/showBalance';
import loginBioSlice from '../reducerSlices/loginBioSlice';
import loginNotifSlice from '../reducerSlices/loginNotifSlice';
import deviceHasBioSlice from '../reducerSlices/deviceHasBioSlice';
import userDisplayData from '../reducerSlices/userDisplayData';
import loggedInUserSlice from '../reducerSlices/loggedInUserSlice';
import registeringUserSlice from '../reducerSlices/registeringUserSlice';
import flagPreferenceSlice from '../reducerSlices/flagPreferenceSlice';
import modalSlice from '../reducerSlices/modalSlice';
import statusBarSlice from '../reducerSlices/statusBarSlice';
import globalStylesSlice from '../reducerSlices/globalStylesSlice';
import eventCreationSlice from '../reducerSlices/events/eventCreationSlice';
import imageCropPickerSlice from '../reducerSlices/imageCropPickerSlice';
import imageUploadSlice from '../reducerSlices/imageUploadSlice';
import brandCreationSlice from '../reducerSlices/brands/brandCreationSlice';
import brandsSlice from '../reducerSlices/brands/brandsSlice';
import eventsSlice from '../reducerSlices/events/eventsSlice';

const mainPersistConfig = {
  key: 'mainPersist',
  storage: AsyncStorage,
  blacklist: ['modal', 'imageUpload'],
};

const reducers = combineSlices({
  apiStatus: toastSlice,
  authChecker: authCheckSlice,
  userOnboarded: onboardSlice,
  darkMode: themeSlice,
  flagList: flagPreferenceSlice,
  isLoggedIn: loginSlice,
  showBalance: showBalance,
  loginBio: loginBioSlice,
  loginNotification: loginNotifSlice,
  deviceHasBio: deviceHasBioSlice,
  usrDisplayData: userDisplayData,
  loggedInUser: loggedInUserSlice,
  registeringUser: registeringUserSlice,
  modal: modalSlice,
  statusBar: statusBarSlice,
  globalStyles: globalStylesSlice,
  imageCropPicker: imageCropPickerSlice,
  imageUpload: imageUploadSlice,

  // Events
  eventCreation: eventCreationSlice,
  events: eventsSlice,

  // Brands
  brandCreation: brandCreationSlice,
  brands: brandsSlice,
});

const persistedReducer = persistReducer(mainPersistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: defaultMiddleWare =>
    defaultMiddleWare({
      serializableCheck: false,
    }).concat(),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
