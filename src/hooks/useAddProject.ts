import { useMutation, useQueryClient } from '@tanstack/react-query';

import HttpClient from '@/service/httpClient';

import { Projects } from '@/types';

const httpClient = new HttpClient<Projects>('/projects');

const useAddProject = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: (newProject: Projects) => httpClient.post(newProject),
    onSuccess: () => {
      // Refresh the 'projects' list after a successful POST
      queryClient.invalidateQueries(['projects']);
    },
  });

  return {
    createProject: mutate,
    isLoading,
    isError,
    error,
  };
};

export default useAddProject;
