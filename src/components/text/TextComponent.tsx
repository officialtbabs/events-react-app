import {StyleProp, Text, TextStyle} from 'react-native';
import React, {FC} from 'react';
import createGlobalStyles from '../../globalStyles/globalStyles';
import {StringifiedStyles} from 'react-native-size-matters';
interface textProps {
  style?: StyleProp<TextStyle | StringifiedStyles>;
  numberOfLines?: number;
  onPress?: () => void;
  children: any;
  secondary?: boolean;
  purple?: boolean;
  purpleDark?: boolean;
  orange?: boolean;
  fontRegular?: boolean;
}
const TextComponent: FC<textProps> = ({
  numberOfLines,
  style,
  children,
  onPress,
  secondary,
  purple,
  purpleDark,
  orange,
}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      onPress={onPress}
      style={
        [
          createGlobalStyles.fontSansMedium,
          createGlobalStyles.fontSize14,
          createGlobalStyles.fontWeight500,
          createGlobalStyles.textBlack,
          secondary && createGlobalStyles.textGray4,
          purple && createGlobalStyles.textPurple,
          purpleDark && createGlobalStyles.textPurpleDark,
          orange && createGlobalStyles.textOrange,
          style,
        ] as any
      }>
      {children}
    </Text>
  );
};

export default TextComponent;
