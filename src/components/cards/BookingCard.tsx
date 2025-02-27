import React, {FC} from 'react';
import Box from '../layout/Box';
import TextComponent from '../text/TextComponent';
import {useAppSelector} from '../../constants/utils/hooks';

export type BookingCardProps = {
  quantity: string;
  name: string;
  product: string;
  amount: string;
  onPress: () => void;
};

const BookingCard: FC<BookingCardProps> = ({
  quantity,
  name,
  product,
  amount,
  onPress,
}) => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  return (
    <Box
      flex={1}
      style={[
        globalStyles.bgCulrMainVermilionOpacity5,
        globalStyles.w10,
        globalStyles.py1p3,
        globalStyles.px2,
        globalStyles.borderRadius20,
        globalStyles.border4,
        globalStyles.borderCulrMainVermilionOpacity5,
      ]}>
      <Box flex={1} style={[globalStyles.flexrow, globalStyles.gapX10]}>
        <Box
          style={[
            globalStyles.h73,
            globalStyles.w66,
            globalStyles.bgWhite,
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
                {/* <SimpleLineIcons
                  name="location-pin"
                  size={12}
                  style={[globalStyle.textWhite]}
                /> */}

                <TextComponent
                  numberOfLines={1}
                  style={[
                    globalStyles.fontNeulisAlt_Regular,
                    globalStyles.fontSize10,
                    globalStyles.textCulrMainBlack,
                  ]}>
                  {product}
                </TextComponent>
              </Box>

              <TextComponent
                numberOfLines={1}
                style={[
                  globalStyles.fontNeulisAlt_Bold,
                  globalStyles.fontSize12,
                  globalStyles.textCulrMainBlack,
                  globalStyles.mt0p5,
                ]}>
                {name}
              </TextComponent>
            </Box>

            <Box
              style={[
                globalStyles.p1,
                globalStyles.bgCulrMainBlack,
                globalStyles.borderRadius10,
                globalStyles.maxW116,
              ]}>
              <TextComponent
                numberOfLines={1}
                style={[
                  globalStyles.fontNeulisAlt_Regular,
                  globalStyles.fontSize10,
                  globalStyles.textWhite,
                ]}>
                {amount}
              </TextComponent>
            </Box>
          </Box>

          <Box style={[globalStyles.flexrow, globalStyles.justifyEnd]}>
            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Regular,
                globalStyles.fontSize10,
                globalStyles.textCulrMainBlack,
              ]}>
              {quantity}
            </TextComponent>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BookingCard;
