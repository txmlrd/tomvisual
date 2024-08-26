import Image from 'next/image';
import * as React from 'react';

import firebaseSDK from '@/lib/firebaseConfig';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import { FlipWords } from '@/components/ui/flip-words';

import Aboutme from '@/pages/Aboutme';
import Hai from '@/pages/Hai';
import Latestproject from '@/pages/Latestproject';
import Outro from '@/pages/Outro';
import Project from '@/pages/Project';
import Footer from '@/pages/sandbox/landingpage/Footer';
import Navbar from '@/pages/sandbox/landingpage/Navbar';

export default function HomePage() {
  console.log(firebaseSDK);
  const words = ['Gung Adhi.', 'Tom Visual.'];
  const downloadPDF = () => {
    const pdfurl = '/download/cv.pdf';

    const link = document.createElement('a');
    link.href = pdfurl;
    link.setAttribute('download', 'cv.pdf');

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      <Seo templateTitle='Home' />
      <Navbar scrollTo={scrollTo} />
      <main>
        <div className='flex flex-col items-center justify-center bg-gradient-to-b from-warna-hijautua via-black to-warna-hijautua min-h-screen '>
          <div className=' flex flex-col md:flex-row h-auto justify-center w-full items-center md:space-x-44'>
            <div className=' h-96 flex flex-col items-center justify-center text-warna-hijaulebihmuda'>
              <div className=' text-7xl font-poppins md:space-y-3 px-9 '>
                <h1 className='font-semibold'>Hello !</h1>
                <div className='flex flex-col space-y-6'>
                  <div className='h-10 md:h-12 font-light md:text-5xl text-3xl'>
                    I'm
                    <FlipWords words={words} className='font-bold' />
                  </div>
                  <div className='text-lg text-warna-hijaudesc hidden md:block'>
                    This is my personal portofolio. I’m interested in Technology
                    and Visual Design. <br />
                    Keep in touch with me !
                  </div>
                  <div className='text-lg text-left text-warna-hijaudesc md:hidden block'>
                    This is my personal portofolio. I’m interested in Technology
                    and Visual Design. Keep in touch with me !
                  </div>
                  <div className='flex flex-row space-x-5'>
                    <button
                      onClick={downloadPDF}
                      className='bg-transparent bg-warna-hijaulebihmuda text-warna-hijautua py-2 px-4 rounded-xl font-poppins font-medium text-lg transition duration-300 ease-in-out shadow-custom-default hover:shadow-custom-hover'
                    >
                      Download CV
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
                src='/svg/profile.svg'
                alt='Tom Visual'
                width={550}
                height={500}
                className='hidden md:block '
              />
              <Image
                src='/svg/profile.svg'
                alt='Tom Visual'
                width={400}
                height={500}
                className='md:hidden '
              />
            </div>
          </div>
          <Aboutme />
          <a id='project'>
            <Project />
          </a>
          <Hai />
          <Latestproject />
          {/* <Testpages /> */}
          <Outro />
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
