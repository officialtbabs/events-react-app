import React, {useMemo, useState} from 'react';
import Box from '../../components/layout/Box';
import globalStyles from '../../globalStyles/globalStyles';
import HeaderComponent from '../../components/header/Header';
import Confetti from '../../assets/svgs/icons/confetti-outlined.svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextComponent from '../../components/text/TextComponent';
import PressableComponent from '../../components/pressable/PressableComponent';
import ButtonComponent from '../../components/button/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import {
  BrandNavigationProps,
  NestedBrandCreationStackNavigationProp,
  RegisterNavigationProps,
} from '../../constants/types/types';
import LayoutWithSafeAreaWithoutScroll from '../../components/layout/LayoutWithSafeAreaWithoutBgWithoutScroll';
import RadioComponent from '../../components/radio/RadioComponent';
import pallete from '../../constants/colors/pallete';
import {Controller, useForm} from 'react-hook-form';
import TextInputComponent from '../../components/textInputs/TextInputComponent';
import {emailPattern} from '../../constants/utils/constants';
import Feather from 'react-native-vector-icons/Feather';
import LayoutWithSafeAreaWithoutBgWithGradient from '../../components/layout/LayoutWithSafeAreaWithoutBgWithGradient';
import LinearGradient from 'react-native-linear-gradient';
import {FlashList} from '@shopify/flash-list';
import ListingCard, {
  ListingCardProps,
} from '../../components/cards/ListingCard';
import LayoutWithSafeArea from '../../components/layout/LayoutWithSafeAreaWithoutBg';
import ReviewCard, {ReviewCardProps} from '../../components/cards/ReviewCard';
import {useAppSelector} from '../../constants/utils/hooks';

const BrandReviews = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);
  const {navigate} = useNavigation<BrandNavigationProps>();

  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
    reset,
  } = useForm({
    defaultValues: {
      brandName: '',
      email: '',
    },
  });

  const reivewOptions = useMemo<ReviewCardProps[]>(
    () => [
      {
        reviewerName: 'John Timi',
        date: '20/09/2024',
        review:
          'Had a lot of fun at the Jay night party hosted by MTN, ,met some new people at the event as well',
        listingName: 'TED business Talk',
        onPress: () => null,
      },

      {
        reviewerName: 'John Timi',
        date: '20/09/2024',
        review:
          'Had a lot of fun at the Jay night party hosted by MTN, ,met some new people at the event as well',
        listingName: 'Jolloy Suite',
        onPress: () => null,
      },

      {
        reviewerName: 'John Timi',
        date: '20/09/2024',
        review:
          'Had a lot of fun at the Jay night party hosted by MTN, ,met some new people at the event as well',
        listingName: 'TJ Birthday Party',
        onPress: () => null,
      },
    ],
    [],
  );

  return (
    <LayoutWithSafeArea
      layoutHeader={
        <HeaderComponent
          title="Reviews"
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
          //   rightIcon={{
          //     type: 'icon',
          //     icon: (
          //       <>
          //         <PressableComponent onPress={() => navigate('brandMore')}>
          //           <Ionicons
          //             name="grid-outline"
          //             size={24}
          //             style={[
          //               globalStyle.textCulrMainVermilion,
          //               globalStyle.p1p2,
          //               globalStyle.bgCulrAlertVermilion,
          //               globalStyle.br,
          //             ]}
          //           />
          //         </PressableComponent>
          //       </>
          //     ),
          //   }}
        />
      }>
      <Box flex={1} style={[globalStyles.px31, globalStyles.pt1]}>
        <Box style={[globalStyles.pb6]}>
          <FlashList
            showsVerticalScrollIndicator={false}
            data={reivewOptions}
            renderItem={({item}) => (
              <Box style={[globalStyles.mb2]}>
                <ReviewCard
                  reviewerName={item.reviewerName}
                  date={item.date}
                  review={item.review}
                  listingName={item.listingName}
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

export default BrandReviews;
