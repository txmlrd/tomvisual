import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  linkText: string;
  buttonText: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  linkUrl,
  linkText,
}) => {
  return (
    <CardContainer className='inter-var'>
      <CardBody className='bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-warna-hijaumuda dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
        <CardItem
          translateZ='50'
          className='text-xl font-bold text-neutral-600 dark:text-warna-hijaulebihmuda'
        >
          {title}
        </CardItem>
        <CardItem
          as='p'
          translateZ='60'
          className='text-neutral-500 text-sm font-normal max-w-sm mt-2 dark:text-warna-hijautua'
        >
          {description}
        </CardItem>
        <CardItem translateZ='100' className='w-full mt-4'>
          <Image
            src={imageUrl}
            height='1000'
            width='1000'
            className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
            alt='thumbnail'
          />
        </CardItem>
        <div className='flex justify-between items-center mt-20'>
          <CardItem
            translateZ={20}
            as={Link}
            href={linkUrl}
            target='__blank'
            className=' px-4 py-2 rounded-xl border border-warna-orange bg-transparent hover:dark:bg-warna-orange dark:text-white text-white text-md font-bold'
          >
            {linkText}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
