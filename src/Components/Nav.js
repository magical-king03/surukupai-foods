import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/surukupaifoods.png';

const Nav = () => {

  const [nav, setNav] = useState(false);

  return (
    <div>
      {nav ? <div className='relative z-40'>
        <div className='flex md:hidden absolute right-0 top-[105px] duration-500 text-[black] bg-gray-200 min-h-[200px] rounded-l-lg w-[148px] items-center justify-center'>
            <div className='flex flex-col items-center justify-center  p-4 gap-4'>
            <Link to="/">
            <h1 className='font-semibold' onClick={() => {setNav(!nav)}}>Home</h1></Link>
          <Link to="/about">
            <h1 className='font-semibold' onClick={() => {setNav(!nav)}}>About</h1></Link>
            <Link to="/store">
            <h1 className='font-semibold' onClick={() => {setNav(!nav)}}>Store</h1></Link>
          <Link to="/contact">
            <h1 className='font-semibold' onClick={() => {setNav(!nav)}}>Contact</h1></Link>
            </div>
        </div>
        
      </div> : <div className='relative'>
        <div className='flex md:hidden fixed right-[-500px] top-[105px] duration-500 text-[black] bg-gray-200 min-h-[200px] rounded-lg w-[150px] items-center justify-center'>
            <div className='flex flex-col items-center justify-center p-4 gap-4'>
            <Link to="/">
            <h1 className='font-semibold'>Home</h1></Link>
          <Link to="/about">
            <h1 className='font-semibold'>About</h1></Link>
            <Link to="/store">
            <h1 className='font-semibold'>Store</h1></Link>
          <Link to="/contact">
            <h1 className='font-semibold'>Contact</h1></Link>
            </div>
        </div>
      </div> }
      <div className='flex items-center justify-between p-3 bg-[white]'>
        <div className='flex items-center justify-center' >
          <Link to="/">
            <img src={Logo} alt="logo" className='max-w-[150px]'/>
          </Link>
        </div>
        <div className='hidden md:flex items-center justify-center text-xl gap-5 mr-4'>
          <Link to="/">
            <h1 className='font-semibold'>Home</h1></Link>
          <Link to="/about">
            <h1 className='font-semibold'>About</h1></Link>
            <Link to="/store">
            <h1 className='font-semibold'>Store</h1></Link>
          <Link to="/contact">
            <h1 className='font-semibold'>Contact</h1></Link>
        </div>
        <div className='flex md:hidden'>
          <button className=' border-0 p-4 rounded-full' onClick={() => {setNav(!nav)}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="black" class="w-10 h-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default Nav;