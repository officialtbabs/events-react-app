import React, {FC} from 'react';
import Box from '../layout/Box';
import createGlobalStyles from '../../globalStyles/globalStyles';
import File from '../../assets/svgs/document.svg';
import Del from '../../assets/svgs/delete.svg';
import PressableComponent from '../pressable/PressableComponent';
import TextComponent from '../text/TextComponent';

interface fileProp {
  title: string;
  onDelete: () => void;
}

const FileItem: FC<fileProp> = ({onDelete, title}) => {
  return (
    <Box style={[createGlobalStyles.flexrow, createGlobalStyles.alignItemsCenter]}>
      <Box>
        <File />
      </Box>
      <Box style={[createGlobalStyles.pl1p2]} flex={1}>
        <TextComponent style={[createGlobalStyles.fontSize12]}>{title}</TextComponent>
      </Box>
      <PressableComponent onPress={onDelete} style={[createGlobalStyles.p0p5]}>
        <Del />
      </PressableComponent>
    </Box>
  );
};

export default FileItem;
