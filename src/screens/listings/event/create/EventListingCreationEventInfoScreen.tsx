import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Box from '../../../../components/layout/Box';
import HeaderComponent from '../../../../components/header/Header';
import TextComponent from '../../../../components/text/TextComponent';
import ButtonComponent from '../../../../components/button/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import {
  EventCreationRequestDto,
  MainBottomTabNavigationProps,
} from '../../../../constants/types/types';
import {Controller, useForm} from 'react-hook-form';
import TextInputComponent from '../../../../components/textInputs/TextInputComponent';
import Feather from 'react-native-vector-icons/Feather';
import SwitchProfileCard from '../../../../components/cards/SwitchProfileCard';
import {
  getFormatedDate,
  getFormatedTime,
  isIos,
} from '../../../../constants/utils/utils';
import {
  useAppDispatch,
  useAppSelector,
  useDebouncedValue,
} from '../../../../constants/utils/hooks';
import LocationAutoCompleteInput from '../../../../components/textInputs/LocationAutoCompleteInput';
import useGoogleMap from '../../../../service/googleMap';
import {updateEventCreationState} from '../../../../reducerSlices/events/eventCreationSlice';
import DateTime from '../../../../components/dateTime/DateTime';
import LayoutWithSafeAreaWithoutBg from '../../../../components/layout/LayoutWithSafeAreaWithoutBg';
import {googleLocationAutocompleteData} from '../../../../constants/utils/constants';

const EventListingCreationEventInfoScreen = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const dispatch = useAppDispatch();

  const {navigate, reset} = useNavigation<MainBottomTabNavigationProps>();

  const {
    control,
    register,
    handleSubmit,
    formState: {errors, isValid},
    setValue,
    watch,
    // reset,
  } = useForm<
    Pick<
      EventCreationRequestDto,
      'event_name' | 'location' | 'latitude' | 'longitude' | 'description'
    > & {startDate: Date; endDate: Date; startTime: Date; endTime: Date}
  >({
    defaultValues: {
      event_name: '',
      location: '',
      latitude: 0,
      longitude: 0,
      startDate: new Date(),
      endDate: new Date(),
      startTime: new Date(),
      endTime: new Date(),
      description: '',
    },
  });

  const now = useMemo(() => new Date(), []);

  register('latitude', {required: true});
  register('longitude', {required: true});

  const watchedLocationValue = watch('location');
  const watchedLatitudeValue = watch('latitude');
  const watchedLongitudeValue = watch('longitude');
  const watchedStartDate = watch('startDate');

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

  const {useGetLocationPrediction} = useGoogleMap();
  const {getLocationPredictionMutation, isLoadingGetLocationPredictions} =
    useGetLocationPrediction();

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
    // debouncedValue &&
    //   getLocationPredictionMutation(
    //     {input: debouncedValue},
    //     {
    //       onError: err => {
    //         console.log(err);
    //       },
    //     },
    //   );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  const setLocationParametersCallback = useCallback(() => {
    if (selectedPrediction) {
      setValue('location', selectedPrediction.formattedAddress);
      setValue('latitude', selectedPrediction.location.latitude);
      setValue('longitude', selectedPrediction.location.longitude);
      setPredictions([]);
    }
  }, [selectedPrediction, setValue]);

  useEffect(() => {
    debouncedGetLocationCallback();
  }, [debouncedGetLocationCallback]);

  useEffect(() => {
    setLocationParametersCallback();
  }, [setLocationParametersCallback]);

  const onSelectOptionHandler = (selection: string) => {
    predictions &&
      setSelectedPrediction(
        predictions.filter(
          prediction => prediction.formattedAddress === selection,
        )[0],
      );
  };

  const onNext = ({
    event_name,
    location,
    latitude,
    longitude,
    startDate,
    endDate,
    startTime,
    endTime,
    description,
  }: Pick<
    EventCreationRequestDto,
    'event_name' | 'location' | 'latitude' | 'longitude' | 'description'
  > & {startDate: Date; endDate: Date; startTime: Date; endTime: Date}) => {
    dispatch(
      updateEventCreationState({
        event_name,
        location,
        latitude,
        longitude,
        startDate: getFormatedDate(startDate),
        endDate: getFormatedDate(endDate),
        startTime: getFormatedTime(startTime),
        endTime: getFormatedTime(endTime),
        description,
      }),
    );

    navigate('listings', {
      screen: 'event',
      params: {
        screen: 'create',
        params: {
          screen: 'eventListingCreationTicketInfo',
        },
      },
    });
  };

  return (
    <LayoutWithSafeAreaWithoutBg
      layoutHeader={
        <HeaderComponent
          title=""
          leftIcon={{
            type: 'icon',
            icon: (
              <Box
                style={[
                  globalStyles.p1,
                  globalStyles.bgCulrAlertVermilion,
                  globalStyles.br,
                ]}>
                <Feather
                  name="chevron-left"
                  size={22}
                  style={[globalStyles.textCulrMainVermilion]}
                />
              </Box>
            ),
            onPress: () =>
              reset({
                index: 0,
                routes: [{name: 'holderBottomTab'}],
              }),
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
                globalStyles.lineHeight29p32,
              ]}>
              Create Event
            </TextComponent>
          </Box>

          <Box style={[globalStyles.pt0p5]}>
            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Regular,
                isIos() && globalStyles.fontWeight400,
                globalStyles.fontSize12,
                globalStyles.textCulrMainBlack,
                globalStyles.lineHeight16p27,
              ]}>
              Kindly fill out the informations of your event appropriately
            </TextComponent>
          </Box>

          <Box style={[globalStyles.pt2, globalStyles.gapY20]}>
            <Box>
              <Controller
                control={control}
                name="event_name"
                rules={{
                  required: {
                    value: true,
                    message: 'Event Name is required',
                  },
                }}
                render={({field: {value, onBlur, onChange}}) => (
                  <TextInputComponent
                    title="Event Name"
                    placeholder="Event Name"
                    errorText={errors?.event_name?.message}
                    value={value}
                    keyboardType="default"
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </Box>

            <Box style={[globalStyles.zIndex50]}>
              <Controller
                control={control}
                name="location"
                rules={{
                  required: {
                    value: true,
                    message: 'Event Location is required',
                  },
                  validate: () =>
                    !!watchedLatitudeValue && !!watchedLongitudeValue,
                }}
                render={({field: {value, onBlur, onChange}}) => (
                  <LocationAutoCompleteInput
                    title="Location"
                    placeholder="Location"
                    errorText={errors?.location?.message}
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

            <Box
              style={[
                globalStyles.wFull,
                globalStyles.flexrow,
                globalStyles.gapX15,
              ]}>
              <Box style={[globalStyles.flexOne]}>
                <Controller
                  control={control}
                  name="startDate"
                  rules={{
                    required: {
                      value: true,
                      message: 'Start date is required',
                    },
                    // validate: value => validateDOB(String(value)),
                  }}
                  render={({field: {value, onChange}}) => (
                    <DateTime
                      date={value}
                      title="Start Date"
                      onChange={onChange}
                      minimumDate={now}
                      initial={value.toString() !== now.toString()}
                      mode="date"
                      errorText={errors?.startDate?.message}
                    />
                  )}
                />
              </Box>

              <Box style={[globalStyles.flexOne]}>
                <Controller
                  control={control}
                  name="endDate"
                  rules={{
                    required: {
                      value: true,
                      message: 'End date is required',
                    },
                    // validate: value => validateDOB(String(value)),
                  }}
                  render={({field: {value, onChange}}) => (
                    <DateTime
                      date={value}
                      title="End Date"
                      onChange={onChange}
                      minimumDate={watchedStartDate}
                      initial={value.toString() !== now.toString()}
                      mode="date"
                      errorText={errors?.endDate?.message}
                    />
                  )}
                />
              </Box>
            </Box>

            <Box
              style={[
                globalStyles.wFull,
                globalStyles.flexrow,
                globalStyles.gapX15,
              ]}>
              <Box style={[globalStyles.flexOne]}>
                <Controller
                  control={control}
                  name="startTime"
                  rules={{
                    required: {
                      value: true,
                      message: 'Start date is required',
                    },
                    // validate: value => validateDOB(String(value)),
                  }}
                  render={({field: {value, onChange}}) => (
                    <DateTime
                      date={value}
                      title="Start Time"
                      onChange={onChange}
                      initial={value.toString() !== now.toString()}
                      mode="time"
                      errorText={errors?.startDate?.message}
                    />
                  )}
                />
              </Box>

              <Box style={[globalStyles.flexOne]}>
                <Controller
                  control={control}
                  name="endTime"
                  rules={{
                    required: {
                      value: true,
                      message: 'End time is required',
                    },
                    // validate: value => validateDOB(String(value)),
                  }}
                  render={({field: {value, onChange}}) => (
                    <DateTime
                      date={value}
                      title="End Time"
                      onChange={onChange}
                      initial={value.toString() !== now.toString()}
                      mode="time"
                      errorText={errors?.endDate?.message}
                    />
                  )}
                />
              </Box>
            </Box>

            <Box>
              <Controller
                control={control}
                name="description"
                rules={{
                  required: {
                    value: true,
                    message: 'Event Description is required',
                  },
                }}
                render={({field: {value, onBlur, onChange}}) => (
                  <TextInputComponent
                    multiline
                    title="Event Description"
                    placeholder="Event Description"
                    errorText={errors?.description?.message}
                    value={value}
                    keyboardType="default"
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </Box>
          </Box>
        </Box>

        <Box style={[globalStyles.pb6, globalStyles.mt4]}>
          <ButtonComponent
            title="Next"
            text14
            disabled={!isValid}
            onPress={handleSubmit(onNext)}
          />
        </Box>
      </Box>
    </LayoutWithSafeAreaWithoutBg>
  );
};

export default EventListingCreationEventInfoScreen;
