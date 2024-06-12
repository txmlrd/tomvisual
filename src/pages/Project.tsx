import React from 'react';

import ProjectCard from '@/components/ui-component/3dcard';

function Project() {
  return (
    <div className='min-h-screen flex w-full items-center justify-center'>
      <div>
        <h1 className='text-8xl font-poppins font-bold text-warna-hijaulebihmuda flex justify-center'>
          Project
        </h1>
        <div className='flex flex-row space-x-10'>
          <ProjectCard
            title='Technology Project'
            description='Technology project that i make recently including website and IoT.'
            imageUrl='/images/tech.jpg'
            linkUrl='https://instagram.com/tomvisuall'
            linkText='Details'
            buttonText=''
          />
          <ProjectCard
            title='Visual Project'
            description='Visual Project that i make as a freelance business called including fotography and videography.'
            imageUrl='/images/video.jpg'
            linkUrl='https://instagram.com/gungadhisanjaya'
            linkText='Details'
            buttonText=''
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
