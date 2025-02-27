import React from 'react';
import Box from '../layout/Box';
import TextComponent from '../text/TextComponent';
import PressableComponent from '../pressable/PressableComponent';
import {isIos} from '../../constants/utils/utils';
import {useAppSelector, useModalManager} from '../../constants/utils/hooks';
import {MODAL_NAMES} from '../../constants/utils/constants';

const SwitchProfileCard = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);
  const {openModal} = useModalManager();

  const {firstName, lastName} = useAppSelector(state => state.usrDisplayData);

  return (
    <>
      <Box
        style={[
          globalStyles.flexrow,
          globalStyles.alignItemsCenter,
          globalStyles.gapX10,
        ]}>
        <Box
          style={[
            globalStyles.p0p2,
            globalStyles.br,
            globalStyles.bgCulrAlertVermilion,
          ]}>
          <Box
            style={[
              globalStyles.w81,
              globalStyles.h81,
              globalStyles.br,
              globalStyles.bgCulrBtnDisabledBg,
            ]}
          />
        </Box>

        <Box style={[globalStyles.gapY5]}>
          <TextComponent
            style={[
              globalStyles.fontNeulisAlt_Regular,
              isIos() && globalStyles.fontWeight400,
              globalStyles.fontSize12,
              globalStyles.textCulrMainBlack,
              globalStyles.lineHeight16p27,
            ]}>
            {firstName} {lastName}
          </TextComponent>

          <PressableComponent
            onPress={() => openModal(MODAL_NAMES.SWITCH_ACCOUNT_PROFILE_MODAL)}>
            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Bold,
                isIos() && globalStyles.fontWeight700,
                globalStyles.fontSize14,
                globalStyles.textCulrMainVermilion,
                globalStyles.lineHeight18p88,
              ]}>
              Switch Account
            </TextComponent>
          </PressableComponent>
        </Box>
      </Box>
    </>
  );
};

export default SwitchProfileCard;
