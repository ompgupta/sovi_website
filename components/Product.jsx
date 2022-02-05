import React from 'react';
import Image from 'next/image';
const Product = () => {
    return (
        <>
            <div className='w-full bg-prime-white mt-12 py-12'>
                <div className='text-center w-full m-auto flex flex-col items-center justify-center'>
                    <h1 className='lg:text-6xl text-4xl font-bold w-11/12 lg:w-1/2 product_section'>Change the game; leap ahead of verified and qualified leads.</h1>
                    <p className='py-4 lg:text-xl text-base lg:px-48 lg:w-10/12 w-full px-4'>
                    Our quality testers work relentlessly to serve genuine leads. All leads are proofed on stringent quality parameters so that our users get the best for prospecting.
                        </p>
                </div>
                <div className='w-full flex justify-around py-8 mt-4 lg:flex-row flex-wrap flex-col lg:p-0 px-4'>
                    <div className='lg:w-6/12 w-full bg-white lg:h-[85vh] h-auto rounded-xl shadow-xl overflow-hidden'>
                        <div className='full py-8 px-8'>
                            <h2 className='font-bold text-3xl'>Quality Assured</h2>
                            <p className='py-4 text-lg lg:w-8/12 w-full'>Our Outbound dialers connect with the potentials.
Elicit the responses and check the answers on the quality scale.
</p>
                            <p className='lg:w-1/2 text-lg w-full'>Listen and Connect.</p> 
                                </div>
                        <div className='w-full relative top-4'>
                            <img src="/images/Feature-Image-01.png" alt="" />
                        </div>
                    </div>
                    <div className='lg:w-5/12 w-full bg-white lg:h-[85vh] h-auto rounded-xl shadow-xl lg:mt-0 mt-8'>
                       <img src="/images/Features-Image-2.png" alt="" />
                       <div className='px-12 my-8 lg:m-0'>
                           <h1 className='font-bold text-3xl'>Fresh Leads Everyday.</h1>
                           <p className='text-lg lg:leading-none py-2'>Leads aged more than 15 days are churned, and fresh leads are served every day.</p>
                       </div>
                    </div>
                    
                </div> 
                <div className='w-full flex justify-around lg:flex-row flex-col flex-wrap lg:py-0 px-4 lg:mt-6'>
                     <div className='three_div'>
                         <div><Image src='/images/Quick-Action-Icon.svg' width={100} height={70}/></div>
                         <h1 className='text-xl font-semibold'>Quick Scrutinize</h1>
                         <p className='px-12 text-lg'>Save time and improves productivity</p>
                         </div>
                     <div className='three_div'>
                     <div><Image src='/images/shopping-cart.svg' width={100} height={70}/></div>
                         <h1 className='text-xl font-semibold'>Easy shop</h1>
                         <p className='px-12 text-lg'>Saves your time , so that you can invest it in more productivity.</p>
                     </div>
                     <div className='three_div'>
                     <div><Image src='/images/lock (2).svg' width={100} height={70}/></div>
                         <h1 className='text-xl font-semibold'>Safe and Secure</h1>
                         <p className='px-12 text-lg'>Speed up your work and reduce repetitive tasks.</p>
                     </div>
                     </div>
            </div>
        </>
    );
};

export default Product;
