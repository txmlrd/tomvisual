export interface FetchResponse<T> {
  data: T[];
}

interface Project_Type {
  id: number;
  name: string;
}

export interface Projects {
  description: string;
  id: number;
  logos: { src: string; alt: string }[];
  image: { src: string; alt: string };
  link : string;
  subtitle : string;
  title : string;
}


export interface ProjectsType {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}
