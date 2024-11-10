"use client";
import Image from 'next/image'
import img from "@/componants/images/logo.9ff76f62.png"
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/componants/ui/navbar-menu";
import { cn } from "@/lib/utils";


const Header = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
       <div className={cn("sm:flex sm:flex-wrap space-x-5 sm:justify-between relative sm:items-center bg-[#044E83] sm:p-3 p-6  mb-6  text-white z-50",className)}>
      <div className='flex flex-wrap relative'>
    <Image className='absolute h-20 '
    src={img}
    alt='img'
    width={70}
    height={70}
    
    />
    <h1 className=' sm:text-[2vw] sm:ml-24 sm:font-bold  ml-24 text-[3vw]'>Tuition Free Education Program on Latest Technologies </h1>  
</div>

  <div className='sm:flex sm:gap-5 sm:text-center hidden justify-between  space-x-3  '>
  <div className='px-4 flex justify-between  space-x-4'>
  <Menu setActive={setActive} >
        <MenuItem setActive={setActive} active={active}
        item="Home"> 
          <div className="flex flex-col space-y-4 text-sm mt-4 ">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
          
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Apply">
          
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Job">
          <div className="flex flex-col space-y-4 text-sm mt-4">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Results"></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Courses">
        <div className="flex flex-col space-y-4 text-sm mt-4 ">
            <HoveredLink href="/web-dev">Programming Fundamentals </HoveredLink>
             <HoveredLink href="/interface-design">Web2 Using NextJs</HoveredLink>
            <HoveredLink href="/seo">Earn as You Learn</HoveredLink>
            <HoveredLink href="/branding">Web 3 and Metaverse</HoveredLink> 
          </div>
        </MenuItem>
        
      </Menu>
  </div>
  
  </div>
  
  
    </div>
    </>
  )
}

export default Header
