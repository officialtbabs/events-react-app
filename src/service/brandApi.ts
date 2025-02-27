import {AxiosResponse} from 'axios';
import {
  BrandCreationRequestDto,
  GetBrandsResponse,
} from '../constants/types/types';
import {useHttp} from './http';
import {useMutation} from '@tanstack/react-query';

const useBrandApi = () => {
  const {http} = useHttp();

  const useCreateBrand = () => {
    const mutationFn = async (
      payload: BrandCreationRequestDto,
    ): Promise<AxiosResponse> => {
      return http.post('brands/create', payload);
    };

    const {mutate: createBrandMutation, isPending: isLoadingCreateBrand} =
      useMutation({mutationFn});

    return {createBrandMutation, isLoadingCreateBrand};
  };

  const useGetBrands = () => {
    const mutationFn = async (): Promise<AxiosResponse<GetBrandsResponse>> => {
      return http.get<GetBrandsResponse, AxiosResponse<GetBrandsResponse>>(
        'brands/all',
      );
    };

    const {mutate: getBrandsMutation, isPending: isLoadingGetBrands} =
      useMutation({mutationFn});

    return {getBrandsMutation, isLoadingGetBrands};
  };

  const useGetBrandDetails = () => {
    const mutationFn = async () => {
      return http.get('');
    };

    const {
      mutate: getBrandDetailsMutation,
      isPending: isLoadingGetBrandDetails,
    } = useMutation({mutationFn});

    return {getBrandDetailsMutation, isLoadingGetBrandDetails};
  };

  return {useCreateBrand, useGetBrands, useGetBrandDetails};
};

export default useBrandApi;
