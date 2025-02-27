import React from 'react';
import LayoutWithSafeAreaWithoutBgWithoutScroll from '../../components/layout/LayoutWithSafeAreaWithoutBgWithoutScroll';
import {useAppSelector} from '../../constants/utils/hooks';
import TextComponent from '../../components/text/TextComponent';
import Box from '../../components/layout/Box';
import {isIos} from '../../constants/utils/utils';
import {moderateScale} from 'react-native-size-matters';
import ButtonComponent from '../../components/button/ButtonComponent';

const SuccessScreen = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  console.log(moderateScale(227));

  return (
    <LayoutWithSafeAreaWithoutBgWithoutScroll>
      <Box flex={1} style={[globalStyles.px31]}>
        <Box
          flex={1}
          style={[globalStyles.justifyCenter, globalStyles.relative]}>
          <Box style={[globalStyles.alignItemsCenter, globalStyles.gapY40]}>
            <Box
              style={[
                globalStyles.w225,
                globalStyles.h225,
                globalStyles.bgBlack,
              ]}
            />

            <Box>
              <TextComponent
                style={[
                  globalStyles.fontNeulisAlt_Bold,
                  isIos() && globalStyles.fontWeight700,
                  globalStyles.fontSize18,
                  globalStyles.lineHeight24p1,
                  globalStyles.textCulrMainBlack,
                  globalStyles.textCenter,
                ]}>
                Congratulations
              </TextComponent>

              <TextComponent
                style={[
                  globalStyles.fontNeulisAlt_Regular,
                  isIos() && globalStyles.fontWeight400,
                  globalStyles.fontSize12,
                  globalStyles.lineHeight16p27,
                  globalStyles.textCulrMainBlack,
                  globalStyles.textCenter,
                ]}>
                You have successfully created “Jay Night Party”.
              </TextComponent>
            </Box>
          </Box>

          <Box
            style={[
              globalStyles.wFull,
              globalStyles.pb4,
              globalStyles.absolute,
              globalStyles.bottom0,
            ]}>
            <ButtonComponent
              // disabled={!imageUrls.length}
              text14
              title="Next"
              onPress={() => null}
            />
          </Box>
        </Box>
      </Box>
    </LayoutWithSafeAreaWithoutBgWithoutScroll>
  );
};

export default SuccessScreen;
