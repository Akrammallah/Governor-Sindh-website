import React from 'react'
import Image from 'next/image'
import photo from "@/componants/images/imageWebsite.5c6ae62f.jpg"
import pic from "@/componants/images/imageWebsite2.a102c7b5.jpg"
import img from "@/componants/images/imageWebsite3.b845fe78.jpg"

const Middle = () => {
  return (
    <>
     <div className=' container m-auto grid sm:grid-cols-3 sm:mt-10 mt-10 '>
<Image className='transform transition-transform duration-500 hover:scale-110  rounded-md  shadow-black shadow-2xl sm:mb-0 mb-5 sm:h-80  sm:w-80 w-full  '
src={photo}
alt='img'
width={300}
/>
<Image className='transform transition-transform duration-500 hover:scale-110   rounded-md  shadow-yellow-800 shadow-2xl sm:mb-0 mb-12 sm:h-80    sm:w-80 w-full   '
src={img}
alt='img'
width={300}
/>
<Image className='transform transition-transform duration-500 hover:scale-110 rounded-md  shadow-red-800 shadow-2xl sm:mb-0  sm:w-80 w-full sm:h-80'
src={pic}
alt='img'
width={300}
/>
      </div> 
    </>
  )
}

export default Middle  