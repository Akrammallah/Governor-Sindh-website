"use client"
import React from 'react'

import "./globals.css";

import Hero from './Hero/page';
import Middle from './Middle/page';
import Courses from './Courses/page';
import AdvanceCourse from './Advance course/page';
import Footer from './Footer/page';
import Home from './Home/page';
import { ImagesSliderDemo } from './componants/Slider';


const page = () => {
  return (
    <>
    
    <Home/>  
     <Hero/>
     <Middle/>
    <ImagesSliderDemo/>
    <Courses/>
     <AdvanceCourse/>
     <Footer/> 
     
     
     


     
     
     

     



     
    </>
  )
}

export default page
