import React from "react";
import Image from "next/image";
import modiJi from "../assets/modiJi.svg";
import { Carousel } from 'react-responsive-carousel'; 
import G20 from "../assets/G20_summit.svg";
import image1 from "../assets/Rectangle.svg";

export default function MyCarousel() { 
  return (
    <section className="w-full h-[80vh] flex justify-between items-center flex-row border-8 border-white">
      <div className="h-full w-4/5 flex justify-center items-center bg-gradient-to-b from-[#9EBEBB] to-[#8DADD3] ">
        <Carousel className="mx-10"> 
          <div>
            <Image src={G20} alt="image1" className="h-72 max-sm:h-48" />
          </div>
          <div>
            <Image src={image1} alt="image2" className="h-96 max-sm:h-60" />
          </div>
          <div>
            <Image src={image1} alt="image3" className="h-96 max-sm:h-60" />
          </div>
          {/* <div>
            <Image src={i4} alt="image4" className="h-96 max-sm:h-60" />
          </div> */}
        </Carousel>
      </div>

      <div className="h-full w-1/5 border-l-8 border-white flex justify-center items-center bg-gradient-to-b from-[#9EBEBB] to-[#8DADD3] ">
        <Image src={modiJi} alt="modiJi" height={250} width={250} />
      </div>
    </section>
  );
}
