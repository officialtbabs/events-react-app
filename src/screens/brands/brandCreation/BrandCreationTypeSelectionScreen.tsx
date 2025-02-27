import React, {ReactNode, useMemo, useState} from 'react';
import Box from '../../../components/layout/Box';
import HeaderComponent from '../../../components/header/Header';
import Confetti from '../../../assets/svgs/icons/confetti-outlined.svg';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import TextComponent from '../../../components/text/TextComponent';
import PressableComponent from '../../../components/pressable/PressableComponent';
import ButtonComponent from '../../../components/button/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import {
  BrandTypeEnums,
  NestedBrandCreationStackNavigationProp,
} from '../../../constants/types/types';
import LayoutWithSafeAreaWithoutBgWithoutScroll from '../../../components/layout/LayoutWithSafeAreaWithoutBgWithoutScroll';
import RadioComponent from '../../../components/radio/RadioComponent';
import pallete from '../../../constants/colors/pallete';
import Feather from 'react-native-vector-icons/Feather';
import {useAppDispatch, useAppSelector} from '../../../constants/utils/hooks';
import {updateBrandCreationState} from '../../../reducerSlices/brands/brandCreationSlice';

export type BrandTypeOptions = {
  title: string;
  description: string;
  icon: ReactNode;
  type: BrandTypeEnums;
  onPress: () => void;
};

const BrandCreationTypeSelectionScreen = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<NestedBrandCreationStackNavigationProp>();

  const [selectedType, setSelectedType] = useState<BrandTypeEnums | null>(null);

  const brandTypeOptions = useMemo<BrandTypeOptions[]>(
    () => [
      {
        title: 'An Experience Curator',
        description:
          'Suitable for event hosts, travel agencies, tour guides, etc.',
        icon: <Confetti color={pallete.culrMainBlack} />,
        type: BrandTypeEnums.EXPERIENCE_CURATOR,
        onPress: () => {
          setSelectedType(BrandTypeEnums.EXPERIENCE_CURATOR);
        },
      },
      {
        title: 'A Leisure Location',
        description:
          'Suitable for hotels, shortlets, restaurants, beaches, cinemas, galleries etc.',
        icon: (
          <SimpleLineIcons
            name="location-pin"
            size={24}
            style={[globalStyles.textCulrMainBlack]}
          />
        ),
        type: BrandTypeEnums.LEISURE_LOCATION,
        onPress: () => {
          setSelectedType(BrandTypeEnums.LEISURE_LOCATION);
        },
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const onNext = () => {
    dispatch(updateBrandCreationState({type: selectedType}));

    navigate('brandCreationMetaData');
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
            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Regular,
                globalStyles.fontSize16,
                globalStyles.textCulrMainBlack,
              ]}>
              My Brand is
            </TextComponent>

            <Box style={[globalStyles.pt2]}>
              {brandTypeOptions.map(
                ({icon, description, title, type, onPress}, index) => (
                  <PressableComponent
                    onPress={onPress}
                    style={[
                      globalStyles.p1p6,
                      globalStyles.bgCulrLightestBlack,
                      globalStyles.borderRadius15,
                      globalStyles.mb2p4,
                      selectedType === type && globalStyles.border,
                      selectedType === type &&
                        globalStyles.borderCulrMainVermilion,
                    ]}
                    key={index.toString()}>
                    <Box
                      style={[
                        globalStyles.flexrow,
                        globalStyles.justifyBetween,
                        globalStyles.alignItemsCenter,
                      ]}>
                      <Box
                        flex={1}
                        style={[
                          globalStyles.flexrow,
                          globalStyles.alignItemsCenter,
                          globalStyles.gapX20,
                        ]}>
                        <Box>{icon}</Box>
                        <Box flex={1} style={[]}>
                          <Box>
                            <TextComponent
                              // numberOfLines={2}
                              style={[
                                globalStyles.fontNeulisAlt_Regular,
                                globalStyles.fontSize16,
                                globalStyles.textCulrMainBlack,
                              ]}>
                              {title}
                            </TextComponent>
                          </Box>
                          <Box style={[globalStyles.pt0p4]}>
                            <TextComponent
                              // numberOfLines={2}
                              style={[
                                globalStyles.fontNeulisAlt_Light,
                                globalStyles.fontSize12,
                                globalStyles.textCulrMainBlack,
                              ]}>
                              {description}
                            </TextComponent>
                          </Box>
                        </Box>
                      </Box>

                      <Box>
                        <RadioComponent
                          enabled={selectedType === type}
                          onPress={onPress}
                        />
                      </Box>
                    </Box>
                  </PressableComponent>
                ),
              )}
            </Box>
          </Box>
        </Box>

        <Box style={[globalStyles.pb6]}>
          <ButtonComponent
            disabled={!selectedType}
            title="Next"
            onPress={onNext}
          />
        </Box>
      </Box>
    </LayoutWithSafeAreaWithoutBgWithoutScroll>
  );
};

export default BrandCreationTypeSelectionScreen;
