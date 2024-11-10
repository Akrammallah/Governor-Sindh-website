import React from 'react'
import Image from 'next/image'
import img from "@/componants/images/cover.1d863e39.png"

const Home = () => {
  return (
    <>
    <div className='grid   sm:grid-cols-2 sm:ml-6 grid-cols-1   items-center  sm:gap-5 mt-5 '>
      <div className='mt-5 sm:text-left text-center mb-4'>
        <h1 className='sm:text-6xl text-4xl text-blue-900 font-bold'>Governor Sindh</h1>
        <h2 className='sm:text-4xl text-2xl  text-blue-950 '>Kamran khan Tessori</h2>
        <h2 className='sm:text-4xl text-2xl text-[#2EB6E8] font-bold'>Certified Cloud <br />Applied Generative AI <br />Engineer (GenEng)</h2>
        <br />
        <h3 className='text-blue-950 font-bold text-2xl'>Earn up to $5000 / month</h3>
        <br />
        <h3 className='text-blue-950 font-bold text-2xl '>Now admission are open <br /> in Hyderabad</h3>
        <br /> 
        <div className=' justify-between  flex flex-wrap'>
        <button className='sm:w-32 w-full sm:ml-0 ml-3 sm:mr-0 mr-3 bg-blue-950 text-white px-4 sm:py-1 py-2 rounded-md '>APPLY NOW</button>
        <span className='sm:mr-48 sm:ml-0 ml-52 sm:mt-0 mt-4 text-blue-950 font-bold '>562,143  <br /><h6>Accepted Applications</h6></span>
        </div>
        
      </div>
      <div className='sm:flex   sm:justify-end   sm:pb-5 ' >
        <Image className='sm:w-screen w-screen h-screen float-right'
        src={img}
        alt=''
        
        
        />
      </div>
      </div>  
    </>
  )
}

export default Home
