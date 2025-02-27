import React, {Dispatch, FC, SetStateAction, useState} from 'react';
// import {
//   ImagePickerResponse,
//   launchCamera,
//   launchImageLibrary,
// } from 'react-native-image-picker';
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
import {setImages} from '../../reducerSlices/imageCropPickerSlice';

const ImagePickerComponent: FC = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);
  const dispatch = useAppDispatch();

  const {closeModal} = useModalManager();

  const onPressImageLibrary = async () => {
    closeModal();
    const path = (await openPicker(
      mutipleImagesCropPickerOptions,
    )) as unknown as ImageOrVideo[];

    console.log(path);

    dispatch(
      setImages({
        images: path,
      }),
    );
  };

  const onPressCamera = async () => {
    try {
      closeModal();
      const path = (await openCamera(
        mutipleImagesCropPickerOptions,
      )) as unknown as ImageOrVideo[];

      dispatch(
        setImages({
          images: path,
        }),
      );
    } catch (err) {
      closeModal();
      dispatch(
        showToast({
          message: 'Camera is currently unavailable',
          status: 2,
        }),
      );
      // console.log({
      //   err: err,
      // });
    }

    // if (path.errorCode && path?.errorCode?.length > 0) {
    //   closeModal();
    //   dispatch(
    //     showToast({
    //       message: 'Camera is currently unavailable',
    //       status: 2,
    //     }),
    //   );
    //   return;
    // } else {

    // }

    // if (imagePath.errorCode && imagePath?.errorCode?.length > 0) {
    //     closeModal();
    //     dispatch(
    //         showToast({
    //             message: 'Camera is currently unavailable',
    //             status: 2,
    //         }),
    //     );
    //     return;
    // }
    // let path = await launchCamera(imagePickerOptions);
    // closeModal();
    // setImagePath(path);
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

export default ImagePickerComponent;
