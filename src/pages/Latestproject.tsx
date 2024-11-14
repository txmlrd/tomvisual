import Image from 'next/image';
import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import useFetchProjects from '@/hooks/useFetchProjects';

import ProjectCard from '@/components/latest-project/ProjectCard';

const ProjectList = () => {
  const [showAll, setShowAll] = useState(false);
  const { data, isLoading, error } = useFetchProjects();
  const displayedProjects = showAll ? data : data?.slice(0, 3);

  return (
    <div className='flex flex-col items-center justify-center text-white w-full min-h-screen px-4 md:px-6'>
      <div className='flex flex-col items-center justify-center mb-8 md:mb-16'>
        <div className='relative w-full'>
          <Image
            src='/svg/gradientroundshape.svg'
            alt='Tom Visual'
            layout='responsive'
            width={1200}
            height={1000}
          />
        </div>

        <h1 className='font-poly text-5xl md:text-6xl text-warna-hijaulebihmuda text-center'>
          Latest Project
        </h1>
        <h2 className='font-poppins text-center text-warna-hijaudesc font-light md:mx-24'>
          These are my latest projects.
        </h2>
      </div>
      <div
        className={`${
          showAll
            ? 'grid gap-6 md:gap-10 lg:grid-cols-3'
            : 'grid gap-6 md:gap-8 grid-cols-1 lg:grid-cols-3'
        }`}
      >
        {displayedProjects?.map((project, index) => (
          <ProjectCard
            key={index}
            items={[project]}
            isLoading={isLoading}
            error={error as boolean}
          />
        ))}
      </div>
      <button
        className='mt-8 bg-transparent bg-warna-hijaulebihmuda text-warna-hijautua py-2 px-4 rounded-xl font-poppins font-semibold text-lg transition duration-300 ease-in-out shadow-custom-default hover:shadow-custom-hover flex items-center'
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? 'Show Less' : 'Show More'}
        <span
          className={`ml-2 transition-transform duration-300 ease-in-out ${
            showAll ? 'rotate-180' : ''
          }`}
        >
          <Image src='/svg/arrowright.svg' alt='Arrow' width={22} height={22} />
        </span>
      </button>
    </div>
  );
};

export default ProjectList;
