import React, {FC} from 'react';
import Upload from '../../assets/svgs/upload.svg';
import PressableComponent from '../pressable/PressableComponent';
import createGlobalStyles from '../../globalStyles/globalStyles';
import Box from '../layout/Box';
import TextComponent from '../text/TextComponent';
interface uploadProp {
  onPress: () => void;
}
const UploadBox: FC<uploadProp> = ({onPress}) => {
  return (
    <PressableComponent
      onPress={onPress}
      style={[
        createGlobalStyles.py1p2,
        createGlobalStyles.flexrow,
        createGlobalStyles.justifyCenter,
        createGlobalStyles.alignItemsCenter,
        createGlobalStyles.borderRadius8,
        createGlobalStyles.borderUpload,
      ]}>
      <Box>
        <Upload />
      </Box>
      <TextComponent
        style={[
          createGlobalStyles.fontSize12,
          createGlobalStyles.fontWeight500,
          createGlobalStyles.pl1,
        ]}>
        Click here to upload
      </TextComponent>
    </PressableComponent>
  );
};

export default UploadBox;
