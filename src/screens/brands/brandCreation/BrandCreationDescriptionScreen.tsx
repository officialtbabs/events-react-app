import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Box from '../../../components/layout/Box';
import HeaderComponent from '../../../components/header/Header';
import TextComponent from '../../../components/text/TextComponent';
import ButtonComponent from '../../../components/button/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import {
  BrandCreationRequestDto,
  NestedBrandCreationStackNavigationProp,
} from '../../../constants/types/types';
import LayoutWithSafeAreaWithoutBgWithoutScroll from '../../../components/layout/LayoutWithSafeAreaWithoutBgWithoutScroll';
import {Controller, useForm} from 'react-hook-form';
import TextInputComponent from '../../../components/textInputs/TextInputComponent';
import Feather from 'react-native-vector-icons/Feather';
import {
  useAppDispatch,
  useAppSelector,
  useDebouncedValue,
} from '../../../constants/utils/hooks';
import {googleLocationAutocompleteData} from '../../../constants/utils/constants';
import LocationAutoCompleteInput from '../../../components/textInputs/LocationAutoCompleteInput';
import {updateBrandCreationState} from '../../../reducerSlices/brands/brandCreationSlice';

const BrandCreationDescriptionScreen = () => {
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
  } = useForm<
    Pick<
      BrandCreationRequestDto,
      'description' | 'address' | 'longitude' | 'latitude'
    >
  >({
    defaultValues: {
      description: '',
      address: '',
      longitude: 0,
      latitude: 0,
    },
  });

  register('latitude', {required: true});
  register('longitude', {required: true});

  const watchedLocationValue = watch('address');
  const watchedLatitudeValue = watch('latitude');
  const watchedLongitudeValue = watch('longitude');

  const [selectedPrediction, setSelectedPrediction] = useState<Record<
    string,
    any
  > | null>(null);

  const [predictions, setPredictions] = useState<Record<string, any>[] | null>(
    null,
  );
  const mappedPredictions = useMemo(
    () =>
      predictions
        ? predictions.map(predicton => ({
            id: predicton.id,
            text: predicton.formattedAddress,
          }))
        : [],
    [predictions],
  );

  const debouncedValue = useDebouncedValue(watchedLocationValue, 300);

  const debouncedGetLocationCallback = useCallback(() => {
    if (
      debouncedValue &&
      debouncedValue !== selectedPrediction?.formattedAddress
    ) {
      setPredictions(googleLocationAutocompleteData);
    } else {
      setPredictions(null);
    }
  }, [debouncedValue, selectedPrediction]);

  useEffect(() => {
    debouncedGetLocationCallback();
  }, [debouncedGetLocationCallback]);

  const setLocationParametersCallback = useCallback(() => {
    if (selectedPrediction) {
      setValue('address', selectedPrediction.formattedAddress);
      setValue('latitude', selectedPrediction.location.latitude);
      setValue('longitude', selectedPrediction.location.longitude);
      setPredictions([]);
    }
  }, [selectedPrediction, setValue]);

  useEffect(() => {
    setLocationParametersCallback();
  }, [setLocationParametersCallback]);

  const onSelectOptionHandler = (selection: string) => {
    console.log(predictions);
    predictions &&
      setSelectedPrediction(
        predictions.filter(
          prediction => prediction.formattedAddress === selection,
        )[0],
      );
  };

  const onNext = ({
    description,
    address,
    latitude,
    longitude,
  }: Pick<
    BrandCreationRequestDto,
    'description' | 'address' | 'longitude' | 'latitude'
  >) => {
    dispatch(
      updateBrandCreationState({
        description,
        address,
        latitude,
        longitude,
      }),
    );

    navigate('brandCreationLogoUpload');
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

          <Box style={[globalStyles.pt5]}>
            <Box>
              <Controller
                control={control}
                name="description"
                rules={{
                  required: {
                    value: true,
                    message: 'Description is required',
                  },
                }}
                render={({field: {value, onBlur, onChange}}) => (
                  <TextInputComponent
                    multiline
                    title="Brand Description"
                    placeholder="Brand Description"
                    errorText={errors?.description?.message}
                    value={value}
                    keyboardType="default"
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </Box>

            <Box style={[globalStyles.pt2p4, globalStyles.zIndex50]}>
              <Controller
                control={control}
                name="address"
                rules={{
                  required: {
                    value: true,
                    message: 'Address is required',
                  },
                  validate: () =>
                    !!watchedLatitudeValue && !!watchedLongitudeValue,
                }}
                render={({field: {value, onBlur, onChange}}) => (
                  <LocationAutoCompleteInput
                    title="Brand Address"
                    placeholder="Brand Address"
                    errorText={errors?.address?.message}
                    value={value}
                    keyboardType="default"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    options={mappedPredictions}
                    onSelect={selection => onSelectOptionHandler(selection)}
                  />
                )}
              />
            </Box>
          </Box>
        </Box>

        <Box style={[globalStyles.pb4]}>
          <ButtonComponent
            disabled={!isValid}
            title="Next"
            onPress={handleSubmit(onNext)}
          />
        </Box>
      </Box>
    </LayoutWithSafeAreaWithoutBgWithoutScroll>
  );
};

export default BrandCreationDescriptionScreen;
