import React, {useMemo} from 'react';
import Box from '../../../components/layout/Box';
import HeaderComponent from '../../../components/header/Header';
import Feather from 'react-native-vector-icons/Feather';
import {FlashList} from '@shopify/flash-list';
import LayoutWithSafeAreaWithoutBg from '../../../components/layout/LayoutWithSafeAreaWithoutBg';
import EarningCard, {
  EarningCardProps,
} from '../../../components/cards/EarningCard';
import {useAppSelector} from '../../../constants/utils/hooks';

const BrandEarningHistory = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const earningOptions = useMemo<EarningCardProps[]>(
    () => [
      {
        title: 'Mall Park Ticket',
        amount: 50_000,
        date: new Date(),
        onPress: () => null,
      },

      {
        title: 'Jay Night Ticket',
        amount: 50_000,
        date: new Date(),
        onPress: () => null,
      },

      {
        title: 'Jay’s Don Hotel',
        amount: 50_000,
        date: new Date(),
        onPress: () => null,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <LayoutWithSafeAreaWithoutBg
      layoutHeader={
        <HeaderComponent
          title="Earnings History"
          bottomBorder
          leftIcon={{
            type: 'icon',
            icon: (
              <Feather
                name="chevron-left"
                size={22}
                style={[globalStyles.textCulrMainBlack]}
              />
            ),
          }}
        />
      }>
      <Box flex={1} style={[globalStyles.px31, globalStyles.pt1]}>
        <Box style={[globalStyles.pb6]}>
          <FlashList
            showsVerticalScrollIndicator={false}
            data={earningOptions}
            renderItem={({item}) => (
              <EarningCard
                title={item.title}
                date={item.date}
                amount={item.amount}
                onPress={item.onPress}
              />
            )}
            estimatedItemSize={5}
          />
        </Box>
      </Box>
    </LayoutWithSafeAreaWithoutBg>
  );
};

export default BrandEarningHistory;
