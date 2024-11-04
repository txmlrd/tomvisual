export interface FetchResponse<T> {
  data: T[];
}

interface Project_Type {
  id: number;
  name: string;
}

export interface Projects {
  id: number;
  main_image: string;
  title: string;
  project_type: Project_Type;
  year: string;
  content: string;
  created_at: string;
  updated_at: string;
  link: string;
}

export interface ProjectsType {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}
