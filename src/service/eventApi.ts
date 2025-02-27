import {AxiosResponse} from 'axios';
import {
  EventCreationRequestDto,
  EventDetailsResponse,
  GetEventsResponse,
} from '../constants/types/types';
import {useHttp} from './http';
import {useMutation} from '@tanstack/react-query';

const useEventApi = () => {
  const {http} = useHttp();

  const useCreateEvent = () => {
    const mutationFn = async (
      payload: EventCreationRequestDto,
    ): Promise<AxiosResponse<EventDetailsResponse>> => {
      // console.log(payload)
      return await http.post<
        EventDetailsResponse,
        AxiosResponse<EventDetailsResponse>,
        EventCreationRequestDto
      >('events', payload);
    };

    const {mutate: createEventMutation, isPending: isLoadingCreateEvent} =
      useMutation({mutationFn});

    return {createEventMutation, isLoadingCreateEvent};
  };

  const useGetUserEvents = () => {
    const mutationFn = async (): Promise<AxiosResponse<GetEventsResponse>> => {
      return await http.get('events/my');
    };

    const {mutate: getUserEventsMutation, isPending: isLoadingGetUserEvents} =
      useMutation({mutationFn});

    return {getUserEventsMutation, isLoadingGetUserEvents};
  };

  return {useCreateEvent, useGetUserEvents};
};

export default useEventApi;
