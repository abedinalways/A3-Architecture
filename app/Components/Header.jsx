import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className='p-[0 16px]'>
      <nav className="flex justify-center items-center md:gap-20 bg-[#F8EDE3] text-[#8D493A] p-5 rounded-xl sticky mt-8 z-100 top-8  w-150 mx-auto">
        <div>
          <h1 className='font-[archivo] font-bold text-xl'>Troscán</h1>
        </div>
        <div>
          <ul className="flex justify-center gap-8 items-center">
            <li>
              <Link href="/">About</Link>{' '}
            </li>
            <li>
              <Link href="/">Projects</Link>{' '}
            </li>
            <li>
              <Link href="/">News</Link>{' '}
            </li>
          </ul>
        </div>
        <div>
          <button className=''>Contact Us</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;