import { useQuery } from '@tanstack/react-query';

import HttpClient from '@/service/httpClient';

import { ProjectsType } from '@/types';

const httpClient = new HttpClient<ProjectsType[]>('/projects/type');

const useFetchProjectType = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['projects-type'],
    queryFn: () => httpClient.getAll(),
  });
  return {
    data: data?.data,
    error,
    isLoading,
  };
};

export default useFetchProjectType;
