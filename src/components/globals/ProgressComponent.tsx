import React, {FC} from 'react';
import Box from '../layout/Box';
import createGlobalStyles from '../../globalStyles/globalStyles';
import {ScaledSheet} from 'react-native-size-matters';

interface progressProps {
  percent: number;
}

const ProgressComponent: FC<progressProps> = ({percent}) => {
  return (
    <Box
      style={[
        createGlobalStyles.pt0p8,
        createGlobalStyles.flexrow,
        createGlobalStyles.alignItemsCenter,
        createGlobalStyles.justifyBetween,
      ]}>
      <Box
        style={[
          createGlobalStyles.w10,
          progressStyle.progressHeight,
          createGlobalStyles.bgPurplePrimary10,
          createGlobalStyles.br,
          createGlobalStyles.overflowHidden,
          createGlobalStyles.flexrow,
          createGlobalStyles.alignItemsCenter,
        ]}>
        <Box
          style={[
            createGlobalStyles.absolute,
            progressStyle.progressHeight,
            createGlobalStyles.bgPurplePrimary,
            createGlobalStyles.br,
            {
              width: `${percent}%`,
            },
          ]}
        />
        {/* {new Array(400).fill('#').map((_, index) => (
          <Box
            key={index.toString()}
            style={[
              progressStyle.itemWidth,
              globalStyle.h10,
              globalStyle.bgAccentOrange300,
              globalStyle.mr0p5,
              progressStyle.rotate,
            ]}
          />
        ))} */}
      </Box>
    </Box>
  );
};

export const AvailableIndicator = () => {
  return (
    <Box
      style={[
        progressStyle.availableWidth,
        createGlobalStyles.bgPurplePrimary10,
        createGlobalStyles.overflowHidden,
        createGlobalStyles.flexrow,
        createGlobalStyles.alignItemsCenter,
      ]}>
      {new Array(400).fill('#').map((_, index) => (
        <Box
          key={index.toString()}
          style={[
            progressStyle.itemWidth,
            createGlobalStyles.h10,
            createGlobalStyles.bgPurplePrimary,
            createGlobalStyles.mr0p5,
            progressStyle.rotate,
          ]}
        />
      ))}
    </Box>
  );
};

export const progressStyle = ScaledSheet.create({
  progressHeight: {
    height: '8@s',
  },
  availableWidth: {
    width: '10@s',
    height: '10@s',
    borderRadius: '4@s',
  },
  itemWidth: {
    width: '1@s',
  },
  frameHeight: {
    height: '115@s',
  },
  rotate: {
    transform: [
      {
        rotate: '35deg',
      },
    ],
  },
} as Record<any, any>);
export default ProgressComponent;
