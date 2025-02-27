import React, {FC} from 'react';
import Box from '../layout/Box';
import {Spinner, spinnerStyle} from './Spinner';
import LayoutWithSafeAreaWithoutBgWithoutScroll from '../layout/LayoutWithSafeAreaWithoutBgWithoutScroll';
import {useAppSelector} from '../../constants/utils/hooks';

interface loaderProp {
  isTransparent?: boolean;
}
const Loader: FC<loaderProp> = ({isTransparent}) => {
  const globalStyle = useAppSelector(state => state.globalStyles.styles);
  return (
    <LayoutWithSafeAreaWithoutBgWithoutScroll>
      <Box
        flex={1}
        style={[
          globalStyle.justifyCenter,
          globalStyle.alignItemsCenter,
          isTransparent && globalStyle.bgTransparent,
        ]}>
        <Box style={[spinnerStyle.spin]}>
          <Spinner isCulrMainVermilion />
        </Box>
      </Box>
    </LayoutWithSafeAreaWithoutBgWithoutScroll>
  );
};

export default Loader;
