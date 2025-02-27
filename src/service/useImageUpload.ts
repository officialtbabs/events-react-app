import pLimit from 'p-limit';
import {useHttpFormData} from './httpFormData';
import {CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET} from '../secrets';
import {useMutation} from '@tanstack/react-query';
import {ImageOrVideo} from 'react-native-image-crop-picker';
import {AxiosProgressEvent, AxiosResponse} from 'axios';
import {useAppDispatch} from '../constants/utils/hooks';
import {updateImageProgress} from '../reducerSlices/imageUploadSlice';
import {UploadApiResponse} from 'cloudinary';

const useImageUpload = () => {
  const dispatch = useAppDispatch();

  const {cloudinaryHttp} = useHttpFormData();

  const useSingleImageUpload = () => {
    const mutationFn = async (
      image: ImageOrVideo,
    ): Promise<AxiosResponse<UploadApiResponse>> => {
      const formdata = new FormData();

      formdata.append('file', {
        uri: image.path,
        type: image.mime,
        name: image.filename,
      });

      formdata.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

      return await cloudinaryHttp.post<
        UploadApiResponse,
        AxiosResponse<UploadApiResponse>,
        FormData
      >(`${CLOUDINARY_CLOUD_NAME}/image/upload`, formdata, {
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
          if (progressEvent.total) {
            const progress = Number(
              (progressEvent.loaded / progressEvent.total).toFixed(1),
            );

            dispatch(
              updateImageProgress({imageName: image.filename, progress}),
            );
          }
        },
      });
    };

    const {
      mutateAsync: singleImageUploadMutation,
      isPending: isLoadingSingleImageUpload,
    } = useMutation({mutationFn});

    return {
      singleImageUploadMutation,
      isLoadingSingleImageUpload,
    };
  };

  const useMultipleImageUpload = () => {
    const {singleImageUploadMutation} = useSingleImageUpload();

    const mutationFn = async (
      images: ImageOrVideo[],
    ): Promise<AxiosResponse<UploadApiResponse>[]> => {
      const limit = pLimit(5);

      return await Promise.all(
        images.map(image => {
          return limit(async () => singleImageUploadMutation(image));
        }),
      );
    };

    const {
      mutateAsync: multipleImageUploadMutation,
      isPending: isLoadingMultipleImageUpload,
    } = useMutation({
      mutationFn,
    });

    return {
      multipleImageUploadMutation,
      isLoadingMultipleImageUpload,
    };
  };

  return {
    useSingleImageUpload,
    useMultipleImageUpload,
  };
};

export default useImageUpload;
