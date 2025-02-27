import {AnimatePresence, MotiView} from 'moti';
import React, {useCallback, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../constants/utils/hooks';
import Box from '../layout/Box';
import TextComponent from '../text/TextComponent';
import {hideToast} from '../../reducerSlices/toastSlice';
import Error from '../../assets/svgs/icons/error.svg';
import Check from '../../assets/svgs/icons/check.svg';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PressableComponent from '../pressable/PressableComponent';

const ToastComponent = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const [showModal, setShowModal] = useState(false);
  const {status, message} = useAppSelector(state => state.apiStatus);
  const dispatch = useAppDispatch();

  const closeToast = useCallback(() => {
    setShowModal(false);
    dispatch(hideToast());
  }, [dispatch]);

  useEffect(() => {
    if (message && message !== '') {
      setShowModal(true);
      setTimeout(() => {
        closeToast();
      }, 5000);
    } else {
      closeToast();
    }
    return () => clearTimeout(5000);
  }, [message, dispatch, closeToast]);

  if (message === '' || message === null) {
    return null;
  }

  return (
    <>
      {showModal && (
        <AnimatePresence>
          <MotiView
            from={{
              opacity: 0,
              scale: 0.9,
              transform: [
                {
                  translateY: -50,
                },
              ],
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transform: [
                {
                  translateY: 0,
                },
              ],
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
            }}
            style={[
              globalStyles.apiToast,
              globalStyles.px2,
              globalStyles.py2,
              globalStyles.flexrow,
              status === 1 && globalStyles.bgToastSuccess,
              status === 2 && globalStyles.bgToastError,
            ]}>
            <Box style={[globalStyles.mr0p8]}>
              {status === 1 && <Check />}
              {status === 2 && <Error />}
            </Box>
            <Box
              flex={1}
              style={[globalStyles.justifyCenter, globalStyles.pr1]}>
              <TextComponent style={[]}>{message}</TextComponent>
            </Box>
            <Box>
              <PressableComponent
                onPress={closeToast}
                style={[globalStyles.p0p4]}>
                <AntDesign
                  name="close"
                  size={16}
                  style={[
                    globalStyles.textCulrMainBlack,
                    // globalStyle.p1p2,
                    // globalStyle.bgCulrAlertVermilion,
                    // globalStyle.br,
                  ]}
                />
              </PressableComponent>
            </Box>
          </MotiView>
        </AnimatePresence>
      )}
    </>
  );
};

export default ToastComponent;
