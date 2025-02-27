import {View, Text} from 'react-native';
import React from 'react';
import Box from '../layout/Box';
import createGlobalStyles from '../../globalStyles/globalStyles';
import TextComponent from '../text/TextComponent';

const RewardHistoryComponent = () => {
  return (
    <Box style={[createGlobalStyles.flexrow]}>
      <Box flex={1}>
        <TextComponent style={[createGlobalStyles.fontSize12]}>
          Spar Nigeria
        </TextComponent>
        <TextComponent style={[createGlobalStyles.fontSize10]} secondary>
          Dec 10 2022 • 10:02 AM
        </TextComponent>
      </Box>
      <Box>
        <TextComponent
          style={[createGlobalStyles.textPrimary, createGlobalStyles.fontSize12]}>
          15% Discount
        </TextComponent>
      </Box>
    </Box>
  );
};

export default RewardHistoryComponent;
