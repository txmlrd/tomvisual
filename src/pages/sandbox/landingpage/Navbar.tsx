import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';

const Navbar = () => {
  const [navbar, setNavbar] = React.useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader);
    return () => {
      window.addEventListener('scroll', scrollHeader);
    };
  }, []);
  return (
    // <div className='sticky top-0 z-50 bg-warna-hijautua'>
    <div
      className={
        navbar
          ? 'sticky top-0 z-50 bg-transparent'
          : 'sticky top-0 z-50 bg-warna-hijautua'
      }
    >
      <nav
        className={
          navbar
            ? 'transition bg-transparent h-20 flex items-center custom-rounded-navbar font-poppins font-medium'
            : 'transition bg-warna-hijaumuda h-20 flex items-center custom-rounded-navbar font-poppins font-medium'
        }
      >
        <ul className='w-full'>
          <div className=' flex flex-row items-center justify-between mx-11 '>
            <li>
              <Image
                src='/images/tomvisuallogo.png'
                width={41}
                height={39}
                alt='Tom Visual Logo'
              />
            </li>
            <div className=' flex flex-row items-center space-x-11 '>
              <Link href='link'>
                <li className='px-5 py-2 bg-warna-orange rounded-full ring-4 ring-orange-500 ring-opacity-20'>
                  Tom Visual
                </li>
              </Link>
              <li>
                <Link href='link' className='text-warna-hijaulebihmuda'>
                  Project
                </Link>
              </li>
              <li>
                <Link href='link' className='text-warna-hijaulebihmuda'>
                  Contact
                </Link>
              </li>
              <li>
                <Link href='link' className='text-warna-hijaulebihmuda'>
                  About Me
                </Link>
              </li>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
