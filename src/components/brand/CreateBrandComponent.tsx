import React, {memo} from 'react';
import {useAppSelector} from '../../constants/utils/hooks';
import Box from '../layout/Box';
import PressableComponent from '../pressable/PressableComponent';
import CreateIcon from '../../assets/svgs/icons/create-filled.svg';
import TextComponent from '../text/TextComponent';
import {isIos} from '../../constants/utils/utils';
import {width} from '../../globalStyles/globalStyles';

type CreateBrandComponentProps = {
  onCreateBrandButtonClick: () => void;
};

const CreateBrandComponent = memo<CreateBrandComponentProps>(
  ({onCreateBrandButtonClick}) => {
    const globalStyles = useAppSelector(state => state.globalStyles.styles);

    return (
      <Box
        width={width}
        style={[globalStyles.justifyCenter, globalStyles.alignItemsCenter]}>
        <PressableComponent
          style={[globalStyles.p1]}
          onPress={onCreateBrandButtonClick}>
          <Box
            style={[
              globalStyles.flexrow,
              globalStyles.alignItemsCenter,
              globalStyles.gapX13,
            ]}>
            <CreateIcon />

            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Regular,
                isIos() && globalStyles.fontWeight400,
                globalStyles.fontSize12,
                globalStyles.textCulrMainBlack,
                globalStyles.lineHeight16p27,
              ]}>
              Create a Brand
            </TextComponent>
          </Box>
        </PressableComponent>
      </Box>
    );
  },
);

export default CreateBrandComponent;
