import React from "react";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoReaderOutline } from "react-icons/io5";
import { ImFontSize } from "react-icons/im";
import { RiFontSize } from "react-icons/ri";
import { BsCalendarCheck } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../common/assets/logo.svg";
import pib from "../../common/assets/pib.svg";
import azadi from "../../common/assets/azadi.svg";
import g20 from "../../common/assets/g20.svg";
import Link from "next/link";
export default function Navbar() {
  return (
    <section className="flex flex-col w-full h-full">
      <section className="flex justify-between items-center px-4 text-lg">
        <Link href={"/"}>
          <Image src={logo} alt="logo" height={70} width={70} />
        </Link>
        <div className="flex justify-center items-center gap-x-6 max-md:hidden">
          <li className="flex justify-center items-center gap-2">
            <BsCalendarCheck size={25} />
            <h1>Main Content</h1>
          </li>
          <li className="flex justify-center items-center gap-2">
            <RiFontSize size={25} />
            <h1>+AA -A</h1>
          </li>
          <li className="flex justify-center items-center gap-2">
            <IoReaderOutline size={25} />
            <h1>Screen Reader</h1>
          </li>
          <li className="flex justify-center items-center gap-2">
            <ImFontSize size={25} />
            <h1 className="flex justify-between items-center flex-row">
              <span>English</span> <RiArrowDropDownLine />
            </h1>
          </li>
        </div>
        <GiHamburgerMenu className="md:hidden block" />
      </section>
      <hr className="w-full border-1 border-[#000000]" />
      <section className="flex justify-evenly items-center w-full pb-2 pt-4">
        <Image src={pib} alt="pib" height={130} width={130} />
        <Image src={azadi} alt="azadi" height={100} width={100} />
        <Image src={g20} alt="g20" height={90} width={90} />
      </section>
    </section>
  );
}
