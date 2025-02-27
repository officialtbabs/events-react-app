import React, {FC, ReactNode} from 'react';
import Box from '../layout/Box';
import TextComponent from '../text/TextComponent';
import PressableComponent from '../pressable/PressableComponent';
import Feather from 'react-native-vector-icons/Feather';
import {isIos} from '../../constants/utils/utils';
import {useAppSelector} from '../../constants/utils/hooks';

export type SettingsCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  onPress: () => void;
};

const SettingsCard: FC<SettingsCardProps> = ({
  title,
  description,
  icon,
  onPress,
}) => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  return (
    <Box
      flex={1}
      style={[
        globalStyles.borderBottom,
        !isIos() && globalStyles.borderDashed,
        globalStyles.borderCulrLightBlackOpacity20,
        globalStyles.mb2,
        globalStyles.pb1,
        globalStyles.mx2,
      ]}>
      <PressableComponent onPress={onPress}>
        <Box
          style={[
            globalStyles.flexrow,
            globalStyles.justifyBetween,
            globalStyles.alignItemsCenter,
          ]}>
          <Box
            style={[
              globalStyles.flexrow,
              globalStyles.alignItemsCenter,
              globalStyles.gapX20,
            ]}>
            <Box>{icon}</Box>

            <Box style={[globalStyles.w7p5]}>
              <TextComponent
                style={[
                  globalStyles.fontNeulisAlt_Bold,
                  isIos() && globalStyles.fontWeight700,
                  globalStyles.fontSize18,
                  globalStyles.textCulrMainBlack,
                  globalStyles.lineHeight24p1,
                ]}>
                {title}
              </TextComponent>

              <TextComponent
                numberOfLines={1}
                style={[
                  globalStyles.fontNeulisAlt_Regular,
                  isIos() && globalStyles.fontWeight400,
                  globalStyles.fontSize12,
                  globalStyles.textCulrMainBlack,
                  globalStyles.lineHeight16p27,
                ]}>
                {description}
              </TextComponent>
            </Box>
          </Box>

          <Box>
            <Feather
              name="chevron-right"
              size={22}
              style={[globalStyles.textCulrMainBlack]}
            />
          </Box>
        </Box>
      </PressableComponent>
    </Box>
  );
};

export default SettingsCard;
