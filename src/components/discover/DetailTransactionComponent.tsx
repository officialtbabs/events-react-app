import React, {FC} from 'react';
import Box from '../layout/Box';
import createGlobalStyles from '../../globalStyles/globalStyles';
import TextComponent from '../text/TextComponent';
import {numberWithCommas} from '../../constants/utils/utils';
import dayjs from 'dayjs';
import {useAppSelector} from '../../constants/utils/hooks';

interface detailProp {
  // isCredit: boolean;
  item: any;
}
const DetailTransactionComponent: FC<detailProp> = ({item}) => {
  const usrDisplayData = useAppSelector(state => state.usrDisplayData);
  // console.log({
  //   item,
  // });
  // console.log({
  //   usrDisplayData,
  // });
  const isCredit = usrDisplayData?.id === item?.receiverId;

  return (
    <Box style={[createGlobalStyles.flexrow, createGlobalStyles.alignItemsCenter]}>
      {/* <Box style={[transStyle.img,globalStyle.pr1p2]}>
        <Starbucks />
      </Box> */}
      <Box flex={1} style={[]}>
        <TextComponent style={[createGlobalStyles.fontWeight500]}>
          {item?.narration ?? ''}
        </TextComponent>
        <TextComponent
          secondary
          style={[
            createGlobalStyles.fontSize10,
            createGlobalStyles.pt0p4,

            createGlobalStyles.fontWeight500,
          ]}>
          {dayjs(item?.createdAt).format('MMM D, YYYY')} •
          {dayjs(item?.createdAt).format('H:m A')}
        </TextComponent>
      </Box>
      <Box>
        <TextComponent
          style={[
            !isCredit && createGlobalStyles.textSecondaryDark,
            isCredit && createGlobalStyles.textPrimary,
            createGlobalStyles.fontWeight500,
          ]}>
          {isCredit ? '+' : '-'} {numberWithCommas(item?.amount ?? '')}
        </TextComponent>
      </Box>
    </Box>
  );
};

// const transStyle = ScaledSheet.create({
//   img: {
//     width: '32@s',
//     height: '32@s',
//   },
// } as Record<any, any>);

export default DetailTransactionComponent;
