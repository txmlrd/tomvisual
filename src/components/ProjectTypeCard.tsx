import Image from 'next/image';
import React from 'react';

import { ProjectsType } from '@/types';

interface ProjectTypeProps {
  items: ProjectsType[];
}

const ProjectTypeCard: React.FC<ProjectTypeProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className={`transition transform ${
            index % 3 === 0
              ? 'hover:rotate-1'
              : index % 3 === 1
                ? 'hover:-rotate-1'
                : 'hover:rotate-1'
          } hover:scale-105 cursor-pointer duration-300 ease-in-out shadow-custom-default hover:shadow-custom-hover space-y-12 flex flex-col border rounded-lg bg-gradient-to-tl from-warna-hijautua to-warna-hijausedang border-warna-hijaulebihmuda p-6 w-full max-w-sm`}
        >
          <Image
            src='/svg/project/visual.svg'
            alt='Visual'
            layout='intrinsic'
            width={150}
            height={150}
          />
          <div className='flex flex-col space-y-3'>
            <h3 className='font-poppins font-semibold text-3xl text-warna-hijaulebihmuda'>
              {item.name}
            </h3>
            <p className='tracking-wider font-poppins font-thin text-warna-hijaudesc'>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectTypeCard;
