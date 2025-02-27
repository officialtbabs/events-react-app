import React, {FC, ReactNode, useCallback, useMemo, useState} from 'react';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  ScrollView,
  TouchableWithoutFeedback,
  StyleSheet,
  LayoutChangeEvent,
} from 'react-native';
import pallete from '../../constants/colors/pallete';
import {useAppSelector} from '../../constants/utils/hooks';
import Box from './Box';
import {width} from '../../globalStyles/globalStyles';
import {isIos} from '../../constants/utils/utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSharedValue} from 'react-native-reanimated';

interface MainLayoutProps {
  children: ReactNode;
  transparent?: boolean;
  avoidKeyboard?: boolean;
  lightBar?: boolean;
  noTouchable?: boolean;
  layoutHeader?: ReactNode;
  carouselBackgroundItemOptions: string[];
}

const PreviewListingLayout: FC<MainLayoutProps> = ({
  children,
  avoidKeyboard = true,
  transparent = true,
  noTouchable,
  lightBar,
  layoutHeader,
  carouselBackgroundItemOptions,
}) => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);
  const {darkMode} = useAppSelector(state => state.darkMode);

  const progress = useSharedValue<number>(0);
  const carouselParentRef = React.useRef(null);
  const carouselRef = React.useRef<ICarouselInstance>(null);

  const [carouselHeight, setCarouselHeight] = useState(0);

  const onPressPagination = useCallback(
    (index: number) => {
      carouselRef.current?.scrollTo({
        count: index - progress.value,
        animated: true,
      });
    },
    [progress],
  );

  const handleSetCarouselHeight = (event: LayoutChangeEvent) => {
    const {height} = event.nativeEvent.layout;
    setCarouselHeight(height);
  };

  const renderCarousel = useMemo(() => {
    return (
      <Box
        ref={carouselParentRef}
        style={[globalStyles.relative, globalStyles.h410]}
        onLayout={handleSetCarouselHeight}>
        <Carousel
          ref={carouselRef}
          loop
          width={width}
          height={carouselHeight}
          autoPlay={true}
          autoPlayInterval={3000}
          data={carouselBackgroundItemOptions}
          scrollAnimationDuration={1000}
          onProgressChange={progress}
          renderItem={({item, index}) => (
            <ImageBackground
              key={index}
              source={{uri: item}}
              style={[
                globalStyles.flexOne,
                globalStyles.h410,
                globalStyles.bgCulrBtnDisabledBg,
              ]}
            />
          )}
        />

        <Pagination.Basic<{url: string}>
          progress={progress}
          data={carouselBackgroundItemOptions.map(url => ({url}))}
          size={8}
          dotStyle={styles.dotstyles}
          activeDotStyle={styles.activeDotStyle}
          containerStyle={[
            globalStyles.gapX5,
            globalStyles.my1,
            globalStyles.absolute,
            globalStyles.bottom0,
          ]}
          horizontal
          onPress={onPressPagination}
        />
      </Box>
    );
  }, [
    carouselHeight,
    carouselBackgroundItemOptions,
    globalStyles,
    progress,
    onPressPagination,
  ]);

  return (
    <Box style={[globalStyles.flexOne, globalStyles.bgCulrLayoutBg]}>
      {avoidKeyboard ? (
        <KeyboardAvoidingView
          style={[
            globalStyles.flexOne,
            transparent && globalStyles.bgTransparent,
          ]}
          behavior={isIos() ? 'padding' : 'height'}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            bounces={false}
            contentContainerStyle={[globalStyles.flexGrow]}
            style={[
              globalStyles.flexOne,
              globalStyles.hScreen,
              transparent && globalStyles.bgTransparent,
            ]}>
            {renderCarousel}

            <Box flex={1} style={[transparent && globalStyles.bgTransparent]}>
              {noTouchable ? (
                <>{children}</>
              ) : (
                <TouchableWithoutFeedback
                  accessible={false}
                  onPress={Keyboard.dismiss}
                  style={[globalStyles.flexOne]}>
                  {children}
                </TouchableWithoutFeedback>
              )}
            </Box>
          </ScrollView>
        </KeyboardAvoidingView>
      ) : (
        <Box flex={1} style={[transparent && globalStyles.bgTransparent]}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            bounces={false}
            contentContainerStyle={[globalStyles.flexGrow]}
            style={[
              globalStyles.hScreen,
              globalStyles.bgBlack,
              transparent && globalStyles.bgTransparent,
            ]}>
            {renderCarousel}
            <Box flex={1} style={[transparent && globalStyles.bgTransparent]}>
              {noTouchable ? (
                <>{children}</>
              ) : (
                <TouchableWithoutFeedback
                  accessible={false}
                  onPress={Keyboard.dismiss}
                  style={[globalStyles.flexOne]}>
                  {children}
                </TouchableWithoutFeedback>
              )}
            </Box>
          </ScrollView>
        </Box>
      )}

      <SafeAreaView style={[globalStyles.absolute, globalStyles.top0]}>
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
      </SafeAreaView>
    </Box>
  );
};

export default PreviewListingLayout;

const styles = StyleSheet.create({
  dotstyles: {
    borderRadius: 100,
    backgroundColor: pallete.culrMainBlackOpacity56,
  },
  activeDotStyle: {
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: pallete.culrMainVermilion,
  },
});
