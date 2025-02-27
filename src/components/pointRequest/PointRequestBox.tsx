import React, {FC} from 'react';
import Box from '../layout/Box';
import createGlobalStyles from '../../globalStyles/globalStyles';
import {ScaledSheet} from 'react-native-size-matters';
import TextComponent from '../text/TextComponent';
import PressableComponent from '../pressable/PressableComponent';
import {capialiseFirst} from '../../constants/utils/utils';
import dayjs from 'dayjs';
import {Spinner} from '../loader/Spinner';

interface requestProps {
  item: any;
  isReceived: boolean;
  onCancel: () => void;
  onAccept?: () => void;
  isLoadingCancel: boolean;
  isLoadingAccept?: boolean;
}

const PointRequestBox: FC<requestProps> = ({
  item,
  isReceived,
  onCancel,
  onAccept,
  isLoadingCancel,
  isLoadingAccept,
}) => {
  return (
    <Box style={[createGlobalStyles.flexrow]}>
      <Box
        style={[
          requestStyle.imgBox,
          createGlobalStyles.br,
          createGlobalStyles.bgPurple,
          createGlobalStyles.overflowHidden,
        ]}
      />
      <Box flex={1} style={[createGlobalStyles.pl0p8]}>
        <Box style={[createGlobalStyles.flexrow, createGlobalStyles.alignItemsCenter]}>
          <TextComponent secondary style={[createGlobalStyles.fontSize12]}>
            You {isReceived ? 'have a request' : 'requested'} for
            <TextComponent
              style={[createGlobalStyles.fontSize12, createGlobalStyles.fontWeight500]}>
              &nbsp;{item?.amount ?? ''} points
            </TextComponent>
            <TextComponent secondary style={[createGlobalStyles.fontSize12]}>
              &nbsp; from
            </TextComponent>
            <TextComponent
              style={[createGlobalStyles.fontSize12, createGlobalStyles.fontWeight500]}>
              &nbsp;{item?.creatorId ?? ''}
            </TextComponent>
          </TextComponent>
        </Box>
        <Box
          style={[
            createGlobalStyles.flexrow,
            createGlobalStyles.alignItemsCenter,
            createGlobalStyles.pt0p8,
          ]}>
          <TextComponent secondary style={[createGlobalStyles.fontSize12]}>
            {dayjs(item?.createdAt).format('MMM D, YYYY')}&nbsp;
            {dayjs(item?.createdAt).format('H:m A')} •
          </TextComponent>
          <TextComponent
            style={[
              createGlobalStyles.fontSize12,
              item?.status === 'PENDING' && createGlobalStyles.textOrange,
              (item?.status === 'CANCELED' || item?.status === 'REJECTED') &&
                createGlobalStyles.textReject,
              item?.status === 'ACCEPTED' && createGlobalStyles.textPrimary,
            ]}>
            &nbsp;{capialiseFirst(item?.status ?? '')}
          </TextComponent>
        </Box>
        {item?.status === 'PENDING' && (
          <Box
            style={[
              createGlobalStyles.flexrow,
              createGlobalStyles.alignItemsCenter,
              createGlobalStyles.pt1p6,
              createGlobalStyles.w10,
            ]}>
            <Box style={[createGlobalStyles.w5, createGlobalStyles.pr0p8]}>
              <PressableComponent
                onPress={onCancel}
                style={[
                  createGlobalStyles.w10,
                  createGlobalStyles.borderRadius,
                  createGlobalStyles.py1,
                  createGlobalStyles.bgRed,
                  createGlobalStyles.justifyCenter,
                  createGlobalStyles.alignItemsCenter,
                ]}>
                {isLoadingCancel ? (
                  <Box
                    style={[
                      createGlobalStyles.justifyCenter,
                      createGlobalStyles.alignItemsCenter,
                      requestStyle.spinHeight,
                    ]}>
                    {/* <ActivityIndicatorComonent isWhite size={20} /> */}
                    <Spinner />
                  </Box>
                ) : (
                  <TextComponent style={[createGlobalStyles.textWhite]}>
                    {isReceived ? 'Reject' : 'Cancel'}
                  </TextComponent>
                )}
              </PressableComponent>
            </Box>
            {isReceived && (
              <Box style={[createGlobalStyles.w5, createGlobalStyles.pl0p8]}>
                <PressableComponent
                  onPress={onAccept}
                  style={[
                    createGlobalStyles.w10,
                    createGlobalStyles.borderRadius,
                    createGlobalStyles.py1,
                    createGlobalStyles.bgPurplePrimary,
                    createGlobalStyles.justifyCenter,
                    createGlobalStyles.alignItemsCenter,
                  ]}>
                  {isLoadingAccept ? (
                    <Box
                      style={[
                        createGlobalStyles.justifyCenter,
                        createGlobalStyles.alignItemsCenter,
                        requestStyle.spinHeight,
                      ]}>
                      {/* <ActivityIndicatorComonent isWhite size={20} /> */}
                      <Spinner />
                    </Box>
                  ) : (
                    <TextComponent style={[createGlobalStyles.textWhite]}>
                      Accept
                    </TextComponent>
                  )}
                </PressableComponent>
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

const requestStyle = ScaledSheet.create({
  imgBox: {
    width: '35@s',
    height: '35@s',
  },
  spinHeight: {
    height: '22@s',
  },
} as Record<any, any>);

export default PointRequestBox;
