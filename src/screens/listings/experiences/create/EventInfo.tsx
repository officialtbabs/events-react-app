import React from 'react';
import Box from '../../../../components/layout/Box';
import HeaderComponent from '../../../../components/header/Header';
import TextComponent from '../../../../components/text/TextComponent';
import ButtonComponent from '../../../../components/button/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import {NestedCreateExperienceListingNavigationProps} from '../../../../constants/types/types';
import LayoutWithSafeAreaWithoutScroll from '../../../../components/layout/LayoutWithSafeAreaWithoutBgWithoutScroll';
import {Controller, useForm} from 'react-hook-form';
import TextInputComponent from '../../../../components/textInputs/TextInputComponent';
import Feather from 'react-native-vector-icons/Feather';
import SwitchProfileCard from '../../../../components/cards/SwitchProfileCard';
import {isIos} from '../../../../constants/utils/utils';
import {useAppSelector} from '../../../../constants/utils/hooks';

const EventInfo = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);
  const {navigate} =
    useNavigation<NestedCreateExperienceListingNavigationProps>();

  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
    reset,
  } = useForm({
    defaultValues: {
      eventName: '',
      eventLocation: '',
      eventDescription: '',
    },
  });

  return (
    <LayoutWithSafeAreaWithoutScroll
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
                name="eventName"
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
                    errorText={errors?.eventName?.message}
                    value={value}
                    keyboardType="default"
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </Box>

            <Box>
              <Controller
                control={control}
                name="eventLocation"
                rules={{
                  required: {
                    value: true,
                    message: 'Event Location is required',
                  },
                }}
                render={({field: {value, onBlur, onChange}}) => (
                  <TextInputComponent
                    title="Location"
                    placeholder="Location"
                    errorText={errors?.eventLocation?.message}
                    value={value}
                    keyboardType="default"
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </Box>

            <Box>
              <Controller
                control={control}
                name="eventDescription"
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
                    errorText={errors?.eventDescription?.message}
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

        <Box style={[globalStyles.pb6]}>
          <ButtonComponent
            title="Next"
            text14
            onPress={() => navigate('experienceTicketInfo')}
          />
        </Box>
      </Box>
    </LayoutWithSafeAreaWithoutScroll>
  );
};

export default EventInfo;
