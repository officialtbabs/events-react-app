import React, {FC} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import pallete from '../../constants/colors/pallete';
import Box from '../layout/Box';
import PressableComponent from '../pressable/PressableComponent';
import {useAppSelector} from '../../constants/utils/hooks';

interface radioInterface {
  enabled: boolean;
  onPress?: () => void;
  disabled?: boolean;
}
const RadioComponent: FC<radioInterface> = ({enabled, onPress, disabled}) => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  return (
    <Box style={[radioStyle.size]}>
      <PressableComponent
        disabled={disabled}
        onPress={onPress}
        style={[
          globalStyles.w10,
          globalStyles.h10,
          globalStyles.br,
          enabled && radioStyle.enabled,
          !enabled && radioStyle.disabled,
          globalStyles.justifyCenter,
          globalStyles.alignItemsCenter,
          globalStyles.bgWhite,
        ]}>
        {/* <Box style={[radioStyle.inner, globalStyle.bgPurplePrimary]} /> */}
        {enabled && (
          <Box style={[radioStyle.inner, globalStyles.bgCulrMainVermilion]} />
        )}
      </PressableComponent>
    </Box>
  );
};

const radioStyle = ScaledSheet.create({
  disabled: {
    borderColor: pallete.culrBorderGray,
    borderWidth: '1@s',
  },
  enabled: {
    borderColor: pallete.culrMainVermilion,
    borderWidth: '1@s',
  },
  size: {
    width: '20@ms',
    height: '20@ms',
    borderRadius: '20@s',
  },
  inner: {
    width: '12@s',
    height: '12@s',
    borderRadius: '14@s',
  },
} as Record<any, any>);

export default RadioComponent;
