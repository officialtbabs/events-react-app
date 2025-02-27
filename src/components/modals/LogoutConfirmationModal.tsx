import React from 'react';
import {useAppSelector, useModalManager} from '../../constants/utils/hooks';
import Box from '../layout/Box';
import TextComponent from '../text/TextComponent';
import {isIos} from '../../constants/utils/utils';
import ButtonComponent from '../button/ButtonComponent';
import useLogout from '../../service/logout';
import {CommonActions} from '@react-navigation/native';

const LogoutConfirmationModal = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const {closeModal} = useModalManager();

  const {logout} = useLogout();

  const onLogout = () => {
    closeModal();
    logout();
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: 'loginStack',
        },
      ],
    });
  };

  return (
    <>
      <Box flex={1} style={[globalStyles.justifyEnd]}>
        <Box
          style={[
            globalStyles.modalBr,
            globalStyles.pb3,
            globalStyles.py1,
            globalStyles.bgCulrAlertVermilion,
          ]}>
          <Box style={[globalStyles.w10]}>
            <Box style={[globalStyles.pt1p6]}>
              <Box
                style={[
                  // globalStyle.flexrow,
                  globalStyles.alignItemsCenter,
                  globalStyles.w10,
                ]}>
                <Box style={[]}>
                  <TextComponent
                    style={[
                      globalStyles.fontSize18,
                      globalStyles.lineHeight24p1,
                      globalStyles.fontNeulisAlt_Bold,
                      isIos() && globalStyles.fontWeight700,
                      globalStyles.textCulrMainBlack,
                    ]}>
                    Logging Out?
                  </TextComponent>
                </Box>

                <Box style={[globalStyles.pt0p5, globalStyles.w45per]}>
                  <TextComponent
                    style={[
                      globalStyles.fontSize12,
                      globalStyles.lineHeight16p27,
                      globalStyles.fontNeulisAlt_Regular,
                      isIos() && globalStyles.fontWeight400,
                      globalStyles.textCulrMainBlack,
                      globalStyles.textCenter,
                    ]}>
                    Logging out will require you to login again.
                  </TextComponent>
                </Box>
              </Box>
            </Box>

            <Box
              style={[globalStyles.pt4, globalStyles.px2p2, globalStyles.w10]}>
              <Box style={[globalStyles.flexrow, globalStyles.mt2]}>
                <Box flex={1}>
                  <ButtonComponent
                    title="Cancel"
                    text14
                    transparent
                    onPress={() => {
                      closeModal();
                    }}
                  />
                </Box>

                <Box flex={1}>
                  <ButtonComponent
                    title="Yes, Log me out"
                    text14
                    //   transparent
                    //   loading={isLoadingLogin}
                    onPress={() => onLogout()}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LogoutConfirmationModal;
