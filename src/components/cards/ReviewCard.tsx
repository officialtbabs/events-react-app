import React, {FC} from 'react';
import Box from '../layout/Box';
import TextComponent from '../text/TextComponent';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import {isIos} from '../../constants/utils/utils';
import {useAppSelector} from '../../constants/utils/hooks';

export type ReviewCardProps = {
  reviewerName: string;
  review: string;
  date: string;
  listingName: string;
  onPress: () => void;
};

const ReviewCard: FC<ReviewCardProps> = ({
  reviewerName,
  date,
  review,
  listingName,
  onPress,
}) => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  return (
    <Box
      flex={1}
      style={[
        globalStyles.bgWhite,
        globalStyles.w10,
        globalStyles.p2p2,
        globalStyles.borderRadius20,
        globalStyles.border4,
        globalStyles.borderCulrMainVermilionOpacity5,
        globalStyles.gapY20,
      ]}>
      <Box style={[globalStyles.flexrow, globalStyles.gapX10]}>
        <Box
          style={[
            globalStyles.h42,
            globalStyles.w42,
            globalStyles.bgCulrAlertVermilion,
            globalStyles.br,
          ]}
        />

        <Box>
          <TextComponent
            style={[
              globalStyles.fontNeulisAlt_Bold,
              isIos() && globalStyles.fontWeight700,
              globalStyles.fontSize14,
              globalStyles.textCulrMainBlack,
              globalStyles.mt0p5,
            ]}>
            {reviewerName}
          </TextComponent>

          <TextComponent
            numberOfLines={1}
            style={[
              globalStyles.fontNeulisAlt_Light,
              isIos() && globalStyles.fontWeight300,
              globalStyles.fontSize12,
              globalStyles.textCulrHoverBlack,
              globalStyles.mt0p5,
            ]}>
            {date}
          </TextComponent>
        </Box>
      </Box>

      <Box style={[globalStyles.gapY10]}>
        <SimpleLineIcons
          name="location-pin"
          size={12}
          style={[globalStyles.textBlack]}
        />

        <TextComponent
          style={[
            globalStyles.fontNeulisAlt_Light,
            isIos() && globalStyles.fontWeight300,
            globalStyles.fontSize12,
            globalStyles.textCulrHoverBlack,
          ]}>
          {review}
        </TextComponent>
      </Box>

      <Box style={[globalStyles.flexrow]}>
        <Box
          style={[
            globalStyles.flexrow,
            globalStyles.alignItemsCenter,
            globalStyles.gapX5,
            globalStyles.h30,
            globalStyles.bgCulrAlertVermilion,
            globalStyles.borderRadius10,
            globalStyles.px1,
          ]}>
          <TextComponent
            style={[
              globalStyles.fontNeulisAlt_Bold,
              isIos() && globalStyles.fontWeight700,
              globalStyles.fontSize12,
              globalStyles.textCulrMainBlack,
            ]}>
            {listingName}
          </TextComponent>

          <Feather
            name="chevron-right"
            size={20}
            style={[globalStyles.textCulrMainBlack]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewCard;
