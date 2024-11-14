import { useQuery } from '@tanstack/react-query';

import HttpClient from '@/service/httpClient';

import { Media } from '@/types';

const httpClient = new HttpClient<Media>('/medias');

const useFetchMedia = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['medias'],
    queryFn: () => httpClient.getAll(),
  });
  return {
    data: data?.data,
    error,
    isLoading,
  };
};

export default useFetchMedia;
