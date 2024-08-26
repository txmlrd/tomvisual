import { Spin as Hamburger } from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useEffect, useState } from 'react';

interface NavbarProps {
  scrollTo: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollTo }) => {
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

  const [isOpen, setOpen] = useState(false);

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
            ? 'transition bg-transparent h-auto py-5 flex items-center custom-rounded-navbar font-poppins font-medium'
            : 'transition bg-warna-hijausedang py-5 h-auto flex items-center custom-rounded-navbar font-poppins font-medium'
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
            <div className='md:hidden'>
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                color='#FFFFFF'
                rounded
              />
            </div>
            <div className='hidden md:flex flex-row items-center space-x-11'>
              <Link href='link'>
                <li
                  className={
                    navbar
                      ? 'px-5 py-2 hover:bg-warna-hijaulebihmuda hover:text-warna-hijautua text-warna-hijaulebihmuda border border-warna-hijaulebihmuda  rounded-lg'
                      : 'px-5 py-2 bg-warna-hijaulebihmuda shadow-custom-default hover:shadow-custom-hover  rounded-lg'
                  }
                >
                  Tom Visual
                </li>
              </Link>
              <li>
                <button
                  onClick={() => handleScrollTo('project')}
                  className='text-warna-hijaulebihmuda'
                >
                  Project
                </button>
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
              <li>
                <Link href='link' className='text-warna-hijaulebihmuda'>
                  FAQs
                </Link>
              </li>
            </div>
          </div>

          {/* start mobile nav */}
          <div
            className={
              isOpen
                ? ' flex md:hidden flex-col items-center justify-center space-x-11'
                : 'hidden flex-row items-center space-x-11'
            }
          >
            <div className=' flex flex-col justify-center items-center space-y-5'>
              <Link href='link'>
                <li
                  className={
                    navbar
                      ? 'px-5 py-2 hover:bg-warna-hijaulebihmuda hover:text-warna-hijautua text-warna-hijaulebihmuda border border-warna-hijaulebihmuda  rounded-lg'
                      : 'px-5 py-2 bg-warna-hijaulebihmuda shadow-custom-default hover:shadow-custom-hover  rounded-lg'
                  }
                >
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
              <li>
                <Link href='link' className='text-warna-hijaulebihmuda'>
                  FAQs
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
