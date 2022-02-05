import React from 'react';
import Image from 'next/image';
import Email from './Email';
import Manage from './Manage';

const Plans = () => {
  return (
      <>
      <div className='w-full h-auto mt-12 bg-prime-white'>
      <div className='flex flex-col justify-center items-center lg:pt-28 pt-12'>
          <h3 className='lg:text-7xl text-5xl font-bold py-4'>Flexible plans</h3>
          <div className='lg:w-6/12 text-lg text-center px-8'>Rely on scalable plan to maximize the value of your most compelling social content</div>
          <div className='flex items-center mt-4 cursor-pointer'>
              <p className='text-lg  duration-300 hover:text-gray-500'>Monthly</p>
              <div className='w-14 h-6 rounded-3xl bg-red-500 relative p-0.5 mx-8'>
              <div className='w-6 h-5 bg-white rounded-full'></div>
              </div>
              <div className='relative text-lg  duration-300 hover:text-gray-500'>Yearly
               <span className='absolute text-sm text-red-500 font-semibold px-1'>Save20%</span></div>
          </div>
      </div>
      <div className='w-full flex px-8 mt-8 items-center flex-wrap'>
          {/* ////////CARD 1//////////////// */}
         <div className='lg:w-4/12 lg:h-96 h-auto bg-gray-50 rounded-2xl shadow-xl p-8'>
             <div className='flex items-center'>
                 <div><Image src="/images/Basic.png" width={70} height={70}/></div>
                 <div className='ml-4 text-3xl'>
                 Basic <br /><p className='text-2xl font-bold'>$9.99
                  <span className='text-lg font-normal text-gray-500'>/user</span></p>
                 </div>
             </div>
             <div className='w-full h-[1px] bg-slate-200 my-4'></div>
             <div className='flex items-center text-xl'>
             <i className="fas fa-check text-red-500"></i>
             <h3 className='ml-4'>Get Started with <span className='font-bold'>Bold setup</span></h3>
             </div>
             <div className='flex items-center text-xl py-4'>
             <i className="fas fa-check text-red-500"></i>
             <h3 className='ml-4'>Flexible <span className='font-bold'>Team setup</span></h3>
             </div>
             <div className='flex items-center text-xl'>
             <i className="fas fa-check text-red-500"></i>
             <h3 className='ml-4 font-bold'>10GB <span className='font-normal'>Cloud Storage</span></h3>
             </div>
        <button className='w-full bg-1st h-12 text-lg text-white rounded-lg my-4 hover:tracking-widest duration-300'>Add to Cart</button>
        <div className='w-4/12 m-auto text-center relative cursor-pointer detail_btn duration-1000'>View Details 
        <div className='w-full h-0.5 absolute m-auto '></div>
        </div> 
        </div>
          {/* ////////CARD 2//////////////// */}
         <div className='w-96 lg:h-[80vh] h-auto bg-black rounded-2xl shadow-xl p-8 text-white mx-1 lg:my-0 my-0.5'>
             <div className='flex items-center'>
                 <div><Image src="/images/Startup.png" width={70} height={70}/></div>
                 <div className='ml-4 text-3xl'>
                 Basic <br /><p className='text-2xl font-bold'>$9.99
                  <span className='text-lg font-normal text-gray-500'>/user</span></p>
                 </div>
             </div>
             <div className='w-full h-[0.5px] bg-slate-500 my-4'></div>
             <div className='flex items-center text-xl'>
             <i className="fas fa-check text-red-500"></i>
             <h3 className='ml-4'>Get Started with <span className='font-bold'>Bold setup</span></h3>
             </div>
             <div className='flex items-center text-xl py-4'>
             <i className="fas fa-check text-red-500"></i>
             <h3 className='ml-4'>Flexible <span className='font-bold'>Team setup</span></h3>
             </div>
             <div className='flex items-center text-xl'>
             <i className="fas fa-check text-red-500"></i>
             <h3 className='ml-4 font-bold'>10GB <span className='font-normal'>Cloud Storage</span></h3>
             </div>
             <div className='flex items-center text-xl py-4'>
             <i className="fas fa-check text-red-500"></i>
             <h3 className='ml-4'>Integration <span className='font-bold'>assistance</span></h3>
             </div>
             <button className='w-full bg-1st h-12 text-lg text-white rounded-lg my-4 hover:tracking-widest duration-300'>Add to Cart</button>
        <div className='w-4/12 m-auto text-center relative cursor-pointer detail_btn duration-1000'>View Details 
        <div className='w-full h-0.5 absolute m-auto '></div>
        </div> 
         </div>
          {/* ////////CARD 3//////////////// */}
          <div className='lg:w-4/12 h-auto lg:h-96 bg-gray-50 rounded-2xl shadow-xl p-8'>
             <div className='flex items-center'>
                 <div><Image src="/images/Basic.png" width={70} height={70}/></div>
                 <div className='ml-4 text-3xl'>
                 Basic <br /><p className='text-2xl font-bold'>$9.99
                  <span className='text-lg font-normal text-gray-500'>/user</span></p>
                 </div>
             </div>
             <div className='w-full h-[1px] bg-slate-200 my-4'></div>
             <div className='flex items-center text-xl'>
             <i className="fas fa-check text-red-500"></i>
             <h3 className='ml-4'>Get Started with <span className='font-bold'>Bold setup</span></h3>
             </div>
             <div className='flex items-center text-xl py-4'>
             <i className="fas fa-check text-red-500"></i>
             <h3 className='ml-4'>Flexible <span className='font-bold'>Team setup</span></h3>
             </div>
             <div className='flex items-center text-xl'>
             <i className="fas fa-check text-red-500"></i>
             <h3 className='ml-4 font-bold'>10GB <span className='font-normal'>Cloud Storage</span></h3>
             </div>
        <button className='w-full bg-1st h-12 text-lg text-white rounded-lg my-4 hover:tracking-widest duration-300'>Add to Cart</button>
        <div className='w-4/12 m-auto text-center relative cursor-pointer detail_btn duration-1000'>View Details 
        <div className='w-full h-0.5 absolute m-auto '></div>
        </div> 
        </div>
      </div>
      <Email/>
      <Manage/>
      </div>
      </>
  )
};

export default Plans;
