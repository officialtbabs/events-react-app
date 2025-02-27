import React, {FC} from 'react';
import {ScaledSheet} from 'react-native-size-matters';

import Box from '../layout/Box';
import TextComponent from '../text/TextComponent';
import IonIcons from 'react-native-vector-icons/Ionicons';

import Security from '../../assets/svgs/security.svg';

import {useMemo} from 'react';
import ReactNativeBiometrics from 'react-native-biometrics';
import {useEffect} from 'react';
import DeviceInfo from 'react-native-device-info';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import createGlobalStyles from '../../globalStyles/globalStyles';
import {useAppDispatch, useAppSelector} from '../../constants/utils/hooks';
import {showToast} from '../../reducerSlices/toastSlice';
import pallete from '../../constants/colors/pallete';
import PressableComponent from '../pressable/PressableComponent';

interface pinbioProps {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  setUseBio: React.Dispatch<React.SetStateAction<boolean>>;
  useBio: boolean;
  onClose: () => void;
  onSubmit: () => void;
  setBioDetails: React.Dispatch<
    React.SetStateAction<{
      biokey: string | undefined;
      biodevice: string | undefined;
    }>
  >;
}

const PinBioComponent: FC<pinbioProps> = ({
  code,
  setCode,
  setUseBio,
  onClose,
  onSubmit,
  setBioDetails,
  useBio,
}) => {
  const {deviceHasBio: devicehasbiometric} = useAppSelector(
    state => state.deviceHasBio,
  );
  const length = useMemo(() => 4, []);
  // const [code, setCode] = useState('');
  const dispatch = useAppDispatch();
  //   const {currentUserAccount} = useSelector(state => state.userReducer);
  //   const isTransPinSet =
  //     currentUserAccount.data.userdisplaydata.devicehastransbiometriclogin;
  const isTransPinSet = true;
  useEffect(() => {
    if (code.length === length) {
      onSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code.length]);
  useEffect(() => {
    if (useBio) {
      onSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useBio]);

  const vals = useMemo(
    () => [
      {
        val: '1',
        isNum: true,
        onPress: () => {
          if (code.length <= length) {
            setCode(val => (val += '1'));
          }
        },
      },
      {
        val: '2',
        isNum: true,
        onPress: () => {
          if (code.length <= length) {
            setCode(val => (val += '2'));
          }
        },
      },
      {
        val: '3',
        isNum: true,
        onPress: () => {
          if (code.length <= length) {
            setCode(val => (val += '3'));
          }
        },
      },
      {
        val: '4',
        isNum: true,
        onPress: () => {
          if (code.length <= length) {
            setCode(val => (val += '4'));
          }
        },
      },
      {
        val: '5',
        isNum: true,
        onPress: () => {
          if (code.length <= length) {
            setCode(val => (val += '5'));
          }
        },
      },
      {
        val: '6',
        isNum: true,
        onPress: () => {
          if (code.length <= length) {
            setCode(val => (val += '6'));
          }
        },
      },
      {
        val: '7',
        isNum: true,
        onPress: () => {
          if (code.length <= length) {
            setCode(val => (val += '7'));
          }
        },
      },
      {
        val: '8',
        isNum: true,
        onPress: () => {
          if (code.length <= length) {
            setCode(val => (val += '8'));
          }
        },
      },
      {
        val: '9',
        isNum: true,
        onPress: () => {
          if (code.length <= length) {
            setCode(val => (val += '9'));
          }
        },
      },
      {
        val: !devicehasbiometric ? (
          <MaterialCommunityIcons
            name="checkbox-blank-circle"
            size={14}
            color={pallete.white}
          />
        ) : (
          <MaterialCommunityIcons
            name="checkbox-blank-circle"
            size={14}
            color={pallete.white}
          />
          // <Security />
        ),
        isNum: false,
        onPress: async () => {
          if (!devicehasbiometric) {
            return false;
          } else {
            if (!isTransPinSet) {
              dispatch(
                showToast({
                  status: 2,
                  message: 'Enable biometric transaction authentication first',
                }),
              );
            } else {
              const rnBiometrics = ReactNativeBiometrics;
              // const { available } = await rnBiometrics.isSensorAvailable()
              // const {success, error} = await rnBiometrics.simplePrompt({
              //   promptMessage: 'Confirm ID',
              // });
              // if (success) {
              //   setUseBio(true);
              //   onSubmit();
              // }
              rnBiometrics.biometricKeysExist().then(resultObject => {
                const {keysExist} = resultObject;

                if (keysExist) {
                  rnBiometrics
                    .createSignature({
                      promptMessage: 'Verify user',
                      payload: 'TRIBAPAYBIOMETRICLOGIN',
                    })
                    .then(async resObject => {
                      const {success, signature} = resObject;

                      if (success) {
                        const biodevice = `${await DeviceInfo.getUniqueId()}${DeviceInfo.getDeviceId()}`;
                        setBioDetails({
                          biokey: signature,
                          biodevice: biodevice,
                        });
                        setUseBio(true);
                      }
                    });
                } else {
                  dispatch(
                    showToast({
                      status: 2,
                      message:
                        'Please enable transaction biometric authentication first',
                    }),
                  );
                }
              });
            }
          }
        },
      },
      {
        val: '0',
        isNum: true,
        onPress: () => {
          if (code.length <= length) {
            setCode(val => (val += '0'));
          }
        },
      },
      {
        val: 'DEL',

        isNum: true,
        onPress: () => {
          if (code.length !== 0) {
            setCode(val => val.slice(0, val.length - 1));
          }
        },
      },
    ],
    [
      code,
      length,
      setCode,
      setUseBio,
      isTransPinSet,
      setBioDetails,
      devicehasbiometric,
      dispatch,
    ],
  );

  return (
    <Box backgroundColor={'mainBackground'} style={[createGlobalStyles.w10]}>
      <Box backgroundColor={'mainBackground'} style={[pinbioStyle.br]}>
        <Box
          style={[
            createGlobalStyles.py1,
            createGlobalStyles.w10,
            createGlobalStyles.alignItemsCenter,
            createGlobalStyles.justifyCenter,
            createGlobalStyles.px2,
          ]}>
          <Box
            style={[
              createGlobalStyles.py1,
              createGlobalStyles.w10,
              // globalStyle.alignItemsEnd,
              createGlobalStyles.px3,
            ]}>
            <TextComponent
              style={[
                createGlobalStyles.textCenter,
                createGlobalStyles.fontGroteskLight,
                createGlobalStyles.fontSize18,
                createGlobalStyles.fontWeight700,
              ]}>
              Transaction PIN
            </TextComponent>
          </Box>
          <Box
            style={[
              createGlobalStyles.w10,
              createGlobalStyles.flexrow,
              createGlobalStyles.alignItemsCenter,
            ]}
            position={'absolute'}>
            <PressableComponent
              onPress={onClose}
              style={[
                createGlobalStyles.p0p3,
                createGlobalStyles.borderRadius6,
                {
                  borderWidth: 1,
                  borderColor: pallete.black0p1,
                },
              ]}>
              <IonIcons name="ios-close" size={19} color={pallete.black} />
            </PressableComponent>
          </Box>
        </Box>

        <Box style={[createGlobalStyles.w10]}>
          <Box style={[createGlobalStyles.alignItemsCenter]}>
            <Box>
              <Box style={[pinbioStyle.pinInput]}>
                {new Array(length).fill('a').map((_, index) => {
                  return (
                    <Box
                      key={index}
                      style={[
                        pinbioStyle.pin,
                        createGlobalStyles.justifyCenter,
                        createGlobalStyles.alignItemsCenter,
                        createGlobalStyles.borderRadius,
                        {
                          backgroundColor: code[index]
                            ? pallete.primaryDefault
                            : pallete.primaryDefault10,
                        },
                      ]}
                    />
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          style={[
            createGlobalStyles.w10,
            createGlobalStyles.flexrow,
            createGlobalStyles.alignItemsCenter,
            createGlobalStyles.justifyBetween,
            createGlobalStyles.flexwrap,
            createGlobalStyles.mt2,
            createGlobalStyles.relative,
          ]}>
          {vals.map(({isNum, onPress, val}, index) => (
            <Box
              key={index.toString()}
              style={[
                createGlobalStyles.w3,
                createGlobalStyles.relative,
                createGlobalStyles.justifyCenter,
                createGlobalStyles.alignItemsCenter,
                pinbioStyle.numHeight,
              ]}>
              <PressableComponent
                w10
                disabled={code.length === length && isNum}
                style={[
                  createGlobalStyles.w10,
                  createGlobalStyles.h10,
                  createGlobalStyles.alignItemsCenter,
                  createGlobalStyles.justifyCenter,
                ]}
                onPress={onPress}>
                {isNum && (
                  <TextComponent style={[createGlobalStyles.fontSize20]}>
                    {val}
                  </TextComponent>
                )}
                {!isNum && val}
              </PressableComponent>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
const pinbioStyle = ScaledSheet.create({
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
    height: '60@s',
  },
} as Record<any, any>);
export default PinBioComponent;
