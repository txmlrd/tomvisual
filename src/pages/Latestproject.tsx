'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import data from 'src/data/project.json';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ProjectCard({ project }: { project: any }) {
  const handleClick = () => {
    window.open(project.link, '_blank');
  };

  return (
    <div
      onClick={handleClick}
      className='group hover:shadow-custom-hover hover:cursor-pointer duration-300 justify-center items-center space-y-6 flex flex-col border rounded-lg bg-gradient-to-tl w-[31.375rem] from-warna-hijautua to-warna-hijausedang border-warna-hijaulebihmuda p-8 backdrop-blur-md'
    >
      <div className='overflow-hidden rounded-lg flex h-[15.313rem] w-full'>
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={1000}
          height={1000}
          className='object-cover w-full h-full group-hover:scale-105 transition duration-300 ease-in-out'
        />
      </div>

      <div className='flex flex-col space-y-3'>
        <div>
          <h1 className='text-2xl font-poppins font-semibold text-warna-hijaulebihmuda'>
            {project.title}
          </h1>
          <h1 className='text-sm font-poppins font-light text-white'>
            {project.subtitle}
          </h1>
        </div>
        <h1 className='text-md font-poppins font-light text-warna-hijaudesc'>
          {project.description}
        </h1>
        <div className='flex flex-row space-x-3'>
          {project.logos.map((logo: any, index: any) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={23.5}
              height={23.5}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const ProjectList = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? data : data.slice(0, 3);

  return (
    <div className=' flex flex-col items-center justify-center text-white w-full h-full'>
      <div className='mb-16 flex flex-col items-center justify-center mx-96 space-y-7'>
        <div className=' z-0 absolute'>
          <Image
            src='/svg/gradientroundshape.svg'
            alt='Tom Visual'
            width={1200}
            height={1000}
          />
        </div>

        <h1 className='font-poly text-6xl text-warna-hijaulebihmuda'>
          Latest Project
        </h1>
        <h1 className='font-poppins text-center text-warna-hijaudesc font-light mx-52'>
          These are my latest projects.
        </h1>
      </div>
      <div
        className={`${
          showAll
            ? 'grid gap-10 grid-cols-3'
            : 'grid gap-10 grid-cols-3 grid-rows-1'
        }`}
      >
        {displayedProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <button
        className='mt-10 group flex flex-row justify-center items-center bg-transparent bg-warna-hijaulebihmuda text-warna-hijautua py-2 px-4 rounded-xl font-poppins font-semibold text-lg transition duration-300 ease-in-out shadow-custom-default hover:shadow-custom-hover'
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? 'Show Less' : 'Show More'}
        <span
          className={`ml-2 transition-transform duration-300 ease-in-out ${
            showAll ? 'rotate-180' : ''
          }`}
        >
          <Image
            src='/svg/arrowright.svg'
            alt='Tom Visual'
            width={22}
            height={22}
          />
        </span>
      </button>
    </div>
  );
};

export default ProjectList;
