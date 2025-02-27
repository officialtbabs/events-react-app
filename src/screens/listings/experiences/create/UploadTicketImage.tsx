import React, {useState} from 'react';
import Box from '../../../../components/layout/Box';
import HeaderComponent from '../../../../components/header/Header';
import TextComponent from '../../../../components/text/TextComponent';
import PressableComponent from '../../../../components/pressable/PressableComponent';
import ButtonComponent from '../../../../components/button/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import {NestedCreateExperienceListingNavigationProps} from '../../../../constants/types/types';
import LayoutWithSafeAreaWithoutScroll from '../../../../components/layout/LayoutWithSafeAreaWithoutBgWithoutScroll';
import {useForm} from 'react-hook-form';
import Feather from 'react-native-vector-icons/Feather';
import {ImageOrVideo} from 'react-native-image-crop-picker';
import ImagePickerComponent from '../../../../components/imagePicker/ImagePickerComponent';
import SwitchProfileCard from '../../../../components/cards/SwitchProfileCard';
import {isIos} from '../../../../constants/utils/utils';
import {useAppSelector} from '../../../../constants/utils/hooks';

const UploadTicketImage = () => {
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
      brandDescription: '',
      brandAddress: '',
    },
  });

  const [moaPath, setMoaPath] = useState<ImageOrVideo | undefined>(undefined);
  const [moaModal, setMoaModal] = useState(false);

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
            <PressableComponent
              style={[globalStyles.mt1p6, globalStyles.w10]}
              onPress={() => setMoaModal(true)}>
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

              <ImagePickerComponent
                close={() => setMoaModal(false)}
                modal={moaModal}
                setModal={setMoaModal}
                setImagePath={setMoaPath}
              />
            </PressableComponent>
          </Box>
        </Box>

        <Box style={[globalStyles.pb6]}>
          <ButtonComponent
            // disabled={!type}
            text14
            title="Next"
            onPress={() => {
              navigate('experienceMoreInfo');
              //   if (type === 'Individual') {
              //     navigate('enterEmail');
              //   } else {
              //     navigate('enterDetailsBusiness');
              //     // navigate('enterPasswordBusiness');
              //   }
            }}
          />
        </Box>
      </Box>
    </LayoutWithSafeAreaWithoutScroll>
  );
};

export default UploadTicketImage;
