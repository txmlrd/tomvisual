import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import Navbar from '@/pages/sandbox/landingpage/Navbar';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <Navbar />
      <main>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <Typography as='h1' variant='j1'>
              Cok
            </Typography>
          </div>
        </section>
      </main>
    </Layout>
  );
}
