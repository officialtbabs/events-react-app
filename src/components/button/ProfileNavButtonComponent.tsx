import React, {FC, ReactNode} from 'react';
import PressableComponent from '../pressable/PressableComponent';
import TextComponent from '../text/TextComponent';
import {TouchableOpacityProps} from 'react-native-gesture-handler';
import Box from '../layout/Box';
import {isIos} from '../../constants/utils/utils';
import {useAppSelector} from '../../constants/utils/hooks';

interface ProfileNavButtonComponentProps extends TouchableOpacityProps {
  title: string;
  icon: ReactNode;
  onPress: () => void;
}

const ProfileNavButtonComponent: FC<ProfileNavButtonComponentProps> = ({
  title,
  icon,
  onPress,
  ...rest
}) => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  return (
    <Box
      style={[
        globalStyles.w10,
        globalStyles.bgWhite,
        globalStyles.borderRadius15,
        globalStyles.border4,
        globalStyles.borderCulrMainVermilionOpacity5,
        globalStyles.h36,
      ]}>
      <PressableComponent
        activeOpacity={0.5}
        onPress={onPress}
        // disabled={disabled || loading}
        {...rest}
        style={[
          globalStyles.h10,
          globalStyles.borderRadius15,
          globalStyles.flexrow,
          globalStyles.justifyCenter,
          globalStyles.alignItemsCenter,
          globalStyles.px2,
        ]}>
        <Box
          style={[
            globalStyles.flexrow,
            globalStyles.gapX10,
            globalStyles.alignItemsCenter,
          ]}>
          <Box>{icon}</Box>

          <TextComponent
            style={[
              globalStyles.flexrow,
              globalStyles.textCenter,
              globalStyles.textCulrMainBlack,
              globalStyles.fontNeulisAlt_Regular,
              isIos() && globalStyles.fontWeight400,
              globalStyles.fontSize12,
              globalStyles.lineHeight16p27,
            ]}>
            {title}
          </TextComponent>
        </Box>
        {/* {loading && <ActivityIndicator color={palette.white} />} */}
        {/* {loading && (
          <Box>
            <Spinner small />
          </Box>
        )} */}
        {/* {loading &&
          new Array(3).fill('*').map((item, index) => {
            return (
              <ButtonDot
                currentIndex={currentPos}
                index={index}
                key={index.toString() + item}
              />
            );
          })} */}
      </PressableComponent>
    </Box>
  );
};

export default ProfileNavButtonComponent;
