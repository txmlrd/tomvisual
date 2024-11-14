import { Routes } from '@/types';
const backendUrl = process.env.NEXT_PUBLIC_API_URL;
const routes: Routes = {
  project: {
    path: '/projects',
  },
  projectType: {
    path: '/project-types',
  },
  media: {
    path: '/media',
  },
};
export default routes;
