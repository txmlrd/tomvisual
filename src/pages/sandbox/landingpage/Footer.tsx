import React from 'react';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className=' flex justify-center items-center  bg-warna-hijautua py-5 text-white text-lg font-poppins font-thin'>
      <span className='font-bold mr-2 italic'>{year}</span> ©gungadhisanjaya
    </div>
  );
}

export default Footer;
