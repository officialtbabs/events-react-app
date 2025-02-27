import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {EventCreationRequestDto} from '../../constants/types/types';

interface EventCreationState extends EventCreationRequestDto {}

const initialState: EventCreationState = {
  event_name: '',
  description: '',
  startDate: '',
  endDate: '',
  startTime: '',
  endTime: '',
  location: '',
  latitude: 0,
  longitude: 0,
  images: null,
  tickets: [
    {
      ticketType: null,
      price: 0,
      ticket_name: '',
      perks: null,
      quantity: 0,
    },
  ],
  hosts: null,
  contactPhoneNumber: '',
  brandId: '',
};

export const eventCreationSlice = createSlice({
  name: 'eventCreation',
  initialState,
  reducers: {
    updateEventCreationState: (
      state,
      {payload}: PayloadAction<Partial<EventCreationState>>,
    ) => ({...state, ...payload}),

    resetEventCreationState: () => ({...initialState}),
  },
});

export const {updateEventCreationState, resetEventCreationState} =
  eventCreationSlice.actions;
export default eventCreationSlice.reducer;
