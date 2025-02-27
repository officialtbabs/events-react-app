import React, {useMemo, useState} from 'react';
import Box from '../../../../components/layout/Box';
import HeaderComponent from '../../../../components/header/Header';
import {useNavigation} from '@react-navigation/native';
import {NestedEventListingCreationNavigationProps} from '../../../../constants/types/types';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {capialiseFirst, isIos} from '../../../../constants/utils/utils';
import TextComponent from '../../../../components/text/TextComponent';
import CalenderOutlined from '../../../../assets/svgs/icons/calender-outlined.svg';
import ScrollNav, {
  NavItemOptionProps,
} from '../../../../components/scrollNav/ScrollNav';
import ChipComponent from '../../../../components/chip/ChipComponent';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../constants/utils/hooks';
import PreviewListingLayout from '../../../../components/layout/PreviewListingLayout';
import AnimatedChevronDown from '../../../../components/icons/AnimatedChevronDown';
import {TouchableOpacity} from 'react-native';
import ButtonComponent from '../../../../components/button/ButtonComponent';
import {FlashList} from '@shopify/flash-list';
import TicketCard from '../../../../components/cards/TicketCard';
import useEventApi from '../../../../service/eventApi';
import {showToast} from '../../../../reducerSlices/toastSlice';

const EventListingCreationPreviewScreen = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<NestedEventListingCreationNavigationProps>();

  const {
    event_name,
    description,
    images,
    startDate,
    endDate,
    startTime,
    endTime,
    location,
    longitude,
    latitude,
    hosts,
    contactPhoneNumber,
    tickets,
  } = useAppSelector(state => state.eventCreation);

  const [currentTab, setCurrentTab] = useState<'overview' | 'ticket'>(
    'overview',
  );

  const navOptions = useMemo<NavItemOptionProps[]>(
    () => [
      {
        name: 'overview',
        isActive: currentTab === 'overview',
        onPress: () => setCurrentTab('overview'),
      },
      {
        name: 'ticket',
        isActive: currentTab === 'ticket',
        onPress: () => setCurrentTab('ticket'),
      },
    ],
    [currentTab],
  );

  const [showFullDescription, setShowFullDescription] =
    useState<boolean>(false);

  const numberOfLines = useMemo<number | undefined>(
    () => (showFullDescription ? undefined : 4),
    [showFullDescription],
  );

  const renderedDate = useMemo(
    () => (startDate === endDate ? startDate : `${startDate} - ${endDate}`),
    [startDate, endDate],
  );

  const renderedTime = useMemo(() => {
    const timeZone = startTime.split(' ')[1];
    const start = startTime.split(' ')[0];
    const end = endTime.split(' ')[0];

    return `${start} - ${end} ${timeZone}`;
  }, [startTime, endTime]);

  const renderNavItem = ({
    item,
    index,
  }: {
    item: NavItemOptionProps;
    index: number;
  }) => (
    <Box key={index} style={[globalStyles.mx1]}>
      <ChipComponent
        text={capialiseFirst(item.name)}
        variant={item.isActive ? 'filled' : 'text'}
        // disabled={!item.isActive}
        onPress={item.onPress}
      />
    </Box>
  );

  const handleReadMore = () => {
    setShowFullDescription(!showFullDescription);
  };

  const {useCreateEvent} = useEventApi();

  const {createEventMutation, isLoadingCreateEvent} = useCreateEvent();

  const onCreateEventClick = () => {
    console.log({
      event_name,
      description,
      images,
      startDate,
      endDate,
      startTime,
      endTime,
      location,
      longitude,
      latitude,
      hosts,
      contactPhoneNumber,
      tickets,
    });
    createEventMutation(
      {
        event_name,
        description,
        images,
        startDate,
        endDate,
        startTime,
        endTime,
        location,
        longitude,
        latitude,
        hosts,
        contactPhoneNumber,
        tickets,
      },

      {
        onSuccess: createEventRes => {
          dispatch(
            showToast({
              message: createEventRes.data.message,
              status: 1,
            }),
          );

          navigate('eventListingCreationSuccessConfirmation');
        },
        onError: (createEventErr: any) => {
          console.log(createEventErr);

          dispatch(
            showToast({
              status: 2,
              message: createEventErr?.data.message ?? 'An error occurred',
            }),
          );
          // reset();
        },
      },
    );
  };

  return (
    <PreviewListingLayout
      layoutHeader={
        <HeaderComponent
          title=""
          bottomBorder
          leftIcon={{
            type: 'icon',
            icon: (
              <Box
                style={[
                  globalStyles.p1,
                  globalStyles.bgCulrAlertVermilion,
                  globalStyles.br,
                ]}>
                <Feather
                  name="chevron-left"
                  size={22}
                  style={[globalStyles.textCulrMainVermilion]}
                />
              </Box>
            ),
          }}
        />
      }
      carouselBackgroundItemOptions={images ? images : []}>
      <Box style={[globalStyles.pt2]}>
        <Box style={[globalStyles.px31]}>
          <TextComponent
            style={[
              globalStyles.fontSize20,
              globalStyles.fontNeulisAlt_Bold,
              globalStyles.lineHeight29p32,
              isIos() && globalStyles.fontWeight700,
              globalStyles.textCulrMainBlack,
            ]}>
            {event_name}
          </TextComponent>
        </Box>

        <Box style={[globalStyles.px31, globalStyles.py1]}>
          <ScrollNav navOptions={navOptions} navItem={renderNavItem} />
        </Box>

        {currentTab === 'overview' ? (
          <>
            <Box
              style={[
                globalStyles.px31,
                globalStyles.borderBottom,
                globalStyles.borderCulrMainBlackOpacity20,
                globalStyles.pb1,
                globalStyles.gapY10,
              ]}>
              <TextComponent
                style={[
                  globalStyles.textCulrMainBlack,
                  globalStyles.fontSize14,
                  globalStyles.fontNeulisAlt_Bold,
                  isIos() && globalStyles.fontWeight700,
                  globalStyles.mt1p6,
                ]}>
                About
              </TextComponent>

              <TextComponent
                numberOfLines={numberOfLines}
                style={[
                  globalStyles.textCulrMainBlack,
                  globalStyles.fontSize14,
                  globalStyles.fontNeulisAlt_Regular,
                  isIos() && globalStyles.fontWeight400,
                  globalStyles.lineHeight18p88,
                ]}>
                {description}
              </TextComponent>

              <TouchableOpacity
                style={[
                  globalStyles.flexrow,
                  globalStyles.alignItemsCenter,
                  globalStyles.gapX5,
                ]}
                onPress={handleReadMore}>
                <TextComponent
                  style={[
                    globalStyles.textCulrMainBlack,
                    globalStyles.fontSize14,
                    globalStyles.fontNeulisAlt_Medium,
                    isIos() && globalStyles.fontWeight500,
                    globalStyles.lineHeight18p88,
                    globalStyles.underline,
                  ]}>
                  Read more
                </TextComponent>

                <AnimatedChevronDown rotate={showFullDescription} />
              </TouchableOpacity>
            </Box>
            <Box
              style={[
                globalStyles.px31,
                globalStyles.borderBottom,
                globalStyles.borderCulrMainBlackOpacity20,
                globalStyles.py1,
                globalStyles.gapY10,
              ]}>
              <Box
                style={[
                  globalStyles.flexrow,
                  globalStyles.gapX5,
                  globalStyles.alignItemsCenter,
                ]}>
                <CalenderOutlined />

                <TextComponent
                  style={[
                    globalStyles.textCulrMainBlack,
                    globalStyles.fontSize14,
                    globalStyles.fontNeulisAlt_Regular,
                    globalStyles.lineHeight18p88,
                    isIos() && globalStyles.fontWeight400,
                  ]}>
                  {renderedDate}
                </TextComponent>
              </Box>

              <Box
                style={[
                  globalStyles.flexrow,
                  globalStyles.gapX5,
                  globalStyles.alignItemsCenter,
                ]}>
                <Ionicons
                  name="time-outline"
                  size={24}
                  style={[globalStyles.textCulrMainBlack]}
                />

                <TextComponent
                  style={[
                    globalStyles.textCulrMainBlack,
                    globalStyles.fontSize14,
                    globalStyles.fontNeulisAlt_Regular,
                    globalStyles.lineHeight18p88,
                    isIos() && globalStyles.fontWeight400,
                  ]}>
                  {renderedTime}
                </TextComponent>
              </Box>

              <Box
                style={[
                  globalStyles.flexrow,
                  globalStyles.gapX5,
                  globalStyles.alignItemsCenter,
                ]}>
                <Ionicons
                  name="location-outline"
                  size={24}
                  style={[globalStyles.textCulrMainBlack]}
                />

                <TextComponent
                  style={[
                    globalStyles.textCulrMainBlack,
                    globalStyles.fontSize14,
                    globalStyles.fontNeulisAlt_Regular,
                    globalStyles.lineHeight18p88,
                    isIos() && globalStyles.fontWeight400,
                  ]}>
                  {location}
                </TextComponent>
              </Box>
            </Box>

            <Box
              style={[
                globalStyles.py1,
                globalStyles.px31,
                globalStyles.borderBottom,
                globalStyles.borderCulrMainBlackOpacity20,
              ]}>
              <TextComponent
                style={[
                  globalStyles.textCulrMainBlack,
                  globalStyles.fontSize14,
                  globalStyles.fontNeulisAlt_Bold,
                  globalStyles.lineHeight18p88,
                  isIos() && globalStyles.fontWeight700,
                  globalStyles.mb0p8,
                ]}>
                Hosts
              </TextComponent>

              <Box>
                <FlashList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={hosts}
                  renderItem={({item}) => (
                    <Box
                      flex={1}
                      style={[globalStyles.mr1, globalStyles.maxW115]}>
                      <TextComponent
                        style={[
                          globalStyles.wFull,
                          globalStyles.textCenter,
                          globalStyles.textCulrMainBlack,
                          globalStyles.fontSize12,
                          globalStyles.fontNeulisAlt_Regular,
                          globalStyles.lineHeight16p27,
                          isIos() && globalStyles.fontWeight400,
                        ]}>
                        {item}
                      </TextComponent>
                    </Box>
                  )}
                  estimatedItemSize={200}
                />
              </Box>
            </Box>
            <Box style={[globalStyles.pt1, globalStyles.px31]}>
              <TextComponent
                style={[
                  globalStyles.textCulrMainBlack,
                  globalStyles.fontSize14,
                  globalStyles.fontNeulisAlt_Bold,
                  globalStyles.lineHeight18p88,
                  isIos() && globalStyles.fontWeight700,
                  globalStyles.mb0p8,
                ]}>
                Contact Info.
              </TextComponent>

              <Box
                style={[
                  globalStyles.flexrow,
                  globalStyles.alignItemsCenter,
                  globalStyles.gapX10,
                ]}>
                <Feather
                  name="phone-call"
                  size={22}
                  style={[globalStyles.textCulrMainBlack]}
                />

                <TextComponent
                  style={[
                    globalStyles.textCulrMainBlack,
                    globalStyles.fontSize13,
                    globalStyles.fontNeulisAlt_Regular,
                    globalStyles.lineHeight16p27,
                    isIos() && globalStyles.fontWeight400,
                  ]}>
                  {`+234 ${contactPhoneNumber}`}
                </TextComponent>

                <MaterialIcons
                  name="content-copy"
                  size={22}
                  style={[globalStyles.textCulrMainVermilion]}
                />
              </Box>
            </Box>
          </>
        ) : (
          <>
            <Box
              style={[
                globalStyles.px31,
                globalStyles.py1,
                globalStyles.gapY20,
              ]}>
              {!!tickets &&
                tickets.map((ticket, index) => (
                  <TicketCard
                    key={index}
                    name={ticket.ticket_name}
                    type={ticket.ticketType!}
                    totalNumberAvailable={ticket.quantity}
                    perks={ticket.perks ? ticket.perks : []}
                    amount={ticket.price}
                    isPreview
                  />
                ))}
            </Box>
          </>
        )}

        <Box
          style={[
            globalStyles.mt6,
            globalStyles.pt1,
            globalStyles.px31,
            globalStyles.borderTop,
            globalStyles.borderCulrMainBlackOpacity20,
          ]}>
          <Box style={[globalStyles.pb4]}>
            <ButtonComponent
              title="Create Event"
              loading={isLoadingCreateEvent}
              disabled={isLoadingCreateEvent}
              text14
              onPress={onCreateEventClick}
            />
          </Box>
        </Box>
      </Box>
    </PreviewListingLayout>
  );
};

export default EventListingCreationPreviewScreen;
