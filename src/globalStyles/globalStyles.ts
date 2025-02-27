import {
  DimensionValue,
  Dimensions,
  ImageStyle,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {ScaledSheet, StringifiedStyles} from 'react-native-size-matters';
import pallete from '../constants/colors/pallete';
export const {height, width} = Dimensions.get('window');

export type styleType = ViewStyle | TextStyle | ImageStyle | StringifiedStyles;

const createGlobalStyles = (statusBarHeight?: number) => {
  return ScaledSheet.create(
    {
      underline: {
        textDecorationLine: 'underline',
      },
      dot: {
        width: '6@s',
        height: '6@s',
        marginHorizontal: '6@s',
        borderRadius: '20@s',
      },
      sideWidth: {
        width: '5@s',
      },
      borderUpload: {
        borderWidth: '1@s',
        borderColor: pallete.borderUpload,
      },
      errorText: {
        color: pallete.culrErrorMainRed,
      },
      apiToast: {
        position: 'absolute',
        top: '40@s',
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10@s',
        zIndex: 1000,
      },
      flexrow: {
        flexDirection: 'row',
      },
      zIndex: {
        zIndex: 30,
      },
      zIndex50: {
        zIndex: 50,
      },
      flexwrap: {
        flexWrap: 'wrap',
      },
      borBtm: {
        borderBlockColor: pallete.borbtm,
        borderBottomWidth: '1@s',
      },
      borderTop: {
        borderTopWidth: '1@ms',
      },
      borderBottom: {
        borderBottomWidth: '1@ms',
      },
      borderRight: {
        borderRightWidth: '1@s',
      },
      bgGrayNeutral: {
        backgroundColor: pallete.borbtm,
      },
      borWhite: {
        borderColor: pallete.white,
      },
      borderWidth1: {
        borderWidth: '1@s',
      },
      borderWidth2: {
        borderWidth: '2@s',
      },
      br: {
        borderRadius: '500@s',
      },
      borderRadius: {
        borderRadius: '12@s',
      },
      borderRadius4: {
        borderRadius: '4@s',
      },
      borderRadius5: {
        borderRadius: '5@s',
      },
      borderRadius6: {
        borderRadius: '6@s',
      },
      borderRadius8: {
        borderRadius: '8@s',
      },
      borderRadius10: {
        borderRadius: '10@s',
      },
      borderRadius15: {
        borderRadius: '15@s',
      },
      borderRadius16: {
        borderRadius: '16@s',
      },
      borderRadius20: {
        borderRadius: '20@s',
      },
      borderRadius25: {
        borderRadius: '25@s',
      },
      borderBottomRadius50: {
        borderBottomLeftRadius: '50@s',
        borderBottomRightRadius: '50@s',
      },
      borderRad: {
        borderRadius: '10@s',
      },
      modalBr: {
        borderTopLeftRadius: '16@s',
        borderTopRightRadius: '16@s',
      },
      borderDashed: {
        borderStyle: 'dashed',
      },
      toastBr: {
        borderBottomRightRadius: '10@s',
        borderTopRightRadius: '10@s',
      },
      relative: {
        position: 'relative',
      },
      justifyCenter: {
        justifyContent: 'center',
      },
      justifyEvenly: {
        justifyContent: 'space-evenly',
      },
      justifyEnd: {
        justifyContent: 'flex-end',
      },
      justifyBetween: {
        justifyContent: 'space-between',
      },
      alignItemsCenter: {
        alignItems: 'center',
      },
      alignItemsEnd: {
        alignItems: 'flex-end',
      },
      alignItemsBaseline: {
        alignItems: 'baseline',
      },

      alignSelfCenter: {
        alignSelf: 'center',
      },

      gap10: {
        gap: '10@ms',
      },
      gap13: {
        gap: '13@ms',
      },
      gap20: {
        gap: '20@ms',
      },
      gap40: {
        gap: '40@ms',
      },
      gapY1: {
        rowGap: '1@ms',
      },
      gapY2: {
        rowGap: '2@ms',
      },
      gapY5: {
        rowGap: '5@ms',
      },
      gapY10: {
        rowGap: '10@ms',
      },
      gapY16: {
        rowGap: '16@ms',
      },
      gapY20: {
        rowGap: '20@ms',
      },
      gapY29: {
        rowGap: '29@ms',
      },
      gapY40: {
        rowGap: '40@ms',
      },
      gapX3: {
        columnGap: '3@ms',
      },
      gapX5: {
        columnGap: '5@ms',
      },
      gapX6: {
        columnGap: '6@ms',
      },
      gapX10: {
        columnGap: '10@ms',
      },
      gapX13: {
        columnGap: '13@ms',
      },
      gapX15: {
        columnGap: '15@ms',
      },
      gapX20: {
        columnGap: '20@ms',
      },
      gapX40: {
        columnGap: '40@ms',
      },

      absolute: {
        position: 'absolute',
      },
      top0: {
        top: '0@ms',
      },
      top10: {
        top: '10@ms',
      },
      top12: {
        top: '12@ms',
      },
      top14: {
        top: '14@ms',
      },
      top20: {
        top: '20@ms',
      },
      top50: {
        top: '50@ms',
      },
      top60: {
        top: '60@ms',
      },
      bottom0: {
        bottom: '0@ms',
      },
      left0: {
        left: '0@s',
      },
      left20: {
        left: '20@ms',
      },
      left141p5: {
        left: '141.5@ms',
      },
      right0: {
        right: '0@s',
      },
      right10: {
        right: '10@s',
      },
      flexOne: {
        flex: 1,
      },
      flexGrow: {
        flexGrow: 1,
      },
      m_0p2: {
        margin: '-2@ms' as DimensionValue,
      },
      mx1: {
        marginHorizontal: '10@ms' as DimensionValue,
      },
      mx2: {
        marginHorizontal: '20@ms' as DimensionValue,
      },
      mx2p2: {
        marginHorizontal: '22@ms' as DimensionValue,
      },
      mt0p1: {
        marginTop: '1@ms' as DimensionValue,
      },
      mt0p2: {
        marginTop: '2@ms' as DimensionValue,
      },
      mt0p4: {
        marginTop: '4@ms' as DimensionValue,
      },
      mt0p5: {
        marginTop: '5@ms' as DimensionValue,
      },
      mt0p7: {
        marginTop: '7@ms' as DimensionValue,
      },
      mt0p8: {
        marginTop: '8@ms' as DimensionValue,
      },
      mt1: {
        marginTop: '10@ms' as DimensionValue,
      },
      mt1p2: {
        marginTop: '12@ms' as DimensionValue,
      },
      mt1p5: {
        marginTop: '15@ms' as DimensionValue,
      },
      mt1p6: {
        marginTop: '16@ms' as DimensionValue,
      },
      mt2: {
        marginTop: '20@ms' as DimensionValue,
      },
      mt2p4: {
        marginTop: '24@ms' as DimensionValue,
      },
      mt2p8: {
        marginTop: '28@ms' as DimensionValue,
      },
      mt3: {
        marginTop: '30@ms' as DimensionValue,
      },
      mt3p2: {
        marginTop: '32@ms' as DimensionValue,
      },
      mt4: {
        marginTop: '40@ms' as DimensionValue,
      },
      mt5: {
        marginTop: '50@ms' as DimensionValue,
      },
      mt6: {
        marginTop: '60@ms' as DimensionValue,
      },
      mt7: {
        marginTop: '70@ms' as DimensionValue,
      },
      mt8: {
        marginTop: '80@ms' as DimensionValue,
      },
      mt9: {
        marginTop: '90@ms' as DimensionValue,
      },
      mt10: {
        marginTop: '100@ms' as DimensionValue,
      },
      mt73: {
        marginTop: '73@ms' as DimensionValue,
      },
      mt79: {
        marginTop: '79@ms' as DimensionValue,
      },
      mt247: {
        marginTop: `${(height * Number(247 / 932)).toFixed(
          2,
        )}@ms` as DimensionValue,
      },
      mtPrimaryAuth: {
        marginTop: `${200 - (statusBarHeight ?? 0)}@ms` as DimensionValue,
      },
      mtSecondaryAuth: {
        marginTop: `${200 - (statusBarHeight ?? 0)}@ms` as DimensionValue,
      },
      ml0p3: {
        marginLeft: '3@ms' as DimensionValue,
      },
      ml0p4: {
        marginLeft: '4@ms' as DimensionValue,
      },
      ml0p5: {
        marginLeft: '5@ms' as DimensionValue,
      },
      ml0p8: {
        marginLeft: '8@ms' as DimensionValue,
      },
      ml1: {
        marginLeft: '10@ms' as DimensionValue,
      },
      ml1p6: {
        marginLeft: '16@ms' as DimensionValue,
      },
      ml2: {
        marginLeft: '20@ms' as DimensionValue,
      },
      ml2p4: {
        marginLeft: '24@ms' as DimensionValue,
      },
      ml3: {
        marginLeft: '30@ms' as DimensionValue,
      },
      ml4: {
        marginLeft: '40@ms' as DimensionValue,
      },
      ml5: {
        marginLeft: '50@ms' as DimensionValue,
      },
      ml6: {
        marginLeft: '60@ms' as DimensionValue,
      },
      ml7: {
        marginLeft: '70@ms' as DimensionValue,
      },
      ml8: {
        marginLeft: '80@ms' as DimensionValue,
      },
      ml9: {
        marginLeft: '90@ms' as DimensionValue,
      },
      ml10: {
        marginLeft: '100@ms' as DimensionValue,
      },
      p0p1: {
        padding: '1@s' as DimensionValue,
      },
      p0p2: {
        padding: '2@s' as DimensionValue,
      },
      p0p3: {
        padding: '3@s' as DimensionValue,
      },
      p0p4: {
        padding: '4@s' as DimensionValue,
      },
      p0p5: {
        padding: '5@s' as DimensionValue,
      },
      p0p6: {
        padding: '6@s' as DimensionValue,
      },
      p0p7: {
        padding: '7@ms' as DimensionValue,
      },
      p0p8: {
        padding: '8@ms' as DimensionValue,
      },
      p0p9: {
        padding: '9@ms' as DimensionValue,
      },
      p1: {
        padding: '10@ms' as DimensionValue,
      },
      p1p5: {
        padding: '15@s' as DimensionValue,
      },
      p1p2: {
        padding: '12@s' as DimensionValue,
      },
      p1p6: {
        padding: '16@s' as DimensionValue,
      },
      p2: {
        padding: '20@s' as DimensionValue,
      },
      p2p2: {
        padding: '22@s' as DimensionValue,
      },
      p2p4: {
        padding: '24@s' as DimensionValue,
      },
      p3: {
        padding: '30@s' as DimensionValue,
      },
      p3p2: {
        padding: '32@s' as DimensionValue,
      },
      p4: {
        padding: '40@s' as DimensionValue,
      },
      p5: {
        padding: '50@s' as DimensionValue,
      },
      p6: {
        padding: '60@s' as DimensionValue,
      },
      p7: {
        padding: '70@s' as DimensionValue,
      },
      p8: {
        padding: '80@s' as DimensionValue,
      },
      p9: {
        padding: '90@s' as DimensionValue,
      },
      p10: {
        padding: '100@s',
      },
      pr0p4: {
        paddingRight: '4@ms',
      },
      pr0p5: {
        paddingRight: '5@ms',
      },
      pr0p6: {
        paddingRight: '6@ms',
      },
      pr0p8: {
        paddingRight: '8@ms',
      },
      pr1: {
        paddingRight: '10@ms',
      },
      pr1p2: {
        paddingRight: '12@ms',
      },
      pr1p6: {
        paddingRight: '16@ms',
      },
      pr2: {
        paddingRight: '20@ms',
      },
      pr2p4: {
        paddingRight: '24@ms',
      },
      pr3: {
        paddingRight: '30@ms',
      },
      pr4: {
        paddingRight: '40@ms',
      },
      pr5: {
        paddingRight: '50@ms',
      },
      pr6: {
        paddingRight: '60@ms',
      },
      pr7: {
        paddingRight: '70@ms',
      },
      pr8: {
        paddingRight: '80@ms',
      },
      pr9: {
        paddingRight: '90@ms',
      },
      pr10: {
        paddingRight: '100@ms',
      },
      pr31: {
        paddingRight: '31@ms',
      },
      pl0p4: {
        paddingLeft: '4@s',
      },
      pl0p5: {
        paddingLeft: '5@s',
      },
      pl0p6: {
        paddingLeft: '6@s',
      },
      pl0p8: {
        paddingLeft: '8@s',
      },
      pl1: {
        paddingLeft: '10@s',
      },
      pl1p2: {
        paddingLeft: '12@s',
      },
      pl1p6: {
        paddingLeft: '16@s',
      },
      pl2: {
        paddingLeft: '20@s',
      },
      pl2p4: {
        paddingLeft: '24@s',
      },
      pl3: {
        paddingLeft: '30@s',
      },
      pl4: {
        paddingLeft: '40@s',
      },
      pl5: {
        paddingLeft: '50@s',
      },
      pl6: {
        paddingLeft: '60@s',
      },
      pl7: {
        paddingLeft: '70@s',
      },
      pl8: {
        paddingLeft: '80@s',
      },
      pl9: {
        paddingLeft: '90@s',
      },
      pl10: {
        paddingLeft: '100@s',
      },
      pl31: {
        paddingLeft: '31@ms',
      },
      pb0p3: {
        paddingBottom: '3@s',
      },
      pb0p5: {
        paddingBottom: '5@s',
      },
      pb0p8: {
        paddingBottom: '8@s',
      },
      pb1: {
        paddingBottom: '10@s',
      },
      pb1p2: {
        paddingBottom: '12@s',
      },
      pb1p6: {
        paddingBottom: '16@s',
      },
      pb2: {
        paddingBottom: '20@s',
      },
      pb2p4: {
        paddingBottom: '24@s',
      },
      pb3: {
        paddingBottom: '30@s',
      },
      pb3p2: {
        paddingBottom: '32@s',
      },
      pb3p6: {
        paddingBottom: '36@s',
      },
      pb4: {
        paddingBottom: '40@s',
      },
      pb5: {
        paddingBottom: '50@s',
      },
      pb6: {
        paddingBottom: '60@s',
      },
      pb7: {
        paddingBottom: '70@s',
      },
      pb8: {
        paddingBottom: '80@s',
      },
      pb9: {
        paddingBottom: '90@s',
      },
      pb10: {
        paddingBottom: '100@s',
      },
      pb124: {
        paddingBottom: '124@s',
      },
      pb136: {
        paddingBottom: '136@s',
      },
      pb139: {
        paddingBottom: '139@s',
      },
      // pbAndroidStatusBar_Header: {
      //   paddingBottom: `${
      //     Number(ANDROID_STATUSBAR_HEIGHT?.toFixed(0)) + 22
      //   }@ms`,
      // },
      // pbIosStatusBar_Header: {
      //   paddingBottom: `${Number(IOS_STATUSBAR_HEIGHT?.toFixed(0)) + 108}@ms`,
      // },
      px0: {
        paddingHorizontal: '0@ms',
      },
      px0p2: {
        paddingHorizontal: '2@ms',
      },
      px0p4: {
        paddingHorizontal: '4@ms',
      },
      px0p5: {
        paddingHorizontal: '5@ms',
      },
      px0p8: {
        paddingHorizontal: '8@ms',
      },
      px0p9: {
        paddingHorizontal: '9@ms',
      },
      px1: {
        paddingHorizontal: '10@ms',
      },
      px12: {
        paddingHorizontal: '12@ms',
      },
      px16: {
        paddingHorizontal: '16@ms',
      },
      px1p2: {
        paddingHorizontal: '12@ms',
      },
      px1p5: {
        paddingHorizontal: '15@ms',
      },
      px1p6: {
        paddingHorizontal: '16@ms',
      },
      px1p8: {
        paddingHorizontal: '18@ms',
      },
      px2: {
        paddingHorizontal: '20@ms',
      },
      px2p2: {
        paddingHorizontal: '22@ms',
      },
      px2p4: {
        paddingHorizontal: '24@ms',
      },
      px3: {
        paddingHorizontal: '30@ms',
      },
      px3p2: {
        paddingHorizontal: '32@ms',
      },
      px4: {
        paddingHorizontal: '40@ms',
      },
      px5: {
        paddingHorizontal: '50@ms',
      },
      px6: {
        paddingHorizontal: '60@ms',
      },
      px7: {
        paddingHorizontal: '70@ms',
      },
      px8: {
        paddingHorizontal: '80@ms',
      },
      px9: {
        paddingHorizontal: '90@ms',
      },
      px10: {
        paddingHorizontal: '100@ms',
      },
      px22: {
        paddingHorizontal: '22@ms',
      },
      px31: {
        paddingHorizontal: '31@ms',
      },
      py0p2: {
        paddingVertical: '2@ms',
      },
      py0p4: {
        paddingVertical: '4@ms',
      },
      py0p5: {
        paddingVertical: '5@ms',
      },
      py0p6: {
        paddingVertical: '6@ms',
      },
      py0p8: {
        paddingVertical: '8@ms',
      },
      py0p9: {
        paddingVertical: '9@ms',
      },
      py1p1: {
        paddingVertical: '11@ms',
      },
      py1p2: {
        paddingVertical: '12@ms',
      },
      py1: {
        paddingVertical: '10@ms',
      },
      py0: {
        paddingVertical: '0@ms',
      },
      py1p3: {
        paddingVertical: '13@ms',
      },
      py1p6: {
        paddingVertical: '16@ms',
      },
      py1p5: {
        paddingVertical: '15@ms',
      },
      py2: {
        paddingVertical: '20@ms',
      },
      py2p4: {
        paddingVertical: '24@ms',
      },
      py3: {
        paddingVertical: '30@ms',
      },
      py4: {
        paddingVertical: '40@ms',
      },
      py5: {
        paddingVertical: '50@ms',
      },
      py6: {
        paddingVertical: '60@ms',
      },
      py7: {
        paddingVertical: '70@ms',
      },
      py8: {
        paddingVertical: '80@ms',
      },
      py9: {
        paddingVertical: '90@ms',
      },
      py10: {
        paddingVertical: '100@ms',
      },
      // ptStatus: {
      //   paddingTop: IOS_STATUSBAR_HEIGHT + 10,
      // },
      pt0p2: {
        paddingTop: '2@ms',
      },
      pt0p4: {
        paddingTop: '4@ms',
      },
      pt0p5: {
        paddingTop: '5@ms',
      },
      pt0p8: {
        paddingTop: '8@ms',
      },
      pt0p9: {
        paddingTop: '9@ms',
      },
      pt1: {
        paddingTop: '10@ms',
      },
      pt1p1: {
        paddingTop: '11@ms',
      },
      pt1p2: {
        paddingTop: '12@ms',
      },
      pt1p5: {
        paddingTop: '15@ms',
      },
      pt1p4: {
        paddingTop: '14@ms',
      },
      pt1p6: {
        paddingTop: '16@ms',
      },
      pt1p8: {
        paddingTop: '18@ms',
      },
      pt2: {
        paddingTop: '20@ms',
      },
      pt2p1: {
        paddingTop: '21@ms',
      },
      pt2p2: {
        paddingTop: '22@ms',
      },
      pt2p3: {
        paddingTop: '23@ms',
      },
      pt2p4: {
        paddingTop: '24@ms',
      },
      pt2p8: {
        paddingTop: '28@ms',
      },
      pt2p9: {
        paddingTop: '29@ms',
      },
      pt3: {
        paddingTop: '30@ms',
      },
      pt3p2: {
        paddingTop: '32@ms',
      },
      pt3p6: {
        paddingTop: '36@ms',
      },
      pt4: {
        paddingTop: '40@ms',
      },
      pt4p8: {
        paddingTop: '48@ms',
      },
      pt5: {
        paddingTop: '50@ms',
      },
      pt6: {
        paddingTop: '60@ms',
      },
      pt7: {
        paddingTop: '70@ms',
      },
      pt8: {
        paddingTop: '80@ms',
      },
      pt9: {
        paddingTop: '90@ms',
      },
      pt10: {
        paddingTop: '100@ms',
      },
      pt121: {
        paddingTop: '121@ms',
      },
      pt140: {
        paddingTop: '140@ms',
      },
      pt160: {
        paddingTop: '160@ms',
      },
      pt247: {
        paddingTop: `${height * (247 / 932)}@vs`,
      },
      pt410: {
        paddingTop: '410@ms',
      },
      // ptAndroidStatusBar: {
      //   paddingTop: `${Number(ANDROID_STATUSBAR_HEIGHT?.toFixed(0))}@vs`,
      // },
      // ptIosStatusBar: {
      //   paddingTop: `${Number(IOS_STATUSBAR_HEIGHT?.toFixed(0)) + 30}@vs`,
      // },
      w0: {
        width: 0,
      },
      w1: {
        width: '10%',
      },
      w1p2: {
        width: '12%',
      },
      w1p3: {
        width: '13%',
      },
      w1p5: {
        width: '15%',
      },
      w2: {
        width: '20%',
      },
      w2p2: {
        width: '22%',
      },
      w2p5: {
        width: '25%',
      },
      w3: {
        width: '30%',
      },
      w3p1: {
        width: '31%',
      },
      w3p2: {
        width: '32%',
      },
      w3p3: {
        width: '33%',
      },
      w3p8: {
        width: '38%',
      },
      w4: {
        width: '40%',
      },
      w45per: {
        width: '45%',
      },
      w5: {
        width: '50%',
      },
      w6: {
        width: '60%',
      },
      w7: {
        width: '70%',
      },
      w7p5: {
        width: '75%',
      },
      w8: {
        width: '80%',
      },
      w8p2: {
        width: '82%',
      },
      w8p3: {
        width: '83%',
      },
      w8p5: {
        width: '85%',
      },
      w8p6: {
        width: '86%',
      },
      w8p7: {
        width: '87%',
      },
      w8p8: {
        width: '88%',
      },
      w9: {
        width: '90%',
      },
      w10: {
        width: '100%',
      },
      w17: {
        width: '17@ms',
      },
      w40: {
        width: '40@ms',
      },
      w42: {
        width: '42@ms',
      },
      w57: {
        width: '57@ms',
      },
      w62: {
        width: '62@ms',
      },
      w66: {
        width: '66@ms',
      },
      w68: {
        width: '68@ms',
      },
      w81: {
        width: '81@ms',
      },
      w115: {
        width: '115@ms',
      },
      w225: {
        width: '225@ms',
      },
      wFull: {
        width: '100%',
      },
      maxW115: {
        maxWidth: '115@ms',
      },
      maxW116: {
        maxWidth: '116@ms',
      },
      h0: {
        height: 0,
      },
      h1p2: {
        height: '12@ms',
      },
      h1: {
        height: '10%',
      },
      h2: {
        height: '20%',
      },
      h3: {
        height: '30%',
      },
      h4: {
        height: '40%',
      },
      h5: {
        height: '50%',
      },
      h6: {
        height: '60%',
      },
      h7: {
        height: '70%',
      },
      h8: {
        height: '80%',
      },
      h9: {
        height: '90%',
      },
      h10: {
        height: '100%',
      },
      h30: {
        height: '30@ms',
      },
      h36: {
        height: '36@ms',
      },
      h38: {
        height: '38@ms',
      },
      h40: {
        height: '40@ms',
      },
      h42: {
        height: '42@ms',
      },
      h48: {
        height: '48@ms',
      },
      h50: {
        height: '50@ms',
      },
      h57: {
        height: '57@ms',
      },
      h62: {
        height: '62@ms',
      },
      h73: {
        height: '73@ms',
      },
      h81: {
        height: '81@ms',
      },
      h206: {
        height: '206@ms',
      },
      h225: {
        height: '225@ms',
      },
      h247: {
        height: '247@ms',
      },
      h250: {
        height: '250@ms',
      },
      h255: {
        height: '255@ms',
      },
      h270: {
        height: '270@ms',
      },
      h287: {
        height: '287@ms0',
      },
      h375: {
        height: '375@ms',
      },
      h400: {
        height: '400@ms',
      },
      h410: {
        height: '410@ms',
      },
      h458: {
        height: '458@ms',
      },
      hScreen: {
        height: `${height}@ms0.1`,
      },
      hAndroidScreen: {
        height: `${height}@ms0.1`,
      },
      hIosPreviewLayoutScrollView: {
        height: `${height - 410}@ms0.1`,
      },
      maxH97: {
        height: '97@ms',
      },
      minH80Per: {
        minHeight: '80%',
      },
      minH85Per: {
        minHeight: '85%',
      },
      minH370: {
        minHeight: '370@ms',
      },
      minHFull: {
        height: '100%',
      },
      mr0p3: {
        marginRight: '3@ms',
      },
      mr0p4: {
        marginRight: '4@ms',
      },
      mr0p5: {
        marginRight: '5@ms',
      },
      mr0p8: {
        marginRight: '8@ms',
      },
      mr1: {
        marginRight: '10@ms',
      },
      mr1p2: {
        marginRight: '12@ms',
      },
      mr1p6: {
        marginRight: '16@ms',
      },
      mr10: {
        marginRight: '100@ms',
      },
      mr2: {
        marginRight: '20@ms',
      },
      mr2p4: {
        marginRight: '24@ms',
      },
      mr3: {
        marginRight: '30@ms',
      },
      mr4: {
        marginRight: '40@ms',
      },
      mr5: {
        marginRight: '50@ms',
      },
      mr6: {
        marginRight: '60@ms',
      },
      mr7: {
        marginRight: '70@ms',
      },
      mr8: {
        marginRight: '80@ms',
      },
      mr9: {
        marginRight: '90@ms',
      },
      mx0: {
        marginHorizontal: 0,
      },
      mb0: {
        marginBottom: 0,
      },
      m0p4: {
        margin: '4@ms',
      },
      mb0p1: {
        marginBottom: '1@ms',
      },
      m0: {
        margin: 0,
      },
      m1: {
        margin: '10@ms',
      },
      mb0p4: {
        marginBottom: '4@ms',
      },
      mb0p5: {
        marginBottom: '5@ms',
      },
      mb0p8: {
        marginBottom: '8@ms',
      },
      mb1: {
        marginBottom: '10@ms',
      },
      mb1p2: {
        marginBottom: '12@ms',
      },
      mb1p6: {
        marginBottom: '16@ms',
      },
      mb2: {
        marginBottom: '20@ms',
      },
      mb2p4: {
        marginBottom: '24@ms',
      },
      mb3: {
        marginBottom: '30@ms',
      },
      mb3p2: {
        marginBottom: '32@ms',
      },
      mb4: {
        marginBottom: '40@ms',
      },
      mb5: {
        marginBottom: '50@ms',
      },
      mb6: {
        marginBottom: '60@ms',
      },
      mb7: {
        marginBottom: '70@ms',
      },
      mb8: {
        marginBottom: '80@ms',
      },
      mb9: {
        marginBottom: '90@ms',
      },
      mb10: {
        marginBottom: '100@ms',
      },
      my0: {
        marginVertical: '0@ms',
      },
      my1: {
        marginVertical: '10@ms',
      },
      my4: {
        marginVertical: '4@ms',
      },
      my6: {
        marginVertical: '6@ms',
      },
      my10: {
        marginVertical: '10@ms',
      },
      my20: {
        marginVertical: '20@ms',
      },
      lineHeight11p05: {
        lineHeight: '11.05@ms',
      },
      lineHeight13p66: {
        lineHeight: '13.66@ms',
      },
      lineHeight16p27: {
        lineHeight: '16.27@ms',
      },
      lineHeight18p88: {
        lineHeight: '18.88@ms',
      },
      lineHeight24p1: {
        lineHeight: '24.1@ms',
      },
      lineHeight28: {
        lineHeight: '28@ms',
      },
      lineHeight29p32: {
        lineHeight: '29.32@ms',
      },
      lineHeight37p15: {
        lineHeight: '37.15@ms',
      },
      letterSpacing: {
        letterSpacing: '0.6@s',
      },
      fontSansBlack: {
        fontFamily: 'DMSans-Black',
      },
      fontSansBold: {
        fontFamily: 'DMSans-Bold',
      },
      fontSansExtraBold: {
        fontFamily: 'DMSans-ExtraBold',
      },
      fontSansLight: {
        fontFamily: 'DMSans-Light',
      },
      fontSansSemiBold: {
        fontFamily: 'DMSans-SemiBold',
      },
      fontSansMedium: {
        fontFamily: 'DMSans-Medium',
      },
      fontSansRegular: {
        fontFamily: 'DMSans-Regular',
      },
      fontGroteskBlack: {
        fontFamily: 'HankenGrotesk-Black',
      },
      fontGroteskBold: {
        fontFamily: 'HankenGrotesk-Bold',
      },
      fontGroteskExtraBold: {
        fontFamily: 'HankenGrotesk-ExtraBold',
      },
      fontGroteskLight: {
        fontFamily: 'HankenGrotesk-Light',
      },
      fontGroteskSemiBold: {
        fontFamily: 'HankenGrotesk-SemiBold',
      },
      fontGroteskMedium: {
        fontFamily: 'HankenGrotesk-Medium',
      },
      fontGroteskRegular: {
        fontFamily: 'HankenGrotesk-Regular',
      },
      fontNeulisAlt_Black: {
        fontFamily: 'NeulisAlt-Black',
      },
      fontNeulisAlt_BlackItalic: {
        fontFamily: 'NeulisAlt-BlackItalic',
      },
      fontNeulisAlt_ExtraBold: {
        fontFamily: 'NeulisAlt-ExtraBold',
      },
      fontNeulisAlt_ExtraBoldItalic: {
        fontFamily: 'NeulisAlt-ExtraBoldItalic',
      },
      fontNeulisAlt_Bold: {
        fontFamily: 'NeulisAlt-Bold',
      },
      fontNeulisAlt_BoldItalic: {
        fontFamily: 'NeulisAlt-BoldItalic',
      },
      fontNeulisAlt_SemiBold: {
        fontFamily: 'NeulisAlt-SemiBold',
      },
      fontNeulisAlt_SemiBoldItalic: {
        fontFamily: 'NeulisAlt-SemiBoldItalic',
      },
      fontNeulisAlt_Medium: {
        fontFamily: 'NeulisAlt-Medium',
      },
      fontNeulisAlt_MediumItalic: {
        fontFamily: 'NeulisAlt-MediumItalic',
      },
      fontNeulisAlt_Regular: {
        fontFamily: 'NeulisAlt-Regular',
      },
      fontNeulisAlt_RegularItalic: {
        fontFamily: 'NeulisAlt-Italic',
      },
      fontNeulisAlt_Light: {
        fontFamily: 'NeulisAlt-Light',
      },
      fontNeulisAlt_LightItalic: {
        fontFamily: 'NeulisAlt-LightItalic',
      },
      fontNeulisAlt_ExtraLight: {
        fontFamily: 'NeulisAlt-ExtraLight',
      },
      fontNeulisAlt_ExtraLightItalic: {
        fontFamily: 'NeulisAlt-ExtraLightItalic',
      },
      fontNeulisAlt_Thin: {
        fontFamily: 'NeulisAlt-Thin',
      },
      fontNeulisAlt_ThinItalic: {
        fontFamily: 'NeulisAlt-ThinItalic',
      },

      fontWeight300: {
        fontWeight: '300',
      },
      fontWeight400: {
        fontWeight: '400',
      },
      fontWeight500: {
        fontWeight: '500',
      },
      fontWeight600: {
        fontWeight: '600',
      },
      fontWeight700: {
        fontWeight: '700',
      },
      fontWeight800: {
        fontWeight: '800',
      },
      fontWeight900: {
        fontWeight: '900',
      },
      fontSize9: {
        fontSize: '9@ms',
      },
      fontSize10: {
        fontSize: '10@ms',
      },
      fontSize11: {
        fontSize: '11@ms',
      },
      fontSize12: {
        fontSize: '12@ms',
      },
      textCapitalise: {
        textTransform: 'capitalize',
      },
      fontSize13: {
        fontSize: '13@ms',
      },
      fontSize14: {
        fontSize: '14@ms',
      },
      fontSize15: {
        fontSize: '15@ms',
      },
      fontSize16: {
        fontSize: '16@ms',
      },
      fontSize17: {
        fontSize: '17@ms',
      },
      fontSize18: {
        fontSize: '18@ms',
      },
      fontSize19: {
        fontSize: '19@ms',
      },
      fontSize20: {
        fontSize: '20@ms',
      },
      fontSize21: {
        fontSize: '21@ms',
      },
      fontSize22: {
        fontSize: '22@ms',
      },
      fontSize23: {
        fontSize: '23@ms',
      },
      fontSize24: {
        fontSize: '24@ms',
      },
      fontSize26: {
        fontSize: '26@ms',
      },
      fontSize28: {
        fontSize: '28@ms',
      },
      fontSize30: {
        fontSize: '30@ms',
      },
      fontSize32: {
        fontSize: '32@ms',
      },
      fontSize36: {
        fontSize: '36@ms',
      },
      fontSize42: {
        fontSize: '42@ms',
      },
      fontSize50: {
        fontSize: '50@ms',
      },
      fontSize54: {
        fontSize: '54@ms',
      },
      textSecondaryDark: {
        color: pallete.secondaryDark,
      },
      textPrimaryMedium: {
        color: pallete.primaryMedium,
      },
      textWhite: {
        color: pallete.white,
      },
      textPrimary: {
        color: pallete.primaryDefault,
      },
      textPrimary10: {
        color: pallete.primaryDefault10,
      },
      textSecondary: {
        color: pallete.secondaryDark,
      },
      textRed: {
        color: pallete.borderRed,
      },
      bgRed: {
        backgroundColor: pallete.borderRed,
      },
      textBlack: {
        color: pallete.textBlack,
      },
      textGray4: {
        color: pallete.grey4,
      },
      textPurple: {
        color: pallete.primaryDefault,
      },
      textPurpleDark: {
        color: pallete.primaryDark,
      },
      textOrange: {
        color: pallete.orange,
      },
      textReject: {
        color: pallete.textReject,
      },
      textCulrMainVermilion: {
        color: pallete.culrMainVermilion,
      },
      textCulrMainBlack: {
        color: pallete.culrMainBlack,
      },
      textCulrMainBlackOpacity56: {
        color: pallete.culrMainBlackOpacity56,
      },
      textCulrMainBlackOpacity5: {
        color: pallete.culrMainBlackOpacity5,
      },
      textCulrMainBlackOpacity40: {
        color: pallete.culrMainBlackOpacity40,
      },
      textCulrHoverBlack: {
        color: pallete.culrHoverBlack,
      },
      textCulrLightBlack: {
        color: pallete.culrLightBlack,
      },
      textCulrLighterBlack: {
        color: pallete.culrLighterBlack,
      },
      textCulrBtnTextDisabled: {
        color: pallete.culrBtnTextDisabled,
      },
      textCulrMaximumBluePurple: {
        color: pallete.culrMaximumBluePurple,
      },
      uppercase: {
        textTransform: 'uppercase',
      },
      textCenter: {
        textAlign: 'center',
      },
      textRight: {
        textAlign: 'right',
      },
      bgSuccess500: {
        backgroundColor: pallete.success500,
      },
      bgPrimary: {
        backgroundColor: pallete.white,
      },
      bgLightGray: {
        backgroundColor: pallete.lightGray,
      },
      bgToastSuccess: {
        backgroundColor: pallete.toastSuccess,
      },
      bgToastError: {
        backgroundColor: pallete.toastError,
      },
      bgPurple: {
        backgroundColor: pallete.purple,
      },
      bgPurple05: {
        backgroundColor: pallete.purple05,
      },
      bgPinError: {
        backgroundColor: pallete.pinError,
      },
      bgWhite: {
        backgroundColor: pallete.white,
      },
      bgBlack: {
        backgroundColor: pallete.black,
      },
      bgWhite40: {
        backgroundColor: pallete.white40,
      },
      bgWhite10: {
        backgroundColor: pallete.white10,
      },
      bgTransparent: {
        backgroundColor: pallete.transparent,
      },
      bgPurplePrimary: {
        backgroundColor: pallete.primaryDefault,
      },
      bgPurplePrimary10: {
        backgroundColor: pallete.primaryDefault10,
      },
      bgSecondaryDark: {
        backgroundColor: pallete.secondaryDark,
      },
      bgPurpleDark: {
        backgroundColor: pallete.primaryDark,
      },
      bgDisabled: {
        backgroundColor: pallete.pinBg,
      },
      bgCulrMainBlack: {
        backgroundColor: pallete.culrMainBlack,
      },
      bgCulrMainBlackOpacity10: {
        backgroundColor: pallete.culrMainBlackOpacity10,
      },
      bgCulrMainBlackOpacity20: {
        backgroundColor: pallete.culrMainBlackOpacity20,
      },
      bgCulrMainVermilion: {
        backgroundColor: pallete.culrMainVermilion,
      },
      bgCulrMainVermilionOpacity5: {
        backgroundColor: pallete.culrMainVermilionOpacity5,
      },
      bgCulrHoverVermilion: {
        backgroundColor: pallete.culrHoverVermilion,
      },
      bgCulrAlertVermilion: {
        backgroundColor: pallete.culrAlertVermilion,
      },
      bgCulrLightestBlack: {
        backgroundColor: pallete.culrLightestBlack,
      },
      bgCulrLayoutBg: {
        backgroundColor: pallete.culrLayoutBg,
      },
      bgCulrInputFocusBg: {
        backgroundColor: pallete.culrInputFocusBg,
      },
      bgCulrErrorErrorRed: {
        backgroundColor: pallete.culrErrorErrorRed,
      },
      bgCulrBtnDisabledBg: {
        backgroundColor: pallete.culrBtnDisabledBg,
      },
      bgCulrYellowShadeBg: {
        backgroundColor: pallete.culrYellowShadeBg,
      },
      bgCulrGreenShadeBg: {
        backgroundColor: pallete.culrGreenShadeBg,
      },
      bgCulrOrangeShadeBg: {
        backgroundColor: pallete.culrOrangeShadeBg,
      },
      bgCulrPurpleShadeBg: {
        backgroundColor: pallete.culrPurpleShadeBg,
      },
      bgCulrLemonShadeBg: {
        backgroundColor: pallete.culrLemonShadeBg,
      },
      bgCulrLightBlueShadeBg: {
        backgroundColor: pallete.culrLightBlueShadeBg,
      },
      bgCulrBlueShadeBg: {
        backgroundColor: pallete.culrBlueShadeBg,
      },
      bgCulrConcreteGrayShadeBg: {
        backgroundColor: pallete.culrConcreteGrayShadeBg,
      },
      bgCulrMaximumBluePurpleOpacity20: {
        backgroundColor: pallete.culrMaximumBluePurpleOpacity20,
      },
      bgCulrAmericanPurpleOpacity20: {
        backgroundColor: pallete.culrAmericanPurpleOpacity20,
      },
      textInputHeight: {
        height: '60@ms',
      },
      selectHeight: {
        height: '54@s',
      },
      multiTextInputHeight: {
        height: '135@s',
      },
      textAlignVertical: {
        textAlignVertical: 'top',
      },
      textAlignMiddle: {
        textAlignVertical: 'center',
      },
      displayNone: {
        display: 'none',
      },
      border0p5: {
        borderWidth: '0.5@s',
      },
      border: {
        borderWidth: '1@ms',
      },
      border4: {
        borderWidth: '4@s',
      },
      borderWhite: {
        borderWidth: 2,
        borderColor: pallete.white,
      },
      borderRed: {
        borderWidth: '1@s',
        borderColor: pallete.borderRed,
      },
      borderBtnTransparent: {
        borderWidth: '1@s',
        borderColor: pallete.transparent,
      },
      borderBtnPurple: {
        borderWidth: '1@s',
        borderColor: pallete.primaryDefault,
      },
      borderSecondaryDark: {
        borderWidth: '1@s',
        borderColor: pallete.secondaryDark,
      },
      borderCulrMainBlack: {
        borderColor: pallete.culrMainBlack,
      },
      borderCulrMainBlackOpacity20: {
        borderColor: pallete.culrMainBlackOpacity20,
      },
      borderCulrMainBlackOpacity5: {
        borderColor: pallete.culrMainBlackOpacity5,
      },
      borderCulrLightBlack: {
        borderColor: pallete.culrLightBlack,
      },
      borderCulrLightBlackOpacity10: {
        borderColor: pallete.culrLightBlackOpacity10,
      },

      borderCulrHoverBlack: {
        borderColor: pallete.culrHoverBlack,
      },
      borderCulrLightBlackOpacity20: {
        borderColor: pallete.culrLightBlackOpacity20,
      },

      borderCulrLighterBlack: {
        borderColor: pallete.culrLighterBlack,
      },
      borderCulrMainVermilion: {
        borderColor: pallete.culrMainVermilion,
      },
      borderCulrMainVermilionOpacity5: {
        borderColor: pallete.culrMainVermilionOpacity5,
      },
      borderCulrAlertVermilion: {
        borderColor: pallete.culrAlertVermilion,
      },
      borderInput: {
        borderWidth: 1,
        borderColor: pallete.grey4,
      },

      shadowRadius: {
        borderRadius: '12@s',
        elevation: 3,
        // shadowColor: pallete.textInputTextColor,
        shadowOffset: {width: 2, height: 3},
        shadowOpacity: 0.1,
        shadowRadius: 10,
      },
      noOpacity: {
        opacity: 0,
      },
      overflowHidden: {
        overflow: 'hidden',
      },
      aspectRatio: {
        aspectRatio: 1,
      },
      width: {
        width,
      },
      widthPx31: {
        width: width - 90,
      },
      minWidthPx31: {
        minWidth: width - 90,
      },
      maxWidthPx31: {
        maxWidth: width - 62,
      },
      height: {
        height,
      },
      // androidHeightStatusBar: {
      //   height: ANDROID_STATUSBAR_HEIGHT,
      // },
      scale65: {
        transform: [{scale: 0.65}],
      },
    },
    // as Record<string, styleType>
  );
};

export default createGlobalStyles;
