import React from 'react';
import Image from 'next/image';

const Feature = () => {
  return <div className='w-full h-min-screen'>
    <div className="phone_grid relative -top-80  bg-prime-white">
        <div className=' self-end justify-self-center col-start-1 col-end-2 row-start-1 row-end-3'>
          <div className=' relative w-full'>
              <img src="/images/Apple iPhone 11.png" alt="" className='w-full relative' />
          </div>
        </div>

        <div className=' self-end justify-self-center col-start-2 col-end-4 row-start-2 row-end-3'>
        <div className=' relative w-full'>
              <img src="/images/Apple iPhone 12 Pro Gold.png" alt="" className='relative w-full' />
          </div>
        </div>
        <div className=' self-start justify-self-center col-start-4 col-end-5 row-start-2 row-end-4'>
        <div className=' relative w-full'>
              <img src="/images/Apple iPhone 11.png" alt="" className='relative w-full' />
          </div>
        </div>
        <div className=' self-end justify-self-center col-start-1 col-end-2 row-start-3 row-end-5'>
        <div className=' relative w-full'>
              <img src="/images/Apple iPhone 11.png" alt="" />
          </div>
        </div>
        <div className=' self-end justify-self-center col-start-2 col-end-4 row-start-4 row-end-5'>
        <div className=' relative w-full'>
              <img src="/images/Apple iPhone 12 Pro Gold.png" alt="" className='w-full relative' />
          </div>
        </div>
        <div className=' self-start justify-self-center col-start-4 col-end-5 row-start-4 row-end-6'>
        <div className=' relative w-full'>
              <img src="/images/Apple iPhone 11.png" alt="" className='w-full relative' />
          </div>
        </div>

        <div className=' self-center justify-self-center col-start-2 col-end-4 row-start-3 row-end-4'>
        <div className=' relative w-full text-7xl font-bold text-center feature_txt'>
         Create <br />Anywhere
          </div>
        </div>
        <div className=' self-center justify-self-stretch col-start-1 col-end-4 row-start-5 row-end-6'>
             <h1 className='text-3xl font-bold'>Trusted by top-tier product companies</h1>
             <div>
        <div className='w-9/12 flex items-center justify-between py-4 flex-wrap client'>
        <div><Image src="/images/asgardia dark.png" width={100} height={30}/></div>
        <div className='text-3xl font-bold'>SOVI</div>
        <div><Image src="/images/fox-hub-dark.png" width={40} height={30}/></div>
        {/* <div><Image src="/images/utosia dark.png" width={100} height={30}/></div>
        <div><Image src="/images/lighting dark.png" width={100} height={30}/></div> */}
      </div>
      <div className='w-9/12 flex items-center justify-between py-4 flex-wrap client'>
        <div><Image src="/images/utosia dark.png" width={100} height={30}/></div>
        <div><Image src="/images/lighting dark.png" width={100} height={30}/></div>
        <div><Image src="/images/lighting dark.png" width={100} height={30}/></div>
      </div>
             </div>
        </div>
    </div>
 
 <div></div>
  </div>;
};

export default Feature;
