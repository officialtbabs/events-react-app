import React, {FC, useMemo} from 'react';
import Box from '../layout/Box';
import createGlobalStyles from '../../globalStyles/globalStyles';
import PressableComponent from '../pressable/PressableComponent';
import TextComponent from '../text/TextComponent';
import {ScaledSheet} from 'react-native-size-matters';
import {numberWithCommas} from '../../constants/utils/utils';
import ButtonComponent from '../button/ButtonComponent';

interface amountProp {
  amount: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  onBtnPress: () => void;
}

const AmountComponent: FC<amountProp> = ({amount, setAmount, onBtnPress}) => {
  const vals = useMemo(
    () => [
      {
        val: '1',
        isNum: true,
        onPress: () => {
          setAmount(val => (val += '1'));
        },
      },
      {
        val: '2',
        isNum: true,
        onPress: () => {
          setAmount(val => (val += '2'));
        },
      },
      {
        val: '3',
        isNum: true,
        onPress: () => {
          setAmount(val => (val += '3'));
        },
      },
      {
        val: '4',
        isNum: true,
        onPress: () => {
          setAmount(val => (val += '4'));
        },
      },
      {
        val: '5',
        isNum: true,
        onPress: () => {
          setAmount(val => (val += '5'));
        },
      },
      {
        val: '6',
        isNum: true,
        onPress: () => {
          setAmount(val => (val += '6'));
        },
      },
      {
        val: '7',
        isNum: true,
        onPress: () => {
          setAmount(val => (val += '7'));
        },
      },
      {
        val: '8',
        isNum: true,
        onPress: () => {
          setAmount(val => (val += '8'));
        },
      },
      {
        val: '9',
        isNum: true,
        onPress: () => {
          setAmount(val => (val += '9'));
        },
      },
      {
        val: 'CLR',
        isNum: true,
        onPress: () => {
          setAmount('');
        },
      },
      {
        val: '0',
        isNum: true,
        onPress: () => {
          setAmount(val => (val += '0'));
        },
      },
      {
        val: 'DEL',

        isNum: true,
        onPress: () => {
          if (amount.length !== 0) {
            setAmount(val => val.slice(0, val.length - 1));
          }
        },
      },
    ],
    [amount, setAmount],
  );
  return (
    <Box style={[createGlobalStyles.justifyEnd]} flex={1}>
      <Box
        style={[createGlobalStyles.flexrow, createGlobalStyles.w10, createGlobalStyles.justifyEnd]}>
        <TextComponent style={[createGlobalStyles.textWhite, createGlobalStyles.fontSize42]}>
          {!amount ? '0' : numberWithCommas(amount)}

          {/* {amount} */}
        </TextComponent>
      </Box>
      <Box
        style={[
          createGlobalStyles.w10,
          createGlobalStyles.flexrow,
          createGlobalStyles.alignItemsCenter,
          createGlobalStyles.justifyBetween,
          createGlobalStyles.flexwrap,
          createGlobalStyles.mt2,
        ]}>
        {vals.map(({isNum, onPress, val}, index) => (
          <Box
            key={index.toString()}
            style={[createGlobalStyles.w3, amtStyle.numHeight, createGlobalStyles.mb1]}>
            <PressableComponent
              style={[
                createGlobalStyles.w10,
                createGlobalStyles.h10,
                createGlobalStyles.alignItemsCenter,
                createGlobalStyles.justifyCenter,
              ]}
              onPress={onPress}>
              {isNum && (
                <TextComponent
                  style={[
                    createGlobalStyles.fontSize32,
                    createGlobalStyles.textWhite,
                    createGlobalStyles.fontGroteskBold,
                    createGlobalStyles.fontWeight600,
                  ]}>
                  {val}
                </TextComponent>
              )}
              {!isNum && val}
            </PressableComponent>
          </Box>
        ))}
      </Box>
      <Box style={[createGlobalStyles.py2p4]}>
        <ButtonComponent
          disabled={!amount.length}
          title="Proceed"
          onPress={onBtnPress}
          secondaryFilled
        />
      </Box>
    </Box>
  );
};
const amtStyle = ScaledSheet.create({
  overlay: {
    zIndex: 100,
  },
  br: {
    borderTopLeftRadius: '10@s',
    borderTopRightRadius: '10@s',
  },
  pin: {
    width: '14@s',
    height: '14@s',
    marginHorizontal: '10@s',
  },
  pinInput: {
    flexDirection: 'row',
  },
  numHeight: {
    height: '75@s',
  },
} as Record<any, any>);
export default AmountComponent;
