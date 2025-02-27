import React, {FC, useCallback, useEffect, useState} from 'react';
import Box from './Box';
import TextComponent from '../text/TextComponent';
import PassCodeInput from '../passcodeInput/PassCodeInput';
import {otpLength} from '../../constants/utils/constants';
import ButtonComponent from '../button/ButtonComponent';
import PressableComponent from '../pressable/PressableComponent';
import {isIos, secondsToTime} from '../../constants/utils/utils';
import {MotiView} from 'moti';
import {ScaledSheet} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAppSelector} from '../../constants/utils/hooks';

interface verifyProps {
  title: string;
  to: string;
  btnText: string;
  otp: string;
  error: boolean;
  isLoading?: boolean;
  setOtp: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: () => void;
  onResendPress: () => void;
}

const VerifyLayout: FC<verifyProps> = ({
  error,
  otp,
  setError,
  setOtp,
  title,
  to,
  onResendPress,
  onSubmit,
  btnText,
  isLoading,
}) => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const [lent, setLent] = useState(180);

  const onResend = () => {
    setLent(180);
    setTimeout(mainTime());
    onResendPress();
  };
  const mainTime = useCallback(() => {
    let format = secondsToTime(lent);
    return `${format.m}:${format.s}`;
  }, [lent]);
  const [timeout, setTimeout] = useState(mainTime());
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(mainTime());
      lent !== 0 && setLent(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [lent, mainTime]);

  return (
    <Box style={[globalStyles.w10]}>
      <Box style={[globalStyles.w10, globalStyles.justifyBetween]}>
        <Box>
          {title && (
            <Box>
              <TextComponent
                style={[
                  globalStyles.fontNeulisAlt_Bold,
                  isIos() && globalStyles.fontWeight700,
                  globalStyles.fontSize26,
                  globalStyles.textCulrMainBlack,
                  globalStyles.lineHeight37p15,
                ]}>
                {title}
              </TextComponent>
            </Box>
          )}

          <Box style={[globalStyles.pt0p5, globalStyles.w10]}>
            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Regular,
                isIos() && globalStyles.fontWeight400,
                globalStyles.fontSize14,
                globalStyles.textCulrMainBlack,
                globalStyles.lineHeight18p88,
              ]}>
              Please input the four digits code sent to
              <TextComponent
                style={[
                  globalStyles.fontNeulisAlt_Bold,
                  isIos() && globalStyles.fontWeight700,
                  globalStyles.fontSize14,
                  globalStyles.textCulrMainBlack,
                  globalStyles.lineHeight18p88,
                ]}>
                &nbsp;{to}&nbsp;
              </TextComponent>
            </TextComponent>
          </Box>

          <Box style={[globalStyles.pt2, globalStyles.w10]}>
            <PassCodeInput
              length={otpLength}
              error={error}
              setError={setError}
              code={otp}
              setCode={setOtp}
            />
          </Box>

          <Box style={[globalStyles.w10, globalStyles.mt2p4]}>
            <Box
              style={[
                globalStyles.flexrow,
                globalStyles.justifyCenter,
                globalStyles.alignItemsCenter,
              ]}>
              <Box>
                <TextComponent
                  orange
                  style={[
                    globalStyles.fontNeulisAlt_Regular,
                    isIos() && globalStyles.fontWeight400,
                    globalStyles.fontSize14,
                    globalStyles.textCulrLightBlack,
                    globalStyles.lineHeight18p88,
                  ]}>
                  Code expires in{' '}
                </TextComponent>
              </Box>

              <Box
                style={[
                  globalStyles.relative,
                  globalStyles.justifyCenter,
                  globalStyles.alignItemsCenter,
                ]}>
                <MaterialCommunityIcons
                  name="timer-outline"
                  size={25}
                  style={[globalStyles.textCulrMainVermilion]}
                />
              </Box>

              <Box
                style={[
                  globalStyles.relative,
                  globalStyles.justifyCenter,
                  globalStyles.alignItemsCenter,
                ]}>
                <TextComponent
                  style={[
                    globalStyles.fontNeulisAlt_Regular,
                    isIos() && globalStyles.fontWeight400,
                    globalStyles.fontSize14,
                    globalStyles.textCulrMainVermilion,
                    globalStyles.lineHeight18p88,
                  ]}>
                  {' '}
                  {timeout}
                </TextComponent>
              </Box>
            </Box>
          </Box>

          <MotiView
            from={{
              opacity: lent === 0 ? 1 : 0,
              scale: lent === 0 ? 1 : 0,
            }}
            style={[
              globalStyles.flexrow,
              globalStyles.justifyCenter,
              globalStyles.mt1,
            ]}>
            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Regular,
                isIos() && globalStyles.fontWeight400,
                globalStyles.fontSize14,
                globalStyles.textCulrLightBlack,
                globalStyles.lineHeight18p88,
              ]}>
              Didn’t receive the OTP?
            </TextComponent>
            <PressableComponent onPress={onResend}>
              <TextComponent
                orange
                style={[
                  globalStyles.fontNeulisAlt_Regular,
                  isIos() && globalStyles.fontWeight400,
                  globalStyles.fontSize14,
                  globalStyles.textCulrMainVermilion,
                  globalStyles.lineHeight18p88,
                ]}>
                &nbsp; Resend Code
              </TextComponent>
            </PressableComponent>
          </MotiView>
        </Box>

        <Box style={[globalStyles.w10, globalStyles.py6]}>
          <ButtonComponent
            disabled={otp.length < otpLength}
            loading={isLoading}
            title={btnText}
            text14
            onPress={onSubmit}
          />
        </Box>
        {/* <Box
          style={[
            globalStyle.pt3p2,
            globalStyle.flexrow,
            globalStyle.alignItemsCenter,
            globalStyle.justifyCenter,
          ]}>
          <TextComponent secondary style={[]}>
            Didn't get a code?
          </TextComponent>
          <PressableComponent
            onPress={onResend}
            style={[globalStyle.ml0p4]}>
            <TextComponent orange style={[globalStyle.fontWeight500]}>
              Resend Code
            </TextComponent>
          </PressableComponent>
        </Box> */}
      </Box>
    </Box>
  );
};

const verifyStyle = ScaledSheet.create({
  timerContainer: {
    width: '90@s',
    height: '50@s',
    borderRadius: '70@s',
  },
});

export default VerifyLayout;
