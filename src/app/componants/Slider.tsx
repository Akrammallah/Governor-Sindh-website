"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/app/componants/ui/images.slider";

export function ImagesSliderDemo() {
  const images = [
    "https://media.istockphoto.com/id/1382275104/photo/metaverse-city-and-cyberpunk-concept-3d-render.webp?a=1&b=1&s=612x612&w=0&k=20&c=l3Eg3VhotKqwmeZHDpwB0lLgL8oUYG9ihImqeb3DwN0=",
    "https://media.istockphoto.com/id/1365967600/photo/girl-wearing-virtual-reality-headset-or-vr-glasses-pointing-to-the-sun-future-technology.webp?a=1&b=1&s=612x612&w=0&k=20&c=9WOFt0z0XzTrCOl9_Obwn5VYUAsJxrlfcuUOUgUUyhY=",
    "https://media.istockphoto.com/id/1648189492/photo/young-woman-programming-on-a-laptop-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=TsmSxiKkHLpT187vL2qlG_4DMvXM4PYXhoYjrT8P6KM=",
    "https://www.governorsindh.com/_next/static/media/slideShow1.6f890b58.jpg",
    "https://www.governorsindh.com/_next/static/media/slideShow2.ce4d5430.jpg",
    "https://www.governorsindh.com/_next/static/media/slideShow3.0006489a.jpg",
    "https://www.governorsindh.com/_next/static/media/slideShow6.03103579.jpg",
    "https://www.governorsindh.com/_next/static/media/slideShow8.4b79537a.jpg",
    "https://www.governorsindh.com/_next/static/media/slideShow5.b502aa01.jpg"
  ];
  return (
    <ImagesSlider className="container h-[25rem] sm:w-[100%]  sm:mr-6 m-auto mr-6  mt-12 rounded w-screen " images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        
      </motion.div>
    </ImagesSlider>
  );
}
