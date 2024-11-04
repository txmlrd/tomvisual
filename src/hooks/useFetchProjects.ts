import { useQuery } from '@tanstack/react-query';

import HttpClient from '@/service/httpClient';

import { Projects } from '@/types';

const httpClient = new HttpClient<Projects>('/projects');

const useFetchProjects = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: () => httpClient.getAll(),
  });
  return {
    data: data?.data,
    error,
    isLoading,
  };
};

export default useFetchProjects;
