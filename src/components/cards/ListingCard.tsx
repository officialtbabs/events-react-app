import React, {FC} from 'react';
import Box from '../layout/Box';
import TextComponent from '../text/TextComponent';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ButtonComponent from '../button/ButtonComponent';
import {isIos} from '../../constants/utils/utils';
import PressableComponent from '../pressable/PressableComponent';
import {useAppSelector} from '../../constants/utils/hooks';

export type ListingCardProps = {
  location: string;
  title: string;
  purpose: string;
  views: number;
  comments: number;
  boomarks: number;
  onPress: () => void;
};

const ListingCard: FC<ListingCardProps> = ({
  location,
  title,
  purpose,
  views,
  comments,
  boomarks,
  onPress,
}) => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);
  return (
    <PressableComponent
      style={[
        globalStyles.flexOne,
        globalStyles.bgCulrMainBlack,
        globalStyles.w10,
        globalStyles.py1p3,
        globalStyles.px2,
        globalStyles.borderRadius20,
        globalStyles.border4,
        globalStyles.borderCulrMainVermilionOpacity5,
      ]}
      onPress={onPress}>
      <Box flex={1} style={[globalStyles.flexrow, globalStyles.gapX10]}>
        <Box
          style={[
            globalStyles.h73,
            globalStyles.w66,
            globalStyles.bgCulrAlertVermilion,
            globalStyles.borderRadius5,
          ]}
        />

        <Box flex={1} style={[globalStyles.justifyBetween]}>
          <Box
            style={[
              globalStyles.w10,
              globalStyles.flexrow,
              globalStyles.alignItemsCenter,
              globalStyles.justifyBetween,
            ]}>
            <Box>
              <Box
                style={[
                  globalStyles.flexrow,
                  globalStyles.gapX5,
                  globalStyles.alignItemsCenter,
                ]}>
                <SimpleLineIcons
                  name="location-pin"
                  size={11}
                  style={[globalStyles.textWhite]}
                />

                <TextComponent
                  numberOfLines={1}
                  style={[
                    globalStyles.fontNeulisAlt_Regular,
                    isIos() && globalStyles.fontWeight400,
                    globalStyles.fontSize9,
                    globalStyles.textWhite,
                    globalStyles.lineHeight11p05,
                  ]}>
                  {location}
                </TextComponent>
              </Box>

              <TextComponent
                numberOfLines={1}
                style={[
                  globalStyles.fontNeulisAlt_Bold,
                  isIos() && globalStyles.fontWeight700,
                  globalStyles.fontSize11,
                  globalStyles.textWhite,
                  globalStyles.mt0p5,
                  globalStyles.lineHeight13p66,
                ]}>
                {title}
              </TextComponent>
            </Box>

            <Box
              style={[
                globalStyles.p1,
                globalStyles.bgWhite,
                globalStyles.borderRadius10,
                globalStyles.maxW116,
              ]}>
              <TextComponent
                numberOfLines={1}
                style={[
                  globalStyles.fontNeulisAlt_Regular,
                  isIos() && globalStyles.fontWeight400,
                  globalStyles.fontSize9,
                  globalStyles.textCulrMainBlack,
                  globalStyles.lineHeight11p05,
                ]}>
                {purpose}
              </TextComponent>
            </Box>
          </Box>

          <Box
            style={[
              globalStyles.flexrow,
              globalStyles.alignItemsCenter,
              globalStyles.gapX20,
            ]}>
            <Box
              style={[
                globalStyles.flexrow,
                globalStyles.gapX5,
                globalStyles.alignItemsCenter,
              ]}>
              <Ionicons
                name="eye-outline"
                size={13}
                style={[globalStyles.textWhite]}
              />

              <TextComponent
                style={[
                  globalStyles.fontNeulisAlt_Regular,
                  isIos() && globalStyles.fontWeight400,
                  globalStyles.fontSize9,
                  globalStyles.textWhite,
                  globalStyles.lineHeight11p05,
                ]}>
                {views}
              </TextComponent>
            </Box>

            <Box
              style={[
                globalStyles.flexrow,
                globalStyles.gapX5,
                globalStyles.alignItemsCenter,
              ]}>
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={13}
                style={[globalStyles.textWhite]}
              />

              <TextComponent
                style={[
                  globalStyles.fontNeulisAlt_Regular,
                  isIos() && globalStyles.fontWeight400,
                  globalStyles.fontSize9,
                  globalStyles.textWhite,
                  globalStyles.lineHeight11p05,
                ]}>
                {comments}
              </TextComponent>
            </Box>

            <Box
              style={[
                globalStyles.flexrow,
                globalStyles.gapX5,
                globalStyles.alignItemsCenter,
              ]}>
              <Ionicons
                name="bookmark-outline"
                size={13}
                style={[globalStyles.textWhite]}
              />

              <TextComponent
                style={[
                  globalStyles.fontNeulisAlt_Regular,
                  isIos() && globalStyles.fontWeight400,
                  globalStyles.fontSize10,
                  globalStyles.textWhite,
                ]}>
                {boomarks}
              </TextComponent>
            </Box>
          </Box>
        </Box>
      </Box>
    </PressableComponent>
  );
};

export default ListingCard;
