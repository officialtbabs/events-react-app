import React from 'react';
import Box from '../../components/layout/Box';
import TextComponent from '../../components/text/TextComponent';
import {useNavigation} from '@react-navigation/native';
import {AuthNavigationProps} from '../../constants/types/types';
import {useAppDispatch, useAppSelector} from '../../constants/utils/hooks';
import {setAlreadyOnboarded} from '../../reducerSlices/userOnboarded';
import ButtonWithIconComponent from '../../components/button/ButtonWithIconComponent';
import Google from '../../assets/svgs/logos/google.svg';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import HeaderComponent from '../../components/header/Header';
import CulrLogoWithoutText from '../../assets/svgs/logos/culr-logo-light-without-text.svg';
import LayoutWithSafeAreaWithoutBgWithoutScroll from '../../components/layout/LayoutWithSafeAreaWithoutBgWithoutScroll';
import {isIos} from '../../constants/utils/utils';

const SignUpOptionsScreen = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<AuthNavigationProps>();

  return (
    <>
      <LayoutWithSafeAreaWithoutBgWithoutScroll
        layoutHeader={
          <HeaderComponent
            title=""
            leftIcon={{
              type: 'icon',
              icon: (
                <AntDesign
                  name="close"
                  size={32}
                  style={[globalStyles.textCulrMainBlack]}
                />
              ),
            }}
            rightIcon={{
              type: 'text',
              text: 'Sign In',
              onPress: () => {
                navigate('loginStack', {
                  screen: 'loginScreen',
                });
              },
            }}
          />
        }>
        <Box
          style={[
            globalStyles.flexOne,
            globalStyles.px31,
            globalStyles.mt2,
            globalStyles.gapY40,
          ]}>
          <Box>
            <CulrLogoWithoutText />
          </Box>

          <Box style={[globalStyles.gapY10]}>
            <Box>
              <TextComponent
                style={[
                  globalStyles.textCulrMainBlack,
                  globalStyles.fontSize28,
                  globalStyles.fontNeulisAlt_Bold,
                  isIos() && globalStyles.fontWeight700,
                  globalStyles.lineHeight37p15,
                ]}>
                Sign Up
              </TextComponent>
            </Box>

            <Box style={[globalStyles.flexrow, globalStyles.flexwrap]}>
              <TextComponent
                style={[
                  globalStyles.flexrow,
                  globalStyles.textCulrMainBlack,
                  globalStyles.fontSize12,
                  globalStyles.fontNeulisAlt_Regular,
                  isIos() && globalStyles.fontWeight400,
                  globalStyles.lineHeight16p27,
                ]}>
                By proceeding you agree to our{' '}
                <TextComponent
                  style={[
                    globalStyles.textCulrMainBlack,
                    globalStyles.fontSize12,
                    globalStyles.fontNeulisAlt_Regular,
                    globalStyles.underline,
                    globalStyles.borderCulrMainBlack,
                    isIos() && globalStyles.fontWeight400,
                    globalStyles.lineHeight16p27,
                  ]}>
                  Terms Of Use
                </TextComponent>{' '}
                and confirm you have read our{' '}
                <TextComponent
                  style={[
                    globalStyles.textCulrMainBlack,
                    globalStyles.fontSize12,
                    globalStyles.fontNeulisAlt_Regular,
                    isIos() && globalStyles.fontWeight400,
                    globalStyles.underline,
                    globalStyles.borderCulrMainBlack,
                    globalStyles.lineHeight16p27,
                  ]}>
                  Privacy and Cookies.
                </TextComponent>
              </TextComponent>
            </Box>
          </Box>

          <Box style={[globalStyles.gapY20]}>
            <Box>
              <ButtonWithIconComponent
                icon={
                  <FontAwesome
                    name="apple"
                    size={24}
                    style={[globalStyles.textCulrMainBlack]}
                  />
                }
                defaultOutlined
                iconRight
                text14
                title="Continue with Apple"
                onPress={() => {}}
              />
            </Box>

            <Box>
              <ButtonWithIconComponent
                icon={<Google />}
                defaultOutlined
                iconRight
                text14
                title="Continue with Google"
                onPress={() => {}}
              />
            </Box>

            <Box>
              <ButtonWithIconComponent
                icon={
                  <Octicons
                    name="mail"
                    size={24}
                    style={[globalStyles.textCulrMainBlack]}
                  />
                }
                defaultOutlined
                iconRight
                text14
                title="Continue with Mail"
                onPress={() => {
                  navigate('registerStack', {
                    screen: 'enterEmail',
                  });
                  dispatch(
                    setAlreadyOnboarded({
                      onboarded: true,
                    }),
                  );
                }}
              />
            </Box>
          </Box>
          {/* </ImageBackground> */}
        </Box>
      </LayoutWithSafeAreaWithoutBgWithoutScroll>
    </>
  );
};

export default SignUpOptionsScreen;
