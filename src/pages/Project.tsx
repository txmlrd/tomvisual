import Image from 'next/image';
import React from 'react';

function Project() {
  return (
    <div className=' flex flex-col items-center justify-center text-white  min-h-screen w-full'>
      <div className=' mb-16 flex flex-col items-center justify-center mx-96 space-y-7'>
        <div className='z-0 absolute'>
          <Image
            src='/svg/gradientroundshape.svg'
            alt='Tom Visual'
            width={1200}
            height={1000}
          />
        </div>

        <h1 className='font-poly text-6xl text-warna-hijaulebihmuda'>
          Project
        </h1>
        <h1 className='font-poppins text-center text-warna-hijaudesc font-light mx-52'>
          These projects reflect my skills in front-end development, visual
          design through photography and videography, and creating responsive
          websites.
        </h1>
      </div>
      {/* project card */}
      {/* tech */}
      <div className=' lg:space-x-16 space-x-0 lg:space-y-0 flex flex-col lg:flex-row space-y-16 '>
        <div className=' transition hover:scale-105 hover:-rotate-2 hover:-translate-x-10 duration-300 ease-in-out shadow-custom-default hover:shadow-custom-hover space-y-12 flex flex-col border rounded-lg bg-gradient-to-tl from-warna-hijautua to-warna-hijausedang border-warna-hijaulebihmuda p-10 w-[28rem] '>
          <Image
            src='/svg/project/technology.svg'
            alt='Tom Visual'
            width={150}
            height={150}
          />
          <div className='flex flex-col space-y-3'>
            <h1 className='font-poppins font-semibold text-5xl text-warna-hijaulebihmuda'>
              Technology
            </h1>
            <h1 className='tracking-wider font-poppins font-thin text-warna-hijaudesc '>
              I specialize in developing{' '}
              <span className='font-bold'>websites</span>, creating intuitive
              front-end interfaces and others tech project. My projects
              highlight my ability to leverage technology effectively to deliver
              user-friendly and visually appealing digital experiences.
            </h1>
          </div>
        </div>

        {/* visual */}
        <div className=' transition hover:scale-105 hover:rotate-2 hover:translate-x-10 duration-300 ease-in-out shadow-custom-default hover:shadow-custom-hover space-y-12 flex flex-col border rounded-lg bg-gradient-to-tl from-warna-hijautua to-warna-hijausedang border-warna-hijaulebihmuda p-10 w-[28rem] '>
          <Image
            src='/svg/project/visual.svg'
            alt='Tom Visual'
            width={150}
            height={150}
          />
          <div className='flex flex-col space-y-3'>
            <h1 className='font-poppins font-semibold text-5xl text-warna-hijaulebihmuda'>
              Visual
            </h1>
            <h1 className='tracking-wider font-poppins font-thin text-warna-hijaudesc '>
              Under my freelance brand{' '}
              <span className='font-semibold'>Tom Visual</span>, I specialize in
              photography and videography, crafting compelling visual narratives
              to elevate brand identities and capture memorable moments.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
