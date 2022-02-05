import React, { useState,useRef} from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
  const [open,setOpen]=useState(false)

  
  console.log(open)
  return (
      <>
      <div className='w-full flex items-center h-16 py-5 px-4 fixed bg-white z-50 border-b'>
        <Image src='/images/Component 8.svg' width={100} height={30}/>
        <div className={`items-center w-[89%] h-16 relative px-8 lg:flex hidden overflow-hidden ${open==true?"show_ul":""}`}>
        <ul className='flex main_list'>
            <li> <Link href='/feature'>Feature</Link></li>
            <li>Company</li>
            <li>Pricing</li>
            <li>Support</li>
            </ul>
            <button className='bg-1st w-44 p-2 h-12 
            text-white font-bold rounded-lg hover:tracking-widest duration-300 absolute right-12 buy-btn'>
         Buy for 70$</button>
        </div>
        <div className='flex items-center absolute right-4'>
        <div className='w-12 h-11 bg-gray-100 rounded-lg mx-4 relative p-3 cursor-pointer'>
          <div className='absolute -right-2 -top-1 p-0.5 px-1.5 rounded-full bg-1st text-white text-center text-xs font-bold'>0</div>
          {/* <i className="fas fa-cart-arrow-down py-3 px-3.5 text-red-400"></i> */}
          <Image src='/images/Cart.svg' width={22} height={22}/>
        </div>
        {/* ///////////toggle/////////////// */}
        <div className='w-14 h-11 bg-1st rounded-lg relative flex flex-col justify-center px-3 py-2 cursor-pointer lg:hidden' onClick={()=>setOpen(!open)}>
          <div className='w-8 h-[2.5px] bg-white mb-1'></div>
          <div className='w-8 h-[2.5px] bg-white mb-1'></div>
          <div className='w-6 h-[2.5px] bg-white mb-1'></div>
        </div>
        </div>
      </div>
      </>
  )
};

export default Navbar;
