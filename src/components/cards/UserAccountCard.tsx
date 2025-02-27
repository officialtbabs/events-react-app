import React, {FC, ReactNode} from 'react';
import Box from '../layout/Box';
import TextComponent from '../text/TextComponent';
import PressableComponent from '../pressable/PressableComponent';
import Feather from 'react-native-vector-icons/Feather';
import {isIos} from '../../constants/utils/utils';
import {useAppSelector} from '../../constants/utils/hooks';

export type UserAccountCardProps = {
  name: string;
  accountType: string;
  onPress: () => void;
};

const UserAccountCard: FC<UserAccountCardProps> = ({
  name,
  accountType,
  onPress,
}): ReactNode => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);
  return (
    <Box
      style={[
        globalStyles.borderBottom,
        !isIos() && globalStyles.borderDashed,
        globalStyles.borderCulrLightBlackOpacity20,
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
            <Box
              style={[
                globalStyles.h62,
                globalStyles.w62,
                globalStyles.bgWhite,
                globalStyles.br,
              ]}
            />

            <Box style={[globalStyles.w7p5]}>
              <TextComponent
                style={[
                  globalStyles.fontNeulisAlt_Bold,
                  isIos() && globalStyles.fontWeight700,
                  globalStyles.fontSize14,
                  globalStyles.textCulrMainBlack,
                  globalStyles.lineHeight18p88,
                  globalStyles.textCapitalise,
                ]}>
                {name}
              </TextComponent>

              <TextComponent
                numberOfLines={1}
                style={[
                  globalStyles.fontNeulisAlt_Light,
                  isIos() && globalStyles.fontWeight300,
                  globalStyles.fontSize11,
                  globalStyles.textCulrMainBlack,
                  globalStyles.lineHeight13p66,
                  globalStyles.textCapitalise,
                ]}>
                {accountType} Account
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

export default UserAccountCard;
