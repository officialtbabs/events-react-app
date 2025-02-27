import React, {FC} from 'react';
import Box from '../layout/Box';
import TextComponent from '../text/TextComponent';
// import {styles} from '../textInputs/PaperTextInputComponent';
import Entypo from 'react-native-vector-icons/Entypo';
// import {dateTimeStyle} from '../dateTime/DateTime';
import {ScaledSheet} from 'react-native-size-matters';
import createGlobalStyles from '../../globalStyles/globalStyles';
import PressableComponent from '../pressable/PressableComponent';
import pallete from '../../constants/colors/pallete';
// import {nairaSign, removeCurrency} from '../../constants/utils/utils';
// import ActivityIndicatorComonent from '../activity/ActivityIndicatorComonent';

interface selectProps {
  onPress?: () => void;
  placeholder: string;
  label: string;
  value: string;
  disabled?: boolean;
  loading?: boolean;
  showIcon?: boolean;
  showBalance?: boolean;
  icon?: React.ReactNode;
}
const SelectComponent: FC<selectProps> = ({
  onPress,
  placeholder,
  value,
  label,
  disabled = false,
  showIcon = true,
  loading,
  icon,
}) => {
  return (
    <>
      <Box
        style={[
          createGlobalStyles.flexrow,
          createGlobalStyles.alignItemsCenter,
          createGlobalStyles.justifyCenter,
          createGlobalStyles.justifyBetween,
        ]}>
        {label && (
          <TextComponent style={[createGlobalStyles.fontSize12, createGlobalStyles.mb0p8]}>
            {label}
          </TextComponent>
        )}
      </Box>
      <PressableComponent
        disabled={disabled || loading}
        onPress={onPress}
        style={[
          createGlobalStyles.w10,
          createGlobalStyles.textInputHeight,
          createGlobalStyles.borderRad,
          createGlobalStyles.borderInput,
        ]}>
        <Box
          flex={1}
          style={[
            createGlobalStyles.flexrow,
            createGlobalStyles.justifyCenter,
            createGlobalStyles.alignItemsCenter,
            createGlobalStyles.justifyBetween,
            createGlobalStyles.px1,
            // globalStyle.mt1,
          ]}>
          <Box
            flex={1}
            style={[createGlobalStyles.flexrow, createGlobalStyles.alignItemsCenter]}>
            {icon && (
              <Box
                style={[
                  createGlobalStyles.mr0p8,
                  createGlobalStyles.justifyCenter,
                  createGlobalStyles.alignItemsCenter,
                  selectStyle.iconBox,
                  // globalStyle.bgPurple,
                ]}>
                {icon}
              </Box>
            )}
            <TextComponent
              numberOfLines={1}
              style={[createGlobalStyles.fontSize13, !value && createGlobalStyles.textGray4]}>
              {value?.length > 0 ? value : placeholder}
            </TextComponent>
          </Box>
          <Box>
            {/* {loading && <ActivityIndicatorComonent size={18} />} */}
            {!disabled && !loading && showIcon && (
              <Box
                style={[
                  selectStyle.iconBox,
                  createGlobalStyles.justifyCenter,
                  createGlobalStyles.alignItemsEnd,
                  // globalStyle.absolute,
                  // selectStyle.icon,
                ]}>
                <Entypo
                  name="chevron-small-down"
                  size={28}
                  color={pallete.black}
                />
              </Box>
            )}
          </Box>
        </Box>
      </PressableComponent>
    </>
  );
};
const selectStyle = ScaledSheet.create({
  icon: {
    right: '8@s',
  },
  iconBox: {
    height: '22@s',
    width: '22@s',
  },
} as Record<any, any>);
export default SelectComponent;
