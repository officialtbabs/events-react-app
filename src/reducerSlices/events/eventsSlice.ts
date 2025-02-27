import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {EventDetails} from '../../constants/types/types';

interface EventsState {
  events: EventDetails[] | null;
}

const initialState: EventsState = {
  events: null,
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, {payload}: PayloadAction<EventsState>) => {
      state.events = payload.events;
    },

    updateEvents: (state, {payload}: PayloadAction<EventsState>) => {
      if (state.events && payload.events) {
        state.events = [...state.events, ...payload.events];
      }
    },

    resetEvents: () => ({...initialState}),
  },
});

export const {setEvents, updateEvents, resetEvents} = eventsSlice.actions;
export default eventsSlice.reducer;
