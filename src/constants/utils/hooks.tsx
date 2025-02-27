import React, {useEffect, useState} from 'react';
import {AppDispatch, RootState} from '../../store/store';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
// import useWallet from '../../service/wallet';
import {appName, MODAL_NAMES} from './constants';
import {
  registerModal,
  setActiveModal,
  setModalAnimating,
} from '../../reducerSlices/modalSlice';
import {isIos} from './utils';
import {StatusBar} from 'react-native';
import {
  setAndroidStatusBarHeight,
  setIosStatusBarHeight,
} from '../../reducerSlices/statusBarSlice';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {magicModal, ModalProps, useMagicModal} from 'react-native-magic-modal';
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useDebouncedValue = (value: string, delay: number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay, value]);

  return debouncedValue;
};

export const useModalManager = () => {
  const dispatch = useDispatch();

  const {hide} = useMagicModal();
  const {activeModal, isModalAnimating, modalRegistry} = useAppSelector(
    (state: RootState) => state.modal,
  );

  const registerModalHandler = (
    name: MODAL_NAMES,
    Component: () => JSX.Element,
  ) => {
    dispatch(registerModal({name, component: Component}));
  };

  const openModal = async (name: MODAL_NAMES, props?: Partial<ModalProps>) => {
    if (isModalAnimating) {
      return;
    }

    const ModalComponent = modalRegistry[name];
    if (!ModalComponent) {
      throw new Error(`Modal "${name}" is not registered.`);
    }

    dispatch(setModalAnimating(true));

    if (activeModal) {
      hide();
      setTimeout(() => {
        dispatch(setActiveModal(name));
        dispatch(setModalAnimating(false));
      }, 500);
    } else {
      dispatch(setActiveModal(name));
      dispatch(setModalAnimating(false));
    }

    const modalResult = await magicModal.show(
      () => React.cloneElement(ModalComponent(), props),
      props,
    ).promise;

    return modalResult;
  };

  const closeModal = () => {
    if (isModalAnimating) {
      return;
    }

    dispatch(setModalAnimating(true));
    dispatch(setActiveModal(null));
    magicModal.hideAll();
    setTimeout(() => dispatch(setModalAnimating(false)), 500); // Wait for animation to complete
  };

  return {
    registerModal: registerModalHandler,
    openModal,
    closeModal,
    activeModal,
  };
};

export const useStatusBarHeight = () => {
  const dispatch = useAppDispatch();
  const safeAreaInsets = useSafeAreaInsets();

  const iosStatusBarHeight = useAppSelector(
    (state: RootState) => state.statusBar.iosStatusBarHeight,
  );

  const androidStatusBarHeight = StatusBar.currentHeight;

  const statusBarHeight = isIos() ? iosStatusBarHeight : androidStatusBarHeight;

  const setStatusBarHeight = () => {
    isIos()
      ? dispatch(setIosStatusBarHeight(safeAreaInsets.top))
      : dispatch(setAndroidStatusBarHeight(StatusBar.currentHeight || 0));
  };

  return {
    statusBarHeight,
    setStatusBarHeight,
  };
};

// export const useGetAllBalances = () => {
//   const {useGetWallet} = useWallet();
//   const {getWalletMutation, isLoadingGetWallet} = useGetWallet();

//   const getAllBalances = useCallback(() => {
//     getWalletMutation({});
//   }, [getWalletMutation]);

//   return {
//     getAllBalances,
//     isLoadingGetWallet,
//   };
// };

// export const useGetCountry = () => {
//   const userDisplay = useAppSelector(state => state.usrDisplayData);
//   // console.log({userDisplay});
//   return {
//     isNigerian: userDisplay.defaultCurrency === 'NGN',
//     isUk: userDisplay.defaultCurrency === 'GBP',
//   };
// };

// export const useConvertText = () => {
//   const {isNigerian} = useGetCountry();
//   const convertText = `1 ${appName()} Point = ${isNigerian ? '₦5' : '1p'}`;
//   return {
//     convertText,
//   };
// };
