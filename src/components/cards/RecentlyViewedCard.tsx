import React from 'react';
import Box from '../layout/Box';
import TextComponent from '../text/TextComponent';
import CalenderIcon from '../../assets/svgs/icons/calender-outlined.svg';
import {isIos} from '../../constants/utils/utils';
import {useAppSelector} from '../../constants/utils/hooks';

const RecentlyViewedCard = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  return (
    <Box flex={1}>
      <Box
        style={[
          globalStyles.h287,
          globalStyles.bgCulrMainVermilionOpacity5,
          globalStyles.borderRadius20,
        ]}></Box>

      <Box style={[globalStyles.mt2]}>
        <TextComponent
          style={[
            globalStyles.fontNeulisAlt_Bold,
            isIos() && globalStyles.fontWeight700,
            globalStyles.fontSize17,
            globalStyles.lineHeight24p1,
            globalStyles.textCulrMainBlack,
          ]}>
          Lagos Oriental Hotel
        </TextComponent>

        <Box
          style={[
            globalStyles.flexrow,
            globalStyles.alignItemsCenter,
            globalStyles.gapX10,
            globalStyles.mt0p8,
            globalStyles.borderBottom,
            globalStyles.borderCulrHoverBlack,
            globalStyles.pb0p8,
          ]}>
          <CalenderIcon />

          <Box
            style={[
              globalStyles.borderRight,
              globalStyles.borderCulrHoverBlack,
              globalStyles.pr0p8,
            ]}>
            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Regular,
                isIos() && globalStyles.fontWeight400,
                globalStyles.fontSize11,
                globalStyles.lineHeight16p27,
                globalStyles.textCulrMainBlack,
              ]}>
              Lekki Phase 1
            </TextComponent>
          </Box>

          <TextComponent
            style={[
              globalStyles.fontNeulisAlt_Regular,
              isIos() && globalStyles.fontWeight400,
              globalStyles.fontSize11,
              globalStyles.lineHeight16p27,
              globalStyles.textCulrMainBlack,
            ]}>
            24hrs
          </TextComponent>
        </Box>

        <Box style={[globalStyles.pt0p8]}>
          <TextComponent
            style={[
              globalStyles.fontNeulisAlt_Bold,
              isIos() && globalStyles.fontWeight700,
              globalStyles.fontSize13,
              globalStyles.textCulrMainBlack,
            ]}>
            ₦10,000/Night
          </TextComponent>
        </Box>
      </Box>
    </Box>
  );
};

export default RecentlyViewedCard;
