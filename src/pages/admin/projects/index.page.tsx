import React, { useState } from 'react';

import useFetchProjects from '@/hooks/useFetchProjects';

import AddProjectModal from '@/components/admin/AddProjectModal';
import Loading from '@/components/Loading';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const Projects = () => {
  const { data, isLoading } = useFetchProjects();
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log('ismodal open', isModalOpen);

  const handleOpenModal = () => setIsModalOpen(!isModalOpen);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleProjectAdded = (newProject) => {
    // Logic untuk menambahkan project baru ke list (jika perlu)
    console.log('Project added:', newProject);
    handleCloseModal();
  };

  if (isLoading) {
    return (
      <div className='flex justify-center items-center w-full h-full py-10'>
        <Loading />
      </div>
    );
  }

  return (
    <div className='overflow-x-auto w-full px-10 py-4 bg-[#19191f] rounded-lg shadow-md'>
      <Table className='min-w-full bg-[#19191f] text-white'>
        <TableCaption className='text-white p-4 text-right'>
          <button
            onClick={handleOpenModal}
            className='px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600'
          >
            New Project
          </button>
        </TableCaption>
        <TableHeader className='bg-[#19191f] border-b border-white'>
          <TableRow>
            <TableHead className='w-[100px] p-4 text-left'>ID</TableHead>
            <TableHead className='p-4 text-left'>Title</TableHead>
            <TableHead className='p-4 text-left'>Project Type</TableHead>
            <TableHead className='p-4 text-right'>Year</TableHead>
            <TableHead className='p-4 text-left'>Content</TableHead>
            <TableHead className='p-4 text-left'>Logo</TableHead>
            <TableHead className='p-4 text-left'>Main Image</TableHead>
            <TableHead className='p-4 text-left'>Create</TableHead>
            <TableHead className='p-4 text-left'>Update</TableHead>
            <TableHead className='p-4 text-left'>Url</TableHead>
            <TableHead className='p-4 text-left'>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data?.map((item, index) => (
            <TableRow key={index} className='border-b border-gray-700'>
              <TableCell
                className={`p-4 font-medium ${
                  index % 2 === 0 ? 'bg-[#19191f]' : 'bg-[#282830]'
                }`}
              >
                {item.id}
              </TableCell>
              <TableCell
                className={`p-4 ${
                  index % 2 === 0 ? 'bg-[#19191f]' : 'bg-[#282830]'
                }`}
              >
                {item.title}
              </TableCell>
              <TableCell
                className={`p-4 ${
                  index % 2 === 0 ? 'bg-[#19191f]' : 'bg-[#282830]'
                }`}
              >
                {item.project_type?.name}
              </TableCell>
              <TableCell
                className={`p-4 text-right ${
                  index % 2 === 0 ? 'bg-[#19191f]' : 'bg-[#282830]'
                }`}
              >
                {item.year}
              </TableCell>
              <TableCell
                className={`p-4 ${
                  index % 2 === 0 ? 'bg-[#19191f]' : 'bg-[#282830]'
                }`}
              >
                {item.content}
              </TableCell>
              <TableCell
                className={`p-4 ${
                  index % 2 === 0 ? 'bg-[#19191f]' : 'bg-[#282830]'
                }`}
              >
                <div className='w-32 h-auto'>
                  <img
                    src={
                      item.media &&
                      item.media[0] &&
                      item.media[0].type === 'logo' &&
                      item.media[0].url
                        ? `${process.env.NEXT_PUBLIC_APP_URL}${item.media[0].url}`
                        : '/images/error/error.png'
                    }
                    alt={item.title}
                    className='object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out'
                  />
                </div>
              </TableCell>
              <TableCell
                className={`p-4 ${
                  index % 2 === 0 ? 'bg-[#19191f]' : 'bg-[#282830]'
                }`}
              >
                <div className='w-32 h-auto'>
                  <img
                    src={
                      item.media &&
                      item.media[0] &&
                      item.media[0].type === 'main_image' &&
                      item.media[0].url
                        ? `${process.env.NEXT_PUBLIC_APP_URL}${item.media[0].url}`
                        : '/images/error/error.png'
                    }
                    alt={item.title}
                    className='object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out'
                  />
                </div>
              </TableCell>
              <TableCell
                className={`p-4 ${
                  index % 2 === 0 ? 'bg-[#19191f]' : 'bg-[#282830]'
                }`}
              >
                {item.created_at}
              </TableCell>
              <TableCell
                className={`p-4 ${
                  index % 2 === 0 ? 'bg-[#19191f]' : 'bg-[#282830]'
                }`}
              >
                {item.updated_at}
              </TableCell>
              <TableCell
                className={`p-4 ${
                  index % 2 === 0 ? 'bg-[#19191f]' : 'bg-[#282830]'
                }`}
              >
                {item.url}
              </TableCell>
              <TableCell
                className={`p-4 ${
                  index % 2 === 0 ? 'bg-[#19191f]' : 'bg-[#282830]'
                }`}
              >
                <button className='px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-2'>
                  Edit
                </button>
                <button className='px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600'>
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* AddProjectModal untuk menambahkan project baru */}
      <AddProjectModal openModal={isModalOpen} setOpenModal={handleOpenModal} />
    </div>
  );
};

export default Projects;
