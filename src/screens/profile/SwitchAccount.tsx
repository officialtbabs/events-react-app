import React, {useCallback, useMemo, useState} from 'react';
import Box from '../../components/layout/Box';
import createGlobalStyles from '../../globalStyles/globalStyles';
import TextComponent from '../../components/text/TextComponent';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {MainBottomTabNavigationProps} from '../../constants/types/types';
import {isIos} from '../../constants/utils/utils';
import UserAccountCard, {
  UserAccountCardProps,
} from '../../components/cards/UserAccountCard';
import {useAppSelector} from '../../constants/utils/hooks';

const SwitchAccount = () => {
  const {goBack} = useNavigation<MainBottomTabNavigationProps>();
  const [showSwitchAccountModal, setShowSwitchAccountModal] = useState(true);

  const {firstname, lastname} = useAppSelector(state => state.usrDisplayData);

  const accountOptions = useMemo<UserAccountCardProps[]>(
    () => [
      {
        name: `${firstname} ${lastname}`,
        accountType: 'Personal',
        onPress: () => null,
      },
      {
        name: 'MTN',
        accountType: 'Brand',
        onPress: () => null,
      },
    ],
    [firstname, lastname],
  );

  const openSwitchAccountModalCallback = useCallback(() => {
    setShowSwitchAccountModal(true);
  }, []);

  const closeSwitchAccountModal = () => {
    setShowSwitchAccountModal(false);
    goBack();
  };

  useFocusEffect(openSwitchAccountModalCallback);

  return (
    <>
      {/* <BottomSheetComponent
        noOverLay
        setShowBlur={setShowSwitchAccountModal}
        showBlur={showSwitchAccountModal}
        onOverLayPress={closeSwitchAccountModal}>
        <Box style={[createGlobalStyles.w10, createGlobalStyles.mb4]}>
          <Box style={[createGlobalStyles.pt1p6]}>
            <Box style={[createGlobalStyles.alignItemsCenter, createGlobalStyles.w10]}>
              <Box>
                <TextComponent
                  style={[
                    createGlobalStyles.fontSize22,
                    createGlobalStyles.fontNeulisAlt_Bold,
                    createGlobalStyles.textCulrMainBlack,
                    createGlobalStyles.lineHeight29p32,
                    isIos() && createGlobalStyles.fontWeight700,
                  ]}>
                  Switch Account
                </TextComponent>
              </Box>
            </Box>
          </Box>

          <Box style={[createGlobalStyles.pt2, createGlobalStyles.px2p2, createGlobalStyles.w10]}>
            <Box style={[createGlobalStyles.gapY10]}>
              {accountOptions.map((option, index) => (
                <UserAccountCard
                  key={index}
                  name={option.name}
                  accountType={option.accountType}
                  onPress={option.onPress}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </BottomSheetComponent> */}
    </>
  );
};

export default SwitchAccount;
