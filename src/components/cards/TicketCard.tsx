import React, {FC} from 'react';
import Box from '../layout/Box';
import TextComponent from '../text/TextComponent';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {isIos, numberWithCommas, nairaSign} from '../../constants/utils/utils';
import TicketOutlined from '../../assets/svgs/icons/ticket-outlined.svg';
import pallete from '../../constants/colors/pallete';
import ChipComponent from '../chip/ChipComponent';
import MoneyWavyOutlineIcon from '../../assets/svgs/icons/money-wavy-outlined.svg';
import {Shadow} from 'react-native-shadow-2';
import {useAppSelector} from '../../constants/utils/hooks';
import {TicketTypeEnums} from '../../screens/listings/event/create/EventListingCreationTicketInfoScreen';

export type TicketCardProps = {
  name: string;
  type: TicketTypeEnums;
  totalNumberAvailable: number;
  totalNumberofAttendees?: number;
  amount: number;
  perks: string[];
  isPreview?: boolean;
  onPress?: () => void;
};

const TicketCard: FC<TicketCardProps> = ({
  name,
  type,
  totalNumberAvailable,
  totalNumberofAttendees,
  amount,
  perks,
  isPreview,
  onPress,
}) => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  return (
    <Shadow
      style={[globalStyles.wFull]}
      startColor={pallete.culrMainBlackOpacity5}
      offset={[0, 4]}>
      <Box
        style={[
          globalStyles.bgWhite,
          globalStyles.p2,
          globalStyles.borderRadius20,
          globalStyles.gapY29,
          globalStyles.maxWidthPx31,
        ]}>
        <Box style={[globalStyles.gapY5]}>
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
                globalStyles.gapX6,
              ]}>
              <Box
                style={[
                  globalStyles.p0p5,
                  globalStyles.br,
                  globalStyles.bgCulrLightBlueShadeBg,
                ]}>
                <TicketOutlined color={pallete.culrMainBlack} />
              </Box>

              <TextComponent
                style={[
                  globalStyles.fontNeulisAlt_Bold,
                  isIos() && globalStyles.fontWeight700,
                  globalStyles.fontSize22,
                  globalStyles.lineHeight29p32,
                  globalStyles.textCulrMainBlack,
                ]}>
                {name}
              </TextComponent>
            </Box>

            {!isPreview && (
              <AntDesign
                name="ellipsis1"
                size={24}
                style={[globalStyles.textBlack]}
              />
            )}
          </Box>

          <TextComponent
            style={[
              globalStyles.fontNeulisAlt_Regular,
              isIos() && globalStyles.fontWeight400,
              globalStyles.fontSize12,
              globalStyles.lineHeight16p27,
              globalStyles.textCulrMainBlack,
            ]}>
            {totalNumberAvailable === Infinity
              ? 'Unlimited'
              : `${totalNumberAvailable} Available`}
          </TextComponent>
        </Box>

        <Box style={[globalStyles.gapY10]}>
          <TextComponent
            style={[
              globalStyles.fontNeulisAlt_Medium,
              isIos() && globalStyles.fontWeight500,
              globalStyles.fontSize14,
              globalStyles.lineHeight18p88,
              globalStyles.textCulrHoverBlack,
            ]}>
            Perks
          </TextComponent>

          <Box
            style={[
              globalStyles.flexrow,
              globalStyles.alignItemsCenter,
              globalStyles.gapX20,
              globalStyles.gapY10,
              globalStyles.flexwrap,
            ]}>
            {perks &&
              perks.length &&
              perks.map((perk, index) => (
                <Box
                  key={index}
                  style={[
                    globalStyles.flexrow,
                    globalStyles.alignItemsCenter,
                    globalStyles.gapX5,
                  ]}>
                  <Octicons
                    name="dot-fill"
                    size={8}
                    style={[globalStyles.textCulrMainBlack]}
                  />

                  <TextComponent
                    style={[
                      globalStyles.fontNeulisAlt_Light,
                      isIos() && globalStyles.fontWeight300,
                      globalStyles.fontSize11,
                      globalStyles.lineHeight13p66,
                      globalStyles.textCulrMainBlack,
                    ]}>
                    {perk}
                  </TextComponent>
                </Box>
              ))}
          </Box>
        </Box>

        <Box
          style={[
            globalStyles.flexrow,
            globalStyles.alignItemsCenter,
            globalStyles.gapX20,
          ]}>
          <ChipComponent
            wrapperStyle={[globalStyles.flexOne, globalStyles.bgBlack]}
            textStyle={[globalStyles.textWhite]}
            text={
              String(amount) === '0'
                ? 'Free'
                : `${nairaSign()}${numberWithCommas(amount)}`
            }
            icon={
              <MoneyWavyOutlineIcon
                style={[globalStyles.scale65]}
                color={pallete.white}
              />
            }
            disabled={isPreview}
          />

          {!isPreview && (
            <Box
              style={[
                globalStyles.w5,
                globalStyles.flexrow,
                globalStyles.justifyEnd,
              ]}>
              <TextComponent
                style={[
                  globalStyles.fontNeulisAlt_Light,
                  isIos() && globalStyles.fontWeight300,
                  globalStyles.fontSize12,
                  globalStyles.lineHeight16p27,
                  globalStyles.textCulrMainBlack,
                ]}>
                {totalNumberofAttendees} Registered
              </TextComponent>
            </Box>
          )}
        </Box>
      </Box>
    </Shadow>
  );
};

export default TicketCard;
