import React from 'react'
import Image from 'next/image'
import img from "@/componants/images/AI.39397d24.jpg"
import pic from "@/componants/images/automation.a77dbbe8.jpg"
import photo from "@/componants/images/cloudComputing.7260492c.jpg"
import photo1 from "@/componants/images/genomics.b87789f1.jpg"
import photo2 from "@/componants/images/iot.16f7b003.jpg"
import photo3 from "@/componants/images/metaverse.06eccb60.jpg"

const AdvanceCourse = () => {
  return (
    <>
       <h1 className='text-2xl text-blue-950 font-bold mt-10 ml-2'>Core Courses Sequence</h1>
    <div className='container grid sm:grid-cols-4  grid-cols-1 sm:m-auto  sm:space-x-5 mt-5  '>
      <div>
    <Image className='transform transition-transform duration-500 hover:scale-110  
      rounded-t-md pb-2 sm:h-[32vh] w-screen sm:mt-0 mt-5 sm:mr-0    mr-12 '
    src={img}
    alt=''
    width={250}
    />
    <a className='sm:text-sm text-lg ml-5 font-bold text-blue-800  ' href="/">Artificial intelligence</a>
      </div>
      <div>
      <Image className='transform transition-transform duration-500 hover:scale-110  
      rounded-t-md mb-3 sm:w-72 w-screen sm:mt-0 mt-5 sm:mr-0 mr-3 sm:ml-0 '
    src={pic}
    alt=''
    width={250}
    />
    <a className='sm:text-sm text-lg ml-10 font-bold text-blue-800' href="/">Web3 and Metaverse</a>
      </div>
      <div>
      <Image className='transform transition-transform duration-500 hover:scale-110  
      rounded-t-md mb-3 sm:w-72 w-screen sm:mt-0 mt-5 sm:mr-0 mr-24 sm:ml-0 '
    src={photo}
    alt=''
    width={250}
    />
    <a className='sm:text-sm text-lg ml-10 font-bold text-blue-800' href="/">Cloud-Native Computing</a>
      </div>
      <div>
      <Image className='
      transform transition-transform duration-500 hover:scale-110  
      rounded-t-md mb-3 sm:w-72 w-screen sm:mt-0 mt-5 sm:mr-0  sm:ml-0  mr-10'
    src={photo1}
    alt=''
    width={250}
    />
    <a className='sm:text-sm text-lg ml-8 font-bold text-blue-800' href="/">Ambient Computing and IoT</a>
      </div>
      <div>
      <Image className='transform transition-transform duration-500 hover:scale-110  
      rounded-t-md mb-3 sm:w-72 w-screen sm:mt-0 mt-5 sm:mr-0 mr-3 sm:ml-0 '
    src={photo2}
    alt=''
    width={250}
    />
    <a className='sm:text-sm text-lg ml-6 font-bold text-blue-800' href="/">Genomics and Bioinformatics</a>
      </div>
      <div>
      <Image className='transform transition-transform duration-500 hover:scale-110  
      rounded-t-md mb-3 sm:w-72 w-screen sm:mt-0 mt-5 sm:mr-0 mr-3 sm:ml-0 '
    src={photo3}
    alt=''
    width={250}
    />
    <a className='sm:text-sm text-lg  font-bold text-blue-800' href="/">Network programmability and Automation</a>
      </div>
    </div>
    </>
  )
}

export default AdvanceCourse
