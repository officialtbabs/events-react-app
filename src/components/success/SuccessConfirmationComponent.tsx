import React, {FC} from 'react';
import {useAppSelector} from '../../constants/utils/hooks';
import Box from '../layout/Box';
import TextComponent from '../text/TextComponent';
import {isIos} from '../../constants/utils/utils';
import ButtonComponent from '../button/ButtonComponent';

interface SuccessConfirmationComponentProps {
  message: string;
  buttonText: string;
  onButtonPress: () => void;
}

const SuccessConfirmationComponent: FC<SuccessConfirmationComponentProps> = ({
  message,
  buttonText,
  onButtonPress,
}) => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  return (
    <Box flex={1} style={[globalStyles.px31]}>
      <Box flex={1} style={[globalStyles.justifyCenter, globalStyles.relative]}>
        <Box style={[globalStyles.alignItemsCenter, globalStyles.gapY40]}>
          <Box style={[globalStyles.w225, globalStyles.h225]} />

          <Box>
            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Bold,
                isIos() && globalStyles.fontWeight700,
                globalStyles.fontSize18,
                globalStyles.lineHeight24p1,
                globalStyles.textCulrMainBlack,
                globalStyles.textCenter,
              ]}>
              Congratulations
            </TextComponent>

            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Regular,
                isIos() && globalStyles.fontWeight400,
                globalStyles.fontSize12,
                globalStyles.lineHeight16p27,
                globalStyles.textCulrMainBlack,
                globalStyles.textCenter,
              ]}>
              {message}
            </TextComponent>
          </Box>
        </Box>

        <Box
          style={[
            globalStyles.wFull,
            globalStyles.pb4,
            globalStyles.absolute,
            globalStyles.bottom0,
          ]}>
          <ButtonComponent text14 title={buttonText} onPress={onButtonPress} />
        </Box>
      </Box>
    </Box>
  );
};

export default SuccessConfirmationComponent;
