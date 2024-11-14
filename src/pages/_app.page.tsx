import {
  QueryClient,
  QueryClientProvider,
  QueryOptions,
} from '@tanstack/react-query';
import { AppProps } from 'next/app';
import Router from 'next/router';
import nProgress from 'nprogress';

import '@/styles/nprogress.css';
import '@/styles/globals.css';

import api from '@/lib/axios';

import DismissableToast from '@/components/DismissableToast';
import AdminLayout from '@/components/layout/admin/AdminLayout';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

const defaultQueryFn = async ({ queryKey }: QueryOptions) => {
  const { data } = await api.get(`${queryKey?.[0]}`);
  return data;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});

function MyApp({ Component, pageProps, router }: AppProps) {
  // Periksa apakah path saat ini berada di bawah /admin
  const isAdminRoute = router.pathname.startsWith('/admin');

  // Fungsi getLayout untuk memungkinkan layout per halaman
  const getLayout =
    (Component as { getLayout?: (page: React.ReactNode) => React.ReactNode })
      .getLayout || ((page: React.ReactNode) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <DismissableToast />
        {isAdminRoute ? (
          <AdminLayout seo='Admin'>
            {getLayout(<Component {...pageProps} />)}
          </AdminLayout>
        ) : (
          getLayout(<Component {...pageProps} />)
        )}
      </div>
    </QueryClientProvider>
  );
}

export default MyApp;
