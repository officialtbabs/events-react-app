import React from 'react';
import Box from '../layout/Box';
import createGlobalStyles from '../../globalStyles/globalStyles';
import {ScaledSheet} from 'react-native-size-matters';

const ConfirmUtility = () => {
  return (
    <Box
      style={[
        createGlobalStyles.py0p6,
        createGlobalStyles.flexrow,
        createGlobalStyles.justifyBetween,
        createGlobalStyles.alignItemsCenter,
        createGlobalStyles.overflowHidden,
      ]}>
      <Box
        zIndex={5}
        style={[utiltyStyle.main, createGlobalStyles.br, createGlobalStyles.bgPurpleDark]}
      />
      <Box
        style={[
          createGlobalStyles.flexrow,
          createGlobalStyles.flexOne,
          createGlobalStyles.flexrow,
          utiltyStyle.left,
        ]}>
        {new Array(200).fill('@').map((_, index) => (
          <Box
            backgroundColor={'mainBackground'}
            key={index.toString()}
            style={[createGlobalStyles.mr0p5, utiltyStyle.item]}
          />
        ))}
      </Box>
      <Box
        zIndex={5}
        style={[utiltyStyle.right, createGlobalStyles.br, createGlobalStyles.bgPurpleDark]}
      />
    </Box>
  );
};

const utiltyStyle = ScaledSheet.create({
  main: {
    width: '30@s',
    height: '30@s',
    left: '-15@s',
  },
  left: {
    left: '-50@s',
    right: '30@s',
  },
  item: {
    width: '5@s',
    height: '2@s',
    borderRadius: '2@s',
    backgroundColor: '#C4C4C4',
  },
  right: {
    width: '30@s',
    height: '30@s',
    right: '-15@s',
  },
} as Record<any, any>);

export default ConfirmUtility;
