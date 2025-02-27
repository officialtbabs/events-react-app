import {Pressable, PressableProps} from 'react-native';
import React, {FC, ReactNode} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useAppSelector} from '../../constants/utils/hooks';

interface pressProps extends PressableProps {
  children: ReactNode;
  wFull?: boolean;
}
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const PressableComponent: FC<pressProps> = ({children, wFull, ...rest}) => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value),
      transform: [
        {
          scale: withTiming(scale.value),
        },
      ],
    };
  });

  return (
    <Animated.View style={[animatedStyle, wFull && globalStyles.wFull]}>
      <AnimatedPressable
        onPressIn={() => {
          scale.value = 0.95;
          opacity.value = 0.75;
        }}
        onPressOut={() => {
          scale.value = 1;
          opacity.value = 1;
        }}
        {...rest}>
        {children}
      </AnimatedPressable>
    </Animated.View>
  );
};

export default PressableComponent;
