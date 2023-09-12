"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from "next/image";
import modiJi from "../assets/modiJi.svg";
import modiJiG20 from "../assets/modiJiG20.svg";

export default function Carousel() {
  const data = [
    {
      id: 1,
      image: modiJiG20,
    },
    {
      id: 2,
      image: modiJiG20,
    },
    {
      id: 3,
      image: modiJiG20,
    },
    {
      id: 4,
      image: modiJiG20,
    },
    {
      id: 5,
      image: modiJiG20,
    },
    {
      id: 6,
      image: modiJiG20,
    },
    {
      id: 7,
      image: modiJiG20,
    },
    {
      id: 8,
      image: modiJiG20,
    },
  ];
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const newSlidesPerView = window.innerWidth <= 767 ? 1 : 2;
      setSlidesPerView(newSlidesPerView);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="w-full h-[80vh] flex justify-between items-center flex-row border-8 border-white">
      <div className="h-full w-4/5 flex justify-center items-center bg-gradient-to-b from-[#9EBEBB] to-[#8DADD3] ">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={slidesPerView}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 20,
            depth: 150,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={true}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div>
                <Image
                  src={item.image}
                  alt="image"
                  className="w-[40vw] object-contain h-[65vh]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="h-full w-1/5 border-l-8 border-white flex justify-center items-center bg-gradient-to-b from-[#9EBEBB] to-[#8DADD3] ">
        <Image src={modiJi} alt="modiJi" height={250} width={250} />
      </div>
    </section>
  );
}
