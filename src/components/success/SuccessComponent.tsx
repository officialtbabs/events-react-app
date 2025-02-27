import React, {FC} from 'react';
import Box from '../layout/Box';
import Ribbon from '../../assets/svgs/ribbons.svg';
import SuccessIcon from '../../assets/svgs/successIcon.svg';
import createGlobalStyles from '../../globalStyles/globalStyles';
import ButtonComponent from '../button/ButtonComponent';
import TextComponent from '../text/TextComponent';
import {useNavigation} from '@react-navigation/native';
import {MainBottomTabNavigationProps} from '../../constants/types/types';
import {useGetAllBalances} from '../../constants/utils/hooks';

interface successProp {
  title: string;
  subtitle: string;
  btnTitle?: string;
  onPress?: () => void;
  secondBtnTitle?: string;
  secondOnPress?: () => void;
  dontRefresh?: boolean;
  smallTitle?: boolean;
}

const SuccessComponent: FC<successProp> = ({
  btnTitle,
  onPress,
  subtitle,
  title,
  secondBtnTitle,
  secondOnPress,
  dontRefresh,
  smallTitle,
}) => {
  const {navigate} = useNavigation<MainBottomTabNavigationProps>();
  const goToDashboard = () => {
    navigate('holderBottomTab', {
      screen: 'home',
    });
  };
  const {getAllBalances} = useGetAllBalances();
  // useEffect(() => {
  //   getAllBalances();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <Box style={[createGlobalStyles.alignItemsCenter]} flex={1}>
      <Box style={[createGlobalStyles.alignItemsCenter]} flex={1}>
        <Ribbon />
        <Box style={[createGlobalStyles.pt0p8]}>
          <SuccessIcon />
        </Box>
        <Box style={[createGlobalStyles.pt6, createGlobalStyles.px1p6]}>
          <TextComponent
            style={[
              createGlobalStyles.fontGroteskBold,
              createGlobalStyles.fontSize26,
              createGlobalStyles.fontWeight600,
              smallTitle && createGlobalStyles.fontSize18,
            ]}>
            {title}
          </TextComponent>
        </Box>
        <Box style={[createGlobalStyles.pt1p6, createGlobalStyles.px1p6]}>
          <TextComponent secondary style={[createGlobalStyles.textCenter]}>
            {subtitle}
          </TextComponent>
        </Box>
      </Box>
      <Box style={[createGlobalStyles.px1p6, createGlobalStyles.pb3, createGlobalStyles.w10]}>
        <ButtonComponent
          title={btnTitle ?? 'Okay, Go To Dashboard'}
          onPress={() => {
            onPress ? onPress() : goToDashboard();
            !dontRefresh && getAllBalances();
          }}
        />
        {secondBtnTitle && secondOnPress && (
          <Box style={[createGlobalStyles.pt2p4]}>
            <ButtonComponent
              title={secondBtnTitle}
              onPress={() => {
                !dontRefresh && getAllBalances();
                secondOnPress();
              }}
              secondary
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SuccessComponent;
