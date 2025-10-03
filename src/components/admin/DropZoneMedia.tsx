import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

import FilePreview from '@/components/admin/FilePreview';

interface DropZoneMediaProps {
  onFilesChange: (files: File[]) => void;
}

export function DropZoneMedia({ onFilesChange }: DropZoneMediaProps) {
  const [filePreview, setFilePreview] = useState<string>(''); // To store preview URL
  const [openFilePreview, setOpenFilePreview] = useState(false);
  const hanldeOpenFilePreview = () => setOpenFilePreview(!openFilePreview);
  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': [] },
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setFilePreview(URL.createObjectURL(file));
        onFilesChange(acceptedFiles);
      }
    },
  });

  return (
    <div className='  border-2 border-dashed border-gray-400 p-10 rounded text-center w-full '>
      <div
        {...getRootProps()}
        className='cursor-pointer border-2  border-red-500 p-10 transition-all ease-in-out duration-300 hover:bg-red-500 rounded-xl'
      >
        <input {...getInputProps()} />
        <p>Drag & drop a file here, or click to select a file</p>
      </div>

      {filePreview && (
        <div className='mt-4  border-2  border-green-500 rounded-xl p-5 flex flex-col text-center items-center  gap-5'>
          <h2 className='text-md font-semibold w-full text-start'>
            File Preview:
          </h2>
          <div className='debug w-full max-h-40 overflow-clip'>
            {' '}
            <img
              src={filePreview}
              onClick={hanldeOpenFilePreview}
              alt='Preview'
              className='object-cover h-full w-full'
            />
          </div>
        </div>
      )}
      <FilePreview
        openModal={openFilePreview}
        setOpenModal={setOpenFilePreview}
        file={filePreview}
      />
    </div>
  );
}
