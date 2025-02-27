import React, {FC, ReactNode} from 'react';
import Box from '../layout/Box';
import TextComponent from '../text/TextComponent';
import PressableComponent from '../pressable/PressableComponent';
import {
  capialiseFirst,
  capialiseFirstLetterOfWordsInSentence,
  getFormattedDateInDayMonth,
  isIos,
} from '../../constants/utils/utils';
import {useAppSelector} from '../../constants/utils/hooks';

export enum GuestCardStatusEnum {
  GOING = 'going',
  NOT_GOING = 'not_going',
  BOOKED = 'booked',
}

export type GuestCardProps = {
  name: string;
  email: string;
  status: GuestCardStatusEnum;
  date: Date;
  onPress: () => void;
};

const GuestCard: FC<GuestCardProps> = ({
  name,
  email,
  status,
  date,
  onPress,
}) => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  return (
    <Box
      flex={1}
      style={[
        globalStyles.borderBottom,
        !isIos() && globalStyles.borderDashed,
        globalStyles.borderCulrLightBlack,
        globalStyles.mb2,
        globalStyles.pb1,
        globalStyles.mx2,
      ]}>
      <PressableComponent style={[globalStyles.flexOne]} onPress={onPress}>
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
              globalStyles.gapX10,
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

            <Box>
              <TextComponent
                style={[
                  globalStyles.fontNeulisAlt_Regular,
                  isIos() && globalStyles.fontWeight400,
                  globalStyles.fontSize14,
                  globalStyles.lineHeight18p88,
                  globalStyles.textCulrMainBlack,
                ]}>
                {name}
              </TextComponent>

              <TextComponent
                numberOfLines={1}
                style={[
                  globalStyles.fontNeulisAlt_Light,
                  isIos() && globalStyles.fontWeight300,
                  globalStyles.fontSize12,
                  globalStyles.lineHeight16p27,
                  globalStyles.textCulrMainBlack,
                ]}>
                {email}
              </TextComponent>
            </Box>
          </Box>

          <Box style={[globalStyles.alignItemsEnd]}>
            <Box
              style={[
                globalStyles.py0p2,
                globalStyles.px1,
                globalStyles.br,
                globalStyles.mb0p1,
                status === GuestCardStatusEnum.GOING
                  ? globalStyles.bgCulrAlertVermilion
                  : globalStyles.bgCulrConcreteGrayShadeBg,
              ]}>
              <TextComponent
                style={[
                  globalStyles.fontNeulisAlt_Regular,
                  isIos() && globalStyles.fontWeight400,
                  globalStyles.fontSize12,
                  globalStyles.lineHeight16p27,
                  globalStyles.textCulrMainBlack,
                  status ===
                    (GuestCardStatusEnum.GOING ||
                      status === GuestCardStatusEnum.BOOKED) &&
                    globalStyles.textCulrMainVermilion,
                ]}>
                {capialiseFirstLetterOfWordsInSentence(
                  status.replace('_', ' '),
                )}
              </TextComponent>
            </Box>

            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Light,
                isIos() && globalStyles.fontWeight300,
                globalStyles.fontSize12,
                globalStyles.textCulrMainBlack,
                globalStyles.lineHeight16p27,
              ]}>
              {getFormattedDateInDayMonth(date)}
            </TextComponent>
          </Box>
        </Box>
      </PressableComponent>
    </Box>
  );
};

export default GuestCard;
