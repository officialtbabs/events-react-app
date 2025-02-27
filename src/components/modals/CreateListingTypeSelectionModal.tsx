import React, {useMemo, useState} from 'react';
import {useAppSelector, useModalManager} from '../../constants/utils/hooks';
import Box from '../layout/Box';
import {LeisureCategoryOptionEnums} from '../../screens/bottomTabs/Create';
import TextComponent from '../text/TextComponent';
import {isIos} from '../../constants/utils/utils';
import RadioComponent from '../radio/RadioComponent';
import ButtonComponent from '../button/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import {MainBottomTabNavigationProps} from '../../constants/types/types';

const CreateListingTypeSelectionModal = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);
  const {closeModal} = useModalManager();

  const {navigate, goBack} = useNavigation<MainBottomTabNavigationProps>();

  const [selectedLeisure, setSelectedLeisure] =
    useState<LeisureCategoryOptionEnums | null>(null);
  const leisureCategoryOptions = useMemo<LeisureCategoryOptionEnums[]>(
    () => [
      LeisureCategoryOptionEnums.EVENT,
      LeisureCategoryOptionEnums.PLACES,
      LeisureCategoryOptionEnums.EXPERIENCES,
      LeisureCategoryOptionEnums.LOOP,
    ],
    [],
  );

  const onCancelButtonClick = () => {
    setSelectedLeisure(null);
    goBack();
    closeModal();
  };

  return (
    <>
      <Box flex={1} style={[globalStyles.justifyEnd]}>
        <Box
          style={[
            globalStyles.modalBr,
            globalStyles.pb3,
            globalStyles.py1,
            globalStyles.bgCulrAlertVermilion,
          ]}>
          <Box style={[globalStyles.w10]}>
            <Box style={[globalStyles.pt1p6]}>
              <Box style={[globalStyles.alignItemsCenter, globalStyles.w10]}>
                <Box>
                  <TextComponent
                    style={[
                      globalStyles.fontSize22,
                      globalStyles.fontNeulisAlt_Bold,
                      globalStyles.textCulrMainBlack,
                      globalStyles.lineHeight29p32,
                      isIos() && globalStyles.fontWeight700,
                    ]}>
                    Create
                  </TextComponent>
                </Box>

                <Box style={[globalStyles.pt0p5]}>
                  <TextComponent
                    style={[
                      globalStyles.fontSize12,
                      globalStyles.fontNeulisAlt_Light,
                      globalStyles.textCulrMainBlack,
                      globalStyles.lineHeight16p27,
                      isIos() && globalStyles.fontWeight300,
                    ]}>
                    Choose your leisure category
                  </TextComponent>
                </Box>
              </Box>
            </Box>

            <Box
              style={[globalStyles.pt2, globalStyles.px2p2, globalStyles.w10]}>
              <Box style={[globalStyles.gapY20]}>
                {leisureCategoryOptions.map((option, index) => (
                  <Box
                    key={index}
                    style={[
                      globalStyles.flexrow,
                      globalStyles.alignItemsCenter,
                      globalStyles.gapX10,
                      globalStyles.pb2,
                      globalStyles.borderBottom,
                      !isIos() && globalStyles.borderDashed,
                      globalStyles.borderCulrLightBlackOpacity20,
                    ]}>
                    <RadioComponent
                      enabled={selectedLeisure === option}
                      onPress={() => {
                        setSelectedLeisure(option);
                      }}
                    />
                    <Box>
                      <TextComponent
                        style={[
                          globalStyles.fontSize14,
                          globalStyles.fontNeulisAlt_Regular,
                          globalStyles.textCulrMainBlack,
                          globalStyles.lineHeight18p88,
                          isIos() && globalStyles.fontWeight400,
                        ]}>
                        {option}
                      </TextComponent>
                    </Box>
                  </Box>
                ))}
              </Box>

              <Box style={[globalStyles.flexrow, globalStyles.mt5]}>
                <Box flex={1}>
                  <ButtonComponent
                    title="Cancel"
                    text14
                    transparent
                    onPress={onCancelButtonClick}
                  />
                </Box>

                <Box flex={1}>
                  <ButtonComponent
                    title="Create"
                    text14
                    disabled={!selectedLeisure}
                    //   transparent
                    //   loading={isLoadingLogin}
                    onPress={() => {
                      switch (selectedLeisure) {
                        case LeisureCategoryOptionEnums.EVENT:
                          navigate('listings', {
                            screen: 'event',
                            params: {
                              screen: 'create',
                              params: {
                                screen: 'eventListingCreationEventInfo',
                              },
                            },
                          });
                          closeModal();
                          break;
                        case LeisureCategoryOptionEnums.EXPERIENCES:
                          navigate('listings', {
                            screen: 'experience',
                            params: {
                              screen: 'createExperience',
                              params: {
                                screen: 'experienceInfo',
                              },
                            },
                          });
                          closeModal();
                          break;
                      }
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CreateListingTypeSelectionModal;
