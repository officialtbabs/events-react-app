import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Box from '../../../../components/layout/Box';
import HeaderComponent from '../../../../components/header/Header';
import TextComponent from '../../../../components/text/TextComponent';
import ButtonComponent from '../../../../components/button/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import {
  EventCreationRequestDto,
  NestedEventListingCreationNavigationProps,
} from '../../../../constants/types/types';
import LayoutWithSafeAreaWithoutScroll from '../../../../components/layout/LayoutWithSafeAreaWithoutBgWithoutScroll';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ImageOrVideo, openPicker} from 'react-native-image-crop-picker';
import SwitchProfileCard from '../../../../components/cards/SwitchProfileCard';
import {isIos} from '../../../../constants/utils/utils';
import {
  useAppDispatch,
  useAppSelector,
  useModalManager,
} from '../../../../constants/utils/hooks';
import {
  mutipleImagesCropPickerOptions,
  MODAL_NAMES,
} from '../../../../constants/utils/constants';
import useImageUpload from '../../../../service/useImageUpload';
import {
  clearMultipleImageFiles,
  setMultipleImageFiles,
} from '../../../../reducerSlices/imageCropPickerSlice';
import {updateEventCreationState} from '../../../../reducerSlices/events/eventCreationSlice';
import {Image, LayoutChangeEvent, StyleSheet} from 'react-native';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import {width} from '../../../../globalStyles/globalStyles';
import {
  deleteImageData,
  setImageUrl,
} from '../../../../reducerSlices/imageUploadSlice';
import {useSharedValue} from 'react-native-reanimated';
import pallete from '../../../../constants/colors/pallete';
import {showToast} from '../../../../reducerSlices/toastSlice';
import {useForm} from 'react-hook-form';
import PressableComponent from '../../../../components/pressable/PressableComponent';

const EventListingCreationImagesUploadScreen = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<NestedEventListingCreationNavigationProps>();

  const {
    register,
    handleSubmit,
    formState: {errors, isValid},
    setValue,
    watch,
    reset,
  } = useForm<Pick<EventCreationRequestDto, 'images'>>({
    defaultValues: {
      images: null,
    },
  });

  register('images', {
    required: {
      value: true,
      message: 'Please select up to five images.',
    },
  });
  const watchedImages = watch('images');

  const {openModal, closeModal} = useModalManager();

  const progress = useSharedValue<number>(0);
  const carouselRef = React.useRef<ICarouselInstance>(null);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  const selectedImages = useAppSelector(
    state => state.imageCropPicker.multipleImageFiles,
  );

  const uploadedImageData = useAppSelector(
    state => state.imageUpload.imageData,
  );

  const updateImagesCallback = useCallback(() => {
    if (uploadedImageData) {
      setValue(
        'images',
        Object.values(uploadedImageData)
          .map(value => value.imageUrl)
          .filter((value): value is string => typeof value === 'string'),
        {shouldValidate: true},
      );
    }
  }, [uploadedImageData, setValue]);

  useEffect(() => {
    updateImagesCallback();
  }, [updateImagesCallback]);

  const {useMultipleImageUpload} = useImageUpload();
  const {multipleImageUploadMutation} = useMultipleImageUpload();

  const uploadSelectImagesCallback = useCallback(() => {
    if (selectedImages) {
      openModal(MODAL_NAMES.IMAGE_UPLOAD_PROGRESS_MODAL, {
        onBackdropPress: () => null,
      });

      multipleImageUploadMutation(selectedImages, {
        onSuccess: res => {
          res.forEach((response, index) => {
            const image = selectedImages[index];

            dispatch(
              setImageUrl({
                imageName: image.filename,
                imageUrl: response.data.secure_url,
              }),
            );
          });

          dispatch(clearMultipleImageFiles());
        },
        onError: error => {
          console.log(error);
          closeModal();
        },
      });
    } else {
      closeModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, selectedImages, multipleImageUploadMutation]);

  useEffect(() => {
    uploadSelectImagesCallback();
  }, [uploadSelectImagesCallback]);

  const onPressImageLibrary = async () => {
    try {
      const files: ImageOrVideo | ImageOrVideo[] = await openPicker(
        mutipleImagesCropPickerOptions,
      );

      if (Array.isArray(files)) {
        if (
          mutipleImagesCropPickerOptions.maxFiles &&
          files.length > mutipleImagesCropPickerOptions.maxFiles
        ) {
          dispatch(
            showToast({
              message: `You can only select up to ${mutipleImagesCropPickerOptions.maxFiles} files.`,
              status: 2,
            }),
          );

          return dispatch(
            setMultipleImageFiles({
              multipleImageFiles: files.slice(
                0,
                mutipleImagesCropPickerOptions.maxFiles,
              ),
            }),
          );
        }
        return dispatch(
          setMultipleImageFiles({
            multipleImageFiles: files,
          }),
        );
      }
    } catch (error) {}
  };

  const onPressPagination = (index: number) => {
    carouselRef.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  const handleDeleteImageData = () => {
    if (uploadedImageData) {
      dispatch(
        deleteImageData({
          imageName: Object.keys(uploadedImageData)[currentCarouselIndex],
        }),
      );
    }
  };

  const [carouselHeight, setCarouselHeight] = useState(0);

  const handleSetCarouselHeight = (event: LayoutChangeEvent) => {
    const {height} = event.nativeEvent.layout;
    setCarouselHeight(height);
  };

  const onNext = ({images}: Pick<EventCreationRequestDto, 'images'>) => {
    dispatch(
      updateEventCreationState({
        images,
      }),
    );

    navigate('eventListingCreationMoreInfo');
  };

  return (
    <LayoutWithSafeAreaWithoutScroll
      layoutHeader={
        <HeaderComponent
          title=""
          leftIcon={{
            type: 'icon',
            icon: (
              <Feather
                name="chevron-left"
                size={22}
                style={[
                  globalStyles.textCulrMainVermilion,
                  globalStyles.p1,
                  globalStyles.bgCulrAlertVermilion,
                  globalStyles.br,
                ]}
              />
            ),
          }}
        />
      }>
      <Box
        flex={1}
        style={[
          globalStyles.px31,
          globalStyles.justifyBetween,
          globalStyles.pt1,
        ]}>
        <Box>
          <Box>
            <SwitchProfileCard />
          </Box>

          <Box style={[globalStyles.mt3]}>
            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Bold,
                isIos() && globalStyles.fontWeight700,
                globalStyles.fontSize22,
                globalStyles.textCulrMainBlack,
              ]}>
              Media
            </TextComponent>
          </Box>

          <Box style={[globalStyles.mt1p6]}>
            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Regular,
                isIos() && globalStyles.fontWeight400,
                globalStyles.fontSize14,
                globalStyles.lineHeight18p88,
                globalStyles.textCulrMainBlack,
              ]}>
              Upload up to 5 images of your event
            </TextComponent>

            {!(watchedImages && watchedImages.length) ? (
              <PressableComponent
                style={[globalStyles.mt1, globalStyles.w10]}
                onPress={onPressImageLibrary}>
                <Box
                  style={[
                    globalStyles.w10,
                    globalStyles.h206,
                    globalStyles.borderRadius20,
                    globalStyles.flexrow,
                    globalStyles.justifyCenter,
                    globalStyles.alignItemsCenter,
                    globalStyles.bgCulrLightestBlack,
                    globalStyles.border,
                    globalStyles.borderCulrLightBlack,
                  ]}>
                  <Box style={[globalStyles.alignItemsCenter]}>
                    <Feather
                      name="upload-cloud"
                      size={48}
                      style={[globalStyles.textCulrMainBlackOpacity56]}
                    />

                    <TextComponent
                      style={[
                        globalStyles.fontNeulisAlt_Regular,
                        isIos() && globalStyles.fontWeight400,
                        globalStyles.fontSize14,
                        globalStyles.textCulrMainBlack,
                        globalStyles.lineHeight18p88,
                        globalStyles.mt0p5,
                      ]}>
                      Click to upload media
                    </TextComponent>

                    <TextComponent
                      style={[
                        globalStyles.fontNeulisAlt_Light,
                        isIos() && globalStyles.fontWeight300,
                        globalStyles.fontSize10,
                        globalStyles.textCulrMainBlack,
                        globalStyles.lineHeight13p66,
                      ]}>
                      Max. 2mb(Jpg, Png, Web)
                    </TextComponent>
                  </Box>
                </Box>
              </PressableComponent>
            ) : (
              <Box
                style={[
                  globalStyles.mt1,
                  globalStyles.w10,
                  globalStyles.relative,
                  globalStyles.h206,
                ]}
                onLayout={handleSetCarouselHeight}>
                <Carousel
                  ref={carouselRef}
                  style={[globalStyles.borderRadius10]}
                  loop
                  width={width - 62}
                  height={carouselHeight}
                  // autoPlay={true}
                  data={watchedImages ? watchedImages : []}
                  scrollAnimationDuration={1000}
                  onProgressChange={progress}
                  onSnapToItem={setCurrentCarouselIndex}
                  renderItem={({item, index}) => (
                    <Image
                      key={index}
                      source={{
                        uri: item as string,
                      }}
                      style={[
                        globalStyles.flexOne,
                        globalStyles.h410,
                        globalStyles.bgCulrBtnDisabledBg,
                      ]}
                    />
                  )}
                />
                <Box
                  style={[
                    globalStyles.absolute,
                    globalStyles.right10,
                    globalStyles.top10,
                  ]}>
                  <PressableComponent onPress={handleDeleteImageData}>
                    <Feather
                      name="trash-2"
                      size={22}
                      style={[
                        globalStyles.textCulrMainVermilion,
                        globalStyles.p1p2,
                        globalStyles.bgCulrAlertVermilion,
                        globalStyles.br,
                      ]}
                    />
                  </PressableComponent>
                </Box>
              </Box>
            )}
          </Box>

          {!!(watchedImages && watchedImages.length) && (
            <Pagination.Basic<{url: string}>
              progress={progress}
              data={watchedImages.map(url => ({url}))}
              size={8}
              dotStyle={styles.dotstyles}
              activeDotStyle={styles.activeDotStyle}
              containerStyle={[globalStyles.gapX5, globalStyles.my1]}
              horizontal
              onPress={onPressPagination}
            />
          )}

          {!!(watchedImages && watchedImages.length) && (
            <PressableComponent
              style={[
                globalStyles.flexrow,
                globalStyles.alignItemsCenter,
                globalStyles.gapX10,
              ]}
              onPress={onPressImageLibrary}>
              <Ionicons
                name="add-outline"
                size={22}
                style={[globalStyles.textCulrMainVermilion]}
              />
              <TextComponent
                style={[
                  globalStyles.fontNeulisAlt_Bold,
                  isIos() && globalStyles.fontWeight700,
                  globalStyles.fontSize14,
                  globalStyles.textCulrMainVermilion,
                  globalStyles.lineHeight18p88,
                ]}>
                Add Image
              </TextComponent>
            </PressableComponent>
          )}
        </Box>

        <Box style={[globalStyles.pb4]}>
          <ButtonComponent
            disabled={!isValid}
            text14
            title="Next"
            onPress={handleSubmit(onNext)}
          />
        </Box>
      </Box>
    </LayoutWithSafeAreaWithoutScroll>
  );
};

export default EventListingCreationImagesUploadScreen;

const styles = StyleSheet.create({
  dotstyles: {
    borderRadius: 100,
    backgroundColor: pallete.culrMainBlackOpacity56,
  },
  activeDotStyle: {
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: pallete.culrMainVermilion,
  },
});
