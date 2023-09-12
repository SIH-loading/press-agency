import React from "react";
import Image from "next/image";
import page1 from "../../assets/post1.jpeg";
import page2 from "../../assets/post2.jpeg";
import { RiTwitterXLine, RiInstagramLine } from "react-icons/ri";
import page3 from "../../assets/post3.jpeg";
import page4 from "../../assets/post4.jpeg";

export default function SocialMedia() {
  const data = [
    {
      id: 1,
      image: page1,
    },
    {
      id: 2,
      image: page2,
    },
    {
      id: 3,
      image: page3,
    },
    {
      id: 4,
      image: page4,
    },
  ];
  return (
    <>
      <section className="flex justify-center items-center gap-10 flex-col w-ful pt-10 pb-20">
        <h1 className="text-[#626362] text-center font-semibold text-3xl">
          Social Engagement
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-20 w-full">
          <div className="flex flex-col justify-center items-center w-1/4 border-black border-2">
            <h1 className="w-full bg-[#000000] py-4 text-center flex justify-center font-semibold text-2xl text-[#F7F7F7] gap-4 items-center">
              Twitter <RiTwitterXLine size={30} />
            </h1>
            <div className="overflow-y-auto h-[70vh] flex flex-col">
              {data.slice(0, 2).map((item) => {
                return (
                  <Image alt={item.image} src={item.image} key={item.id} />
                );
              })}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-1/4 border-black border-2">
            <h1 className="w-full bg-[#000000] py-4 text-center font-semibold text-2xl text-[#F7F7F7] flex justify-center gap-4 items-center">
              Instagram <RiInstagramLine size={30} />
            </h1>
            <div className="overflow-y-auto h-[70vh] flex flex-col">
              {data.slice(2, 4).map((item) => {
                return (
                  <Image alt={item.image} src={item.image} key={item.id} />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
