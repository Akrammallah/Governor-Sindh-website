import React from 'react'
import Image from 'next/image'
import img from "@/componants/images/logo.9ff76f62.png"


const Navbar = () => {
  return (
    <>
       <div className='sm:flex sm:flex-wrap sm:justify-between relative sm:items-center bg-blue-700 sm:p-3 p-6  mb-6  text-white '>
      <div className='flex flex-wrap relative'>
    <Image className='absolute h-20 ml-6'
    src={img}
    alt='img'
    width={50}
    height={50}
    
    />
    <h1 className=' sm:text-[2vw] sm:ml-24 sm:font-bold  ml-24 text-[3vw]'>Tuition Free Education Program on Latest Technologies </h1>  
</div>

  <div className='sm:flex sm:gap-5 sm:text-center hidden  '>
  <a href="/">Home</a>
  <a href="/Apply">Apply</a>
  <a href="/Job">Job</a>
  <a href="/Results">Results</a>
  <a href="/Courses">Courses</a>
  
  </div>
  
  
    </div>
    </>
  )
}

export default Navbar
