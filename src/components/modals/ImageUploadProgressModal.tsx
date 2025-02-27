import React from 'react';
import {useAppSelector} from '../../constants/utils/hooks';
import Box from '../layout/Box';
import * as Progress from 'react-native-progress';
import TextComponent from '../text/TextComponent';
import pallete from '../../constants/colors/pallete';
import {isIos} from '../../constants/utils/utils';

const ImageUploadProgressModal = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const uploadedImageData = useAppSelector(
    state => state.imageUpload.imageData,
  );

  return (
    <>
      <Box flex={1} style={globalStyles.justifyEnd}>
        <Box
          style={[
            globalStyles.modalBr,
            globalStyles.pb3,
            globalStyles.py1,
            globalStyles.bgCulrAlertVermilion,
            globalStyles.h400,
            globalStyles.px2p2,
            globalStyles.justifyBetween,
          ]}>
          <Box style={[globalStyles.pt1p6]}>
            <TextComponent
              style={[
                globalStyles.fontSize22,
                globalStyles.lineHeight29p32,
                globalStyles.fontNeulisAlt_Bold,
                isIos() && globalStyles.fontWeight700,
                globalStyles.textCulrMainBlack,
              ]}>
              Upload Progress
            </TextComponent>

            <Box style={[globalStyles.mt2, globalStyles.gapY20]}>
              {uploadedImageData &&
                Object.keys(uploadedImageData).map((key, index) => (
                  <Box key={index}>
                    <Box
                      style={[
                        globalStyles.flexrow,
                        globalStyles.justifyBetween,
                      ]}>
                      <TextComponent
                        style={[
                          globalStyles.fontSize14,
                          globalStyles.lineHeight18p88,
                          globalStyles.fontNeulisAlt_Bold,
                          isIos() && globalStyles.fontWeight400,
                          globalStyles.textCulrMainBlack,
                        ]}>
                        {key}
                      </TextComponent>

                      <TextComponent
                        style={[
                          globalStyles.fontSize14,
                          globalStyles.lineHeight18p88,
                          globalStyles.fontNeulisAlt_Medium,
                          isIos() && globalStyles.fontWeight500,
                          globalStyles.textCulrMainBlack,
                        ]}>
                        {(uploadedImageData[key].progress as number) * 100}%
                      </TextComponent>
                    </Box>

                    <Progress.Bar
                      style={[globalStyles.wFull]}
                      key={index}
                      color={pallete.culrMainVermilion}
                      progress={uploadedImageData[key].progress as number}
                    />
                  </Box>
                ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ImageUploadProgressModal;
