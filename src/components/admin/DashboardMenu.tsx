import { Home } from 'lucide-react';
import React from 'react';

import Typography from '@/components/typography/Typography';
const DashboardMenu = () => {
  return (
    <div className='flex min-h-screen w-auto gap-5 flex-col debug py-3 px-5 text-white md:max-w-[460px]'>
      {/* <Typography variant='h1' color='white'>
        Tom Visual's Dashboard
      </Typography> */}

      <div className='flex flex-col gap-2'>
        <Typography variant='h2' color='white'>
          Data
        </Typography>
        <div className=' flex flex-row gap-3  justify-start items-center hover:bg-warna-hijausedang transition-all duration-300 ease-in-out px-5 py-3 rounded-xl'>
          <div>
            <Home size={20} />
          </div>
          <Typography variant='s2' color='white'>
            Projects
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default DashboardMenu;
