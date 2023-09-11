import React from "react";
import FooterHeroSection from "./FooterHeroSection";
import { MdDoubleArrow } from "react-icons/md";
export default function Footer() {
  return (
    <>
      <FooterHeroSection />
      <section className="flex justify-evenly items-center bg-[#2E3030] py-4 text-[#F7F7F7] w-full flex-wrap gap-y-6">
        <div className="flex flex-col justify-center items-start gap-y-4">
          <h1 className="font-semibold text-2xl">RTI and Contact Us</h1>
          <ul>
            <li className="flex justify-start items-center gap-4">
              <MdDoubleArrow />
              Item 1
            </li>
            <li className="flex justify-start items-center gap-4">
              <MdDoubleArrow />
              Item 2
            </li>
            <li className="flex justify-start items-center gap-4">
              <MdDoubleArrow />
              Item 3
            </li>
            <li className="flex justify-start items-center gap-4">
              <MdDoubleArrow />
              Item 4
            </li>
            <li className="flex justify-start items-center gap-4">
              <MdDoubleArrow />
              Item 5
            </li>
            <li className="flex justify-start items-center gap-4">
              <MdDoubleArrow />
              Item 6
            </li>
            <li className="flex justify-start items-center gap-4">
              <MdDoubleArrow />
              Item 7
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-start gap-y-4">
          <h1 className="font-semibold text-2xl">RTI and Contact Us</h1>
          <ul>
            <li className="flex justify-start items-center gap-4">
              <MdDoubleArrow />
              Item 1
            </li>
            <li className="flex justify-start items-center gap-4">
              <MdDoubleArrow />
              Item 2
            </li>
            <li className="flex justify-start items-center gap-4">
              <MdDoubleArrow />
              Item 3
            </li>
            <li className="flex justify-start items-center gap-4">
              <MdDoubleArrow />
              Item 4
            </li>
            <li className="flex justify-start items-center gap-4">
              <MdDoubleArrow />
              Item 5
            </li>
            <li className="flex justify-start items-center gap-4">
              <MdDoubleArrow />
              Item 6
            </li>
            <li className="flex justify-start items-center gap-4">
              <MdDoubleArrow />
              Item 7
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-start gap-y-4">
          <h1 className="font-semibold text-2xl">GOI Links</h1>
          <ul>
            <li className="flex justify-start items-center gap-4">
              <MdDoubleArrow />
              Item 1
            </li>
            <li className="flex justify-start items-center gap-4">
              <MdDoubleArrow />
              Item 2
            </li>
            <li className="flex justify-start items-center gap-4">
              <MdDoubleArrow />
              Item 3
            </li>
            <li className="flex justify-start items-center gap-4">
              <MdDoubleArrow />
              Item 4
            </li>
            <li className="flex justify-start items-center gap-4">
              <MdDoubleArrow />
              Item 5
            </li>
            <li className="flex justify-start items-center gap-4">
              <MdDoubleArrow />
              Item 6
            </li>
            <li className="flex justify-start items-center gap-4">
              <MdDoubleArrow />
              Item 7
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
