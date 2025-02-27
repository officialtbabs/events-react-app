import React from 'react';
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
import {emailPattern} from '../../../constants/utils/constants';
import Feather from 'react-native-vector-icons/Feather';
import {useAppDispatch, useAppSelector} from '../../../constants/utils/hooks';
import {updateBrandCreationState} from '../../../reducerSlices/brands/brandCreationSlice';

const BrandCreationMetaDataScreen = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<NestedBrandCreationStackNavigationProp>();

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    watch,
    reset,
  } = useForm<Pick<BrandCreationRequestDto, 'name' | 'email'>>({
    defaultValues: {
      name: '',
      email: '',
    },
  });

  const onNext = ({
    name,
    email,
  }: Pick<BrandCreationRequestDto, 'name' | 'email'>) => {
    dispatch(updateBrandCreationState({name, email}));

    navigate('brandCreationDescription');
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
                name="name"
                rules={{
                  required: {
                    value: true,
                    message: 'Brand Name is required',
                  },
                }}
                render={({field: {value, onBlur, onChange}}) => (
                  <TextInputComponent
                    title="Brand Name"
                    placeholder="Brand Name"
                    errorText={errors?.name?.message}
                    value={value}
                    keyboardType="default"
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </Box>

            <Box style={[globalStyles.pt2p4]}>
              <Controller
                control={control}
                name="email"
                rules={{
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                  pattern: {
                    value: emailPattern,
                    message: 'Enter a valid email',
                  },
                }}
                render={({field: {value, onBlur, onChange}}) => (
                  <TextInputComponent
                    title="Email"
                    placeholder="Email"
                    errorText={errors?.email?.message}
                    value={value}
                    keyboardType="email-address"
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
            disabled={!isValid}
            onPress={handleSubmit(onNext)}
          />
        </Box>
      </Box>
    </LayoutWithSafeAreaWithoutBgWithoutScroll>
  );
};

export default BrandCreationMetaDataScreen;
