import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
function Outro() {
  return (
    <div className='min-h-screen w-full grid grid-row-12 grid-flow-dense'>
      <div className=' flex flex-col justify-center items-start px-36 space-y-6 w-full h-full row-span-11 '>
        <div className=' flex flex-col'>
          <div>
            <h1 className='font-poppins font-semibold text-warna-hijaulebihmuda text-6xl leading-normal'>
              Turn your imagination <br />
              into reality<span className='animate-blink'>.</span>
            </h1>
          </div>

          <a
            href='https://ig.me/m/gungadhisanjaya'
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
      <div className='border-b-2 border-warna-hijaulebihmuda flex flex-row items-end justify-between mx-20 pb-10'>
        <div>
          <h1 className='mb-1 text-4xl font-poppins font-bold text-warna-hijaulebihmuda'>
            Let's Connect
          </h1>
          <h1 className=' text-xl mb-3 font-poppins font-light text-white w-3/4'>
            Feel free to contact me if you have any questions about my profile
            or a project!
          </h1>
          <div className='space-x-4 flex flex-row'>
            <Image
              src='/svg/socialmedia/instagram.svg'
              alt='Tom Visual'
              width={28}
              height={28}
              className='scale-110 transform transition duration-300 ease-in-out hover:scale-125 hover:rotate-3 hover:-translate-y-1'
            />
            <Image
              src='/svg/socialmedia/linkedin.svg'
              alt='Tom Visual'
              width={28}
              height={28}
              className='scale-110 transform transition duration-300 ease-in-out hover:scale-125 hover:rotate-3 hover:-translate-y-1'
            />
            <Image
              src='/svg/socialmedia/email.svg'
              alt='Tom Visual'
              width={30}
              height={30}
              className='scale-110 transform transition duration-300 ease-in-out hover:scale-125 hover:rotate-3 hover:-translate-y-1'
            />
          </div>
        </div>
        <div className='flex flex-row space-x-16 font-poppins'>
          {/* Resources */}
          <div>
            <h1 className='text-xl font-poppins mb-3 text-warna-hijaulebihmuda'>
              Resources
            </h1>
            <Link href='link' className='text-white font-thin'>
              CV
            </Link>
          </div>

          {/* Featured */}
          <div>
            <h1 className='text-xl font-poppins mb-3 text-warna-hijaulebihmuda'>
              Featured
            </h1>
            <Link href='link' className='text-white font-thin'>
              Tom Visual
            </Link>
          </div>

          {/* Menu */}
          <div>
            <h1 className='text-xl font-poppins mb-3 text-warna-hijaulebihmuda'>
              Menu
            </h1>
            <div className='grid gap-y-4'>
              <Link href='link' className='text-white font-thin'>
                About me
              </Link>
              <Link href='link' className='text-white font-thin'>
                Project
              </Link>
              <Link href='link' className='text-white font-thin'>
                Latest project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Outro;
