import React from 'react'
import Image from 'next/image'
import img from '@/componants/images/programming_fundamentals.49cca4e9.jpg'
import pic from "@/componants/images/nextjs.3dff0f70.jpg"
import photo from "@/componants/images/earn_as_your_learn.b8248a49.jpg"

const Courses = () => {
  return (
    <>
    <h1 className='text-2xl text-blue-950 font-bold mt-10 ml-2'>Core Courses Sequence</h1>
    <div className=' container m-auto grid sm:grid-cols-3 grid-cols-1 sm:space-x-4 sm:space-y-5'>
      <div>
      <Image className='transform transition-transform duration-500 hover:scale-110  
      rounded-t-md  sm:h-[42.5vh] w-screen sm:mt-4 mt-5 pt-1    '
    src={img}
    alt=''
    width={250}
    />
    <a className='sm:text-sm text-lg ml-5 font-bold text-blue-800 ' href="/">programming_fundamentals</a>
      </div>
      <div>
      <Image className='transform transition-transform duration-500 hover:scale-110  
      rounded-t-md mb-3 sm:w-[80vw] w-screen sm:mt-0 mt-5 sm:mr-0     '
    src={pic}
    alt=''
    width={250}
    />
    <a className='sm:text-sm text-lg ml-16 font-bold text-blue-800' href="/">Web2 Using NextJs</a>
      </div>
      <div>
      <Image className='transform transition-transform duration-500 hover:scale-110  
      rounded-t-md mb-3 sm:w-[80vw] w-full sm:mt-0 mt-5 sm:mr-6  sm:ml-0 '
    src={photo}
    alt=''
    width={250}
    />
    <a className='sm:text-sm text-lg ml-16 font-bold text-blue-800' href="/">Earn as You Learn</a>
      </div>

    </div>
  
    </>
  )
}

export default Courses
