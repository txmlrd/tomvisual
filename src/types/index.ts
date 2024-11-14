export interface FetchResponse<T> {
  data: T[];
}

interface Project_Type {
  id: number;
  name: string;
  description: string;
}

export interface Media {
  id: number;
  type: string;
  url: string;
  name: string;
  created_at: string;
  updated_at: string;
  pivot?: Pivot;
}

interface Pivot {
  project_id: number;
  media_id: number;
}

export interface Projects {
  id: number;
  title: string;
  project_type: Project_Type;
  year: string;
  content: string;
  media: Media[];
  created_at: string;
  updated_at: string;
  url: string;
}

export interface ProjectsType {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}
