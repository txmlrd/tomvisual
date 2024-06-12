import React from 'react';

function Outro() {
  return (
    <div className='min-h-screen flex w-full items-center justify-center'>
      <div className='flex flex-col w-full h-screen items-center justify-center space-y-10'>
        <div className='flex flex-col items-center justify-center space-y-3'>
          <h1 className='text-5xl font-poppins font-semibold text-warna-hijaulebihmuda'>
            Let's Connect
          </h1>
          <h1 className='text-2xl font-poppins font-normal text-white'>
            Feel free to contact me if you have any questions about my profile!
          </h1>
        </div>
        <div className='flex flex-row space-x-5'>
          <a
            href='https://www.instagram.com/gungadhisanjaya'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-transparent border border-warna-hijaulebihmuda py-2 px-4 rounded-xl font-poppins font-medium text-warna-hijaulebihmuda text-lg transition hover:bg-warna-hijaulebihmuda hover:text-warna-hijautua'
          >
            Instagram
          </a>
          <a
            href='mailto:gungadhisanjaya@gmail.com'
            className='bg-transparent border border-warna-hijaulebihmuda py-2 px-4 rounded-xl font-poppins font-medium text-warna-hijaulebihmuda text-lg transition hover:bg-warna-hijaulebihmuda hover:text-warna-hijautua'
          >
            Email
          </a>
          <a
            href='https://www.linkedin.com/in/gungadhisanjaya'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-transparent border border-warna-hijaulebihmuda py-2 px-4 rounded-xl font-poppins font-medium text-warna-hijaulebihmuda text-lg transition hover:bg-warna-hijaulebihmuda hover:text-warna-hijautua'
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Outro;
