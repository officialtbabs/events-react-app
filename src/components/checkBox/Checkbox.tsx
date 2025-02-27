import React, {FC} from 'react';
import CheckBox, {CheckBoxProps} from '@react-native-community/checkbox';
import {ScaledSheet} from 'react-native-size-matters';
import pallete from '../../constants/colors/pallete';
import createGlobalStyles from '../../globalStyles/globalStyles';
import Box from '../layout/Box';
import {Platform} from 'react-native';

interface checkBpoxProps extends CheckBoxProps {
  value: boolean;
  setValue: (val: any) => void;
}
const CheckboxComponent: FC<checkBpoxProps> = ({setValue, value, ...rest}) => {
  return (
    <Box
      style={[
        createGlobalStyles.flexrow,
        // globalStyle.bgPurple,
        cheeckStyle.box,
        createGlobalStyles.alignItemsCenter,
        createGlobalStyles.justifyCenter,
      ]}>
      <Box
        style={[
          createGlobalStyles.borderRadius6,
          value && cheeckStyle.borGreen,
          !value && cheeckStyle.borTrans,
          createGlobalStyles.justifyCenter,
          createGlobalStyles.alignItemsCenter,
          createGlobalStyles.flexrow,
          // globalStyle.bgPurple,
        ]}>
        <CheckBox
          style={[Platform.OS === 'ios' && cheeckStyle.checkboxSize]}
          disabled={false}
          value={value}
          onValueChange={setValue}
          boxType="square"
          animationDuration={0.5}
          onAnimationType={'bounce'}
          onCheckColor={pallete.white}
          onTintColor={pallete.primaryDefault}
          onFillColor={pallete.primaryDefault}
          tintColors={{
            true: pallete.primaryDefault,
            false: pallete.grey4,
          }}
          {...rest}
        />
      </Box>
    </Box>
  );
};
export const cheeckStyle = ScaledSheet.create({
  box: {
    width: '22@s',
    height: '22@s',
  },
  checkboxSize: {
    width: '15@s',
    height: '15@s',
    // width: 10,
    // height: 10,
  },
  borGreen: {
    borderWidth: '1@s',
    width: '22@s',
    height: '22@s',
    borderColor: pallete.primaryDefault,
  },
  borTrans: {
    borderWidth: '1@s',
    width: '22@s',
    height: '22@s',
    borderColor: pallete.transparent,
  },
} as Record<any, any>);

export default CheckboxComponent;
