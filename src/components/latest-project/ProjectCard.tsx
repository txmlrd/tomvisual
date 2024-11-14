import Image from 'next/image';
import React from 'react';

import Error from '@/components/Error';
import Loading from '@/components/Loading';

import { Projects } from '@/types';
interface ProjectProps {
  items: Projects[];
  isLoading: boolean;
  error: boolean;
}
const ProjectCard: React.FC<ProjectProps> = ({ items, isLoading, error }) => {
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error name='FAQ' />;
  }
  return (
    <>
      {items.map((project, index) => (
        <a
          href={project.url}
          key={index}
          className='group hover:shadow-custom-hover hover:cursor-pointer duration-300 flex flex-col justify-center items-center space-y-6 border rounded-lg bg-gradient-to-tl from-warna-hijautua to-warna-hijausedang border-warna-hijaulebihmuda p-6 md:p-8 backdrop-blur-md max-w-xs md:max-w-md w-full'
        >
          <div className='overflow-hidden rounded-lg flex h-[247px] w-full'>
            {project.media.find((item) => item.type === 'main_image') ? (
              project.media.map(
                (item, index) =>
                  item.type === 'main_image' && (
                    <img
                      key={index}
                      src={`${process.env.NEXT_PUBLIC_APP_URL}${item.url}`}
                      alt={item.name}
                      width={1000}
                      height={1000}
                      className='object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out'
                    />
                  ),
              )
            ) : (
              <img
                src='/images/error/error.png'
                alt='Fallback Image'
                width={1000}
                height={1000}
                className='object-cover w-full h-full'
              />
            )}
          </div>

          <div className='flex flex-col space-y-2 md:space-y-3 text-center'>
            <div>
              <h1 className='text-xl md:text-2xl font-poppins font-semibold text-warna-hijaulebihmuda'>
                {project.title}
              </h1>
              <h2 className='text-xs md:text-sm font-poppins font-light text-white'>
                {project.project_type.name} • {project.year}
              </h2>
            </div>
            <p className='text-sm md:text-md font-poppins font-light text-warna-hijaudesc'>
              {project.content}
            </p>
            <div className='flex flex-wrap justify-center space-x-2'>
              {project.media.map(
                (item, index) =>
                  item.type === 'logo' && (
                    <Image
                      key={index}
                      src={`http://127.0.0.1/tom-visual/public/${item.url}`}
                      alt={item.name}
                      width={23.5}
                      height={23.5}
                    />
                  ),
              )}
            </div>
          </div>
        </a>
      ))}
    </>
  );
};

export default ProjectCard;
