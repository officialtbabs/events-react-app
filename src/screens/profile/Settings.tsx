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
import {MODAL_NAMES} from '../../constants/utils/constants';
import {isIos} from '../../constants/utils/utils';
import {FlashList} from '@shopify/flash-list';
import SettingsCard from '../../components/cards/SettingsCard';

const Settings = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const {openModal} = useModalManager();

  const {email, phone, gender} = useAppSelector(state => state.usrDisplayData);

  const profileSettingOptions = useMemo(
    () => [
      {
        title: 'Email',
        description: email,
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
        title: 'Phone Number',
        description: phone,
        icon: (
          <Box
            style={[
              globalStyles.p0p5,
              globalStyles.bgCulrMainBlack,
              globalStyles.br,
            ]}>
            <Feather name="phone" size={13} style={[globalStyles.textWhite]} />
          </Box>
        ),
        onPress: () => openModal(MODAL_NAMES.CHANGE_PHONE_MODAL),
      },
      {
        title: 'Gender',
        description: gender ? gender : 'None',
        icon: (
          <Box
            style={[
              globalStyles.p0p5,
              globalStyles.bgCulrMainBlack,
              globalStyles.br,
            ]}>
            <MaterialCommunityIcons
              name="gender-male-female"
              size={13}
              style={[globalStyles.textWhite]}
            />
          </Box>
        ),
        onPress: () => openModal(MODAL_NAMES.CHANGE_GENDER_MODAL),
      },
      {
        title: 'Bank Details',
        description: 'None',
        icon: (
          <Box
            style={[
              globalStyles.p0p5,
              globalStyles.bgCulrMainBlack,
              globalStyles.br,
            ]}>
            <MaterialCommunityIcons
              name="piggy-bank-outline"
              size={13}
              style={[globalStyles.textWhite]}
            />
          </Box>
        ),
        onPress: () => openModal(MODAL_NAMES.CHANGE_BANK_DETAILS_MODAL),
      },
      {
        title: 'Interests',
        description: 'Personalize your experience ',
        icon: (
          <Box
            style={[
              globalStyles.p0p5,
              globalStyles.bgCulrMainBlack,
              globalStyles.br,
            ]}>
            <Ionicons
              name="heart-outline"
              size={13}
              style={[globalStyles.textWhite]}
            />
          </Box>
        ),
        onPress: () => {},
      },
      {
        title: 'Password',
        description: 'Manage password',
        icon: (
          <Box
            style={[
              globalStyles.p0p5,
              globalStyles.bgCulrMainBlack,
              globalStyles.br,
            ]}>
            <MaterialCommunityIcons
              name="lock-outline"
              size={13}
              style={[globalStyles.textWhite]}
            />
          </Box>
        ),
        onPress: () => openModal(MODAL_NAMES.VERIFY_OLD_PASSWORD_MODAL),
      },
      {
        title: 'Notifications',
        description: 'Mute notifications',
        icon: (
          <Box
            style={[
              globalStyles.p0p5,
              globalStyles.bgCulrMainBlack,
              globalStyles.br,
            ]}>
            <MaterialCommunityIcons
              name="bell-ring-outline"
              size={13}
              style={[globalStyles.textWhite]}
            />
          </Box>
        ),
        onPress: () => {},
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [email, phone, gender],
  );

  return (
    <>
      <LayoutWithSafeAreaWithoutScroll
        layoutHeader={
          <HeaderComponent
            title="Account Settings"
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
        <Box flex={1} style={[globalStyles.px31]}>
          <Box
            flex={1}
            style={[
              globalStyles.w10,
              globalStyles.justifyBetween,
              globalStyles.pt1,
            ]}>
            <Box
              style={[
                globalStyles.bgCulrLightestBlack,
                globalStyles.borderRadius20,
                globalStyles.py2,
                globalStyles.minH80Per,
              ]}>
              <FlashList
                removeClippedSubviews
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

            <Box
              style={[
                globalStyles.pb4,
                globalStyles.flexrow,
                globalStyles.justifyCenter,
              ]}>
              <PressableComponent
                onPress={() =>
                  openModal(MODAL_NAMES.LOGOUT_CONFIRMATION_MODAL)
                }>
                <TextComponent
                  style={[
                    globalStyles.fontNeulisAlt_Bold,
                    isIos() && globalStyles.fontWeight700,
                    globalStyles.fontSize14,
                    globalStyles.textCulrMainVermilion,
                    globalStyles.lineHeight18p88,
                  ]}>
                  Log out
                </TextComponent>
              </PressableComponent>
            </Box>
          </Box>
        </Box>
      </LayoutWithSafeAreaWithoutScroll>
    </>
  );
};

export default Settings;
