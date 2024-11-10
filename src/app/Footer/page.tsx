import React from 'react'


import img from "@/componants/images/communication.png"
import img1 from "@/componants/images/whatsapp.png"
import img2 from "@/componants/images/github.png"
import img3 from "@/componants/images/youtube.png"
import Image from 'next/image';
import Link from 'next/link';


const Footer = () => {
  return (
    <>
      <div className=' container grid sm:grid-cols-3 mt-10 m-auto grid-cols-1 sm:ml-4 ml-3 '>

        <div>
          <h1 className='text-gray-950 font-bold'>Core Courses</h1>
          <h3 className='text-sm sm:leading-8 leading-10 '>Web2 Using NextJs</h3>
          <h3 className='text-sm sm:leading-8 leading-10 '>Programming Fundamental</h3>
          <h3 className='text-sm sm:leading-8 leading-10'>Earn as You Learn</h3>
        </div>
        <div >
        <h1 className='text-gray-950  font-bold'>Advances courses</h1>
          <h3 className='text-sm sm:leading-8 leading-10'>Web3 and Metaverse</h3>
          <h3 className='text-sm sm:leading-8 leading-10'>Cloud Native computing</h3>
          <h3 className='text-sm sm:leading-8 leading-10'>Artificial intelligence(AI) and deep learning</h3>
          <h3 className='text-sm sm:leading-8 leading-10'>Ambient computing  and IoT</h3>
          <h3 className='text-sm sm:leading-8 leading-10'>Genomics and bioinformatics</h3>
          <h3 className='text-sm sm:leading-8 leading-10'>Network Programmability and automation</h3>
        </div>
        <div>
        <h1 className='text-gray-950 font-bold '>Social links</h1>
          <h3 className='mt-2'>Programming Fundamental</h3>
          <div className='flex flex-wrap gap-5 sm:mt-4 mt-6 ml-2 text-2xl'>
          <Link href={"www.facebook.com"}><Image src={img} alt="" width={30} /></Link>
          <Link href={"www.whatsapp.com"}><Image src={img1} alt="" width={30} /></Link>
          <Link href={"www.github.com"}><Image src={img2} alt="" width={30} /></Link>
          <Link href={"www.youtube.com"}><Image src={img3} alt="" width={30} /></Link>
                    </div>
          

          <div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
