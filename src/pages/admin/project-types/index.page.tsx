import React from 'react';

import useFetchProjectType from '@/hooks/useFetchProjectType';

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

const ProjectTypes = () => {
  const { data, isLoading } = useFetchProjectType();

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
            <TableHead className='p-4 text-left'>Name</TableHead>
            <TableHead className='p-4 text-left'>Description</TableHead>
            <TableHead className='p-4 text-left'>Action</TableHead>
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
                {item.name}
              </TableCell>
              <TableCell
                className={`p-4 ${
                  index % 2 === 0 ? 'bg-[#19191f]' : 'bg-[#282830]'
                }`}
              >
                {item.description}
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

export default ProjectTypes;
