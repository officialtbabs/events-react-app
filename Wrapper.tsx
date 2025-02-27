import React, {useEffect} from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Box from './src/components/layout/Box';
import {
  useAppDispatch,
  useAppSelector,
  useStatusBarHeight,
} from './src/constants/utils/hooks';
import theme from './src/constants/theme/theme';
// import {setDeviceHasBio} from './src/reducerSlices/deviceHasBioSlice';
// import ReactNativeBiometrics from 'react-native-biometrics';
import MainNavigation from './src/navigation/mainNavigation/MainNavigation';
import ToastComponent from './src/components/toast/ToastComponent';
import BootSplash from 'react-native-bootsplash';
// import {StripeProvider} from '@stripe/stripe-react-native';
// import {STRIPE_SECRET_KEY} from './src/secrets';
import {setGlobalStyle} from './src/reducerSlices/globalStylesSlice';
import {MagicModalPortal} from 'react-native-magic-modal';

const links = {
  prefixes: ['myculrapp://'],
};
const Wrapper = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);
  const {darkMode} = useAppSelector(state => state.darkMode);
  const dispatch = useAppDispatch();
  // const checkDeviceHasBiometric = useCallback(async () => {
  //   const rnBiometrics = new ReactNativeBiometrics();
  //   const {available} = await rnBiometrics.isSensorAvailable();

  //   if (available) {
  //     dispatch(
  //       setDeviceHasBio({
  //         deviceHasBio: true,
  //       }),
  //     );
  //   }
  // }, [dispatch]);

  // useEffect(() => {
  //   // !isIos() && getContactAuthorizationAndroid();
  //   checkDeviceHasBiometric();
  // }, [checkDeviceHasBiometric]);

  const {statusBarHeight, setStatusBarHeight} = useStatusBarHeight();

  useEffect(() => {
    setStatusBarHeight();
  }, [setStatusBarHeight]);

  useEffect(() => {
    statusBarHeight && dispatch(setGlobalStyle(statusBarHeight));
  }, [dispatch, statusBarHeight]);

  return (
    <>
      <ThemeProvider theme={darkMode ? theme.darkTheme : theme.lightTheme}>
        <GestureHandlerRootView style={[globalStyles.flexOne]}>
          <Box style={[globalStyles.flexOne]}>
            <NavigationContainer
              onReady={() => {
                setTimeout(() => {
                  BootSplash.hide({fade: true});
                }, 1000);
              }}
              linking={links}>
              <ToastComponent />
              <MainNavigation />
              <MagicModalPortal />
            </NavigationContainer>
          </Box>
        </GestureHandlerRootView>
      </ThemeProvider>
    </>
  );
};

export default Wrapper;
