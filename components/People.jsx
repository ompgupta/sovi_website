import React,{useRef,useState} from 'react';

const scrollData = [
    {
    title:"5.0",
    head:"review average in our app",
    para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sunt itaque eaque quisquam animi eos ducimus placeat ipsam eum ratione, possimus molestiae, error ex.Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        title:"30 +",
        head:"minutes per session",
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sunt itaque eaque quisquam animi eos ducimus placeat ipsam eum ratione, possimus molestiae, error ex.Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
    title:"$0.0",
    head:"everything is free",
    para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sunt itaque eaque quisquam animi eos ducimus placeat ipsam eum ratione, possimus molestiae, error ex.Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        title:"9 k",
        head:"New businesses /m",
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sunt itaque eaque quisquam animi eos ducimus placeat ipsam eum ratione, possimus molestiae, error ex.Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
    
]
const People = () => {
    const [currentImg, setCurrentImg] = useState(0);
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  return (
      <>
      <div className='w-full h-screen flex items-center flex-wrap'>
          <div className='lg:w-1/2 px-4 w-full'>
            <h1 className='lg:text-7xl text-5xl font-semibold mb-4 mt-8'>We are trusted by thousands of people</h1>
            <p className='text-2xl'>Lean on Stories+ to maximize the value of your most compelling social content</p>
          </div>
                <div className='lg:w-6/12 px-4 w-full'>
                <div className='flex items-center'>
                <h2 class="trusted-no text-6xl font-bold">5.0</h2>
                <h5 className='text-2xl ;lg:font-bold ml-3 font-normal'>review average in our app</h5>
                </div>
                <div className='text-2xl my-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sunt itaque eaque quisquam 
                animi eos ducimus placeat ipsam eum ratione, possimus molestiae, error ex.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </div>
            </div>
        
      </div>
      </>
  )
};

export default People;
