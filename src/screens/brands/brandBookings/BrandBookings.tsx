import React, {useMemo} from 'react';
import Box from '../../../components/layout/Box';
import HeaderComponent from '../../../components/header/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PressableComponent from '../../../components/pressable/PressableComponent';
import {useNavigation} from '@react-navigation/native';
import {BrandNavigationProps} from '../../../constants/types/types';
import Feather from 'react-native-vector-icons/Feather';
import {FlashList} from '@shopify/flash-list';
import LayoutWithSafeArea from '../../../components/layout/LayoutWithSafeAreaWithoutBg';
import BookingCard, {
  BookingCardProps,
} from '../../../components/cards/BookingCard';
import {useAppSelector} from '../../../constants/utils/hooks';

const BrandBookings = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);
  const {navigate} = useNavigation<BrandNavigationProps>();

  const bookingOptions = useMemo<BookingCardProps[]>(
    () => [
      {
        name: 'Jay’s Don Hotel',
        product: 'RM 305',
        amount: '50,000',
        quantity: '3 Days',
        onPress: () => null,
      },

      {
        name: 'TED business Talk',
        product: 'Regular Ticket',
        amount: '50,000',
        quantity: '1 Ticket',
        onPress: () => null,
      },

      {
        name: 'Pie Horse Ride',
        product: 'Regular Ticket',
        amount: '50,000',
        quantity: '2 Ticket',
        onPress: () => null,
      },

      {
        name: 'TJ launch party',
        product: 'Premium Ticket',
        amount: '50,000',
        quantity: '2 Ticket',
        onPress: () => null,
      },
    ],
    [],
  );

  return (
    <LayoutWithSafeArea
      layoutHeader={
        <HeaderComponent
          title="Bookings"
          bottomBorder
          leftIcon={{
            type: 'icon',
            icon: (
              <Feather
                name="chevron-left"
                size={24}
                style={[globalStyles.textCulrMainBlack]}
              />
            ),
          }}
          rightIcon={{
            type: 'icon',
            icon: (
              <>
                <PressableComponent
                  style={[
                    globalStyles.p1p2,
                    globalStyles.bgCulrAlertVermilion,
                    globalStyles.br,
                  ]}
                  onPress={() => navigate('brandMore')}>
                  <Ionicons
                    name="grid-outline"
                    size={24}
                    style={[globalStyles.textCulrMainVermilion]}
                  />
                </PressableComponent>
              </>
            ),
          }}
        />
      }>
      <Box flex={1} style={[globalStyles.px31, globalStyles.pt1]}>
        <Box style={[globalStyles.pb6]}>
          <FlashList
            showsVerticalScrollIndicator={false}
            data={bookingOptions}
            renderItem={({item}) => (
              <Box style={[globalStyles.mb2]}>
                <BookingCard
                  name={item.name}
                  product={item.product}
                  amount={item.amount}
                  quantity={item.quantity}
                  onPress={item.onPress}
                />
              </Box>
            )}
            estimatedItemSize={5}
          />
        </Box>
      </Box>
    </LayoutWithSafeArea>
  );
};

export default BrandBookings;
