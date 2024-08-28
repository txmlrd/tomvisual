import Image from 'next/image';
import React, { useState } from 'react';
import data from 'src/data/project.json';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Project = {
  link: string;
  image: {
    src: string;
    alt: string;
  };
  title: string;
  subtitle: string;
  description: string;
  logos: {
    src: string;
    alt: string;
  }[];
};

function ProjectCard({ project }: { project: Project }) {
  const handleClick = () => {
    window.open(project.link, '_blank');
  };

  return (
    <div
      onClick={handleClick}
      className='group hover:shadow-custom-hover hover:cursor-pointer duration-300 flex flex-col justify-center items-center space-y-6 border rounded-lg bg-gradient-to-tl from-warna-hijautua to-warna-hijausedang border-warna-hijaulebihmuda p-6 md:p-8 backdrop-blur-md max-w-xs md:max-w-md w-full'
    >
      <div className='overflow-hidden rounded-lg flex h-[247px] w-full'>
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={1000}
          height={1000}
          className='object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out'
        />
      </div>

      <div className='flex flex-col space-y-2 md:space-y-3 text-center'>
        <div>
          <h1 className='text-xl md:text-2xl font-poppins font-semibold text-warna-hijaulebihmuda'>
            {project.title}
          </h1>
          <h2 className='text-xs md:text-sm font-poppins font-light text-white'>
            {project.subtitle}
          </h2>
        </div>
        <p className='text-sm md:text-md font-poppins font-light text-warna-hijaudesc'>
          {project.description}
        </p>
        <div className='flex flex-wrap justify-center space-x-2'>
          {project.logos.map(
            (logo: { src: string; alt: string }, index: number) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                width={23.5}
                height={23.5}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
}

const ProjectList = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? data : data.slice(0, 3);

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
        {displayedProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
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
