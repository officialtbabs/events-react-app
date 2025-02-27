import React from 'react';
import Box from '../../../../components/layout/Box';
import HeaderComponent from '../../../../components/header/Header';
import TextComponent from '../../../../components/text/TextComponent';
import ButtonComponent from '../../../../components/button/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import {
  EventCreationRequestDto,
  NestedEventListingCreationNavigationProps,
} from '../../../../constants/types/types';
import LayoutWithSafeAreaWithoutBgWithoutScroll from '../../../../components/layout/LayoutWithSafeAreaWithoutBgWithoutScroll';
import {Controller, useFieldArray, useForm} from 'react-hook-form';
import TextInputComponent from '../../../../components/textInputs/TextInputComponent';
import Feather from 'react-native-vector-icons/Feather';
import SwitchProfileCard from '../../../../components/cards/SwitchProfileCard';
import {isIos} from '../../../../constants/utils/utils';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../constants/utils/hooks';
import PhonePickerTextInputComponent from '../../../../components/textInputs/PhonePickerTextInputComponent';
import {updateEventCreationState} from '../../../../reducerSlices/events/eventCreationSlice';

const EventListingCreationMoreInfoScreen = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<NestedEventListingCreationNavigationProps>();

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    setValue,
    // reset,
  } = useForm({
    defaultValues: {
      hosts: [
        {
          value: '',
        },
      ],
      contactPhoneNumber: '',
    },
  });

  const {fields, append, remove} = useFieldArray({
    control,
    name: 'hosts',
  });

  const setContactValue = (value: string) => {
    setValue('contactPhoneNumber', value);
  };

  const dta = useAppSelector(state => state.eventCreation);

  const onNext = ({
    hosts,
    contactPhoneNumber,
  }: Pick<EventCreationRequestDto, 'contactPhoneNumber'> & {
    hosts: {value: string}[];
  }) => {
    dispatch(
      updateEventCreationState({
        hosts: hosts.map(host => host.value),
        contactPhoneNumber,
      }),
    );

    setTimeout(() => {
      console.log(dta);
    }, 2000);

    navigate('eventListingCreationPreview');
  };

  return (
    <LayoutWithSafeAreaWithoutBgWithoutScroll
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
              More Information
            </TextComponent>
          </Box>

          {/* <Box style={[globalStyle.pt0p5]}>
            <TextComponent
              style={[
                globalStyle.fontNeulisAlt_Regular,
                isIos() && globalStyle.fontWeight400,
                globalStyle.fontSize12,
                globalStyle.textCulrMainBlack,
                globalStyle.lineHeight16p27,
              ]}>
              Kindly fill out the informations of your event appropriately
            </TextComponent>
          </Box> */}

          <Box style={[globalStyles.pt2, globalStyles.gapY20]}>
            <Box style={[globalStyles.gapY1]}>
              <TextComponent
                style={[
                  globalStyles.fontNeulisAlt_Bold,
                  isIos() && globalStyles.fontWeight700,
                  globalStyles.fontSize14,
                  globalStyles.textCulrMainBlack,
                  globalStyles.lineHeight18p88,
                ]}>
                Collaborators{' '}
                <TextComponent
                  style={[
                    globalStyles.fontNeulisAlt_LightItalic,
                    isIos() && globalStyles.fontWeight300,
                    globalStyles.fontSize11,
                    globalStyles.textCulrMainBlack,
                    globalStyles.lineHeight13p66,
                  ]}>
                  (Optional)
                </TextComponent>
              </TextComponent>

              <Box>
                {fields.map((_host, index) => (
                  <Box key={index}>
                    <Controller
                      control={control}
                      name={`hosts.${index}.value`}
                      rules={{
                        required: {
                          value: true,
                          message: 'Event Name is required',
                        },
                      }}
                      render={({field: {value, onBlur, onChange}}) => (
                        <TextInputComponent
                          title="Username / email of host"
                          placeholder="Username / email of host"
                          errorText={errors?.hosts?.[index]?.value?.message}
                          value={value}
                          keyboardType="default"
                          onChangeText={onChange}
                          onBlur={onBlur}
                        />
                      )}
                    />
                  </Box>
                ))}
              </Box>
            </Box>

            <Box style={[globalStyles.gapY1]}>
              <TextComponent
                style={[
                  globalStyles.fontNeulisAlt_Bold,
                  isIos() && globalStyles.fontWeight700,
                  globalStyles.fontSize14,
                  globalStyles.textCulrMainBlack,
                  globalStyles.lineHeight18p88,
                ]}>
                Contact Info
              </TextComponent>

              <Controller
                control={control}
                name="contactPhoneNumber"
                rules={{
                  required: {
                    value: true,
                    message: 'Contact Information is required',
                  },
                  minLength: {
                    value: 10,
                    message: 'Contact Information must be at least 10 digits',
                  },
                }}
                render={({field: {value, onBlur, onChange}}) => (
                  <PhonePickerTextInputComponent
                    // editable={!isLoadingRegister}
                    title="Contact Number"
                    keyboardType="number-pad"
                    placeholder="Contact Number"
                    errorText={errors?.contactPhoneNumber?.message}
                    onChangeText={onChange}
                    setValue={setContactValue}
                    maxLength={10}
                    value={value}
                    showContacts
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
            disabled={!isValid}
            text14
            onPress={handleSubmit(onNext)}
          />
        </Box>
      </Box>
    </LayoutWithSafeAreaWithoutBgWithoutScroll>
  );
};

export default EventListingCreationMoreInfoScreen;
