import React, { Dispatch, SetStateAction } from 'react';

interface AddProjectModalProps {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  file: string;
}
const FilePreview: React.FC<AddProjectModalProps> = ({
  openModal,
  setOpenModal,
  file,
}) => {
  return (
    <div
      onClick={() => setOpenModal((prev) => !prev)}
      className={` ${
        openModal
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }  transition-all debug ease-in-out duration-300 overflow-y-auto fixed inset-0 flex justify-center items-center bg-black backdrop-blur-md bg-opacity-25  debug z-50 max-h-screen `}
    >
      <div className='h-screen'>
        <img src={file} alt='Preview' className=' h-full w-full' />
      </div>
    </div>
  );
};

export default FilePreview;
