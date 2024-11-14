import Image from 'next/image';
import React from 'react';

import Error from '@/components/Error';
import Loading from '@/components/Loading';

import { Media } from '@/types';
interface AboutmeProps {
  items: Media[];
  isLoading: boolean;
  error: boolean;
}

const Aboutme: React.FC<AboutmeProps> = ({ items, isLoading, error }) => {
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error name='Project Type' />;
  }
  return (
    <div className='flex flex-col items-center justify-center text-white  min-h-screen w-full'>
      <div className=' flex flex-col items-center justify-center space-y-7'>
        <div className='z-0 absolute'>
          <Image
            src='/svg/gradientroundshape.svg'
            alt='Tom Visual'
            width={1200}
            height={1000}
          />
        </div>

        <h1 className='font-poly text-5xl md:text-6xl text-warna-hijaulebihmuda'>
          About Me
        </h1>
        <h1 className='font-poppins text-center text-warna-hijaudesc font-light mx-10 md:mx-96'>
          Hi! I'm <span className='font-bold'>Gung Adhi</span>, a Front-End
          Developer, Web Designer, and Videographer with extensive experience in
          tech and visual arts. I have a passion for creating functional and
          visually appealing solutions, combining my technical skills with
          creative design.
        </h1>
      </div>
      <div className='pt-10 pb-16 flex items-center justify-center'>
        <div className=' md:scale-100 scale-90 flex flex-row gap-5'>
          {items.map(
            (item, index) =>
              item.type === 'logo' && (
                <div key={index} className=''>
                  <Image
                    key={index}
                    src={`${process.env.NEXT_PUBLIC_APP_URL}${item.url}`}
                    alt='VS Code'
                    width={64}
                    height={64}
                    objectFit='contain'
                  />
                </div>
              ),
          )}
        </div>
      </div>

      <div className=' md:items-start items-center justify-center flex md:flex-row flex-col md:space-x-10 md:space-y-0 space-y-10 mx-5'>
        <div className=' flex flex-col justify-center items-center space-y-12'>
          <h1 className='font-poly text-5xl text-warna-hijaulebihmuda'>
            Education
          </h1>
          <div className='border rounded-lg bg-gradient-to-tl from-warna-hijautua to-warna-hijausedang border-warna-hijaulebihmuda p-5'>
            <div className='flex flex-col text-warna-hijaudesc space-y-3'>
              <div className='space-y-3 flex flex-col'>
                <div className='space-x-5 flex flex-row'>
                  <Image
                    src='/svg/education/its.svg'
                    height={50}
                    width={50}
                    alt='Education SVG'
                  />
                  <h1 className='font-normal'>
                    <span className='font-bold'>
                      Institut Teknologi Sepuluh Nopember
                    </span>
                    <br />
                    <span className='font-normal'>(2021 - Present)</span>
                  </h1>
                </div>

                <div className='space-x-5 flex flex-row'>
                  <Image
                    src='/svg/education/sisma.svg'
                    height={50}
                    width={50}
                    alt='Education SVG'
                  />
                  <h1 className='font-normal'>
                    <span className='font-bold'>SMAN 7 Denpasar</span>
                    <br />
                    <span className='font-normal'>(2018 - 2021)</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=' flex flex-col justify-center items-center space-y-12'>
          <h1 className='font-poly text-5xl text-warna-hijaulebihmuda'>
            Experience
          </h1>
          <div className='border rounded-lg bg-gradient-to-tl from-warna-hijautua to-warna-hijausedang border-warna-hijaulebihmuda p-5'>
            <div className='flex flex-col text-warna-hijaudesc space-y-3'>
              <div className='space-y-3 flex flex-col'>
                <div className='items-center justify-center flex flex-row space-x-5'>
                  <Image
                    src='/svg/experience/starter.svg'
                    height={45}
                    width={45}
                    alt='Education SVG'
                  />
                  <h1 className='font-normal'>
                    <span className='font-bold'>CTO</span> of{' '}
                    <span className='font-bold'>Starter Academy</span>
                    <br />
                    <span className='font-normal'>
                      Tim PIMNAS PKM-K 2023 (Feb 23 - Nov 23)
                    </span>
                  </h1>
                </div>

                <div className='space-x-5 flex flex-row'>
                  <Image
                    src='/svg/experience/tpkh.svg'
                    height={50}
                    width={50}
                    alt='Education SVG'
                  />
                  <h1 className='font-normal'>
                    <span className='font-bold'>Chief</span> of{' '}
                    <span className='font-bold'>MEDFO Department</span>
                    <br />
                    <span className='font-normal'>
                      TPKH ITS (May 23 - Feb 24)
                    </span>
                  </h1>
                </div>
                <div className='space-x-5 flex flex-row'>
                  <Image
                    src='/svg/experience/ilits.svg'
                    height={50}
                    width={50}
                    alt='Education SVG'
                  />
                  <h1 className='font-normal'>
                    <span className='font-bold'>Coordinator</span> of{' '}
                    <span className='font-bold'>PDD Department</span>
                    <br />
                    <span className='font-normal'>
                      Ini Lho ITS! Forda Bali 2023 (Dec 22 - Jan 23)
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
