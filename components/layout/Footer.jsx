import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
  <div className=''>
  <div className='w-full container h-auto py-12 px-4'>
  <div className='w-full flex lg:justify-between flex-wrap lg:flex-nowrap lg:flex-row flex-col'>
   <div className='flex items-center'>
       <div>Follow Us</div>
      <ul className='flex social-link'>
          <li><i class="fab fa-instagram"></i></li>
          <li><i class="fab fa-twitter"></i></li>
          <li><i class="fab fa-linkedin"></i></li>
          <li><i class="fab fa-facebook"></i></li>
      </ul>
   </div>
   {/* <div className='flex flex-col lg:flex-row'>
       <div>Made by  <a href="#" className='text-lg font-bold decoration-1.5 hover:underline' >
           Sowi.com <i class="fas fa-external-link-alt"></i></a></div>
       <div className='lg:ml-4'>Powered by <a href="#" className='text-lg font-bold decoration-1.5 hover:underline' >
           Sowi.com <i class="fas fa-external-link-alt"></i></a></div>
   </div> */}
   </div>
   <hr  className='my-8'/>
   <div className='w-full flex lg:justify-between lg:flex-row flex-col overflow-hidden'>
       <div className='flex lg:items-center lg:flex-row flex-col'>
       <Image src='/images/Component 8.svg' width={100} height={30}/>
         <ul className='flex footer-sowi lg:flex-nowrap flex-wrap lg:flex-row flex-col'>
             <li>Change Log</li>
             <li>Style</li>
             <li>Licensing</li>
             <li>Privacy</li>
             <li>info@website.com</li>
         </ul>
       </div>
       <div className='text-xl text-gray-600'>
Copyright © <span className='font-bold'>SOVI</span></div>
    
   </div>
  </div>
  </div>
  )
};

export default Footer;
