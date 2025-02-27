import {View} from 'react-native';
import React from 'react';
import PapayrIcon from '../../assets/svgs/papayrIcon.svg';
import createGlobalStyles from '../../globalStyles/globalStyles';
import Box from '../layout/Box';
import {useGetCountry} from '../../constants/utils/hooks';
import TextComponent from '../text/TextComponent';
const PapayrUtil = () => {
  const {isNigerian} = useGetCountry();
  return (
    <View style={[createGlobalStyles.flexrow, createGlobalStyles.alignItemsCenter]}>
      <TextComponent>1&nbsp;</TextComponent>
      <Box>
        <PapayrIcon width={12} />
      </Box>
      <TextComponent>&nbsp; = {isNigerian ? '₦5' : '1p'}</TextComponent>
    </View>
  );
};

export default PapayrUtil;
