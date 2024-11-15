import { XIcon } from 'lucide-react';
import React from 'react';

import { DropZoneMedia } from '@/components/admin/DropZoneMedia';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

interface AddProjectModalProps {
  openModal: boolean;
  setOpenModal: () => void;
}
const AddProjectModal: React.FC<AddProjectModalProps> = ({
  openModal,
  setOpenModal,
}) => {
  return (
    <div
      className={` ${
        openModal
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }  transition-all ease-in-out duration-300 overflow-y-auto fixed inset-0 flex justify-center items-center bg-black backdrop-blur-md bg-opacity-25 z-40 max-h-screen `}
    >
      <div className='bg-[#19191f] rounded-lg p-6 w-full  flex flex-col max-w-[1000px] gap-2 border border-white '>
        <div className='flex flex-row justify-between items-center'>
          <h2 className='text-xl font-semibold mb-4 text-white text-center'>
            Add New Project
          </h2>
          <div
            onClick={setOpenModal}
            className='text-white p-1 bg-red-500 rounded-full transition-all duration-300 ease-in-out hover:bg-red-700 cursor-pointer'
          >
            <XIcon size={24} />
          </div>
        </div>
        <div className='grid grid-cols-2 gap-5'>
          <div className='flex flex-col w-full items-start gap-1.5'>
            <Label htmlFor='title'>Title</Label>
            <Input type='text' id='title' placeholder='Title' />
          </div>
          <div className='flex flex-col w-full items-start gap-1.5'>
            <Label htmlFor='type'>Project Type</Label>
            <Select>
              <SelectTrigger className=''>
                <SelectValue placeholder='Project Type' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='light'>Light</SelectItem>
                <SelectItem value='dark'>Dark</SelectItem>
                <SelectItem value='system'>System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='flex flex-col w-full items-start gap-1.5'>
            <Label htmlFor='year'>Year</Label>
            <Input type='number' id='year' placeholder='Year' />
          </div>

          <div className='flex flex-col w-full items-start gap-1.5'>
            <Label htmlFor='url'>URL</Label>
            <Input type='text' id='url' placeholder='URL' />
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col w-full items-start gap-1.5'>
            <Label htmlFor='message'>Your message</Label>
            <Textarea placeholder='Type your message here.' id='message' />
          </div>
          <div className='flex flex-col w-full  items-start gap-3'>
            <Label htmlFor='message'>Upload Media</Label>
            <DropZoneMedia onFilesChange={undefined} />
            <div className='mt-4'>
              <h2 className='text-md font-semibold'>Selected Files:</h2>
              {/* <ul>
                {files.map((file, index) => (
                  <li key={index}>
                    {file.name} - {file.size} bytes
                  </li>
                ))}
              </ul> */}
            </div>
          </div>
        </div>

        {/* <form className='space-y-4 text-black'>
          <input
            type='text'
            name='title'
            placeholder='Title'
            className='w-full px-4 py-2 border rounded'
            required
          />
          <select
            name='project_type'
            className='w-full px-4 py-2 border rounded'
            required
          >
            <option value=''>Select Project Type</option>
          </select>
          <input
            type='number'
            name='year'
            placeholder='Year'
            className='w-full px-4 py-2 border rounded'
            required
          />
          <textarea
            name='content'
            placeholder='Content'
            className='w-full px-4 py-2 border rounded max-h-24 overflow-y-auto'
            required
          />
          <select name='media' className='w-full px-4 py-2 border rounded'>
            <option value=''>Select Media</option>
          </select>

          <input
            type='url'
            name='url'
            placeholder='URL'
            className='w-full px-4 py-2 border rounded'
          />
          <button
            type='submit'
            className='w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50'
          >
            Submit
          </button>
        </form> */}
      </div>
    </div>
  );
};

export default AddProjectModal;
