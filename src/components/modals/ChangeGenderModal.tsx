import React, {useMemo, useState} from 'react';
import {useAppSelector, useModalManager} from '../../constants/utils/hooks';
import Box from '../layout/Box';
import TextComponent from '../text/TextComponent';
import {isIos} from '../../constants/utils/utils';
import {UserGenderEnum} from '../../constants/types/types';
import PressableComponent from '../pressable/PressableComponent';
import RadioComponent from '../radio/RadioComponent';
import ButtonComponent from '../button/ButtonComponent';

const ChangeGenderModal = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const {closeModal} = useModalManager();

  const [selectedGender, setSelectedGender] = useState<UserGenderEnum | null>(
    null,
  );

  const userGenderOptions = useMemo<UserGenderEnum[]>(
    () => [UserGenderEnum.MALE, UserGenderEnum.FEMALE],
    [],
  );

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
              <Box
                style={[
                  // globalStyle.flexrow,
                  globalStyles.alignItemsCenter,
                  globalStyles.w10,
                ]}>
                <Box style={[]}>
                  <TextComponent
                    style={[
                      globalStyles.fontSize22,
                      globalStyles.lineHeight29p32,
                      globalStyles.fontNeulisAlt_Bold,
                      isIos() && globalStyles.fontWeight700,
                      globalStyles.textCulrMainBlack,
                    ]}>
                    Gender
                  </TextComponent>
                </Box>

                <Box
                  style={[
                    globalStyles.mt2,
                    globalStyles.w10,
                    globalStyles.px2p2,
                  ]}>
                  <TextComponent
                    style={[
                      globalStyles.fontSize14,
                      globalStyles.lineHeight18p88,
                      globalStyles.fontNeulisAlt_Regular,
                      isIos() && globalStyles.fontWeight400,
                      globalStyles.textCulrMainBlack,
                    ]}>
                    Please, select your gender you below.
                  </TextComponent>
                </Box>
              </Box>
            </Box>

            <Box
              style={[
                globalStyles.mt1p6,
                globalStyles.px2p2,
                globalStyles.w10,
              ]}>
              <Box style={[globalStyles.gapY20]}>
                {userGenderOptions.map((option, index) => (
                  <PressableComponent
                    key={index}
                    onPress={() => {
                      setSelectedGender(option);
                    }}>
                    <Box
                      style={[
                        globalStyles.flexrow,
                        globalStyles.alignItemsCenter,
                        globalStyles.gapX10,
                        globalStyles.pb2,
                        globalStyles.borderBottom,
                        globalStyles.borderDashed,
                        globalStyles.borderCulrLightBlackOpacity20,
                      ]}>
                      <RadioComponent
                        enabled={selectedGender === option}
                        onPress={() => {
                          setSelectedGender(option);
                        }}
                      />
                      <Box>
                        <TextComponent
                          style={[
                            globalStyles.fontSize14,
                            globalStyles.fontNeulisAlt_Regular,
                            isIos() && globalStyles.fontWeight400,
                            globalStyles.textCulrMainBlack,
                            globalStyles.textCapitalise,
                          ]}>
                          {option}
                        </TextComponent>
                      </Box>
                    </Box>
                  </PressableComponent>
                ))}
              </Box>

              <Box style={[globalStyles.flexrow, globalStyles.mt7]}>
                <Box flex={1}>
                  <ButtonComponent
                    title="Save"
                    text14
                    //   transparent
                    //   loading={isLoadingLogin}
                    onPress={() => closeModal()}
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

export default ChangeGenderModal;
