import { ChevronDown, FileText, Home, Settings } from 'lucide-react'; // Import all necessary icons
import React from 'react';

import { DashboardMenuItems } from '@/lib/static';

import Typography from '@/components/typography/Typography';

// Mapping icon names to actual icon components
const iconMapping = {
  Home: Home,
  Settings: Settings,
  FileText: FileText,
  // Add more mappings as needed
};

const DashboardMenu = ({ onMenuClick }: { onMenuClick: any }) => {
  const [openMenu, setOpenMenu] = React.useState(true);
  console.log(openMenu);
  const handleOpenMenu = () => setOpenMenu(!openMenu);

  return (
    <div className='flex w-80 gap-3 flex-col py-10 px-10 text-white md:max-w-[460px]'>
      <a
        href='/admin'
        className='flex px-5 py-3 rounded-xl hover:bg-warna-hijausedang transition-all duration-300 ease-in-out flex-row justify-between items-center cursor-pointer'
      >
        <Typography variant='h3' color='white'>
          Dashboard
        </Typography>
      </a>
      {DashboardMenuItems.map((section, sectionIndex) => (
        <div className='flex flex-col gap-5' key={sectionIndex}>
          <div
            className={`flex px-5 py-3 ${
              openMenu ? 'bg-warna-hijausedang' : 'bg-transparent'
            } rounded-xl hover:bg-warna-hijausedang transition-all duration-300 ease-in-out flex-row justify-between items-center cursor-pointer`}
            onClick={handleOpenMenu}
          >
            <Typography variant='h3' color='white'>
              {section.main_title}
            </Typography>
            <ChevronDown
              size={20}
              className={`${
                openMenu ? 'rotate-0' : 'rotate-180'
              } transition-transform duration-300`}
            />
          </div>

          <div
            className={`flex overflow-hidden flex-col gap-5 transition-all duration-300 ease-in-out  ${
              openMenu
                ? 'opacity-100 pointer-events-auto max-h-[500px]'
                : 'opacity-0 pointer-events-none max-h-0'
            }`}
          >
            {section.data.map((item, itemIndex) => {
              // Dynamically render the icon based on the mapping
              const IconComponent =
                iconMapping[item.icon as keyof typeof iconMapping] || Home;
              return (
                <a
                  key={itemIndex}
                  onClick={() => onMenuClick(item.url)}
                  className='flex cursor-pointer flex-row gap-3 justify-start items-center hover:bg-warna-hijausedang transition-all duration-300 ease-in-out px-5 py-3 rounded-xl'
                >
                  <div>
                    <IconComponent size={20} />
                  </div>
                  <Typography variant='s2' color='white'>
                    {item.title}
                  </Typography>
                </a>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardMenu;
