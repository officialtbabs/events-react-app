import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Box from '../../../components/layout/Box';
import HeaderComponent from '../../../components/header/Header';
import TextComponent from '../../../components/text/TextComponent';
import PressableComponent from '../../../components/pressable/PressableComponent';
import ButtonComponent from '../../../components/button/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import {
  BrandCreationRequestDto,
  NestedBrandCreationStackNavigationProp,
} from '../../../constants/types/types';
import LayoutWithSafeAreaWithoutBgWithoutScroll from '../../../components/layout/LayoutWithSafeAreaWithoutBgWithoutScroll';
import {useForm} from 'react-hook-form';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {profileStyle} from '../../../components/header/ProfileHeader';
import {
  useAppDispatch,
  useAppSelector,
  useModalManager,
} from '../../../constants/utils/hooks';
import {ImageOrVideo, openPicker} from 'react-native-image-crop-picker';
import {
  MODAL_NAMES,
  singleImageCropPickerOptions,
} from '../../../constants/utils/constants';
import {
  clearSingleImageFile,
  setSingleImageFile,
} from '../../../reducerSlices/imageCropPickerSlice';
import useImageUpload from '../../../service/useImageUpload';
import {setImageUrl} from '../../../reducerSlices/imageUploadSlice';
import {Image} from 'react-native';
import useBrandApi from '../../../service/brandApi';
import {showToast} from '../../../reducerSlices/toastSlice';

const BrandCreationLogoUploadScreen = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<NestedBrandCreationStackNavigationProp>();

  const {
    register,
    control,
    handleSubmit,
    formState: {errors, isValid},
    setValue,
    watch,
    reset,
  } = useForm<Pick<BrandCreationRequestDto, 'logoUrl'>>({
    defaultValues: {
      logoUrl: '',
    },
  });

  register('logoUrl', {
    required: {
      value: true,
      message: 'Please upload your brand logo.',
    },
  });

  const watchedLogoUrl = watch('logoUrl');

  const {openModal, closeModal} = useModalManager();

  const selectedImage = useAppSelector(
    state => state.imageCropPicker.singleImageFile,
  );

  const uploadedImageData = useAppSelector(
    state => state.imageUpload.imageData,
  );

  const setLogoUrlCallback = useCallback(() => {
    if (uploadedImageData) {
      setValue(
        'logoUrl',
        Object.values(uploadedImageData)
          .map(value => value.imageUrl)
          .filter((value): value is string => typeof value === 'string')[0],
        {shouldValidate: true},
      );
    }
  }, [uploadedImageData, setValue]);

  useEffect(() => {
    setLogoUrlCallback();
  }, [setLogoUrlCallback]);

  const {useSingleImageUpload} = useImageUpload();
  const {singleImageUploadMutation} = useSingleImageUpload();

  const uploadSelectedImageCallback = useCallback(() => {
    if (selectedImage) {
      openModal(MODAL_NAMES.IMAGE_UPLOAD_PROGRESS_MODAL, {
        onBackdropPress: () => null,
      });

      singleImageUploadMutation(selectedImage, {
        onSuccess: res => {
          const image = selectedImage;

          dispatch(
            setImageUrl({
              imageName: image.filename,
              imageUrl: res.data.secure_url,
            }),
          );

          dispatch(clearSingleImageFile());
        },
        onError: (singleImageUploadErr: any) => {
          dispatch(
            showToast({
              status: 2,
              message:
                singleImageUploadErr?.data?.message ?? 'An error occurred',
            }),
          );
          closeModal();
        },
      });
    } else {
      closeModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, selectedImage, singleImageUploadMutation]);

  useEffect(() => {
    uploadSelectedImageCallback();
  }, [uploadSelectedImageCallback]);

  const onPressImageLibrary = async () => {
    try {
      const file: ImageOrVideo = await openPicker(singleImageCropPickerOptions);

      return dispatch(
        setSingleImageFile({
          singleImageFile: file,
        }),
      );
    } catch (error) {}
  };

  const {name, type, email, description, address, latitude, longitude} =
    useAppSelector(state => state.brandCreation);

  const {useCreateBrand} = useBrandApi();
  const {createBrandMutation, isLoadingCreateBrand} = useCreateBrand();

  const onCreateBrandButtonClick = ({
    logoUrl,
  }: Pick<BrandCreationRequestDto, 'logoUrl'>) => {
    createBrandMutation(
      {
        name,
        type,
        email,
        description,
        address,
        latitude,
        longitude,
        logoUrl,
      },
      {
        onSuccess: brandCreationRes => {
          dispatch(
            showToast({
              message: brandCreationRes.data.message,
              status: 1,
            }),
          );

          navigate('brandCreationSuccessConfirmation');
        },
        onError: (brandCreationErr: any) => {
          dispatch(
            showToast({
              status: 2,
              message: brandCreationErr?.data.message ?? 'An error occurred',
            }),
          );
          // reset();
        },
      },
    );
  };

  return (
    <LayoutWithSafeAreaWithoutBgWithoutScroll
      layoutHeader={
        <HeaderComponent
          title=""
          leftIcon={{
            type: 'icon',
            icon: (
              <Feather
                name="chevron-left"
                size={24}
                style={[
                  globalStyles.textCulrMainVermilion,
                  globalStyles.p1p2,
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
            <Box style={[]}>
              <TextComponent
                style={[
                  globalStyles.fontNeulisAlt_Bold,
                  globalStyles.fontSize30,
                  globalStyles.textCulrMainBlack,
                ]}>
                Create Brand
              </TextComponent>
            </Box>
            <Box style={[globalStyles.pt0p5]}>
              <TextComponent
                style={[
                  globalStyles.fontNeulisAlt_Regular,
                  globalStyles.fontSize16,
                  globalStyles.textCulrMainBlack,
                ]}>
                Setup your brand account
              </TextComponent>
            </Box>
          </Box>

          <Box style={[globalStyles.pt5, globalStyles.alignItemsCenter]}>
            <PressableComponent
              style={[profileStyle.picSize, globalStyles.relative]}
              onPress={onPressImageLibrary}>
              <Box
                style={[
                  globalStyles.w10,
                  globalStyles.h10,
                  globalStyles.br,
                  globalStyles.bgCulrAlertVermilion,
                  globalStyles.justifyCenter,
                  globalStyles.alignItemsCenter,
                ]}>
                {watchedLogoUrl ? (
                  <Image
                    source={{
                      uri: watchedLogoUrl,
                    }}
                    style={[
                      globalStyles.flexOne,
                      globalStyles.w9,
                      globalStyles.h9,
                      globalStyles.br,
                      globalStyles.bgCulrBtnDisabledBg,
                    ]}
                  />
                ) : (
                  <EvilIcons
                    name="image"
                    size={42}
                    style={[
                      globalStyles.textCulrMainVermilion,
                      globalStyles.p3p2,
                      globalStyles.bgCulrLightestBlack,
                      globalStyles.br,
                    ]}
                  />
                )}
              </Box>

              <Box
                style={[
                  globalStyles.flexrow,
                  globalStyles.absolute,
                  globalStyles.right0,
                  globalStyles.bottom0,
                ]}>
                <Feather
                  name="camera"
                  size={22}
                  style={[
                    globalStyles.textWhite,
                    globalStyles.p1,
                    globalStyles.bgCulrMainVermilion,
                    globalStyles.br,
                  ]}
                />
              </Box>
            </PressableComponent>
          </Box>
        </Box>

        <Box style={[globalStyles.pb6]}>
          <ButtonComponent
            title="Create Brand"
            loading={isLoadingCreateBrand}
            disabled={!isValid}
            onPress={handleSubmit(onCreateBrandButtonClick)}
          />
        </Box>
      </Box>
    </LayoutWithSafeAreaWithoutBgWithoutScroll>
  );
};

export default BrandCreationLogoUploadScreen;
