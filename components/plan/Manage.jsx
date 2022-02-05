import React from 'react';
import Image from 'next/image';

const Manage = () => {
  return <>
      <div className='w-full h-min-screen flex items-center flex-wrap overflow-hidden'>
       <div className='lg:w-6/12 h-auto pl-2'>
       <div className='w-full flex items-center'>
       <div className='lg:w-14 w-16 bg-1st h-14 flex items-center justify-center rounded-full'>
        <Image src='/images/App-Icon.svg' width={30} height={35}/>
        </div>
        <h3 className='text-xl ml-4'>Download now and start your experience</h3>
        </div>
        <div className='lg:text-7xl font-bold py-4 text-5xl'>Manage it all, in this all new system.</div>
       <div className='flex lg:items-center my-8 flex-col lg:flex-row items-start'>
         <button className='lg:px-6 p-2 px-8 rounded-lg bg-black text-white flex items-center'><i className="fab fa-apple text-3xl pr-2"></i>Download for iOS</button>
         <button className='px-4 p-2 rounded-lg bg-black text-white flex items-center lg:ml-8 lg:mt-0 mt-4'><i className="fab fa-android  text-2xl pr-2"></i>Download for Android</button>
       </div>
       </div>
       {/* ////////Image Section/////////// */}
       <div className='lg:w-1/2 relative lg:top-24 top-12'>
        <div className='w-full'>
            <div className='relative lg:w-10/12 w-full  object-fill z-20'>
        <img src="/images/Hand-iPhoneX.png" alt="" className='relative z-10'/>
        </div>
        
        </div>

         </div>

       </div>
    
  </>;
};

export default Manage;
