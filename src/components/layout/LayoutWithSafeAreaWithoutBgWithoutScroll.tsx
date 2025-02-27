import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {FC, ReactNode} from 'react';
import Box from './Box';
import pallete from '../../constants/colors/pallete';
import {StatusBar} from 'react-native';
import {useAppSelector} from '../../constants/utils/hooks';
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

const LayoutWithSafeAreaWithoutBgWithoutScroll: FC<MainLayoutProps> = ({
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
              <Box flex={1} style={[transparent && globalStyles.bgTransparent]}>
                {noTouchable ? (
                  children
                ) : (
                  <TouchableWithoutFeedback
                    accessible={false}
                    onPress={Keyboard.dismiss}
                    style={[
                      globalStyles.flexOne,

                      transparent && globalStyles.bgTransparent,
                    ]}>
                    {children}
                  </TouchableWithoutFeedback>
                )}
              </Box>
            </KeyboardAvoidingView>
          ) : (
            <Box flex={1} style={[transparent && globalStyles.bgTransparent]}>
              <Box flex={1} style={[transparent && globalStyles.bgTransparent]}>
                {noTouchable ? (
                  children
                ) : (
                  <TouchableWithoutFeedback
                    accessible={false}
                    onPress={Keyboard.dismiss}
                    style={[
                      globalStyles.flexOne,
                      transparent && globalStyles.bgTransparent,
                    ]}>
                    {children}
                  </TouchableWithoutFeedback>
                )}
              </Box>
            </Box>
          )}
        </SafeAreaView>
      </Box>
    </>
  );
};

export default LayoutWithSafeAreaWithoutBgWithoutScroll;
