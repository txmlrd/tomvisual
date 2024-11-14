import React from 'react';

import useFetchMedia from '@/hooks/useFetchMedia';

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

const Media = () => {
  const { data, isLoading } = useFetchMedia();

  if (isLoading) {
    return (
      <div className='flex justify-center items-center w-full h-full py-10'>
        <Loading />
      </div>
    );
  }

  const formatTitleCase = (text: string) => {
    return text
      .split(/[-_]/) // Pisahkan berdasarkan tanda "-"
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)) // Ubah huruf pertama menjadi huruf besar
      .join(' '); // Gabungkan kembali dengan spasi
  };

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
            <TableHead className='p-4 text-left'>Type</TableHead>
            <TableHead className='p-4 text-left'>URL</TableHead>
            <TableHead className='p-4 text-left'>Name</TableHead>
            <TableHead className='p-4 text-left'>Create</TableHead>
            <TableHead className='p-4 text-left'>Update</TableHead>
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
                {formatTitleCase(item.type)}
              </TableCell>
              <TableCell
                className={`p-4 ${
                  index % 2 === 0 ? 'bg-[#19191f]' : 'bg-[#282830]'
                }`}
              >
                <div className='w-32 h-auto'>
                  <img
                    src={`${process.env.NEXT_PUBLIC_APP_URL}${item.url}`}
                    alt={item.name}
                    className='object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out'
                  />
                </div>
              </TableCell>
              <TableCell
                className={`p-4  ${
                  index % 2 === 0 ? 'bg-[#19191f]' : 'bg-[#282830]'
                }`}
              >
                {formatTitleCase(item.name)}
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

export default Media;
