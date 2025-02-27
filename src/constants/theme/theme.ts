import {createTheme} from '@shopify/restyle';
import pallete from '../colors/pallete';
const lightTheme = createTheme({
  colors: {
    mainBackground: pallete.culrLayoutBg,
    grayBackground: pallete.bgGray,
    mainText: pallete.textBlack,
    bgPurple: pallete.primaryDefault,
    bgPurpleDark: pallete.primaryDark,
    textPurple: pallete.primaryDefault,
  },
  spacing: {
    xxs: 4,
    xs: 6,
    s: 8,
    m: 10,
    mm: 12,
    mmm: 14,
    l: 16,
  },
  breakpoints: {
    phone: 0,
    longPhone: {
      width: 0,
      height: 812,
    },
    tablet: 768,
    largeTablet: 1024,
  },
});
const darkTheme = createTheme({
  colors: {
    mainBackground: pallete.black,
    mainText: pallete.textBlack,
    textPurple: pallete.primaryDefault,
    bgPurple: pallete.primaryDefault,
    bgPurpleDark: pallete.primaryDark,
    grayBackground: pallete.bgGray,
  },
  spacing: {
    ...lightTheme.spacing,
  },
  breakpoints: {
    ...lightTheme.breakpoints,
  },
});

export type Theme = typeof lightTheme;
export default {lightTheme, darkTheme};
