import { useQuery } from '@tanstack/react-query';

import HttpClient from '@/service/httpClient';

import { Media } from '@/types';

const httpClient = new HttpClient<Media>('/medias');

const useFetchLogo = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['media'],
    queryFn: () => httpClient.getAll(),
  });
  return {
    data: data?.data,
    error,
    isLoading,
  };
};

export default useFetchLogo;
