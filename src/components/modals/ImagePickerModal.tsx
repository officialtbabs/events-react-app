import React, {FC} from 'react';
import {
  ImageOrVideo,
  openCamera,
  openPicker,
} from 'react-native-image-crop-picker';
import {mutipleImagesCropPickerOptions} from '../../constants/utils/constants';
import TextComponent from '../text/TextComponent';
import Box from '../layout/Box';
import {showToast} from '../../reducerSlices/toastSlice';
import {
  useAppDispatch,
  useAppSelector,
  useModalManager,
} from '../../constants/utils/hooks';
import PressableComponent from '../pressable/PressableComponent';
import ButtonComponent from '../button/ButtonComponent';
import {isIos} from '../../constants/utils/utils';
import {setSingleImageFile} from '../../reducerSlices/imageCropPickerSlice';

const ImagePickerModal: FC = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);
  const dispatch = useAppDispatch();

  const {closeModal} = useModalManager();

  const onPressImageLibrary = async () => {
    closeModal();

    const file: ImageOrVideo = await openPicker(mutipleImagesCropPickerOptions);

    dispatch(
      setSingleImageFile({
        singleImageFile: file,
      }),
    );
  };

  const onPressCamera = async () => {
    closeModal();

    try {
      const file: ImageOrVideo = await openCamera(mutipleImagesCropPickerOptions);

      dispatch(
        setSingleImageFile({
          singleImageFile: file,
        }),
      );
    } catch (err) {
      dispatch(
        showToast({
          message: 'Camera is currently unavailable',
          status: 2,
        }),
      );
    }
  };

  return (
    <Box flex={1} style={[globalStyles.justifyEnd]}>
      <Box
        style={[
          globalStyles.modalBr,
          globalStyles.pb3,
          globalStyles.py1,
          globalStyles.bgCulrAlertVermilion,
        ]}>
        <Box
          style={[
            globalStyles.px2p4,
            globalStyles.pt1p4,
            globalStyles.w10,
            globalStyles.pb3,
          ]}>
          <Box
            style={[
              globalStyles.p1p6,
              globalStyles.w10,
              globalStyles.borderRadius16,
            ]}
            backgroundColor={'mainBackground'}>
            <PressableComponent
              onPress={onPressCamera}
              style={[
                globalStyles.flexrow,
                globalStyles.justifyCenter,
                globalStyles.alignItemsCenter,
                globalStyles.pb1p6,
                globalStyles.borBtm,
              ]}>
              <TextComponent
                style={[
                  globalStyles.fontNeulisAlt_Medium,
                  isIos() && globalStyles.fontWeight500,
                  globalStyles.fontSize14,
                  globalStyles.textCulrMainBlack,
                  globalStyles.lineHeight18p88,
                ]}>
                Take a photo
              </TextComponent>
            </PressableComponent>
            <PressableComponent
              onPress={onPressImageLibrary}
              style={[
                globalStyles.flexrow,
                globalStyles.justifyCenter,
                globalStyles.alignItemsCenter,
                globalStyles.pt1p6,
              ]}>
              <TextComponent
                style={[
                  globalStyles.fontNeulisAlt_Medium,
                  isIos() && globalStyles.fontWeight500,
                  globalStyles.fontSize14,
                  globalStyles.textCulrMainBlack,
                  globalStyles.lineHeight18p88,
                ]}>
                Choose from Gallery
              </TextComponent>
            </PressableComponent>
          </Box>

          <Box style={[globalStyles.pt1p6]}>
            <ButtonComponent
              title="Cancel"
              text14
              onPress={() => closeModal()}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ImagePickerModal;
