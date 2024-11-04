import { NextPage } from 'next';
import { SyncLoader } from 'react-spinners';

const Loading: NextPage = () => {
  return (
    <div className='mt-[30px] flex min-h-screen items-center justify-center'>
      <SyncLoader color='#1F91D8' />
    </div>
  );
};

export default Loading;
