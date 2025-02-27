import {useMutation} from '@tanstack/react-query';
import {useHttp} from './http';

const useGoogleMap = () => {
  const {googleMapHttp} = useHttp();

  const useGetLocationPrediction = () => {
    const mutationFn = async (payload: {input: string}) => {
      return googleMapHttp.post('places:autocomplete', payload);
    };

    const {
      mutate: getLocationPredictionMutation,
      isPending: isLoadingGetLocationPredictions,
    } = useMutation({
      mutationFn,
    });

    return {getLocationPredictionMutation, isLoadingGetLocationPredictions};
  };

  const useGetLocationDetails = () => {
    const mutationFn = async (id: string) => {
      return googleMapHttp.get(`places/${id}`);
    };

    const {
      mutate: getLocationDetailsMutation,
      isPending: isLoadingGetLocationDetails,
    } = useMutation({mutationFn});

    return {getLocationDetailsMutation, isLoadingGetLocationDetails};
  };

  return {
    useGetLocationPrediction,
    useGetLocationDetails,
  };
};

export default useGoogleMap;
