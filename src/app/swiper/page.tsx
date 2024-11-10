// components/Slideshow.js
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';
import img from "@/componants/images/slideShow1.6f890b58.jpg"

const Slideshow = () => {
  return (
    <div className="w-full h-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <Image src={img} alt="Slide 1" className="w-full h-auto" />
        </SwiperSlide>
        {/* Slide 2 */}
        <SwiperSlide>
          <Image src={img} alt="Slide 1" className="w-full h-auto" />
        </SwiperSlide>
        {/* Slide 3 */}
        <SwiperSlide>
          <Image src={img} alt="Slide 1" className="w-full h-auto" />
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
};

export default Slideshow;
