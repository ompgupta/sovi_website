import React from 'react';

const Email = () => {
  return <div>
      <div className='w-full h-screen flex items-center justify-center flex-wrap lg:p-0 px-4'>
        <div className='lg:w-10/12 w-full h-auto bg-white shadow-xl rounded-3xl px-8 pt-8 pb-40'>
           <div className='lg:text-8xl text-5xl font-bold mail_txt'>Stay tuned & <br /> Build your business.</div>
<p className='text-xl py-4'>We will email you only about this product.</p>
        <div className='w-full relative my-4'>
          <input type="text"  placeholder='Your Email' className='email-text w-full rounded-2xl text-2xl p-4 border absolute focus:outline-none focus:border-red-500'/>
        <div className='lg:w-24 lg:h-14 h-16 lg:absolute relative bg-1st lg:right-0 lg:top-none lg:top-0 top-20 hover:pl-2 duration-200 m-1 rounded-xl flex justify-center items-center hover: cursor-pointer'>
        <i className="fas fa-long-arrow-alt-right fa-2x text-white"></i>
        </div>
        </div>
        </div>
      </div>
  </div>;
};

export default Email;
