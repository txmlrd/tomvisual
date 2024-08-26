import Image from 'next/image';
import React from 'react';

function Project() {
  return (
    <div className=' flex flex-col items-center justify-center text-white min-h-screen px-4 py-20'>
      <div className='mb-16 flex flex-col items-center justify-center xl:mx-32 space-y-7'>
        <div className='absolute'>
          <Image
            src='/svg/gradientroundshape.svg'
            alt='Tom Visual'
            layout='responsive'
            width={1200}
            height={1000}
          />
        </div>

        <h1 className='font-poly text-5xl md:text-6xl text-warna-hijaulebihmuda'>
          Project
        </h1>
        <h2 className='font-poppins text-center text-warna-hijaudesc font-light md:mx-32'>
          These projects reflect my skills in front-end development, visual
          design through photography and videography, and creating responsive
          websites.
        </h2>
      </div>
      {/* project card */}
      <div className='lg:space-x-16 space-x-0 lg:space-y-0 flex flex-col lg:flex-row space-y-16'>
        {/* Technology Card */}
        <div className='transition transform hover:scale-105 hover:rotate-1 duration-300 ease-in-out shadow-custom-default hover:shadow-custom-hover space-y-12 flex flex-col border rounded-lg bg-gradient-to-tl from-warna-hijautua to-warna-hijausedang border-warna-hijaulebihmuda p-6 w-full max-w-sm'>
          <Image
            src='/svg/project/technology.svg'
            alt='Technology'
            layout='intrinsic'
            width={150}
            height={150}
          />
          <div className='flex flex-col space-y-3'>
            <h3 className='font-poppins font-semibold text-3xl text-warna-hijaulebihmuda'>
              Technology
            </h3>
            <p className='tracking-wider font-poppins font-thin text-warna-hijaudesc'>
              I specialize in developing{' '}
              <span className='font-bold'>websites</span>, creating intuitive
              front-end interfaces and other tech projects. My projects
              highlight my ability to leverage technology effectively to deliver
              user-friendly and visually appealing digital experiences.
            </p>
          </div>
        </div>

        {/* Visual Card */}
        <div className='transition transform hover:scale-105 hover:rotate-1 duration-300 ease-in-out shadow-custom-default hover:shadow-custom-hover space-y-12 flex flex-col border rounded-lg bg-gradient-to-tl from-warna-hijautua to-warna-hijausedang border-warna-hijaulebihmuda p-6 w-full max-w-sm'>
          <Image
            src='/svg/project/visual.svg'
            alt='Visual'
            layout='intrinsic'
            width={150}
            height={150}
          />
          <div className='flex flex-col space-y-3'>
            <h3 className='font-poppins font-semibold text-3xl text-warna-hijaulebihmuda'>
              Visual
            </h3>
            <p className='tracking-wider font-poppins font-thin text-warna-hijaudesc'>
              Under my freelance brand{' '}
              <span className='font-semibold'>Tom Visual</span>, I specialize in
              photography and videography, crafting compelling visual narratives
              to elevate brand identities and capture memorable moments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
