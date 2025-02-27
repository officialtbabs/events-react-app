import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import React, {FC, ReactNode} from 'react';
import Box from './Box';
import pallete from '../../constants/colors/pallete';
import {StatusBar} from 'react-native';
import {useAppSelector} from '../../constants/utils/hooks';
import LinearGradient from 'react-native-linear-gradient';
import {isIos} from '../../constants/utils/utils';
import {SafeAreaView} from 'react-native-safe-area-context';

interface MainLayoutProps {
  children: ReactNode;
  transparent?: boolean;
  avoidKeyboard?: boolean;
  lightBar?: boolean;
  noTouchable?: boolean;
  layoutHeader?: ReactNode;
}

const LayoutWithSafeAreaWithoutBgWithGradient: FC<MainLayoutProps> = ({
  children,
  avoidKeyboard = true,
  transparent = true,
  noTouchable,
  lightBar,
  layoutHeader,
}) => {
  const {darkMode} = useAppSelector(state => state.darkMode);
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  return (
    <>
      <Box flex={1} style={[globalStyles.bgCulrLayoutBg]}>
        <Box style={[globalStyles.flexOne, globalStyles.h255]}>
          <LinearGradient
            style={[globalStyles.flexOne, globalStyles.h287]}
            colors={[
              pallete.culrGradientBgStop_1,
              pallete.culrGradientBgStop_2,
            ]}
            locations={[0.03, 0.3]}
            useAngle
            angle={180}
            angleCenter={{x: 0.5, y: 0.5}}>
            <SafeAreaView
              style={[
                globalStyles.flexOne,
                transparent && globalStyles.bgTransparent,
              ]}>
              <StatusBar
                translucent
                backgroundColor={pallete.transparent}
                barStyle={
                  lightBar
                    ? 'light-content'
                    : darkMode
                    ? 'light-content'
                    : 'dark-content'
                }
              />
              {layoutHeader}

              {avoidKeyboard ? (
                <KeyboardAvoidingView
                  style={[
                    globalStyles.flexOne,
                    transparent && globalStyles.bgTransparent,
                  ]}
                  behavior={isIos() ? 'padding' : 'height'}>
                  <Box
                    flex={1}
                    style={[transparent && globalStyles.bgTransparent]}>
                    {noTouchable ? (
                      <ScrollView
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                        style={[
                          globalStyles.flexOne,
                          transparent && globalStyles.bgTransparent,
                        ]}>
                        {children}
                      </ScrollView>
                    ) : (
                      <TouchableWithoutFeedback
                        accessible={false}
                        onPress={Keyboard.dismiss}
                        style={[globalStyles.flexOne]}>
                        <ScrollView
                          showsVerticalScrollIndicator={false}
                          bounces={false}
                          style={[
                            globalStyles.flexOne,
                            transparent && globalStyles.bgTransparent,
                          ]}>
                          {children}
                        </ScrollView>
                      </TouchableWithoutFeedback>
                    )}
                  </Box>
                </KeyboardAvoidingView>
              ) : (
                <Box flex={1} style={[globalStyles.bgCulrLayoutBg]}>
                  <Box
                    flex={1}
                    style={[transparent && globalStyles.bgTransparent]}>
                    {noTouchable ? (
                      <ScrollView
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                        style={[
                          globalStyles.flexOne,
                          transparent && globalStyles.bgTransparent,
                        ]}>
                        {children}
                      </ScrollView>
                    ) : (
                      <TouchableWithoutFeedback
                        accessible={false}
                        onPress={Keyboard.dismiss}
                        style={[globalStyles.flexOne]}>
                        <ScrollView
                          showsVerticalScrollIndicator={false}
                          bounces={false}
                          style={[
                            globalStyles.flexOne,
                            transparent && globalStyles.bgTransparent,
                          ]}>
                          {children}
                        </ScrollView>
                      </TouchableWithoutFeedback>
                    )}
                  </Box>
                </Box>
              )}
            </SafeAreaView>
          </LinearGradient>
        </Box>
      </Box>
    </>
  );
};

export default LayoutWithSafeAreaWithoutBgWithGradient;
