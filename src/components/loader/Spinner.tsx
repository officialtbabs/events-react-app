import React, {useEffect, useMemo} from 'react';
import {ViewProps} from 'react-native';
import Animated, {
  Easing,
  cancelAnimation,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {ScaledSheet} from 'react-native-size-matters';
import Svg, {Circle} from 'react-native-svg';
import pallete from '../../constants/colors/pallete';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

export type SpinnerProps = ViewProps & {
  small?: boolean;
  isCulrMainVermilion?: boolean;
};

export const Spinner: React.FC<SpinnerProps> = ({
  small,
  isCulrMainVermilion,
}) => {
  // Derived values
  const R = small ? 15 : 30;
  const STROKE_WIDTH = small ? 6 : 11;
  const circleLength = useMemo(() => 2 * Math.PI * R, [R]);

  // Shared values
  const rotate = useSharedValue(0.01);
  const progress = useSharedValue(0.7);

  // Animated props for strokeDashoffset
  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: circleLength * progress.value,
  }));

  useEffect(() => {
    rotate.value = withRepeat(
      withTiming(360, {duration: 1000, easing: Easing.linear}),
      -1,
      false,
    );
    return () => cancelAnimation(rotate);
  }, [rotate]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotate.value}deg`,
        },
      ],
    };
  });
  return (
    <Animated.View style={[spinnerStyle.aspect, animatedStyles]}>
      <AnimatedSvg
        height="100%"
        width="100%"
        viewBox="0 0 100 100"
        style={[spinnerStyle.spin, small && spinnerStyle.small]}>
        <Circle
          cx={'50'}
          cy={'50'}
          r={R}
          strokeWidth={STROKE_WIDTH}
          fill={pallete.transparent}
          stroke={
            isCulrMainVermilion
              ? pallete.culrAlertVermilion
              : pallete.culrMainVermilion
          }
        />
        <AnimatedCircle
          cx={'50'}
          cy={'50'}
          r={R}
          fill={pallete.transparent}
          strokeWidth={STROKE_WIDTH}
          strokeLinecap={'round'}
          stroke={
            isCulrMainVermilion
              ? pallete.culrMainVermilion
              : pallete.culrAlertVermilion
          }
          strokeDasharray={circleLength}
          animatedProps={animatedProps}
        />
      </AnimatedSvg>
    </Animated.View>
  );
};

export const spinnerStyle = ScaledSheet.create({
  aspect: {
    aspectRatio: 1,
    alignSelf: 'center',
  },
  spin: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50@s',
    height: '60@s',
    width: '60@s',
  },
  small: {
    height: '30@s',
    width: '30@s',
  },
} as Record<any, any>);
