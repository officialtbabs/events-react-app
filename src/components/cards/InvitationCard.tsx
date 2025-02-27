import React from 'react';
import Box from '../layout/Box';
import TextComponent from '../text/TextComponent';
import {isIos} from '../../constants/utils/utils';
import {Shadow} from 'react-native-shadow-2';
import pallete from '../../constants/colors/pallete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AreaLocationPinOutlined from '../../assets/svgs/icons/area-location-pin-outlined.svg';
import ButtonComponent from '../button/ButtonComponent';
import {useAppSelector} from '../../constants/utils/hooks';

const InvitationCard = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  return (
    <Shadow
      style={[globalStyles.w10]}
      startColor={pallete.culrMainBlackOpacity5}
      offset={[0, 4]}>
      <Box
        style={[
          globalStyles.p2p2,
          globalStyles.bgWhite,
          globalStyles.borderRadius20,
        ]}>
        <Box
          style={[
            globalStyles.flexrow,
            globalStyles.alignItemsCenter,
            globalStyles.gapX10,
          ]}>
          <Box
            style={[
              globalStyles.h42,
              globalStyles.w42,
              globalStyles.bgCulrMainVermilionOpacity5,
              globalStyles.br,
            ]}
          />

          <Box>
            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Bold,
                isIos() && globalStyles.fontWeight700,
                globalStyles.fontSize12,
                globalStyles.lineHeight16p27,
                globalStyles.textCulrMainBlack,
              ]}>
              Donald Pick
            </TextComponent>

            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Light,
                isIos() && globalStyles.fontWeight300,
                globalStyles.fontSize11,
                globalStyles.lineHeight13p66,
                globalStyles.textCulrHoverBlack,
              ]}>
              2 hours ago
            </TextComponent>
          </Box>
        </Box>

        <Box
          style={[
            globalStyles.h206,
            globalStyles.bgCulrMainBlack,
            globalStyles.borderRadius20,
            globalStyles.mt1,
          ]}
        />

        <Box style={[globalStyles.mt0p5]}>
          <TextComponent
            style={[
              globalStyles.fontNeulisAlt_Bold,
              isIos() && globalStyles.fontWeight700,
              globalStyles.fontSize14,
              globalStyles.lineHeight18p88,
              globalStyles.textCulrMainBlack,
            ]}>
            Techies Hangout
          </TextComponent>

          <Box
            style={[
              globalStyles.flexrow,
              globalStyles.alignItemsCenter,
              globalStyles.gapX10,
              globalStyles.mt0p8,
              // globalStyle.borderBottom,
              globalStyles.borderCulrHoverBlack,
              globalStyles.pb0p8,
            ]}>
            <AreaLocationPinOutlined color={pallete.culrMainBlack} />

            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Light,
                isIos() && globalStyles.fontWeight300,
                globalStyles.fontSize12,
                globalStyles.lineHeight16p27,
                globalStyles.textCulrMainBlack,
              ]}>
              Lekki Phase 1
            </TextComponent>
          </Box>

          <Box
            style={[
              globalStyles.flexrow,
              globalStyles.justifyBetween,
              globalStyles.alignItemsCenter,
            ]}>
            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Light,
                isIos() && globalStyles.fontWeight300,
                globalStyles.fontSize12,
                globalStyles.textCulrHoverBlack,
                globalStyles.lineHeight16p27,
              ]}>
              +30 are going
            </TextComponent>

            <Box style={[globalStyles.flexrow, globalStyles.gapX10]}>
              <Box
                style={[
                  globalStyles.p1,
                  globalStyles.bgCulrAlertVermilion,
                  globalStyles.br,
                ]}>
                <Ionicons
                  name="share-outline"
                  size={16}
                  style={[globalStyles.textCulrMainVermilion]}
                />
              </Box>

              <Box
                style={[
                  globalStyles.p1,
                  globalStyles.bgCulrAlertVermilion,
                  globalStyles.br,
                ]}>
                <Ionicons
                  name="heart-outline"
                  size={16}
                  style={[globalStyles.textCulrMainVermilion]}
                />
              </Box>
            </Box>
          </Box>

          <TextComponent
            style={[
              globalStyles.fontNeulisAlt_Light,
              isIos() && globalStyles.fontWeight300,
              globalStyles.fontSize11,
              globalStyles.textCulrMainBlack,
              globalStyles.lineHeight13p66,
              globalStyles.textCenter,
              globalStyles.mt1p6,
            ]}>
            Invited by James Patrick
          </TextComponent>

          <Box
            style={[
              globalStyles.pt0p8,
              globalStyles.flexrow,
              globalStyles.mt1,
            ]}>
            <Box flex={1}>
              <ButtonComponent
                // loading={isLoadingForgotPassword}
                // disabled={!isValid}
                title="Decline"
                whiteFilled
                text12
                height38
                onPress={() => null}
              />
            </Box>

            <Box flex={1}>
              <ButtonComponent
                // loading={isLoadingForgotPassword}
                // disabled={!isValid}
                title="Accept"
                defaultFilled
                text12
                height38
                onPress={() => null}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Shadow>
  );
};

export default InvitationCard;
