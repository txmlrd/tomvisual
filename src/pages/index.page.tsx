import Image from 'next/image';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import { FlipWords } from '@/components/ui/flip-words';

import Outro from '@/pages/Outro';
import Project from '@/pages/Project';
import Footer from '@/pages/sandbox/landingpage/Footer';
import Navbar from '@/pages/sandbox/landingpage/Navbar';
export default function HomePage() {
  const words = ['Gung Adhi.', 'Tom Visual.'];
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <Navbar />
      <main>
        <div className='flex flex-col items-center justify-center bg-warna-hijautua min-h-screen '>
          <div className='grid grid-cols-2 h-screen w-full text-warna-hijaulebihmuda'>
            <div className=' flex flex-col items-center justify-center '>
              <div className=' text-5xl font-poppins space-y-3 px-9 '>
                <h1 className='font-semibold'>Hello !</h1>
                <div className='flex flex-col space-y-6'>
                  <div className='font-light'>
                    I'm
                    <FlipWords words={words} className='font-bold' />
                  </div>
                  <div className='text-lg'>
                    This is my personal portofolio. I’m interested in Technology
                    and Visual Design. <br />
                    Keep in touch with me !
                  </div>
                  <div className='flex flex-row space-x-5'>
                    <button className='bg-transparent border border-warna-hijaulebihmuda py-2 px-4 rounded-xl font-poppins font-medium text-lg transition hover:bg-warna-hijaulebihmuda hover:text-warna-hijautua'>
                      About Me
                    </button>
                    <button className='bg-transparent border border-warna-hijaulebihmuda py-2 px-4 rounded-xl font-poppins font-medium text-lg transition hover:bg-warna-hijaulebihmuda hover:text-warna-hijautua'>
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=' flex items-center justify-center '>
              <Image
                src='/images/profile.png'
                alt='Tom Visual'
                width={550}
                height={500}
              />
            </div>
          </div>
          <Project />
          <Outro />
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
