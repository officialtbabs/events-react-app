import React, {FC} from 'react';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import pallete from '../../constants/colors/pallete';
import createGlobalStyles from '../../globalStyles/globalStyles';

interface dotInterface {
  index: number;
  currentIndex: SharedValue<number>;
  white?: boolean;
  long?: boolean;
}
const Dot: FC<dotInterface> = ({currentIndex, index, white, long}) => {
  const dotStyle = useAnimatedStyle(() => {
    const isActive = currentIndex.value === index;
    return {
      backgroundColor: withTiming(
        isActive
          ? white
            ? pallete.white
            : pallete.secondaryDark
          : white
          ? pallete.white40
          : pallete.secondaryLight,
        {
          duration: 150,
        },
      ),
      width: withTiming(isActive ? (long ? 40 : 20) : long ? 6 : 10),
      height: withTiming(long ? 4 : isActive ? 6 : 10),
      borderRadius: 20,
    };
  });

  return <Animated.View key={`${index}`} style={[createGlobalStyles.mr1, dotStyle]} />;
};

export default Dot;
