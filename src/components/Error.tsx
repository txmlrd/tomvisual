import { NextPage } from 'next';

interface Props {
  name?: string;
}

const NoData: NextPage<Props> = ({ name }) => {
  return (
    <div className='col-span-full row-span-full flex items-center justify-center'>
      <p className='text-center text-[18px] text-gray-500 md:text-[18px]'>
        Hasil{name ? ' ' + name : ''} tidak ditemukan.
      </p>
    </div>
  );
};

export default NoData;
