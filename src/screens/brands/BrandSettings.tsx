import React, {useMemo} from 'react';
import Box from '../../components/layout/Box';
import TextComponent from '../../components/text/TextComponent';
import {useAppSelector, useModalManager} from '../../constants/utils/hooks';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderComponent from '../../components/header/Header';
import PressableComponent from '../../components/pressable/PressableComponent';
import LayoutWithSafeAreaWithoutScroll from '../../components/layout/LayoutWithSafeAreaWithoutBgWithoutScroll';
import {profileStyle} from '../../components/header/ProfileHeader';
import {isIos} from '../../constants/utils/utils';
import {FlashList} from '@shopify/flash-list';
import SettingsCard from '../../components/cards/SettingsCard';
import {MODAL_NAMES} from '../../constants/utils/constants';

const BrandSettings = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const {openModal} = useModalManager();

  const profileSettingOptions = useMemo(
    () => [
      {
        title: 'Name',
        description: 'MTN',
        icon: (
          <Box
            style={[
              globalStyles.p0p5,
              globalStyles.bgCulrMainBlack,
              globalStyles.br,
            ]}>
            <Ionicons
              name="id-card-outline"
              size={13}
              style={[globalStyles.textWhite]}
            />
          </Box>
        ),
        onPress: () => null,
      },
      {
        title: 'Email',
        description: 'mtn@gmail.com',
        icon: (
          <Box
            style={[
              globalStyles.p0p5,
              globalStyles.bgCulrMainBlack,
              globalStyles.br,
            ]}>
            <Fontisto name="email" size={13} style={[globalStyles.textWhite]} />
          </Box>
        ),
        onPress: () => openModal(MODAL_NAMES.CHANGE_EMAIL_MODAL),
      },
      {
        title: 'Address',
        description: 'Lekki Lagos',
        icon: (
          <Box
            style={[
              globalStyles.p0p5,
              globalStyles.bgCulrMainBlack,
              globalStyles.br,
            ]}>
            <Ionicons
              name="location-outline"
              size={13}
              style={[globalStyles.textWhite]}
            />
          </Box>
        ),
        onPress: () => null,
      },
      {
        title: 'Description',
        description: 'Nil',
        icon: (
          <Box
            style={[
              globalStyles.p0p5,
              globalStyles.bgCulrMainBlack,
              globalStyles.br,
            ]}>
            <MaterialCommunityIcons
              name="piggy-bank-outline"
              size={15}
              style={[globalStyles.textWhite]}
            />
          </Box>
        ),
        onPress: () => null,
      },
      {
        title: 'Team',
        description: '@jay, @peter',
        icon: (
          <Box
            style={[
              globalStyles.p0p5,
              globalStyles.bgCulrMainBlack,
              globalStyles.br,
            ]}>
            <Ionicons
              name="heart-outline"
              size={15}
              style={[globalStyles.textWhite]}
            />
          </Box>
        ),
        onPress: () => null,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <>
      <LayoutWithSafeAreaWithoutScroll
        layoutHeader={
          <HeaderComponent
            title="Brand Setting"
            bottomBorder
            leftIcon={{
              type: 'icon',
              icon: (
                <Feather
                  name="chevron-left"
                  size={22}
                  style={[globalStyles.textCulrMainBlack]}
                />
              ),
            }}
          />
        }>
        <Box flex={1} style={[globalStyles.px31, globalStyles.mt1]}>
          <Box style={[globalStyles.alignItemsCenter, globalStyles.px1p6]}>
            <PressableComponent style={[profileStyle.picSize]}>
              <Box
                style={[
                  globalStyles.w10,
                  globalStyles.h10,
                  globalStyles.br,
                  globalStyles.bgCulrAlertVermilion,
                ]}
              />
            </PressableComponent>

            <Box style={[globalStyles.mt1]}>
              <Box style={[globalStyles.alignItemsCenter]}>
                <TextComponent
                  style={[
                    globalStyles.fontNeulisAlt_Bold,
                    isIos() && globalStyles.fontWeight700,
                    globalStyles.fontSize22,
                    globalStyles.textCulrMainBlack,
                    globalStyles.lineHeight29p32,
                  ]}>
                  MTN
                </TextComponent>
              </Box>
            </Box>
          </Box>

          <Box
            flex={1}
            style={[
              globalStyles.w10,
              globalStyles.justifyBetween,
              globalStyles.mt2,
            ]}>
            <Box
              style={[
                globalStyles.bgCulrLightestBlack,
                globalStyles.borderRadius20,
                globalStyles.py2,
                globalStyles.h8,
              ]}>
              <FlashList
                showsVerticalScrollIndicator={false}
                data={profileSettingOptions}
                renderItem={({item}) => (
                  <SettingsCard
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    onPress={item.onPress}
                  />
                )}
                estimatedItemSize={5}
              />
            </Box>
          </Box>
        </Box>
      </LayoutWithSafeAreaWithoutScroll>
    </>
  );
};

export default BrandSettings;
