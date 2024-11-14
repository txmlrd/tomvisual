import React from 'react';

import Typography from '@/components/typography/Typography';
const NavbarAdmin = () => {
  return (
    <nav className=' text-white py-7 px-10 bg-[#1C1F18] flex flex-row justify-between items-center'>
      <Typography variant='h1' color='hijau'>
        Tom Visual’s secret services.
      </Typography>
      <div className='p-2 rounded-full bg-warna-hijaulebihmuda'>
        <Typography variant='h1' className='text-warna-hijaumuda'>
          TV
        </Typography>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
