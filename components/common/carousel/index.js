import React from "react";
import Image from "next/image";
import modiJi from "../assets/modiJi.svg";
export default function Carousel() {
  return (
    <section className="w-full h-[80vh] flex justify-between items-center flex-row border-8 border-white">
      <div className="h-full w-4/5 flex justify-center items-center bg-gradient-to-b from-[#9EBEBB] to-[#8DADD3] "></div>
      <div className="h-full w-1/5 border-l-8 border-white flex justify-center items-center bg-gradient-to-b from-[#9EBEBB] to-[#8DADD3] ">
        <Image src={modiJi} alt="modiJi" height={250} width={250} />
      </div>
    </section>
  );
}
