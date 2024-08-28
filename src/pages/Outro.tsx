import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
function Outro() {
  return (
    <div className=' min-h-screen w-full grid grid-row-12 grid-flow-dense'>
      <div className=' flex flex-col justify-center items-center md:px-36 space-y-6 md:w-full md:h-full md:row-span-11 '>
        <div className=' w-full px-5 flex flex-col my-36 space-y-4'>
          <div className=''>
            <h1 className='font-poppins font-semibold text-warna-hijaulebihmuda text-4xl md:text-6xl leading-normal'>
              Turn your imagination into <br />
              <span className=' bg-white text-warna-hijaumuda mt-5'>
                reality
                <span className='animate-blink text-warna-hijaumuda '>.</span>
              </span>
            </h1>
          </div>

          <a
            href='https://ig.me/m/tomvisuall'
            target='_blank'
            className='group w-fit flex flex-row justify-center width items-center bg-transparent bg-warna-hijaulebihmuda text-warna-hijautua py-2 px-4 rounded-xl font-poppins font-semibold text-lg transition duration-300 ease-in-out shadow-custom-default hover:shadow-custom-hover'
          >
            Start a project
            <span className='ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1'>
              <Image
                src='/svg/arrowright.svg'
                alt='Tom Visual'
                width={22}
                height={22}
              />
            </span>
          </a>
        </div>
      </div>
      <div className=' md:space-x-0  space-y-10 border-b-2 border-warna-hijaulebihmuda flex md:flex-row flex-col items-center justify-center md:items-end md:justify-between md:mx-20 mx-5 pb-10'>
        <div className='mt-10'>
          <h1 className='mb-1 text-4xl md:text-left text-center font-poppins font-bold text-warna-hijaulebihmuda'>
            Let's Connect
          </h1>
          <h1 className=' text-xl mb-3 md:text-left text-center items-center w-full  font-poppins font-light text-white md:w-3/4'>
            Feel free to contact me if you have any questions about my profile
            or a project!
          </h1>
          <div className='space-x-4 justify-center md:justify-start flex flex-row'>
            <Link href='https://www.instagram.com/tomvisuall' target='_blank'>
              <Image
                src='/svg/socialmedia/instagram.svg'
                alt='Tom Visual'
                width={28}
                height={28}
                className='scale-110 transform transition duration-300 ease-in-out hover:scale-125 hover:rotate-3 hover:-translate-y-1'
              />
            </Link>

            <Link
              href='https://www.linkedin.com/in/gungadhisanjaya/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/svg/socialmedia/linkedin.svg'
                alt='Tom Visual'
                width={28}
                height={28}
                className='scale-110 transform transition duration-300 ease-in-out hover:scale-125 hover:rotate-3 hover:-translate-y-1'
              />
            </Link>

            <Link href='mailto:gungadhisanjaya@gmail.com' target='_blank'>
              <Image
                src='/svg/socialmedia/email.svg'
                alt='Tom Visual'
                width={30}
                height={30}
                className='scale-110 transform transition duration-300 ease-in-out hover:scale-125 hover:rotate-3 hover:-translate-y-1'
              />
            </Link>
          </div>
        </div>
        <div className='flex md:flex-row flex-col md:space-x-16 space-y-10 md:space-y-0 font-poppins items-center md:items-start'>
          {/* Resources */}
          <div className='flex flex-col items-center md:items-start'>
            <h1 className='text-xl font-poppins mb-3 text-warna-hijaulebihmuda text-center md:text-left'>
              Resources
            </h1>
            <a
              href='link'
              className='underline-animation text-white hover:text-warna-hijaudesc text-center md:text-left  font-thin'
            >
              CV
            </a>
          </div>

          {/* Featured */}
          <div className='flex flex-col items-center md:items-start'>
            <h1 className='text-xl font-poppins mb-3  text-warna-hijaulebihmuda text-center md:text-left'>
              Featured
            </h1>
            <a
              href='link'
              className='underline-animation hover:text-warna-hijaudesc text-white font-thin text-center md:text-left'
            >
              Tom Visual
            </a>
          </div>

          {/* Menu */}
          <div className='flex flex-col items-center md:items-start'>
            <h1 className='text-xl font-poppins mb-3 text-warna-hijaulebihmuda text-center md:text-left'>
              Menu
            </h1>
            <div className='grid gap-y-4 text-center md:text-left'>
              <a
                href='link'
                className='underline-animation hover:text-warna-hijaudesc text-white font-thin'
              >
                About me
              </a>
              <a
                href='link'
                className='underline-animation hover:text-warna-hijaudesc text-white font-thin'
              >
                Project
              </a>
              <a
                href='link'
                className='underline-animation hover:text-warna-hijaudesc text-white font-thin'
              >
                Latest project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Outro;
