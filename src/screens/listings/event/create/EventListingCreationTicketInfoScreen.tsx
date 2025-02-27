import React, {FC, useMemo} from 'react';
import Box from '../../../../components/layout/Box';
import HeaderComponent from '../../../../components/header/Header';
import TextComponent from '../../../../components/text/TextComponent';
import ButtonComponent from '../../../../components/button/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import {
  EventTicketRequestDto,
  NestedEventListingCreationNavigationProps,
} from '../../../../constants/types/types';
import RadioComponent from '../../../../components/radio/RadioComponent';
import {Controller, useFieldArray, useForm} from 'react-hook-form';
import TextInputComponent from '../../../../components/textInputs/TextInputComponent';
import Feather from 'react-native-vector-icons/Feather';
import LayoutWithSafeArea from '../../../../components/layout/LayoutWithSafeAreaWithoutBg';
import SwitchProfileCard from '../../../../components/cards/SwitchProfileCard';
import {isIos} from '../../../../constants/utils/utils';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../constants/utils/hooks';
import {updateEventCreationState} from '../../../../reducerSlices/events/eventCreationSlice';
import {TouchableOpacity} from 'react-native';

export enum TicketTypeEnums {
  FREE = 'FREE',
  PAID = 'PAID',
}

const TicketPerks: FC<{
  ticketIndex: number;
  control: any;
  errors: any;
}> = ({ticketIndex, control, errors}) => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  const {fields: ticketPerksFields} = useFieldArray({
    control,
    name: `tickets[${ticketIndex}].perks`,
  });

  return (
    <Box style={[globalStyles.w10]}>
      {ticketPerksFields.map((_, ticketPerksIndex) => (
        <Box key={ticketPerksIndex}>
          <Controller
            control={control}
            name={`tickets.${ticketIndex}.perks.${ticketPerksIndex}.value`}
            rules={{
              required: {
                value: true,
                message: 'Ticket Perks is required',
              },
            }}
            render={({field: {value, onBlur, onChange}}) => (
              <TextInputComponent
                title="Ticket perks"
                placeholder="Ticket perks"
                errorText={
                  errors?.tickets?.[ticketIndex]?.perks?.[ticketPerksIndex]
                    .value?.message
                }
                value={value}
                keyboardType="default"
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />
        </Box>
      ))}
    </Box>
  );
};

const EventListingCreationTicketInfoScreen = () => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<NestedEventListingCreationNavigationProps>();

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    watch,
    // reset,
    setValue,
  } = useForm<{
    tickets: (Omit<EventTicketRequestDto, 'perks' | 'price' | 'quantity'> & {
      perks: {value: string}[];
      price: string;
      quantity: string;
    })[];
  }>({
    defaultValues: {
      tickets: [
        {
          ticket_name: '',
          ticketType: TicketTypeEnums.FREE,
          price: '',
          perks: [
            {
              value: '',
            },
          ],
          quantity: '',
        },
      ],
    },
  });

  const {append, remove} = useFieldArray({
    control,
    name: 'tickets',
  });

  const allTickets = watch('tickets');

  const ticketTypeOptions = useMemo<TicketTypeEnums[]>(
    () => [TicketTypeEnums.FREE, TicketTypeEnums.PAID],
    [],
  );

  const onNext = ({
    tickets,
  }: {
    tickets: (Omit<EventTicketRequestDto, 'perks' | 'price' | 'quantity'> & {
      perks: {value: string}[];
      price: string;
      quantity: string;
    })[];
  }) => {
    dispatch(
      updateEventCreationState({
        tickets: tickets.map(ticket => ({
          ...ticket,
          quantity: parseInt(ticket.quantity, 10),
          price: ticket.price ? parseFloat(ticket.price) : 0,
          perks: ticket.perks.map(perk => perk.value),
        })),
      }),
    );

    navigate('eventListingCreationImagesUpload');
  };

  return (
    <LayoutWithSafeArea
      layoutHeader={
        <HeaderComponent
          title=""
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
      }>
      <Box
        flex={1}
        style={[
          globalStyles.px31,
          globalStyles.justifyBetween,
          globalStyles.pt1,
          globalStyles.minHFull,
        ]}>
        <Box flex={1}>
          <Box>
            <SwitchProfileCard />
          </Box>

          <Box style={[globalStyles.mt3]}>
            <TextComponent
              style={[
                globalStyles.fontNeulisAlt_Bold,
                isIos() && globalStyles.fontWeight700,
                globalStyles.fontSize22,
                globalStyles.textCulrMainBlack,
                globalStyles.lineHeight29p32,
              ]}>
              Tickets Information
            </TextComponent>
          </Box>

          <Box style={[globalStyles.mt1, globalStyles.gapY20]}>
            {allTickets.map((option, index) => (
              <Box key={index}>
                <Box>
                  <TextComponent
                    style={[
                      globalStyles.fontNeulisAlt_Bold,
                      isIos() && globalStyles.fontWeight700,
                      globalStyles.fontSize12,
                      globalStyles.textCulrMainBlack,
                      globalStyles.lineHeight16p27,
                    ]}>
                    Tickets {index + 1}
                  </TextComponent>

                  {index > 0 && (
                    <TouchableOpacity
                      onPress={() => remove(index)}
                      style={[
                        globalStyles.flexrow,
                        globalStyles.absolute,
                        globalStyles.right10,
                        globalStyles.top10,
                      ]}>
                      <Feather
                        name="trash-2"
                        size={22}
                        style={[
                          globalStyles.textCulrMainVermilion,
                          globalStyles.p1p2,
                          globalStyles.bgCulrAlertVermilion,
                          globalStyles.br,
                        ]}
                      />
                    </TouchableOpacity>
                  )}
                </Box>

                <TextComponent
                  style={[
                    globalStyles.fontNeulisAlt_Regular,
                    isIos() && globalStyles.fontWeight400,
                    globalStyles.fontSize14,
                    globalStyles.textCulrMainBlack,
                    globalStyles.lineHeight18p88,
                    globalStyles.mt2,
                  ]}>
                  Is this ticket free or paid?
                </TextComponent>

                <Box
                  style={[
                    globalStyles.flexrow,
                    globalStyles.gapX20,
                    globalStyles.mt1,
                  ]}>
                  {ticketTypeOptions.map((type, typeIndex) => (
                    <Box
                      key={typeIndex}
                      style={[
                        globalStyles.flexrow,
                        globalStyles.gapX10,
                        globalStyles.alignItemsCenter,
                        // globalStyle.borderBottom,
                        // globalStyle.borderDashed,
                        // globalStyle.borderCulrLightBlackOpacity20,
                      ]}>
                      <RadioComponent
                        enabled={option.ticketType === type}
                        onPress={() => {
                          setValue(`tickets.${index}.ticketType`, type);
                        }}
                      />
                      <Box>
                        <TextComponent
                          style={[
                            globalStyles.fontSize12,
                            globalStyles.fontNeulisAlt_Regular,
                            isIos() && globalStyles.fontWeight400,
                            globalStyles.textCulrMainBlack,
                            globalStyles.textCapitalise,
                            globalStyles.lineHeight16p27,
                          ]}>
                          {type}
                        </TextComponent>
                      </Box>
                    </Box>
                  ))}
                </Box>

                <Box style={[globalStyles.pt2, globalStyles.gapY20]}>
                  <Box>
                    <Controller
                      control={control}
                      name={`tickets.${index}.ticket_name`}
                      rules={{
                        required: {
                          value: true,
                          message: 'Ticket Name is required',
                        },
                      }}
                      render={({field: {value, onBlur, onChange}}) => (
                        <TextInputComponent
                          title="Ticket Name"
                          placeholder="Ticket Name"
                          errorText={
                            errors?.tickets?.[index]?.ticket_name?.message
                          }
                          value={value}
                          keyboardType="default"
                          onChangeText={onChange}
                          onBlur={onBlur}
                        />
                      )}
                    />
                  </Box>

                  <Box>
                    <Controller
                      control={control}
                      name={`tickets.${index}.quantity`}
                      rules={{
                        required: {
                          value: true,
                          message: 'Ticket quantity is required',
                        },
                      }}
                      render={({field: {value, onBlur, onChange}}) => (
                        <TextInputComponent
                          title="Ticket Quantity"
                          placeholder="Ticket Quantity"
                          errorText={
                            errors?.tickets?.[index]?.quantity?.message
                          }
                          value={value ? String(value) : ''}
                          keyboardType="default"
                          onChangeText={onChange}
                          onBlur={onBlur}
                        />
                      )}
                    />
                  </Box>

                  {option.ticketType === TicketTypeEnums.PAID && (
                    <Box>
                      <Controller
                        control={control}
                        name={`tickets.${index}.price`}
                        rules={{
                          required: {
                            value: true,
                            message: 'Ticket Price is required',
                          },
                        }}
                        render={({field: {value, onBlur, onChange}}) => (
                          <TextInputComponent
                            title="Ticket Price"
                            placeholder="Ticket Price"
                            errorText={errors?.tickets?.[index]?.price?.message}
                            value={value ? String(value) : ''}
                            keyboardType="default"
                            onChangeText={onChange}
                            onBlur={onBlur}
                          />
                        )}
                      />
                    </Box>
                  )}

                  <Box>
                    <TextComponent
                      style={[
                        globalStyles.fontNeulisAlt_Bold,
                        isIos() && globalStyles.fontWeight700,
                        globalStyles.fontSize14,
                        globalStyles.textCulrMainBlack,
                        globalStyles.lineHeight18p88,
                      ]}>
                      Perks{' '}
                      <TextComponent
                        style={[
                          globalStyles.fontNeulisAlt_LightItalic,
                          isIos() && globalStyles.fontWeight300,
                          globalStyles.fontSize11,
                          globalStyles.textCulrMainBlack,
                          globalStyles.lineHeight13p66,
                        ]}>
                        (Optional)
                      </TextComponent>
                    </TextComponent>

                    <Box style={[globalStyles.mt1]}>
                      <TicketPerks
                        ticketIndex={index}
                        control={control}
                        errors={errors}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          <Box style={[globalStyles.mt4]}>
            <ButtonComponent
              defaultOutlined
              text14
              height48
              title="Add More Ticket"
              onPress={() =>
                append({
                  ticket_name: '',
                  ticketType: TicketTypeEnums.FREE,
                  price: 0,
                  perks: [
                    {
                      value: '',
                    },
                  ],
                  quantity: 0,
                })
              }
            />
          </Box>
        </Box>

        <Box style={[globalStyles.mt4, globalStyles.pb6]}>
          <ButtonComponent
            title="Next"
            text14
            disabled={!isValid}
            onPress={handleSubmit(onNext)}
          />
        </Box>
      </Box>
    </LayoutWithSafeArea>
  );
};

export default EventListingCreationTicketInfoScreen;
