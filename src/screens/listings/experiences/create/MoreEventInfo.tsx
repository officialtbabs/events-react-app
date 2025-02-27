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
import PhonePickerTextInputComponent from '../../../../components/textInputs/PhonePickerTextInputComponent';
import {useAppSelector} from '../../../../constants/utils/hooks';

const MoreEventInfo = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const {navigate} =
    useNavigation<NestedCreateExperienceListingNavigationProps>();

  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      eventName: '',
      eventLocation: '',
      contactInfo: '',
    },
  });

  const setContactValue = (value: string) => {
    setValue('contactInfo', value);
  };

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
                name="contactInfo"
                rules={{
                  required: {
                    value: true,
                    message: 'Contact Information is required',
                  },
                }}
                render={({field: {value, onBlur, onChange}}) => (
                  <PhonePickerTextInputComponent
                    // editable={!isLoadingRegister}
                    title="Contact Number"
                    keyboardType="number-pad"
                    placeholder="Contact Number"
                    errorText={errors?.contactInfo?.message}
                    onChangeText={onChange}
                    setValue={setContactValue}
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
          <ButtonComponent title="Next" text14 onPress={() => null} />
        </Box>
      </Box>
    </LayoutWithSafeAreaWithoutScroll>
  );
};

export default MoreEventInfo;
