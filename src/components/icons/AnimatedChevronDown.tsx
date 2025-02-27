import React, {FC, useEffect} from 'react';
import Box from '../layout/Box';
import Animated, {
  useSharedValue,
  withTiming,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {useAppSelector} from '../../constants/utils/hooks';
import Feather from 'react-native-vector-icons/Feather';

interface AnimatedChevronIconProps {
  rotate: boolean;
}

const AnimatedChevronDown: FC<AnimatedChevronIconProps> = ({rotate}) => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const rotationValue = useSharedValue(rotate ? 1 : 0);

  const aStyles = useAnimatedStyle(() => {
    const rotationInterpolatedValue = interpolate(
      rotationValue.value,
      [0, 1],
      [0, 180],
    );

    return {
      transform: [{rotate: `${rotationInterpolatedValue}deg`}],
    };
  });

  useEffect(() => {
    rotationValue.value = withTiming(rotate ? 1 : 0, {
      duration: 300,
    });
  }, [rotate, rotationValue]);

  return (
    <Box style={[globalStyles.justifyCenter, globalStyles.alignItemsCenter]}>
      <Animated.View style={[aStyles]}>
        <Feather
          name="chevron-down"
          size={24}
          style={[globalStyles.textBlack]}
        />
      </Animated.View>
    </Box>
  );
};

export default AnimatedChevronDown;
