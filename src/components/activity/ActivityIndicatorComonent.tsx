import {ActivityIndicator} from 'react-native';
import React, {FC} from 'react';
import pallete from '../../constants/colors/pallete';

interface indicatorProp {
  size?: number | 'large' | 'small' | undefined;
  isWhite?: boolean;
}

const ActivityIndicatorComonent: FC<indicatorProp> = ({
  size = 'large',
  isWhite,
}) => {
  return (
    <ActivityIndicator
      // style={styles.activityIndicator}
      size={size}
      color={isWhite ? pallete.white : pallete.primaryDefault}
    />
  );
};

export default ActivityIndicatorComonent;
