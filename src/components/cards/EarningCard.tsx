import React, {FC, ReactNode} from 'react';
import Box from '../layout/Box';
import TextComponent from '../text/TextComponent';
import PressableComponent from '../pressable/PressableComponent';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  getFormatedDate,
  isIos,
  numberWithCommas,
} from '../../constants/utils/utils';
import moment from 'moment';
import {useAppSelector} from '../../constants/utils/hooks';

export type EarningCardProps = {
  title: string;
  amount: number;
  date: Date;
  onPress: () => void;
};

const EarningCard: FC<EarningCardProps> = ({
  title,
  amount,
  date,
  onPress,
}): ReactNode => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  return (
    <Box
      flex={1}
      style={[
        globalStyles.borderTop,
        globalStyles.borderCulrLightBlackOpacity10,
        globalStyles.py1,
        globalStyles.px1,
      ]}>
      <PressableComponent onPress={onPress}>
        <Box
          flex={1}
          style={[
            globalStyles.flexrow,
            globalStyles.justifyBetween,
            globalStyles.w10,
          ]}>
          <Box
            style={[
              globalStyles.flexrow,
              globalStyles.alignItemsCenter,
              globalStyles.gapX10,
              globalStyles.w10,
            ]}>
            <Box
              style={[
                globalStyles.p0p5,
                globalStyles.br,
                globalStyles.bgCulrAlertVermilion,
              ]}>
              <Box
                style={[
                  globalStyles.w40,
                  globalStyles.h40,
                  globalStyles.br,
                  globalStyles.bgCulrBtnDisabledBg,
                ]}
              />
            </Box>

            <Box
              flex={1}
              style={[globalStyles.flexrow, globalStyles.justifyBetween]}>
              <Box>
                <TextComponent
                  style={[
                    globalStyles.fontNeulisAlt_Regular,
                    isIos() && globalStyles.fontWeight400,
                    globalStyles.fontSize14,
                    globalStyles.textCulrMainBlack,
                  ]}>
                  {title}
                </TextComponent>

                <Box
                  style={[globalStyles.flexrow, globalStyles.alignItemsCenter]}>
                  <TextComponent
                    numberOfLines={1}
                    style={[
                      globalStyles.fontNeulisAlt_Light,
                      isIos() && globalStyles.fontWeight300,
                      globalStyles.fontSize10,
                      globalStyles.textCulrMainBlack,
                      globalStyles.lineHeight13p66,
                    ]}>
                    {moment(date).format('hh:mm a')}
                  </TextComponent>

                  <Entypo
                    name="dot-single"
                    size={22}
                    style={[globalStyles.textCulrMainBlack]}
                  />

                  <TextComponent
                    numberOfLines={1}
                    style={[
                      globalStyles.fontNeulisAlt_Light,
                      isIos() && globalStyles.fontWeight300,
                      globalStyles.fontSize11,
                      globalStyles.textCulrMainBlack,
                      globalStyles.lineHeight13p66,
                    ]}>
                    {getFormatedDate(date)}
                  </TextComponent>
                </Box>
              </Box>

              <Box>
                <TextComponent
                  numberOfLines={1}
                  style={[
                    globalStyles.fontNeulisAlt_Regular,
                    isIos() && globalStyles.fontWeight400,
                    globalStyles.fontSize14,
                    globalStyles.textCulrMainBlack,
                    globalStyles.lineHeight18p88,
                  ]}>
                  +₦{numberWithCommas(amount)}
                </TextComponent>
              </Box>
            </Box>
          </Box>
        </Box>
      </PressableComponent>
    </Box>
  );
};

export default EarningCard;
