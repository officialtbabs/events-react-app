import React, {useMemo} from 'react';
import {useAppSelector} from '../../constants/utils/hooks';
import Box from '../layout/Box';
import TextComponent from '../text/TextComponent';
import {isIos} from '../../constants/utils/utils';
import UserAccountCard, {UserAccountCardProps} from '../cards/UserAccountCard';

const SwitchProfileAccountModal = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);
  const {firstName, lastName} = useAppSelector(state => state.usrDisplayData);
  const accountOptions = useMemo<UserAccountCardProps[]>(
    () => [
      {
        name: `${firstName} ${lastName}`,
        accountType: 'Personal',
        onPress: () => null,
      },
      {
        name: 'MTN',
        accountType: 'Brand',
        onPress: () => null,
      },
    ],
    [firstName, lastName],
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
          <Box style={[globalStyles.w10, globalStyles.mb4]}>
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
                    Switch Account
                  </TextComponent>
                </Box>
              </Box>
            </Box>

            <Box
              style={[globalStyles.pt2, globalStyles.px2p2, globalStyles.w10]}>
              <Box style={[globalStyles.gapY10]}>
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
        </Box>
      </Box>
    </>
  );
};

export default SwitchProfileAccountModal;
