import React from 'react';
import ComingSoonIcon from '../../assets/svgs/illustrations/comingSoon.svg';
import Box from '../../components/layout/Box';
import TextComponent from '../../components/text/TextComponent';
import HeaderComponent from '../../components/header/Header';
import LayoutWithSafeAreaWithoutScroll from '../../components/layout/LayoutWithSafeAreaWithoutBgWithoutScroll';
import {useAppSelector} from '../../constants/utils/hooks';

const ComingSoon = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  return (
    <LayoutWithSafeAreaWithoutScroll>
      <Box flex={1} style={[globalStyles.px1p6]}>
        <HeaderComponent title="" />
        <Box
          flex={1}
          style={[globalStyles.justifyCenter, globalStyles.alignItemsCenter]}>
          <ComingSoonIcon />
          <TextComponent
            style={[
              globalStyles.fontSize22,
              globalStyles.fontGroteskSemiBold,
              globalStyles.fontWeight700,
              globalStyles.pt2p4,
            ]}>
            Coming Soon
          </TextComponent>
          <TextComponent
            secondary
            style={[globalStyles.fontWeight400, globalStyles.pt1p2]}>
            You'll be updated once the feature is live!
          </TextComponent>
        </Box>
      </Box>
    </LayoutWithSafeAreaWithoutScroll>
  );
};

export default ComingSoon;
