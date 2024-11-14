import React from 'react';

import useFetchProjects from '@/hooks/useFetchProjects';

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

  if (isLoading) {
    return (
      <div className='flex justify-center items-center w-full h-full py-10'>
        <Loading />
      </div>
    );
  }

  return (
    <div className='overflow-x-auto  w-full p-4 bg-[#19191f] rounded-lg shadow-md'>
      <Table className='min-w-full bg-[#19191f] text-white'>
        <TableCaption className='text-white p-4 text-right'>
          <button className='px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600'>
            New Project Type
          </button>
        </TableCaption>
        <TableHeader className='bg-[#19191f] border-b border-white'>
          <TableRow>
            <TableHead className='w-[100px] p-4 text-left'>ID</TableHead>
            <TableHead className='p-4 text-left'>Title</TableHead>
            <TableHead className='p-4 text-left'>Project Type</TableHead>
            <TableHead className='p-4 text-right'>Year</TableHead>
            <TableHead className='p-4 text-left'>Content</TableHead>
            <TableHead className='p-4 text-left'>Media</TableHead>
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
                type
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
                foto
              </TableCell>
              <TableCell
                className={`p-4 ${
                  index % 2 === 0 ? 'bg-[#19191f]' : 'bg-[#282830]'
                }`}
              >
                desember
              </TableCell>
              <TableCell
                className={`p-4 ${
                  index % 2 === 0 ? 'bg-[#19191f]' : 'bg-[#282830]'
                }`}
              >
                januari
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
    </div>
  );
};

export default Projects;
