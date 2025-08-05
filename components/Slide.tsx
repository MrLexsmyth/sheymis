"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper";

const MySlider = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handleMobileClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="relative">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop
        className="mySwiper"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <SwiperSlide key={num}>
            <div className="relative w-full h-screen">
              <Image
                src={`/images/slide${num}.jpg`}
                alt={`Slide ${num}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation arrows (only on larger screens) */}
      
      <div className="custom-prev hidden md:flex items-center justify-center absolute top-1/2 left-16 -translate-y-1/2 z-10 text-black text-6xl cursor-pointer select-none">
        ‹
      </div>
      <div className="custom-next hidden md:flex items-center justify-center absolute top-1/2 right-16 -translate-y-1/2 z-10 text-black text-6xl cursor-pointer select-none">
        ›
      </div>

      <div
        className=" fixed top-0 left-0 w-full h-screen z-20"
        onClick={handleMobileClick}
      />
    </div>
  );
};

export default MySlider;

