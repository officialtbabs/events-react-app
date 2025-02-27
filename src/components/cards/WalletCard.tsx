import React, {FC, useMemo, useState} from 'react';
import Box from '../layout/Box';
import {useAppSelector} from '../../constants/utils/hooks';
import TextComponent from '../text/TextComponent';
import PressableComponent from '../pressable/PressableComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store/store';
import {setShowBalance} from '../../reducerSlices/showBalance';
import ButtonComponent from '../button/ButtonComponent';
import {isIos} from '../../constants/utils/utils';

export type WalletCardProps = {
  amount: string;
  onButtonClick: () => void;
};

const WalletCard: FC<WalletCardProps> = ({amount, onButtonClick}) => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const dispatch = useDispatch<AppDispatch>();
  const {currentCountry} = useAppSelector(state => state.flagList);
  const {name, flag, currencyName, currencySymbol} = currentCountry;

  const {showBalance} = useAppSelector(state => state.showBalance);
  const iconView = useMemo(
    () =>
      showBalance ? (
        <Ionicons
          name="eye-off-outline"
          size={22}
          style={[globalStyles.textWhite]}
        />
      ) : (
        <Ionicons
          name="eye-outline"
          size={22}
          style={[globalStyles.textWhite]}
        />
      ),
    [showBalance],
  );

  return (
    <Box
      style={[
        globalStyles.bgCulrMainBlack,
        globalStyles.w10,
        globalStyles.px2,
        globalStyles.py1p2,
        globalStyles.borderRadius20,
      ]}>
      <Box
        style={[
          globalStyles.flexrow,
          globalStyles.alignItemsCenter,
          globalStyles.justifyBetween,
        ]}>
        <Box>
          <Box style={[]}>
            <TextComponent
              numberOfLines={1}
              style={[
                globalStyles.fontNeulisAlt_Light,
                isIos() && globalStyles.fontWeight300,
                globalStyles.fontSize12,
                globalStyles.textWhite,
                globalStyles.lineHeight16p27,
              ]}>
              {` ${flag} ${name} ${'Naira'}`}
            </TextComponent>
          </Box>

          <Box
            style={[
              globalStyles.flexrow,
              globalStyles.alignItemsCenter,
              globalStyles.gap10,
              globalStyles.pt0p8,
            ]}>
            <TextComponent
              numberOfLines={1}
              style={[
                globalStyles.fontNeulisAlt_Bold,
                isIos() && globalStyles.fontWeight700,
                globalStyles.fontSize28,
                globalStyles.textWhite,
              ]}>
              {showBalance ? `${'₦'} ${amount}` : '**********'}
            </TextComponent>

            <Box style={[!showBalance && globalStyles.pb1p6]}>
              <PressableComponent
                onPress={() =>
                  dispatch(setShowBalance({showBalance: !showBalance}))
                }>
                {iconView}
              </PressableComponent>
            </Box>
          </Box>
        </Box>

        <Box>
          <ButtonComponent
            title="View Wallet"
            whiteFilled
            text11
            height40
            onPress={onButtonClick}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default WalletCard;
