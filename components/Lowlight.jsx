import React from 'react';
import Image from 'next/image';

const Lowlight = () => {
    return (
        <div className='min-h-screen w-full bg-black'>
            <div className='lg:w-8/12 m-auto text-center w-full'>
                <h1 className='low-light lg:text-7xl text-5xl font-bold lg:mt-32 lg:p-0 pt-16'>We ask the right questions</h1>
                <p className='text-lg py-4 lg:px-44 text-white px-10'>Questions defining standard operating procedures eliminating incomplete and hoax leads</p>
            </div>
            <div className='w-full mt-4 lg:flex justify-evenly flex-wrap lg:p-0 px-4'>
                <div className='lg:w-5/12 w-full lg:h-screen h-auto bg-2nd rounded-xl py-8 relative'>
                    <div className='lg:w-10/12 m-auto h-96 overflow-hidden relative'>
                        <img src="/images/Apple iPhone 11.png" alt="" className=' max-w-full inline-block relative z-10' />
                        <div className='absolute left-0 top-auto right-0 h-1/5 z-10 bg-2nd'></div>
                        <div className='rounded-xl absolute right-0 top-0 left-0'>
                            <img src="/images/BoldApp-1.jpg" alt="" className='absolute top-0 bottom-0 right-0 left-0 w-full rounded-xl' />
                        </div>
                    </div>
                    <div className='text-center text-white w-8/12 m-auto py-6'>
                        <h2 className='text-3xl font-bold'>Dark Mode - ON</h2>
                        <h3 className='text-lg leading-5 text-gray-500'>Easily integrate with all your favorite tools through and APIs including automatic integrations.</h3>
                    </div>
                </div>
                <div className='lg:w-5/12 lg:h-screen w-full h-auto bg-2nd rounded-xl py-8 relative'>
                    <div className='lg:w-10/12 m-auto h-96 overflow-hidden relative'>
                        <img src="/images/Apple iPhone 11.png" alt="" className=' max-w-full inline-block relative z-10' />
                        <div className='absolute left-0 top-auto right-0 h-1/5 z-10 bg-2nd'></div>
                        <div className='rounded-xl absolute right-0 top-0 left-0'>
                            <img src="/images/BoldApp-1.jpg" alt="" className='absolute top-0 bottom-0 right-0 left-0 w-full rounded-xl' />
                        </div>
                    </div>
                    <div className='text-center text-white w-8/12 m-auto py-6'>
                        <h2 className='text-3xl font-bold'>Dark Mode - ON</h2>
                        <h3 className='text-lg leading-5 text-gray-500'>Easily integrate with all your favorite tools through and APIs including automatic integrations.</h3>
                    </div>
                </div>
            </div>
            {/* ///////// */}
            <div className='w-full text-white font-bold lg:text-5xl text-4xl pb-8 text-center pt-16'>
                Don't take our word for it.
            </div>
            {/* /////// testimonials////////////////*/}
            <div className='w-full h-auto py-4 pb-10 relative'>
            <div className='w-full flex justify-around flex-wrap lg:flex-row flex-col lg:p-0 px-4'>
                <div className='lg:w-96 w-full lg:h-60 h-auto bg-prime-black rounded-3xl p-8 mb-4'>
                    <div className='flex items-center'>
                        <div><Image src='/images/user1.png' width={50} height={50} /></div>
                        <div className='ml-2 leading-5 text-white text-lg'>
                            Fatima Salame <br />
                            <h3 className='text-gray-500'>CEO @ Company</h3>
                        </div>
                    </div>
                    <div className='text-white mt-3 leading-5 text-lg'>Faucibus at tincidunt vulputate ultrices aliquam aliquet tellus fusce mattis.
                        Dignissim enim viverraporttitor sodales lacus faucibus nunc cras. Mattis eu tortor vitae felis nunc, ut diam sed.</div>
                </div>
                <div className='lg:w-96 w-full lg:h-60 h-auto bg-prime-black rounded-3xl p-8 mb-4'>
                    <div className='flex items-center'>
                        <div><Image src='/images/user2.png' width={50} height={50} /></div>
                        <div className='ml-2 leading-5 text-white text-lg'>
                        James Toriff <br />
                            <h3 className='text-gray-500'>CEO @ Company</h3>
                        </div>
                    </div>
                    <div className='text-white mt-3 leading-5 text-lg'>Faucibus at tincidunt vulputate ultrices aliquam aliquet tellus fusce mattis.
                        Dignissim enim viverraporttitor sodales lacus faucibus nunc cras. Mattis eu tortor vitae felis nunc, ut diam sed.</div>
                </div>
                <div className='lg:w-96 w-full lg:h-60 h-auto bg-prime-black rounded-3xl p-8 mb-4'>
                    <div className='flex items-center'>
                        <div><Image src='/images/user3.png' width={50} height={50} /></div>
                        <div className='ml-2 leading-5 text-white text-lg'>
                            Fatima Salame <br />
                            <h3 className='text-gray-500'>James Toriff</h3>
                        </div>
                    </div>
                    <div className='text-white mt-3 leading-5 text-lg'>Faucibus at tincidunt vulputate ultrices aliquam aliquet tellus fusce mattis.
                        Dignissim enim viverraporttitor sodales lacus faucibus nunc cras. Mattis eu tortor vitae felis nunc, ut diam sed.</div>
                </div>
            </div>
            {/* //////////second////////////// */}
            <div className='w-full flex justify-around flex-wrap lg:flex-row flex-col mt-4 lg:p-0 px-4'>
                <div className='lg:w-96 w-full lg:h-60 h-auto bg-prime-black rounded-3xl p-8 mb-4'>
                    <div className='flex items-center'>
                        <div><Image src='/images/user1.png' width={50} height={50} /></div>
                        <div className='ml-2 leading-5 text-white text-lg'>
                            Fatima Salame <br />
                            <h3 className='text-gray-500'>CEO @ Company</h3>
                        </div>
                    </div>
                    <div className='text-white mt-3 leading-5 text-lg'>Faucibus at tincidunt vulputate ultrices aliquam aliquet tellus fusce mattis.
                        Dignissim enim viverraporttitor sodales lacus faucibus nunc cras. Mattis eu tortor vitae felis nunc, ut diam sed.</div>
                </div>
                <div className='lg:w-96 w-full lg:h-60 h-auto bg-prime-black rounded-3xl p-8 mb-4'>
                    <div className='flex items-center'>
                        <div><Image src='/images/user2.png' width={50} height={50} /></div>
                        <div className='ml-2 leading-5 text-white text-lg'>
                        James Toriff <br />
                            <h3 className='text-gray-500'>CEO @ Company</h3>
                        </div>
                    </div>
                    <div className='text-white mt-3 leading-5 text-lg'>Faucibus at tincidunt vulputate ultrices aliquam aliquet tellus fusce mattis.
                        Dignissim enim viverraporttitor sodales lacus faucibus nunc cras. Mattis eu tortor vitae felis nunc, ut diam sed.</div>
                </div>
                <div className='lg:w-96 w-full lg:h-60 h-auto bg-prime-black rounded-3xl p-8 mb-4'>
                    <div className='flex items-center'>
                        <div><Image src='/images/user3.png' width={50} height={50} /></div>
                        <div className='ml-2 leading-5 text-white text-lg'>
                            Fatima Salame <br />
                            <h3 className='text-gray-500'>James Toriff</h3>
                        </div>
                    </div>
                    <div className='text-white mt-3 leading-5 text-lg'>Faucibus at tincidunt vulputate ultrices aliquam aliquet tellus fusce mattis.
                        Dignissim enim viverraporttitor sodales lacus faucibus nunc cras. Mattis eu tortor vitae felis nunc, ut diam sed.</div>
                </div>
            </div>
            <div className='w-full absolute h-40 flex items-center justify-center bg-2nd -bottom-[0]'>
                <button className='w-44 h-12 bg-1st text-white font-bold rounded-lg hover:tracking-widest duration-300'>Show More</button>
            </div>
            </div>
        </div>
    )
};

export default Lowlight;
